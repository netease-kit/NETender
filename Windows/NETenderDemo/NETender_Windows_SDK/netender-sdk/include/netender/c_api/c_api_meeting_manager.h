/**
 * @file c_api_meeting_manager.h
 * @brief NETender MeetingManager C API
 * @version 2.0.0
 * @date 2025-10-19
 * 
 * This file provides meeting management functions:
 * - Create and join meetings
 * - Leave and end meetings
 * - Get meeting information
 * - Manage meeting listeners
 */

#ifndef NETENDER_C_API_MEETING_MANAGER_H_
#define NETENDER_C_API_MEETING_MANAGER_H_

#include "c_api_core.h"
#include "c_api_types.h"

#ifdef __cplusplus
extern "C" {
#endif

// ==================== Handle (All types defined in c_api_core.h) ====================

// ==================== Meeting Lifecycle ====================

/**
 * @brief Create a new meeting
 * 
 * Creates a new meeting with the specified options.
 * This is an asynchronous operation.
 * 
 * @param handle Meeting manager handle
 * @param options Meeting creation options
 * @param callback Callback function called when operation completes
 * @param user_data User data passed to callback
 * @return 0 on success (callback will be called), negative error code on failure
 * 
 * Example:
 * @code
 * void on_created(int32_t code, const char* msg, void* ud) {
 *     if (code == 0) {
 *         printf("Meeting created successfully!\n");
 *     } else {
 *         printf("Failed to create meeting: %s\n", msg);
 *     }
 * }
 * 
 * NETenderMeetingCreateOptions opts = {0};
 * opts.subject = "Test Meeting";
 * opts.start_time = -1;  // Not specified
 * opts.end_time = -1;
 * opts.enable_waiting_room = 1;  // Enable
 * opts.enable_cloud_recording = -1;  // Not specified
 * 
 * NETender_Meeting_CreateMeeting(mgr, &opts, on_created, NULL);
 * @endcode
 */
NETENDER_API int32_t NETender_Meeting_CreateMeeting(
    NETenderMeetingManagerHandle handle,
    const NETenderMeetingCreateOptions* options,
    NETenderMeetingAsyncCallback callback,
    void* user_data
);

/**
 * @brief Join an existing meeting
 * 
 * Joins a meeting using the meeting number.
 * This is an asynchronous operation.
 * 
 * @param handle Meeting manager handle
 * @param options Meeting join options
 * @param callback Callback function called when operation completes
 * @param user_data User data passed to callback
 * @return 0 on success (callback will be called), negative error code on failure
 */
NETENDER_API int32_t NETender_Meeting_JoinMeeting(
    NETenderMeetingManagerHandle handle,
    const NETenderMeetingJoinOptions* options,
    NETenderMeetingAsyncCallback callback,
    void* user_data
);

/**
 * @brief Rejoin room after being admitted from waiting room
 * 
 * This is an asynchronous operation.
 * 
 * @param handle Meeting manager handle
 * @param callback Callback function called when operation completes
 * @param user_data User data passed to callback
 * @return 0 on success (callback will be called), negative error code on failure
 */
NETENDER_API int32_t NETender_Meeting_RejoinAfterAdmittedToRoom(
    NETenderMeetingManagerHandle handle,
    NETenderMeetingAsyncCallback callback,
    void* user_data
);

/**
 * @brief Leave the current meeting
 * 
 * Leaves the meeting. If the user is host and close_if_host is true,
 * the meeting will be ended for all participants.
 * 
 * @param handle Meeting manager handle
 * @param close_if_host 1 to end meeting if host, 0 to just leave
 * @param callback Callback function called when operation completes
 * @param user_data User data passed to callback
 * @return 0 on success (callback will be called), negative error code on failure
 */
NETENDER_API int32_t NETender_Meeting_LeaveMeeting(
    NETenderMeetingManagerHandle handle,
    int32_t close_if_host,
    NETenderMeetingAsyncCallback callback,
    void* user_data
);

/**
 * @brief End the current meeting (host only)
 * 
 * Ends the meeting for all participants.
 * Only the host can call this function.
 * 
 * @param handle Meeting manager handle
 * @param callback Callback function called when operation completes
 * @param user_data User data passed to callback
 * @return 0 on success (callback will be called), negative error code on failure
 */
NETENDER_API int32_t NETender_Meeting_EndMeeting(
    NETenderMeetingManagerHandle handle,
    NETenderMeetingAsyncCallback callback,
    void* user_data
);

// ==================== Meeting Information ====================

/**
 * @brief Get current meeting information (synchronous)
 * 
 * Returns information about the current meeting.
 * This is a synchronous function that returns immediately.
 * 
 * @param handle Meeting manager handle
 * @param info Pointer to receive meeting information
 * @return 0 on success, negative error code on failure
 * 
 * Note: The returned info structure contains allocated strings.
 * You must call NETender_FreeMeetingInfo() to free the memory.
 * 
 * Example:
 * @code
 * NETenderMeetingSDKInfo* info = NULL;
 * int32_t result = NETender_Meeting_GetMeetingInfo(mgr, &info);
 * if (result == 0 && info != NULL) {
 *     printf("Meeting: %s\n", info->subject);
 *     printf("Meeting num: %s\n", info->meeting_num);
 *     NETender_FreeMeetingInfo(info);
 * }
 * @endcode
 */
NETENDER_API int32_t NETender_Meeting_GetMeetingInfo(
    NETenderMeetingManagerHandle handle,
    NETenderMeetingSDKInfo** info
);

/**
 * @brief Free meeting information structure
 * 
 * Frees the memory allocated by NETender_Meeting_GetMeetingInfo().
 * 
 * @param info Meeting information to free
 */
NETENDER_API void NETender_FreeMeetingInfo(
    NETenderMeetingSDKInfo* info
);

/**
 * @brief Release meeting resources
 * 
 * Should be called after leaving or ending a meeting to clean up resources.
 * This is a synchronous function.
 * 
 * @param handle Meeting manager handle
 * @return 0 on success, negative error code on failure
 */
NETENDER_API int32_t NETender_Meeting_ReleaseMeeting(
    NETenderMeetingManagerHandle handle
);

// ==================== Listener Management ====================

/**
 * @brief Add meeting event listener
 * 
 * Registers a listener to receive meeting events.
 * 
 * @param handle Meeting manager handle
 * @param listener Listener callbacks and user data
 * @return 0 on success, negative error code on failure
 * 
 * Note: Multiple listeners can be registered. Each listener must be
 * unregistered with NETender_Meeting_RemoveMeetingListener() before being freed.
 */
NETENDER_API int32_t NETender_Meeting_AddMeetingListener(
    NETenderMeetingManagerHandle handle,
    const NETenderMeetingListener* listener
);

/**
 * @brief Remove meeting event listener
 * 
 * Unregisters a previously registered listener.
 * 
 * @param handle Meeting manager handle
 * @param listener Listener to remove (must match the address passed to Add)
 * @return 0 on success, negative error code on failure
 * 
 * Note: After calling this function, the listener structure can be safely freed.
 */
NETENDER_API int32_t NETender_Meeting_RemoveMeetingListener(
    NETenderMeetingManagerHandle handle,
    const NETenderMeetingListener* listener
);

/**
 * @brief Add RTC statistics listener
 * 
 * Registers a listener to receive RTC statistics events.
 * 
 * @param handle Meeting manager handle
 * @param listener Listener callbacks and user data
 * @return 0 on success, negative error code on failure
 * 
 * Note: Multiple listeners can be registered. Each listener must be
 * unregistered with NETender_Meeting_RemoveRtcStatsListener() before being freed.
 */
NETENDER_API int32_t NETender_Meeting_AddRtcStatsListener(
    NETenderMeetingManagerHandle handle,
    const NETenderRtcStatsListener* listener
);

/**
 * @brief Remove RTC statistics listener
 * 
 * Unregisters a previously registered listener.
 * 
 * @param handle Meeting manager handle
 * @param listener Listener to remove (must match the address passed to Add)
 * @return 0 on success, negative error code on failure
 * 
 * Note: After calling this function, the listener structure can be safely freed.
 */
NETENDER_API int32_t NETender_Meeting_RemoveRtcStatsListener(
    NETenderMeetingManagerHandle handle,
    const NETenderRtcStatsListener* listener
);

/**
 * @brief Add message channel listener
 * 
 * Registers a listener to receive message channel events.
 * 
 * @param handle Meeting manager handle
 * @param listener Listener callbacks and user data
 * @return 0 on success, negative error code on failure
 * 
 * Note: Multiple listeners can be registered. Each listener must be
 * unregistered with NETender_Meeting_RemoveMessageChannelListener() before being freed.
 */
NETENDER_API int32_t NETender_Meeting_AddMessageChannelListener(
    NETenderMeetingManagerHandle handle,
    const NETenderMessageChannelListener* listener
);

/**
 * @brief Remove message channel listener
 * 
 * Unregisters a previously registered listener.
 * 
 * @param handle Meeting manager handle
 * @param listener Listener to remove (must match the address passed to Add)
 * @return 0 on success, negative error code on failure
 * 
 * Note: After calling this function, the listener structure can be safely freed.
 */
NETENDER_API int32_t NETender_Meeting_RemoveMessageChannelListener(
    NETenderMeetingManagerHandle handle,
    const NETenderMessageChannelListener* listener
);

#ifdef __cplusplus
}
#endif

#endif // NETENDER_C_API_MEETING_MANAGER_H_
