#ifndef UTIL_H
#define UTIL_H

#include <QString>
#include <string>
#include <vector>
#include <functional>
#include <chrono>
#include <memory>
#include <map>
#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonArray>
#include <QJsonValue>
#include <QStandardPaths>
#include <QDir>
#include <tuple>
#include <utility>
#include <list>
#include <tuple>
#include <type_traits>
#include <stdint.h>
#include <iostream>
#include <random>
#include <sstream>
#include <string>

using namespace std;

namespace {

    static std::vector<std::string> g_stringStorage;

    // 清理字符串存储
    void clearStringStorage() {
        g_stringStorage.clear();
    }

    // 添加字符串到存储并返回c_str
    const char* storeString(const std::string& str) {
        g_stringStorage.push_back(str);
        return g_stringStorage.back().c_str();
    }

    QString getLogPath() {
        // 获取应用程序本地数据目录
        QString appDataPath = QStandardPaths::writableLocation(QStandardPaths::AppLocalDataLocation);
        QDir appDataDir(appDataPath);
        
        // 确保应用程序数据目录存在
        if (!appDataDir.exists() && !appDataDir.mkpath(".")) {
            qWarning() << "无法创建应用程序数据目录:" << appDataPath;
            return "";
        }
        
        // 构建logs子目录路径
        QString logDirPath = appDataDir.filePath("logs"); // 用filePath避免斜杠问题
        QDir logDir(logDirPath);
        
        // 确保logs子目录存在（关键修复）
        if (!logDir.exists() && !logDir.mkpath(".")) {
            qWarning() << "无法创建日志目录:" << logDirPath;
            return "";
        }
        
        return logDirPath + "/";
    }

    // 全局随机数生成器（线程安全的静态变量）
    static std::random_device g_rd;
    static std::mt19937 g_gen(g_rd());
    static std::uniform_int_distribution<> g_char_dist('a', 'z');

    /**
     * @brief 生成随机客户端 ID
     * @param prefix 前缀（默认为 "client_"）
     * @param length 随机字符串长度（默认为 8）
     * @return 生成的随机客户端 ID
     */
    std::string GenerateRandomClientId(const std::string& prefix = "client_", int length = 8) {
        std::stringstream ss;
        ss << prefix;
        for (int i = 0; i < length; ++i) {
            ss << static_cast<char>(g_char_dist(g_gen));
        }
        return ss.str();
    }

    /**
     * @brief 生成随机消息内容
     * @param prefix 前缀（默认为 "Message"）
     * @param suffix_length 随机后缀长度（默认为 6）
     * @return 生成的随机消息内容（格式: prefix_时间戳_随机字符串）
     */
    std::string GenerateRandomMessageContent(const std::string& prefix = "Message", int suffix_length = 6) {
        auto now = std::chrono::system_clock::now();
        auto timestamp = std::chrono::duration_cast<std::chrono::milliseconds>(now.time_since_epoch()).count();
        std::stringstream ss;
        ss << prefix << "_" << timestamp << "_";
        for (int i = 0; i < suffix_length; ++i) {
            ss << static_cast<char>(g_char_dist(g_gen));
        }
        return ss.str();
    }

    /**
     * @brief 获取随机客户端 ID 的 C 字符串（使用静态存储确保内存有效）
     * @param prefix 前缀（默认为 "client_"）
     * @return const char* 指向静态存储的字符串
     */
    const char* GetRandomClientIdCStr(const std::string& prefix = "client_") {
        static std::string storage;
        storage = GenerateRandomClientId(prefix);
        return storage.c_str();
    }

    /**
     * @brief 获取随机消息内容的 C 字符串（使用静态存储确保内存有效）
     * @param prefix 前缀（默认为 "Message"）
     * @return const char* 指向静态存储的字符串
     */
    const char* GetRandomMessageContentCStr(const std::string& prefix = "Message") {
        static std::string storage;
        storage = GenerateRandomMessageContent(prefix);
        return storage.c_str();
    }
};


#endif
