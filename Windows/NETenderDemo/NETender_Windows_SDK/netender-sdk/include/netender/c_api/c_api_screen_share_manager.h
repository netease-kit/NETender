/**
 * @file c_api_screen_share_manager.h
 * @brief NETender C API - Screen Share Manager
 * @version 2.0.0
 * @date 2025-10-19
 * 
 * This file provides C API for screen sharing functionality.
 * 
 * Features:
 * - Screen/Window source enumeration
 * - Screen sharing control (start/stop)
 * - System audio sharing
 * - Audio driver installation
 */

#ifndef NETENDER_C_API_SCREEN_SHARE_MANAGER_H_
#define NETENDER_C_API_SCREEN_SHARE_MANAGER_H_

#include "c_api_core.h"
#include "c_api_types.h"

#ifdef __cplusplus
extern "C" {
#endif

// ==================== Screen Share Manager Creation ====================

// ==================== Screen Source Management ====================

/**
 * @brief Get screen capture source list (async)
 * @param handle Screen share manager handle
 * @param callback Typed async callback returning the source array
 * @param user_data User data for callback
 * @return Error code
 * 
 * @note The source list is allocated by the SDK and must be freed by calling
 *       NETender_FreeScreenCaptureSourceList(sources, count) when no longer needed.
 * 
 * Example:
 * @code
 * NETenderScreenCaptureSource* sources = NULL;
 * uint32_t count = 0;
 * int32_t ret = NETender_ScreenShare_GetScreenCaptureSourceList(
 *     screen_share_mgr, &sources, &count, NULL, NULL
 * );
 * if (ret == NETENDER_SUCCESS) {
 *     for (uint32_t i = 0; i < count; ++i) {
 *         printf("Source: %s (ID: %lld, Type: %s)\n",
 *             sources[i].source_name,
 *             sources[i].source_id,
 *             sources[i].source_type == NETENDER_SOURCE_TYPE_SCREEN ? "Screen" : "Window"
 *         );
 *     }
 *     NETender_FreeScreenCaptureSourceList(sources, count);
 * }
 * @endcode
 */
NETENDER_API int32_t NETender_ScreenShare_GetScreenCaptureSourceList(
    NETenderScreenShareManagerHandle handle,
    NETenderScreenCaptureSourceListCallback callback,
    void* user_data
);

/**
 * @brief Free screen capture source list
 * @param sources Source array to free
 * @param count Source count
 * 
 * @note This function must be called to free the source list returned by
 *       NETender_ScreenShare_GetScreenCaptureSourceList().
 */
NETENDER_API void NETender_FreeScreenCaptureSourceList(
    NETenderScreenCaptureSource* sources,
    uint32_t count
);

// ==================== Screen Sharing Control ====================

/**
 * @brief Start screen sharing (async)
 * @param handle Screen share manager handle
 * @param config Screen share configuration
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 * 
 * Example:
 * @code
 * NETenderScreenShareConfig config;
 * config.source_id = 123456789;  // From GetScreenCaptureSourceList
 * config.prefer_motion = 1;      // Optimize for motion (e.g., videos)
 * config.is_linux = -1;          // Auto-detect
 * 
 * int32_t ret = NETender_ScreenShare_StartScreenShare(
 *     screen_share_mgr, &config, MyCallback, user_data
 * );
 * @endcode
 */
NETENDER_API int32_t NETender_ScreenShare_StartScreenShare(
    NETenderScreenShareManagerHandle handle,
    const NETenderScreenShareConfig* config,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Stop screen sharing (async)
 * @param handle Screen share manager handle
 * @param config Stop screen share configuration (NULL if not specified)
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_ScreenShare_StopScreenShare(
    NETenderScreenShareManagerHandle handle,
    const NETenderStopScreenShareConfig* config,
    NETenderAsyncCallback callback,
    void* user_data
);

// ==================== System Audio Sharing ====================

/**
 * @brief Start/stop sharing system audio (async)
 * @param handle Screen share manager handle
 * @param enable Enable system audio sharing (1: enable, 0: disable)
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 * 
 * @note System audio sharing allows participants to hear the audio from your
 *       computer (e.g., video playback, music, etc.) during screen sharing.
 *       On some platforms, this may require installing an audio driver first.
 */
NETENDER_API int32_t NETender_ScreenShare_StartShareSystemAudio(
    NETenderScreenShareManagerHandle handle,
    int32_t enable,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Install audio capture driver (async)
 * @param handle Screen share manager handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 * 
 * @note On Windows, this installs a virtual audio driver to capture system audio.
 *       This is required before enabling system audio sharing.
 *       The installation may require administrator privileges.
 */
NETENDER_API int32_t NETender_ScreenShare_InstallAudioCaptureDriver(
    NETenderScreenShareManagerHandle handle,
    NETenderAsyncCallback callback,
    void* user_data
);

// ==================== Screen Share Information ====================

/**
 * @brief Get screen share message (async)
 * @param handle Screen share manager handle
 * @param callback Typed async callback returning the message string
 * @param user_data User data for callback
 * @return Error code
 * 
 * @note This function retrieves status or error messages related to screen sharing.
 *       The returned string is owned by the SDK and must be released with
 *       NETender_FreeString when no longer needed.
 */
NETENDER_API int32_t NETender_ScreenShare_GetScreenShareMessage(
    NETenderScreenShareManagerHandle handle,
    NETenderStringCallback callback,
    void* user_data
);

#ifdef __cplusplus
}
#endif

#endif // NETENDER_C_API_SCREEN_SHARE_MANAGER_H_
