/**
 * @file c_api_member_manager.h
 * @brief NETender C API - Member Manager
 * @version 2.0.0
 * @date 2025-10-19
 * 
 * This file provides C API for member management functionality.
 * 
 * Features:
 * - Member list query
 * - Individual member audio/video control
 * - All members audio/video control
 * - Screen share control
 * - Hand raising control
 */

#ifndef NETENDER_C_API_MEMBER_MANAGER_H_
#define NETENDER_C_API_MEMBER_MANAGER_H_

#include "c_api_core.h"
#include "c_api_types.h"

#ifdef __cplusplus
extern "C" {
#endif

// ==================== Member List ====================

/**
 * @brief Get member list (sync)
 * @param handle Member manager handle
 * @param members Output member array (caller must free with NETender_FreeMemberList)
 * @param count Output member count
 * @return Error code
 * 
 * @note This is a synchronous method that directly returns the member list.
 *       The member list is allocated by the SDK and must be freed by calling
 *       NETender_FreeMemberList(members, count) when no longer needed.
 * 
 * Example:
 * @code
 * NETenderMember* members = NULL;
 * uint32_t count = 0;
 * int32_t ret = NETender_Member_GetMemberList(member_mgr, &members, &count);
 * if (ret == NETENDER_SUCCESS) {
 *     for (uint32_t i = 0; i < count; ++i) {
 *         printf("Member: %s (%s)\n", members[i].user_name, members[i].user_uuid);
 *     }
 *     NETender_FreeMemberList(members, count);
 * }
 * @endcode
 */
NETENDER_API int32_t NETender_Member_GetMemberList(
    NETenderMemberManagerHandle handle,
    NETenderMember** members,
    uint32_t* count
);

/**
 * @brief Free member list
 * @param members Member array to free
 * @param count Member count
 */
NETENDER_API void NETender_FreeMemberList(
    NETenderMember* members,
    uint32_t count
);

// ==================== Individual Member Audio Control ====================

/**
 * @brief Mute member audio (async)
 * @param handle Member manager handle
 * @param user_uuid User UUID
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Member_MuteMemberAudio(
    NETenderMemberManagerHandle handle,
    const char* user_uuid,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Unmute member audio (async)
 * @param handle Member manager handle
 * @param user_uuid User UUID
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Member_UnmuteMemberAudio(
    NETenderMemberManagerHandle handle,
    const char* user_uuid,
    NETenderAsyncCallback callback,
    void* user_data
);

// ==================== Individual Member Video Control ====================

/**
 * @brief Mute member video (async)
 * @param handle Member manager handle
 * @param user_uuid User UUID
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Member_MuteMemberVideo(
    NETenderMemberManagerHandle handle,
    const char* user_uuid,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Unmute member video (async)
 * @param handle Member manager handle
 * @param user_uuid User UUID
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Member_UnmuteMemberVideo(
    NETenderMemberManagerHandle handle,
    const char* user_uuid,
    NETenderAsyncCallback callback,
    void* user_data
);

// ==================== Individual Member Audio/Video Control ====================

/**
 * @brief Mute member audio and video (async)
 * @param handle Member manager handle
 * @param user_uuid User UUID
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Member_MuteVideoAndAudio(
    NETenderMemberManagerHandle handle,
    const char* user_uuid,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Unmute member audio and video (async)
 * @param handle Member manager handle
 * @param user_uuid User UUID
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Member_UnmuteVideoAndAudio(
    NETenderMemberManagerHandle handle,
    const char* user_uuid,
    NETenderAsyncCallback callback,
    void* user_data
);

// ==================== All Members Control ====================

/**
 * @brief Mute all members' audio (async)
 * @param handle Member manager handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Member_MuteAllAudio(
    NETenderMemberManagerHandle handle,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Unmute all members' audio (async)
 * @param handle Member manager handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Member_UnmuteAllAudio(
    NETenderMemberManagerHandle handle,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Mute all members' video (async)
 * @param handle Member manager handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Member_MuteAllVideo(
    NETenderMemberManagerHandle handle,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Unmute all members' video (async)
 * @param handle Member manager handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Member_UnmuteAllVideo(
    NETenderMemberManagerHandle handle,
    NETenderAsyncCallback callback,
    void* user_data
);

// ==================== Screen Share Control ====================

/**
 * @brief Stop member's screen share (async)
 * @param handle Member manager handle
 * @param user_uuid User UUID
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Member_StopMemberScreenShare(
    NETenderMemberManagerHandle handle,
    const char* user_uuid,
    NETenderAsyncCallback callback,
    void* user_data
);

// ==================== Hand Raising Control ====================

/**
 * @brief Raise hand (async)
 * @param handle Member manager handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Member_HandsUp(
    NETenderMemberManagerHandle handle,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Put hand down (async)
 * @param handle Member manager handle
 * @param user_uuid User UUID (empty string or NULL for self)
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Member_HandsDown(
    NETenderMemberManagerHandle handle,
    const char* user_uuid,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Put all hands down (async)
 * @param handle Member manager handle
 * @param callback Async callback (optional, can be NULL)
 * @param user_data User data for callback
 * @return Error code
 */
NETENDER_API int32_t NETender_Member_HandsDownAll(
    NETenderMemberManagerHandle handle,
    NETenderAsyncCallback callback,
    void* user_data
);

#ifdef __cplusplus
}
#endif

#endif // NETENDER_C_API_MEMBER_MANAGER_H_
