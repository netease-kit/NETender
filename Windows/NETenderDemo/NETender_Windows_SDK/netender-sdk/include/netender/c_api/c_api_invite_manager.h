/**
 * @file c_api_invite_manager.h
 * @brief NETender C API - Invite Manager
 * @version 2.0.0
 * @date 2025-10-19
 */

#ifndef NETENDER_C_API_INVITE_MANAGER_H_
#define NETENDER_C_API_INVITE_MANAGER_H_

#include "c_api_core.h"
#include "c_api_types.h"

#ifdef __cplusplus
extern "C" {
#endif

/**
 * @brief Get account information list by user UUIDs
 * 
 * @param handle Invite manager handle
 * @param user_uuids Array of user UUIDs
 * @param uuid_count Number of UUIDs
 * @param callback Typed async callback returning the account list
 * @param user_data User data for callback
 * @return NETENDER_SUCCESS on success, error code otherwise
 */
NETENDER_API int32_t NETender_Invite_GetAccountInfoList(
    NETenderInviteManagerHandle handle,
    const char** user_uuids,
    int32_t uuid_count,
    NETenderInviteAccountListCallback callback,
    void* user_data
);

/**
 * @brief Free account list
 */
NETENDER_API void NETender_FreeAccountList(
    NETenderSearchAccountInfo* accounts,
    int32_t count
);

/**
 * @brief Search account information by phone number
 * 
 * @param handle Invite manager handle
 * @param phone Phone number to search
 * @param callback Typed async callback returning the account list
 * @param user_data User data for callback
 * @return NETENDER_SUCCESS on success, error code otherwise
 */
NETENDER_API int32_t NETender_Invite_SearchAccountByPhone(
    NETenderInviteManagerHandle handle,
    const char* phone,
    NETenderInviteAccountListCallback callback,
    void* user_data
);

#ifdef __cplusplus
}
#endif

#endif // NETENDER_C_API_INVITE_MANAGER_H_
