#include "videowidget.h"
#include <QDebug>
#include <QHBoxLayout>
#include <QLabel>
#include <QPainter>
#include <QVBoxLayout>
#include <list>

VideoRenderWidget::VideoRenderWidget(QWidget* parent /*= nullptr*/)
    : QWidget(parent) {
    this->setStyleSheet("QWidget{background-color: #292933;}");
}

VideoRenderWidget::~VideoRenderWidget() {
    qDebug() << "VideoRenderWidget::~VideoRenderWidget";
}

void* VideoRenderWidget::GetVideoHwnd() {
    return (void*)this->winId();
}
