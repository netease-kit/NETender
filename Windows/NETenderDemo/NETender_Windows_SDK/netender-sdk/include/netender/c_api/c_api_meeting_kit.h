/**
 * @file c_api_meeting_kit.h
 * @brief NETender MeetingKit C API
 * @version 2.0.0
 * @date 2025-10-19
 *
 * This file provides the main entry point for NETender SDK:
 * - SDK initialization and cleanup
 * - Manager instance retrieval
 * - Global event listener management
 */

#ifndef NETENDER_C_API_MEETING_KIT_H_
#define NETENDER_C_API_MEETING_KIT_H_

#include "c_api_core.h"
#include "c_api_types.h"

#ifdef __cplusplus
extern "C" {
#endif

// ==================== Forward Declarations (All types defined in c_api_core.h) ====================

// ==================== Initialization ====================

/**
 * @brief Initialize NETender SDK
 *
 * Must be called before using any other SDK functions.
 * This function blocks until initialization completes.
 *
 * @param config Initialization configuration
 * @param out_sdk On success, receives the SDK handle; can be NULL if caller only checks result
 * @return 0 on success, negative error code on failure
 *
 * Example:
 * @code
 * NETenderInitConfig config = {0};
 * config.app_key = "your_app_key";
 * config.server_url = NULL;  // Use default
 * config.locale = "zh-CN";
 * config.use_asset_server_config = -1;  // Not specified
 *
 * NETenderSDKHandle sdk = NULL;
 * int32_t result = NETender_Initialize(&config, &sdk);
 * if (result != 0) {
 *     printf("Failed to initialize SDK: %d\n", result);
 * }
 * @endcode
 */
NETENDER_API int32_t NETender_Initialize(const NETenderInitConfig* config, NETenderSDKHandle* out_sdk);

/**
 * @brief Uninitialize NETender SDK
 *
 * Should be called when SDK is no longer needed.
 * This will clean up all resources and stop all operations.
 *
 * @return 0 on success, negative error code on failure
 */
NETENDER_API int32_t NETender_Uninitialize(void);

/**
 * @brief Destroy an SDK handle instance
 *
 * Releases resources held by the opaque SDK handle. The underlying MeetingKit
 * will remain alive until NETender_Uninitialize is called.
 */
NETENDER_API void NETender_DestroySDKHandle(NETenderSDKHandle sdk);

/**
 * @brief Check if SDK is initialized
 *
 * @return 1 if initialized, 0 otherwise
 */
NETENDER_API int32_t NETender_IsInitialized(void);

// ==================== Manager Retrieval ====================

NETENDER_API void NETender_DestroyMeetingManagerHandle(NETenderMeetingManagerHandle handle);

NETENDER_API NETenderMeetingManagerHandle NETender_GetMeetingManager(NETenderSDKHandle sdk);

NETENDER_API NETenderAudioManagerHandle NETender_GetAudioManager(NETenderSDKHandle sdk);

NETENDER_API void NETender_DestroyAudioManagerHandle(NETenderAudioManagerHandle handle);

NETENDER_API NETenderVideoManagerHandle NETender_GetVideoManager(NETenderSDKHandle sdk);

NETENDER_API void NETender_DestroyVideoManagerHandle(NETenderVideoManagerHandle handle);

NETENDER_API NETenderMemberManagerHandle NETender_GetMemberManager(NETenderSDKHandle sdk);

NETENDER_API void NETender_DestroyMemberManagerHandle(NETenderMemberManagerHandle handle);

NETENDER_API NETenderSecurityManagerHandle NETender_GetSecurityManager(NETenderSDKHandle sdk);

NETENDER_API void NETender_DestroySecurityManagerHandle(NETenderSecurityManagerHandle handle);

NETENDER_API NETenderWaitingRoomManagerHandle NETender_GetWaitingRoomManager(NETenderSDKHandle sdk);

NETENDER_API void NETender_DestroyWaitingRoomManagerHandle(NETenderWaitingRoomManagerHandle handle);

NETENDER_API NETenderPreMeetingManagerHandle NETender_GetPreMeetingManager(NETenderSDKHandle sdk);

NETENDER_API void NETender_DestroyPreMeetingManagerHandle(NETenderPreMeetingManagerHandle handle);

NETENDER_API NETenderInviteManagerHandle NETender_GetInviteManager(NETenderSDKHandle sdk);

NETENDER_API void NETender_DestroyInviteManagerHandle(NETenderInviteManagerHandle handle);

NETENDER_API NETenderAccountManagerHandle NETender_GetAccountManager(NETenderSDKHandle sdk);

NETENDER_API void NETender_DestroyAccountManagerHandle(NETenderAccountManagerHandle handle);

NETENDER_API NETenderChatroomManagerHandle NETender_GetChatroomManager(NETenderSDKHandle sdk);

NETENDER_API void NETender_DestroyChatroomManagerHandle(NETenderChatroomManagerHandle handle);

NETENDER_API NETenderScreenShareManagerHandle NETender_GetScreenShareManager(NETenderSDKHandle sdk);

NETENDER_API void NETender_DestroyScreenShareManagerHandle(NETenderScreenShareManagerHandle handle);

// ==================== Global Event Listener ====================

/**
 * @brief Add global event listener
 *
 * Register a listener to receive global SDK events like auth expiration,
 * kick out, etc.
 *
 * @param listener Listener callbacks and user data
 * @return 0 on success, negative error code on failure
 *
 * Note: Multiple listeners can be registered. Each listener must be
 * unregistered with NETender_RemoveGlobalEventListener() before being freed.
 *
 * Example:
 * @code
 * void on_auth_expired(void* user_data) {
 *     printf("Auth info expired!\n");
 * }
 *
 * NETenderGlobalEventListener listener = {0};
 * listener.on_auth_info_expired = on_auth_expired;
 * listener.user_data = NULL;
 *
 * NETender_AddGlobalEventListener(&listener);
 * @endcode
 */
NETENDER_API int32_t NETender_AddGlobalEventListener(const NETenderGlobalEventListener* listener);

/**
 * @brief Remove global event listener
 *
 * Unregister a previously registered listener.
 *
 * @param listener Listener to remove (must match the address passed to Add)
 * @return 0 on success, negative error code on failure
 *
 * Note: After calling this function, the listener structure can be safely freed.
 */
NETENDER_API int32_t NETender_RemoveGlobalEventListener(const NETenderGlobalEventListener* listener);

// ==================== Utility Methods ====================

#ifdef __cplusplus
}
#endif

#endif  // NETENDER_C_API_MEETING_KIT_H_
