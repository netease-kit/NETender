#ifndef _VIDEO_WIDGET_H
#define _VIDEO_WIDGET_H

#include <QCheckBox>
#include <QWidget>
#include <QHBoxLayout>

class User;
class QLabel;

class VideoRenderWidget : public QWidget {
public:
    VideoRenderWidget(QWidget* parent = nullptr);
    ~VideoRenderWidget();

public:
    // 获取窗口句柄
    void* GetVideoHwnd();
};

#endif  //_VIDEO_WIDGET_H
