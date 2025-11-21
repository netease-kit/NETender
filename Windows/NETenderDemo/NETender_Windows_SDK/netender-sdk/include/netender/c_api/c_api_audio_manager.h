/**
 * @file c_api_audio_manager.h
 * @brief NETender C API - Audio Manager
 * @version 2.0.0
 * @date 2025-10-18
 *
 * This file provides C API for audio device management and control.
 *
 * Features:
 * - Speaker device enumeration and selection
 * - Speaker volume control
 * - Microphone device enumeration and selection
 * - Microphone volume control
 * - Mute/unmute audio
 */

#ifndef NETENDER_C_API_AUDIO_MANAGER_H_
#define NETENDER_C_API_AUDIO_MANAGER_H_

#include "c_api_core.h"
#include "c_api_types.h"

#ifdef __cplusplus
extern "C" {
#endif

// ==================== Speaker Device Management ====================

/**
 * @brief Get speaker device list (async)
 * @param handle Audio manager handle
 * @param callback Async callback that receives the SDK-allocated device list
 * @param user_data User data for callback
 * @return Error code
 *
 * @note The device list passed to the callback is allocated by the SDK and must be freed by calling
 *       NETender_FreeDeviceList(devices, count) when no longer needed.
 */
NETENDER_API int32_t NETender_Audio_GetSpeakerDeviceList(NETenderAudioManagerHandle handle, NETenderDeviceListCallback callback, void* user_data);

/**
 * @brief Get current speaker device ID (async)
 * @param handle Audio manager handle
 * @param callback Async callback that receives the SDK-allocated device ID string
 * @param user_data User data for callback
 * @return Error code
 *
 * @note The string passed to the callback must be released with NETender_FreeString.
 */
NETENDER_API int32_t NETender_Audio_GetSpeakerDeviceId(NETenderAudioManagerHandle handle, NETenderStringCallback callback, void* user_data);

/**
 * @brief Set speaker device during meeting (async)
 * @param handle Audio manager handle
 * @param device_id Device ID
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Audio_SetSpeakerDevice(NETenderAudioManagerHandle handle,
    const char* device_id,
    NETenderAsyncCallback callback,
    void* user_data);

/**
 * @brief Set speaker device before meeting (async)
 * @param handle Audio manager handle
 * @param device_id Device ID
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Audio_SetSpeakerDevicePreview(NETenderAudioManagerHandle handle,
    const char* device_id,
    NETenderAsyncCallback callback,
    void* user_data);

// ==================== Speaker Volume Control ====================

/**
 * @brief Get speaker volume (async)
 * @param handle Audio manager handle
 * @param volume Output volume (0-100)
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Audio_GetSpeakerVolume(NETenderAudioManagerHandle handle, NETenderUintCallback callback, void* user_data);

/**
 * @brief Set speaker volume (async)
 * @param handle Audio manager handle
 * @param volume Volume (0-100)
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Audio_SetSpeakerVolume(NETenderAudioManagerHandle handle,
    uint32_t volume,
    NETenderAsyncCallback callback,
    void* user_data);

// ==================== Speaker Device Testing ====================

/**
 * @brief Start speaker device test (async)
 * @param handle Audio manager handle
 * @param audio_resource Audio file path to play for testing
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Audio_StartSpeakerDeviceTest(NETenderAudioManagerHandle handle,
    const char* audio_resource,
    NETenderAsyncCallback callback,
    void* user_data);

/**
 * @brief Stop speaker device test (async)
 * @param handle Audio manager handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Audio_StopSpeakerDeviceTest(NETenderAudioManagerHandle handle, NETenderAsyncCallback callback, void* user_data);

// ==================== Microphone Device Management ====================

/**
 * @brief Get microphone device list (async)
 * @param handle Audio manager handle
 * @param callback Async callback that receives the SDK-allocated device list
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Audio_GetMicrophoneDeviceList(NETenderAudioManagerHandle handle, NETenderDeviceListCallback callback, void* user_data);

/**
 * @brief Get current microphone device ID (async)
 * @param handle Audio manager handle
 * @param callback Async callback that receives the SDK-allocated device ID string
 * @param user_data User data for callback
 * @return Error code
 *
 * @note The string passed to the callback must be released with NETender_FreeString.
 */
NETENDER_API int32_t NETender_Audio_GetMicrophoneDeviceId(NETenderAudioManagerHandle handle, NETenderStringCallback callback, void* user_data);

/**
 * @brief Set microphone device during meeting (async)
 * @param handle Audio manager handle
 * @param device_id Device ID
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Audio_SetMicrophoneDevice(NETenderAudioManagerHandle handle,
    const char* device_id,
    NETenderAsyncCallback callback,
    void* user_data);

/**
 * @brief Set microphone device before meeting (async)
 * @param handle Audio manager handle
 * @param device_id Device ID
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Audio_SetMicrophoneDevicePreview(NETenderAudioManagerHandle handle,
    const char* device_id,
    NETenderAsyncCallback callback,
    void* user_data);

// ==================== Microphone Volume Control ====================

/**
 * @brief Get microphone volume (async)
 * @param handle Audio manager handle
 * @param callback Async callback that receives the volume value
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Audio_GetMicrophoneVolume(NETenderAudioManagerHandle handle, NETenderUintCallback callback, void* user_data);

/**
 * @brief Get microphone volume preview (async)
 * @param handle Audio manager handle
 * @param callback Async callback that receives the volume value
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Audio_GetMicrophoneVolumePreview(NETenderAudioManagerHandle handle, NETenderUintCallback callback, void* user_data);

/**
 * @brief Set microphone volume (async)
 * @param handle Audio manager handle
 * @param volume Volume (0-100)
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Audio_SetMicrophoneVolume(NETenderAudioManagerHandle handle,
    uint32_t volume,
    NETenderAsyncCallback callback,
    void* user_data);

// ==================== Microphone Device Testing ====================

/**
 * @brief Start microphone device test (async)
 * @param handle Audio manager handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Audio_StartMicrophoneDeviceTest(NETenderAudioManagerHandle handle, NETenderAsyncCallback callback, void* user_data);

/**
 * @brief Stop microphone device test (async)
 * @param handle Audio manager handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Audio_StopMicrophoneDeviceTest(NETenderAudioManagerHandle handle, NETenderAsyncCallback callback, void* user_data);

// ==================== Audio Control ====================

/**
 * @brief Unmute my audio (async)
 * @param handle Audio manager handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 *
 * @note This method is now asynchronous for consistency with other audio operations.
 */
NETENDER_API int32_t NETender_Audio_UnmuteMyAudio(NETenderAudioManagerHandle handle, NETenderAsyncCallback callback, void* user_data);

/**
 * @brief Mute my audio (async)
 * @param handle Audio manager handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Audio_MuteMyAudio(NETenderAudioManagerHandle handle, NETenderAsyncCallback callback, void* user_data);

// ==================== Audio Effects ====================

/**
 * @brief Enable audio effect (async)
 * @param handle Audio manager handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 *
 * @note Web SDK specific method, may not be supported in C++ SDK
 */
NETENDER_API int32_t NETender_Audio_EnableAudioEffect(NETenderAudioManagerHandle handle, NETenderAsyncCallback callback, void* user_data);

/**
 * @brief Set audio effect (async)
 * @param handle Audio manager handle
 * @param type Effect type (0: 变声 , 1：美声)
 * @param type 为 0 时， value：0(关闭变声) 1(机器人) 2(巨人) 3(恐怖) 4(成熟) 5(男变女) 6(女变男) 7(男变萝莉) 8(女变萝莉)
 * @param type 为 1 时， value：0(关闭美声) 1(低沉) 2(圆润) 3(清澈) 4(磁性) 5(录音棚) 6(天籁) 7(KTV) 8(悠远) 9(教堂) 10(卧室) 11(Live)
 * @param value Effect value (integer)
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 *
 * @note Web SDK specific method, may not be supported in C++ SDK
 * @note This is a simplified version that only accepts integer values
 */
NETENDER_API int32_t
NETender_Audio_SetAudioEffect(NETenderAudioManagerHandle handle, int32_t type, int32_t value, NETenderAsyncCallback callback, void* user_data);

// ==================== AI Audio Enhancement ====================

/**
 * @brief Enable AI noise reduction
 * @param handle Audio manager handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 *
 * @note Web SDK specific method, may not be fully supported in C++ SDK
 */
NETENDER_API int32_t NETender_Audio_EnableAIDenoise(NETenderAudioManagerHandle handle, NETenderAsyncCallback callback, void* user_data);

/**
 * @brief Disable AI noise reduction
 * @param handle Audio manager handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 *
 * @note Web SDK specific method, may not be fully supported in C++ SDK
 */
NETENDER_API int32_t NETender_Audio_DisableAIDenoise(NETenderAudioManagerHandle handle, NETenderAsyncCallback callback, void* user_data);

#ifdef __cplusplus
}
#endif

#endif  // NETENDER_C_API_AUDIO_MANAGER_H_
