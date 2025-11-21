/**
 * @file c_api_waiting_room_manager.h
 * @brief NETender C API - Waiting Room Manager
 * @version 2.0.0
 * @date 2025-10-19
 */

#ifndef NETENDER_C_API_WAITING_ROOM_MANAGER_H_
#define NETENDER_C_API_WAITING_ROOM_MANAGER_H_

#include "c_api_core.h"
#include "c_api_types.h"

#ifdef __cplusplus
extern "C" {
#endif

/**
 * @brief Get waiting room member list
 * @param handle Waiting room manager handle
 * @param time Pagination timestamp (first call pass 0)
 * @param limit Number of records per request
 * @param asc Ascending order flag
 * @param callback Typed async callback returning the member list
 * @param user_data User data for callback
 * @return NETENDER_SUCCESS on success, error code otherwise
 */
NETENDER_API int32_t NETender_WaitingRoom_GetMemberList(
    NETenderWaitingRoomManagerHandle handle,
    int64_t time,
    int32_t limit,
    int32_t asc,
    NETenderWaitingRoomMemberListCallback callback,
    void* user_data
);

NETENDER_API void NETender_FreeWaitingRoomMemberList(
    NETenderWaitingRoomMember* members,
    int32_t count
);

NETENDER_API int32_t NETender_WaitingRoom_GetInfo(
    NETenderWaitingRoomManagerHandle handle,
    NETenderWaitingRoomInfo* info
);

NETENDER_API int32_t NETender_WaitingRoom_PutInWaitingRoom(
    NETenderWaitingRoomManagerHandle handle,
    const char* user_uuid,
    NETenderAsyncCallback callback,
    void* user_data
);

NETENDER_API int32_t NETender_WaitingRoom_AdmitMember(
    NETenderWaitingRoomManagerHandle handle,
    const char* user_uuid,
    int32_t auto_admit,
    NETenderAsyncCallback callback,
    void* user_data
);

NETENDER_API int32_t NETender_WaitingRoom_ExpelMember(
    NETenderWaitingRoomManagerHandle handle,
    const char* user_uuid,
    int32_t not_allow_join,
    NETenderAsyncCallback callback,
    void* user_data
);

NETENDER_API int32_t NETender_WaitingRoom_AdmitAll(
    NETenderWaitingRoomManagerHandle handle,
    NETenderAsyncCallback callback,
    void* user_data
);

NETENDER_API int32_t NETender_WaitingRoom_ExpelAll(
    NETenderWaitingRoomManagerHandle handle,
    int32_t disallow_rejoin,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Add waiting room listener (strongly typed, no void*)
 * @param handle Waiting room manager handle
 * @param listener Listener callbacks (SDK does not take ownership)
 */
NETENDER_API int32_t NETender_WaitingRoom_AddListener(
    NETenderWaitingRoomManagerHandle handle,
    const NETenderWaitingRoomListener* listener
);

/**
 * @brief Remove waiting room listener
 * @param handle Waiting room manager handle
 * @param listener Listener to remove (same address passed to Add)
 */
NETENDER_API int32_t NETender_WaitingRoom_RemoveListener(
    NETenderWaitingRoomManagerHandle handle,
    const NETenderWaitingRoomListener* listener
);

#ifdef __cplusplus
}
#endif

#endif // NETENDER_C_API_WAITING_ROOM_MANAGER_H_
