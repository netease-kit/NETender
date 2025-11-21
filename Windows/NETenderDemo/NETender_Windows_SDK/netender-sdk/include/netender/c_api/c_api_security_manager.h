/**
 * @file c_api_security_manager.h
 * @brief NETender C API - Security Manager
 * @version 2.0.0
 * @date 2025-10-19
 */

#ifndef NETENDER_C_API_SECURITY_MANAGER_H_
#define NETENDER_C_API_SECURITY_MANAGER_H_

#include "c_api_core.h"
#include "c_api_types.h"
#ifdef __cplusplus
extern "C" {
#endif

NETENDER_API int32_t NETender_Security_ChangeChatroomPermission(
    NETenderSecurityManagerHandle handle,
    const char* cr_perm,
    const char* wt_pr_chat,
    NETenderAsyncCallback callback,
    void* user_data
);

NETENDER_API int32_t NETender_Security_GetChatroomPermission(
    NETenderSecurityManagerHandle handle,
    NETenderChatroomPermissionCallback callback,
    void* user_data
);

NETENDER_API void NETender_FreeChatroomPermission(
    NETenderChatroomPermission* permission
);

#ifdef __cplusplus
}
#endif

#endif // NETENDER_C_API_SECURITY_MANAGER_H_
