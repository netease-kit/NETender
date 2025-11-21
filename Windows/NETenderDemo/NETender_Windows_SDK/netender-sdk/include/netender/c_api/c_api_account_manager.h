/**
 * @file c_api_account_manager.h
 * @brief NETender C API - Account Manager
 * @version 2.0.0
 * @date 2025-10-19
 */

#ifndef NETENDER_C_API_ACCOUNT_MANAGER_H_
#define NETENDER_C_API_ACCOUNT_MANAGER_H_

#include "c_api_core.h"
#include "c_api_types.h"

#ifdef __cplusplus
extern "C" {
#endif

/**
 * @brief Login by token
 * @note On success the callback receives a heap-allocated NETenderAccountInfo that must be freed with NETender_FreeAccountInfo.
 */
NETENDER_API int32_t NETender_Account_LoginByToken(
    NETenderAccountManagerHandle handle,
    const NETenderLoginByTokenOptions* options,
    NETenderAccountInfoCallback callback,
    void* user_data
);

/**
 * @brief Login by password
 * @note On success the callback receives a heap-allocated NETenderAccountInfo that must be freed with NETender_FreeAccountInfo.
 */
NETENDER_API int32_t NETender_Account_LoginByPassword(
    NETenderAccountManagerHandle handle,
    const NETenderLoginByPasswordOptions* options,
    NETenderAccountInfoCallback callback,
    void* user_data
);

/**
 * @brief Get current account info
 * @note On success the callback receives a heap-allocated NETenderAccountInfo that must be freed with NETender_FreeAccountInfo.
 */
NETENDER_API int32_t NETender_Account_GetAccountInfo(
    NETenderAccountManagerHandle handle,
    NETenderAccountInfoCallback callback,
    void* user_data
);

/**
 * @brief Logout
 */
NETENDER_API int32_t NETender_Account_Logout(
    NETenderAccountManagerHandle handle,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Update nickname
 */
NETENDER_API int32_t NETender_Account_UpdateNickname(
    NETenderAccountManagerHandle handle,
    const char* nickname,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Reset password
 */
NETENDER_API int32_t NETender_Account_ResetPassword(
    NETenderAccountManagerHandle handle,
    const NETenderResetPasswordOptions* options,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Free account info returned by account callbacks
 *
 * @note This function releases both the structure and any nested strings.
 */
NETENDER_API void NETender_FreeAccountInfo(
    NETenderAccountInfo* account_info
);

#ifdef __cplusplus
}
#endif

#endif // NETENDER_C_API_ACCOUNT_MANAGER_H_
