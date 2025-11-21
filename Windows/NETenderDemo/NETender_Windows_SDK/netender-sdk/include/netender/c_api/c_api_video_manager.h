/**
 * @file c_api_video_manager.h
 * @brief NETender C API - Video Manager
 * @version 2.0.0
 * @date 2025-10-19
 * 
 * This file provides C API for video device management and control.
 * 
 * Features:
 * - Camera device enumeration and selection
 * - Local video preview
 * - Video canvas setup (local and remote)
 * - Video mute/unmute control
 * - Remote video subscription
 */

#ifndef NETENDER_C_API_VIDEO_MANAGER_H_
#define NETENDER_C_API_VIDEO_MANAGER_H_

#include "c_api_core.h"
#include "c_api_types.h"

#ifdef __cplusplus
extern "C" {
#endif

// ==================== Camera Device Management ====================

/**
 * @brief Get camera device list (async)
 * @param handle Video manager handle
 * @param callback Typed async callback returning the device array
 * @param user_data User data for callback
 * @return Error code
 * 
 * @note The device list is allocated by the SDK and must be freed by calling
 *       NETender_FreeDeviceList(devices, count) when no longer needed.
 */
NETENDER_API int32_t NETender_Video_GetCameraDeviceList(
    NETenderVideoManagerHandle handle,
    NETenderDeviceListCallback callback,
    void* user_data
);

/**
 * @brief Get current camera device ID (async)
 * @param handle Video manager handle
 * @param callback Typed async callback returning the device ID string
 * @param user_data User data for callback
 * @return Error code
 * 
 * @note The returned string is owned by the SDK and must be released with
 *       NETender_FreeString when no longer needed.
 */
NETENDER_API int32_t NETender_Video_GetCameraDeviceId(
    NETenderVideoManagerHandle handle,
    NETenderStringCallback callback,
    void* user_data
);

/**
 * @brief Set camera device during meeting (async)
 * @param handle Video manager handle
 * @param device_id Device ID
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Video_SetCameraDevice(
    NETenderVideoManagerHandle handle,
    const char* device_id,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Set camera device before meeting (async)
 * @param handle Video manager handle
 * @param device_id Device ID
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Video_SetCameraDevicePreview(
    NETenderVideoManagerHandle handle,
    const char* device_id,
    NETenderAsyncCallback callback,
    void* user_data
);

// ==================== Local Video Canvas ====================

/**
 * @brief Setup local video canvas (async)
 * @param handle Video manager handle
 * @param view Native window handle (HWND on Windows, NSView* on macOS)
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 * 
 * @note The view parameter should be a platform-specific window handle:
 *       - Windows: HWND
 *       - macOS: NSView*
 *       - Linux: X11 Window ID
 */
NETENDER_API int32_t NETender_Video_SetupLocalVideoCanvas(
    NETenderVideoManagerHandle handle,
    void* view,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Setup video preview canvas (async)
 * @param handle Video manager handle
 * @param view Native window handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Video_SetupVideoPreviewCanvas(
    NETenderVideoManagerHandle handle,
    void* view,
    NETenderAsyncCallback callback,
    void* user_data
);

// ==================== Video Preview ====================

/**
 * @brief Start video preview (async)
 * @param handle Video manager handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 * 
 * @note Must call SetupVideoPreviewCanvas() before starting preview.
 */
NETENDER_API int32_t NETender_Video_StartVideoPreview(
    NETenderVideoManagerHandle handle,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Stop video preview (async)
 * @param handle Video manager handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Video_StopVideoPreview(
    NETenderVideoManagerHandle handle,
    NETenderAsyncCallback callback,
    void* user_data
);

// ==================== Video Configuration ====================

/**
 * @brief Set video profile (sync)
 * @param handle Video manager handle
 * @param resolution Video resolution (e.g., 640x480, 1280x720)
 * @param frame_rate Frame rate (default: 15 fps)
 * @return Error code
 * 
 * @note This is a synchronous method that immediately sets the video profile.
 *       Common resolutions:
 *       - 0: 160x120
 *       - 1: 320x180
 *       - 2: 320x240
 *       - 3: 640x360
 *       - 4: 640x480
 *       - 5: 1280x720
 *       - 6: 1920x1080
 */
NETENDER_API int32_t NETender_Video_SetVideoProfile(
    NETenderVideoManagerHandle handle,
    int32_t resolution,
    int32_t frame_rate
);

// ==================== Video Control ====================

/**
 * @brief Unmute my video (async)
 * @param handle Video manager handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Video_UnmuteMyVideo(
    NETenderVideoManagerHandle handle,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Mute my video (async)
 * @param handle Video manager handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Video_MuteMyVideo(
    NETenderVideoManagerHandle handle,
    NETenderAsyncCallback callback,
    void* user_data
);

// ==================== Remote Video Canvas ====================

/**
 * @brief Setup remote video canvas (async)
 * @param handle Video manager handle
 * @param user_id Remote user ID
 * @param view Native window handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Video_SetupRemoteVideoCanvas(
    NETenderVideoManagerHandle handle,
    const char* user_id,
    void* view,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Setup remote video sub-stream canvas (async)
 * @param handle Video manager handle
 * @param user_id Remote user ID
 * @param view Native window handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 * 
 * @note Sub-stream is typically used for screen sharing video.
 */
NETENDER_API int32_t NETender_Video_SetupRemoteVideoSubStreamCanvas(
    NETenderVideoManagerHandle handle,
    const char* user_id,
    void* view,
    NETenderAsyncCallback callback,
    void* user_data
);

// ==================== Remote Video Subscription ====================

/**
 * @brief Subscribe to remote video stream (async)
 * @param handle Video manager handle
 * @param user_id Remote user ID
 * @param stream_type Stream type (0: main stream, 1: sub stream)
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Video_SubscribeRemoteVideoStream(
    NETenderVideoManagerHandle handle,
    const char* user_id,
    int32_t stream_type,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Unsubscribe from remote video stream (async)
 * @param handle Video manager handle
 * @param user_id Remote user ID
 * @param stream_type Stream type (0: main stream, 1: sub stream)
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Video_UnsubscribeRemoteVideoStream(
    NETenderVideoManagerHandle handle,
    const char* user_id,
    int32_t stream_type,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Subscribe to remote video sub-stream (async)
 * @param handle Video manager handle
 * @param user_uuid Remote user UUID
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Video_SubscribeRemoteVideoSubStream(
    NETenderVideoManagerHandle handle,
    const char* user_uuid,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Unsubscribe from remote video sub-stream (async)
 * @param handle Video manager handle
 * @param user_uuid Remote user UUID
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Video_UnsubscribeRemoteVideoSubStream(
    NETenderVideoManagerHandle handle,
    const char* user_uuid,
    NETenderAsyncCallback callback,
    void* user_data
);

#ifdef __cplusplus
}
#endif

#endif // NETENDER_C_API_VIDEO_MANAGER_H_
