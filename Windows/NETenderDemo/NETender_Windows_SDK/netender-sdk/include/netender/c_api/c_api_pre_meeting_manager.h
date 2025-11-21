/**
 * @file c_api_pre_meeting_manager.h
 * @brief NETender C API - Pre-Meeting Manager
 * @version 2.0.0
 * @date 2025-10-19
 */

#ifndef NETENDER_C_API_PRE_MEETING_MANAGER_H_
#define NETENDER_C_API_PRE_MEETING_MANAGER_H_

#include "c_api_core.h"
#include "c_api_types.h"

#ifdef __cplusplus
extern "C" {
#endif

/**
 * @brief Get meeting list by size (with pagination parameters)
 * 
 * @param handle Pre-meeting manager handle
 * @param params Pagination parameters (can be NULL for default)
 * @param callback Typed async callback returning the meeting list
 * @param user_data User data for callback
 * @return NETENDER_SUCCESS on success, error code otherwise
 * 
 * @note This function corresponds to C++ GetMeetingListBySize() and TypeScript getMeetingListBySize().
 *       The returned meeting list is owned by the SDK and must be freed with
 *       NETender_FreeMeetingList when no longer needed.
 */
NETENDER_API int32_t NETender_PreMeeting_GetMeetingListBySize(NETenderPreMeetingManagerHandle handle,
    const NETenderMeetingListParams* params,
    NETenderPreMeetingListCallback callback,
    void* user_data);

/**
 * @brief Free meeting list
 */
NETENDER_API void NETender_FreeMeetingList(NETenderMeetingInfo* meetings, int32_t count);

/**
 * @brief Schedule a new meeting
 *
 * @param handle Pre-meeting manager handle
 * @param options Meeting creation options
 * @param callback Typed async callback returning the created meeting info
 * @param user_data User data for callback
 * @return NETENDER_SUCCESS on success, error code otherwise
 *
 * @note The returned meeting info is owned by the SDK and must be freed with
 *       NETender_FreePreMeetingInfo when no longer needed.
 */
NETENDER_API int32_t NETender_PreMeeting_ScheduleMeeting(NETenderPreMeetingManagerHandle handle,
    const NETenderPreMeetingCreateOptions* options,
    NETenderPreMeetingInfoCallback callback,
    void* user_data);

/**
 * @brief Free meeting info
 */
NETENDER_API void NETender_FreePreMeetingInfo(NETenderMeetingInfo* meeting_info);

/**
 * @brief Edit a scheduled meeting
 *
 * @param handle Pre-meeting manager handle
 * @param meeting_id Meeting ID to edit (number)
 * @param options Updated meeting options
 * @param callback Async callback
 * @param user_data User data for callback
 * @return NETENDER_SUCCESS on success, error code otherwise
 */
NETENDER_API int32_t NETender_PreMeeting_EditMeeting(NETenderPreMeetingManagerHandle handle,
    int64_t meeting_id,
    const NETenderPreMeetingEditOptions* options,
    NETenderAsyncCallback callback,
    void* user_data);


/**
 * @brief Cancel a scheduled meeting
 *
 * @param handle Pre-meeting manager handle
 * @param meeting_id Meeting ID to cancel (number)
 * @param cancel_recurring Cancel all recurring meetings (1=yes, 0=no, -1=not specified)
 * @param callback Async callback
 * @param user_data User data for callback
 * @return NETENDER_SUCCESS on success, error code otherwise
 */
NETENDER_API int32_t NETender_PreMeeting_CancelMeeting(NETenderPreMeetingManagerHandle handle,
    int64_t meeting_id,
    int32_t cancel_recurring,
    NETenderAsyncCallback callback,
    void* user_data);

/**
 * @brief Get scheduled members for a meeting
 *
 * @param handle Pre-meeting manager handle
 * @param meeting_num Meeting number
 * @param callback Typed async callback returning the scheduled member list
 * @param user_data User data for callback
 * @return NETENDER_SUCCESS on success, error code otherwise
 *
 * @note The returned member array is owned by the SDK and must be freed with
 *       NETender_FreeScheduledMembers when no longer needed.
 */
NETENDER_API int32_t NETender_PreMeeting_GetScheduledMembers(NETenderPreMeetingManagerHandle handle,
    const char* meeting_num,
    NETenderScheduledMemberListCallback callback,
    void* user_data);

/**
 * @brief Free scheduled members
 */
NETENDER_API void NETender_FreeScheduledMembers(NETenderScheduledMember* members, int32_t count);

/**
 * @brief Get meeting info by meeting number
 *
 * @param handle Pre-meeting manager handle
 * @param meeting_num Meeting number
 * @param callback Typed async callback returning the requested meeting info
 * @param user_data User data for callback
 * @return NETENDER_SUCCESS on success, error code otherwise
 *
 * @note This function corresponds to C++ GetMeetingInfoByMeetingNum() and TypeScript getMeetingInfoByMeetingNum().
 *       The returned meeting info is owned by the SDK and must be freed with
 *       NETender_FreePreMeetingInfo when no longer needed.
 */
NETENDER_API int32_t NETender_PreMeeting_GetMeetingInfoByMeetingNum(NETenderPreMeetingManagerHandle handle,
    const char* meeting_num,
    NETenderPreMeetingInfoCallback callback,
    void* user_data);

#ifdef __cplusplus
}
#endif

#endif  // NETENDER_C_API_PRE_MEETING_MANAGER_H_
