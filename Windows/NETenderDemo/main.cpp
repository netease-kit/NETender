#include "ui/mainwindow.h"
#include <QApplication>
#include <QLocale>
#include <QTranslator>
#include <QFile>
#include <QTextStream>
#include <QMutex>
#include <QString>
#include <QDateTime>
#include "neutil.h"

#ifdef Q_OS_WIN
#define WIN32_LEAN_AND_MEAN
#include <windows.h>
#include <DbgHelp.h>
#include <locale>
#include <codecvt>

#pragma comment(lib, "DbgHelp.lib")

// 生成崩溃转储文件的回调函数
LONG WINAPI CreateDumpFile(EXCEPTION_POINTERS* pExceptionPointers)
{
    // 创建当前日期时间的字符串用于文件名
    SYSTEMTIME systemTime;
    GetLocalTime(&systemTime);
    char dumpFileName[MAX_PATH];
    sprintf_s(dumpFileName, MAX_PATH, "./crash_dump_%04d%02d%02d_%02d%02d%02d_%03d.dmp",
              systemTime.wYear, systemTime.wMonth, systemTime.wDay,
              systemTime.wHour, systemTime.wMinute, systemTime.wSecond,
              systemTime.wMilliseconds);

    // 创建转储文件
    HANDLE hDumpFile = CreateFileA(dumpFileName, GENERIC_WRITE, 0, NULL, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, NULL);
    if (hDumpFile != INVALID_HANDLE_VALUE)
    {
        MINIDUMP_EXCEPTION_INFORMATION dumpInfo;
        dumpInfo.ExceptionPointers = pExceptionPointers;
        dumpInfo.ThreadId = GetCurrentThreadId();
        dumpInfo.ClientPointers = TRUE;

        // 写入转储信息
        MiniDumpWriteDump(GetCurrentProcess(), GetCurrentProcessId(), hDumpFile,
                         (MINIDUMP_TYPE)(MiniDumpWithDataSegs | MiniDumpWithFullMemoryInfo | 
                                        MiniDumpWithHandleData | MiniDumpWithThreadInfo | 
                                        MiniDumpWithUnloadedModules),
                         &dumpInfo, NULL, NULL);

        CloseHandle(hDumpFile);
    }

    return EXCEPTION_EXECUTE_HANDLER;
}
#endif

QMutex logMutex;
QString logFileName;
QString logPath;

QString getLogFileName() {
    return QString("netender-example_%1.log")
        .arg(QDateTime::currentDateTime().toString("yyyyMMdd_HHmmss"));
}

void messageHandler(QtMsgType type, const QMessageLogContext &context, const QString &msg)
{
    QMutexLocker locker(&logMutex);
    QString fullPath = logPath + logFileName;
    QFile file(fullPath);
    if (file.open(QIODevice::WriteOnly | QIODevice::Append)) {
        QTextStream stream(&file);
        stream << QDateTime::currentDateTime().toString("yyyy-MM-dd hh:mm:ss.zzz");
        
        switch (type) {
        case QtDebugMsg:
            stream << " [DEBUG] ";
            break;
        case QtWarningMsg:
            stream << " [WARNING] ";
            break;
        case QtCriticalMsg:
            stream << " [CRITICAL] ";
            break;
        case QtFatalMsg:
            stream << " [FATAL] ";
            break;
        case QtInfoMsg:
            stream << " [INFO] ";
            break;
        default:
            stream << " [INFO] ";
            break;
        }
        
        stream << msg << "\n";
        file.close();
    }
}

int main(int argc, char* argv[]) {
    // 在Windows平台上设置崩溃转储生成
#ifdef Q_OS_WIN
    SetUnhandledExceptionFilter(CreateDumpFile);
#endif
    
    QApplication a(argc, argv);
    // 获取应用程序路径
    QString appPath = QCoreApplication::applicationDirPath();
    QTranslator translator;
    const QStringList uiLanguages = QLocale::system().uiLanguages();
    for (const QString &locale : uiLanguages)
    {
        const QString baseName = "roomkit-example" + QLocale(locale).name();
        if (translator.load(":/i18n/" + baseName))
        {
            a.installTranslator(&translator);
            break;
        }
    }
    MainWindow w;
    w.show();
    
    logPath = getLogPath();
    logFileName = getLogFileName();
    qInstallMessageHandler(messageHandler);
    return a.exec();
}
