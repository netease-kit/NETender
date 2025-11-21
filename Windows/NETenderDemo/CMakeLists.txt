cmake_minimum_required(VERSION 3.5)
set(PROJECT_NAME "TenderExample")
project(${PROJECT_NAME} VERSION 1.0.0 LANGUAGES CXX)

set(CONAN_DISABLE_CHECK_COMPILER ON)

set(CMAKE_AUTOUIC ON)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

if(WIN32)
    # Windows平台配置
    set(TENDER_SDK_INCLUDE "${CMAKE_SOURCE_DIR}/NETender_Windows_SDK/netender-sdk/include")
    set(NODE_LIB_DIR "${CMAKE_SOURCE_DIR}/NETender_Windows_SDK/netender-sdk/lib/Release")
    set(NODE_LIBRARY "${CMAKE_SOURCE_DIR}/NETender_Windows_SDK/netender-sdk/lib/Release/node.lib")
    set(TENDER_LIBRARY "${CMAKE_SOURCE_DIR}/NETender_Windows_SDK/netender-sdk/lib/Release/netender.lib")
endif()

# 为Windows用户提供指定Qt路径的选项
if(WIN32)
    # 首先尝试从系统环境变量读取QT_PATH
    if(NOT DEFINED QT_PATH AND DEFINED ENV{QT_PATH})
        set(QT_PATH "$ENV{QT_PATH}")
        message(STATUS "从系统环境变量读取QT_PATH: ${QT_PATH}")
    endif()
    
    message(STATUS "QT_PATH: ${QT_PATH}")

    # 允许用户通过命令行指定Qt路径（优先级高于环境变量）
    if(DEFINED QT_PATH)
        list(APPEND CMAKE_PREFIX_PATH "${QT_PATH}")
        message(STATUS "使用指定的Qt路径: ${QT_PATH}")
    endif()
    
    # 尝试不同的Qt查找方式
    if(NOT DEFINED QT_FOUND)
        # 方法1: 使用Qt6作为首选
        find_package(Qt6 QUIET COMPONENTS Core Widgets LinguistTools Network WebSockets)
        if(Qt6_FOUND)
            set(QT_VERSION_MAJOR 6)
            set(QT_FOUND TRUE)
            message(STATUS "找到Qt6")
        else()
            # 方法2: 尝试Qt5
            find_package(Qt5 QUIET COMPONENTS Core Widgets LinguistTools Network WebSockets)
            if(Qt5_FOUND)
                set(QT_VERSION_MAJOR 5)
                set(QT_FOUND TRUE)
                message(STATUS "找到Qt5")
            endif()
        endif()
    endif()
    
    # 如果仍然找不到Qt，提示用户
    if(NOT DEFINED QT_FOUND OR NOT QT_FOUND)
        message(FATAL_ERROR "找不到Qt库。请通过 -DQT_PATH=\"C:\\Qt\\6.x.x\\msvc2019_64\" 或类似路径指定Qt安装目录")
    endif()
else()
    # 非Windows平台使用原有方式
    find_package(QT NAMES Qt6 Qt5 REQUIRED COMPONENTS Core Widgets LinguistTools Network WebSockets)
    find_package(Qt${QT_VERSION_MAJOR} REQUIRED COMPONENTS Core Widgets LinguistTools Network WebSockets)
endif()

# 检查是否找到必要的文件
if(NOT EXISTS "${TENDER_SDK_INCLUDE}/netender/c_api/c_api_core.h")
    message(FATAL_ERROR "未找到 c_api_core.h。请确保 netender/c_api/include 目录存在并包含正确的文件。")
endif()

if(NOT EXISTS "${NODE_LIBRARY}")
    message(FATAL_ERROR "未找到 libnode.131.dylib。请确保 libnode-arm64-macos 目录存在并包含正确的文件。")
endif()

file(GLOB UI_LIST *.ui)

# 先收集所有源文件
file(GLOB_RECURSE SDK_SOURCES

    ${CMAKE_CURRENT_LIST_DIR}/main.cpp
    ${CMAKE_CURRENT_LIST_DIR}/ui/*.cpp
    ${CMAKE_CURRENT_LIST_DIR}/ui/*.h
)

if(WIN32)
    file(GLOB WIN_SRC app_dump.h)
    list(APPEND SDK_SOURCES ${WIN_SRC})
endif ()

qt_add_executable(${PROJECT_NAME}
    MANUAL_FINALIZATION
    ${SDK_SOURCES}
    ${UI_LIST}
)

# 设置包含目录
target_include_directories(${PROJECT_NAME} PRIVATE
    ${TENDER_SDK_INCLUDE}
    ${CMAKE_CURRENT_LIST_DIR}/hawk
    ${CMAKE_CURRENT_LIST_DIR}/hawk/http
    ${CMAKE_CURRENT_LIST_DIR}/hawk/hawkmanager
    ${CMAKE_CURRENT_LIST_DIR}/tools
    ${CMAKE_CURRENT_LIST_DIR}/../tender_sdk/include
)

if(Qt${QT_VERSION_MAJOR}Core_FOUND)  
    target_compile_definitions(${PROJECT_NAME} PRIVATE QT_NO_FILESYSTEM_FEATURES)
endif()

# 链接库
target_link_libraries(${PROJECT_NAME} PRIVATE
    Qt${QT_VERSION_MAJOR}::Core
    Qt${QT_VERSION_MAJOR}::Widgets
    Qt${QT_VERSION_MAJOR}::WebSockets
    Qt${QT_VERSION_MAJOR}::Network
)

# 链接Node.js库
if(NODE_LIBRARY)
    target_link_libraries(${PROJECT_NAME} PRIVATE ${NODE_LIBRARY})
endif()

if(EXISTS "${TENDER_LIBRARY}")
    target_link_libraries(${PROJECT_NAME} PRIVATE ${TENDER_LIBRARY})
    message(STATUS "已链接库: ${TENDER_LIBRARY}")
else()
    message(WARNING "未找到可用的NETender库文件")
endif()

# 设置目标属性
set_target_properties(${PROJECT_NAME} PROPERTIES
    BUILD_RPATH "${NODE_LIB_DIR}"
    INSTALL_RPATH "${NODE_LIB_DIR}"
    MACOSX_BUNDLE TRUE
    WIN32_EXECUTABLE TRUE
    MACOSX_BUNDLE_INFO_PLIST "${CMAKE_CURRENT_LIST_DIR}/MacOSXBundleInfo.plist"
)

# 完成Qt可执行文件的配置（由于使用了MANUAL_FINALIZATION）
qt_finalize_executable(${PROJECT_NAME})

# 添加安装目标配置
install(TARGETS ${PROJECT_NAME}
    BUNDLE DESTINATION .
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR}
    RUNTIME DESTINATION ${CMAKE_INSTALL_BINDIR}
)

message(STATUS "配置完成！")

