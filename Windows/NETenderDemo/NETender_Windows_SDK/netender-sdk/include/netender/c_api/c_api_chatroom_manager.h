/**
 * @file c_api_chatroom_manager.h
 * @brief NETender C API - Chatroom Manager
 * @version 2.0.0
 * @date 2025-10-19
 */

#ifndef NETENDER_C_API_CHATROOM_MANAGER_H_
#define NETENDER_C_API_CHATROOM_MANAGER_H_

#include "c_api_core.h"
#include "c_api_types.h"

#ifdef __cplusplus
extern "C" {
#endif

/**
 * @brief Send text message to chatroom
 * 
 * Strictly aligned with TypeScript sendTextMessage interface:
 * sendTextMessage(idClient: string, content: string, isWaitingRoom?: boolean, toUserUuids?: string[]): Promise<NEResult<NERoomChatMessage>>
 * 
 * This function uses NETenderChatroomTextMessageOptions structure for consistency with other chatroom APIs.
 * 
 * @param handle Chatroom manager handle
 * @param options Text message options (required, must not be NULL)
 *   - options.id_client: Client message ID (can be NULL or empty string to auto-generate)
 *   - options.content: Text message content (required, must not be NULL)
 *   - options.is_waiting_room: Is waiting room message (-1=not set, 0=false, 1=true)
 *   - options.to_user_uuid_list: Private message recipient UUID array (optional, NULL if not specified)
 *   - options.to_user_uuid_count: Number of recipients (0 if to_user_uuid_list is NULL)
 * @param callback Async callback
 * @param user_data User data for callback
 * @return NETENDER_SUCCESS on success, error code otherwise
 */
NETENDER_API int32_t NETender_Chatroom_SendTextMessage(
    NETenderChatroomManagerHandle handle,
    const NETenderChatroomTextMessageOptions* options,
    NETenderChatMessageCallback callback,
    void* user_data
);

/**
 * @brief Send file or image message to chatroom
 */
NETENDER_API int32_t NETender_Chatroom_SendFileMessage(
    NETenderChatroomManagerHandle handle,
    const NETenderChatroomSendFileMessageOptions* options,
    NETenderChatMessageCallback callback,
    void* user_data
);

/**
 * @brief Recall a previously sent message
 */
NETENDER_API int32_t NETender_Chatroom_RecallMessage(
    NETenderChatroomManagerHandle handle,
    const NETenderChatMessage* message,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Cancel an in-flight file message upload
 */
NETENDER_API int32_t NETender_Chatroom_CancelSendFileMessage(
    NETenderChatroomManagerHandle handle,
    const NETenderChatMessage* message,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Download an attachment to local path
 */
NETENDER_API int32_t NETender_Chatroom_DownloadAttachment(
    NETenderChatroomManagerHandle handle,
    const NETenderChatMessage* message,
    const char* save_path,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Cancel a pending attachment download
 */
NETENDER_API int32_t NETender_Chatroom_CancelDownloadAttachment(
    NETenderChatroomManagerHandle handle,
    const NETenderChatMessage* message,
    NETenderAsyncCallback callback,
    void* user_data
);

/**
 * @brief Free chat message returned by chatroom callbacks
 */
NETENDER_API void NETender_FreeChatMessage(NETenderChatMessage* message);

#ifdef __cplusplus
}
#endif

#endif // NETENDER_C_API_CHATROOM_MANAGER_H_
