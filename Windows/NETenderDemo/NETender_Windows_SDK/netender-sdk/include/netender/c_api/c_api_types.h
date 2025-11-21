/**
 * @file c_api_types.h
 * @brief NETender C API Common Types
 * @version 2.0.0
 * @date 2025-10-18
 *
 * This file contains common data types and utilities used across all C API modules.
 */

#ifndef NETENDER_C_API_TYPES_H_
#define NETENDER_C_API_TYPES_H_

#include "c_api_core.h"

#ifdef __cplusplus
extern "C" {
#endif

// ==================== Common Data Types ====================

/**
 * @brief Device information
 */
typedef struct NETenderDeviceInfo {
    const char* device_id;   /**< Device ID (SDK manages lifecycle) */
    const char* device_name; /**< Device name (SDK manages lifecycle) */
#ifdef __cplusplus
    NETenderDeviceInfo() noexcept
        : device_id(nullptr),
          device_name(nullptr) {}
#endif
} NETenderDeviceInfo;



/**
 * @brief Account information returned by account-related APIs
 * @note This structure mirrors the C++ NEAccountInfo and JavaScript NEAccountInfo types
 */
typedef struct NETenderAccountInfo {
    // Required fields
    const char* userUuid;          /**< User UUID (required) */
    const char* userToken;         /**< User token (required) */
    const char* nickname;          /**< User nickname (required) */
    const char* privateMeetingNum; /**< Private meeting number (required) */

    // Optional fields (can be NULL)
    const char* corpName;               /**< Corporation name (optional) */
    const char* account;                /**< Account (deprecated, use privateMeetingNum) */
    const char* avatar;                 /**< Avatar URL (optional) */
    const char* phoneNumber;            /**< Phone number (optional) */
    const char* email;                  /**< Email address (optional) */
    const char* privateShortMeetingNum; /**< Private short meeting number (optional) */

    // Boolean flags (use int8_t: 0=false, 1=true, -1=not set)
    int8_t isInitialPassword; /**< Is initial password (-1=not set, 0=false, 1=true) */
    int8_t isAnonymous;       /**< Is anonymous account (-1=not set, 0=false, 1=true) */

#ifdef __cplusplus
    NETenderAccountInfo() noexcept
        : userUuid(nullptr),
          userToken(nullptr),
          nickname(nullptr),
          privateMeetingNum(nullptr),
          corpName(nullptr),
          account(nullptr),
          avatar(nullptr),
          phoneNumber(nullptr),
          email(nullptr),
          privateShortMeetingNum(nullptr),
          isInitialPassword(-1),
          isAnonymous(-1) {}
#endif
} NETenderAccountInfo;

/**
 * @brief Chat message attachment payload
 */
typedef struct NETenderChatMessageAttachment {
    const char* from;
    const char* from_nick;
    const char* type;
    const char** to_list;      /**< Recipient UUID array (SDK manages memory) */
    uint32_t to_count;         /**< Number of recipients in to_list */
    const char** to_nick_list; /**< Recipient nickname array (SDK manages memory) */
    uint32_t to_nick_count;    /**< Number of nicknames in to_nick_list */
    const char* url;
    const char* name;
    const char* msg_id;
    int64_t msg_time;
    int32_t id;
    const char* operator_id;

#ifdef __cplusplus
    NETenderChatMessageAttachment() noexcept
        : from(nullptr),
          from_nick(nullptr),
          type(nullptr),
          to_list(nullptr),
          to_count(0),
          to_nick_list(nullptr),
          to_nick_count(0),
          url(nullptr),
          name(nullptr),
          msg_id(nullptr),
          msg_time(0),
          id(0),
          operator_id(nullptr) {}
#endif
} NETenderChatMessageAttachment;

/**
 * @brief Chat message file metadata
 */
typedef struct NETenderChatMessageFileInfo {
    const char* name;
    const char* ext;
    uint64_t size;
    const char* url;
    const char* file_path;
    uint32_t width;
    uint32_t height;

#ifdef __cplusplus
    NETenderChatMessageFileInfo() noexcept
        : name(nullptr),
          ext(nullptr),
          size(0),
          url(nullptr),
          file_path(nullptr),
          width(0),
          height(0) {}
#endif
} NETenderChatMessageFileInfo;

/**
 * @brief Chat message representation mirroring TypeScript NERoomChatMessage
 */
typedef struct NETenderChatMessage {
    const char* message_uuid;
    const char* from_client_type;
    const char* message_type;
    const char* from_user_uuid;
    const char* from_nick;
    const char** to_user_uuid_list;
    uint32_t to_user_uuid_count;
    int64_t time;
    const char* type;
    const char* text;
    const char* status;
    NETenderChatMessageAttachment* attach;
    const char* from;
    bool is_me;
    bool resend;
    const char* id_client;
    NETenderChatMessageFileInfo* file_info;
    const char* custom;
    int32_t chatroom_type;
    bool has_temp_file;
    const char* temp_file_path;
    bool is_private;
    const char* to_nickname;
    const char* from_avatar;
    double progress_percentage;
    const char* progress_percentage_text;
    const char* progress_total;
    const char* progress_loaded;

#ifdef __cplusplus
    NETenderChatMessage() noexcept
        : message_uuid(nullptr),
          from_client_type(nullptr),
          message_type(nullptr),
          from_user_uuid(nullptr),
          from_nick(nullptr),
          to_user_uuid_list(nullptr),
          to_user_uuid_count(0),
          time(0),
          type(nullptr),
          text(nullptr),
          status(nullptr),
          attach(nullptr),
          from(nullptr),
          is_me(false),
          resend(false),
          id_client(nullptr),
          file_info(nullptr),
          custom(nullptr),
          chatroom_type(0),
          has_temp_file(false),
          temp_file_path(nullptr),
          is_private(false),
          to_nickname(nullptr),
          from_avatar(nullptr),
          progress_percentage(0.0),
          progress_percentage_text(nullptr),
          progress_total(nullptr),
          progress_loaded(nullptr) {}
#endif
} NETenderChatMessage;

/**
 * @brief Sentinel value for optional boolean parameters (-1 = not set)
 */
#define NETENDER_OPTION_BOOL_NOT_SET ((int8_t) - 1)

/**
 * @brief Chatroom file message type
 */
typedef enum { NETENDER_CHATROOM_FILE_MESSAGE_FILE = 0, NETENDER_CHATROOM_FILE_MESSAGE_IMAGE = 1 } NETenderChatroomFileMessageType;

/**
 * @brief Chatroom text message options
 */
typedef struct NETenderChatroomTextMessageOptions {
    const char* id_client;          /**< Optional client id (NULL to auto-generate) */
    const char* content;            /**< Text content (required) */
    int8_t is_waiting_room;         /**< NETENDER_OPTION_BOOL_NOT_SET to omit, otherwise 0/1 */
    const char** to_user_uuid_list; /**< Optional recipient list */
    uint32_t to_user_uuid_count;    /**< Recipient count */

#ifdef __cplusplus
    NETenderChatroomTextMessageOptions() noexcept
        : id_client(nullptr),
          content(nullptr),
          is_waiting_room(NETENDER_OPTION_BOOL_NOT_SET),
          to_user_uuid_list(nullptr),
          to_user_uuid_count(0) {}
#endif
} NETenderChatroomTextMessageOptions;

/**
 * @brief Chatroom file upload descriptor
 * 
 * Simplified structure with only required fields: url, size, width, height
 */
typedef struct NETenderChatroomFileUpload {
    const char* url;    /**< Remote URL (required) */
    uint64_t size;      /**< File size (required) */
    uint32_t width;     /**< Image width (required) */
    uint32_t height;    /**< Image height (required) */

#ifdef __cplusplus
    NETenderChatroomFileUpload() noexcept
        : url(nullptr),
          size(0),
          width(0),
          height(0) {}
#endif
} NETenderChatroomFileUpload;

/**
 * @brief Chatroom file message options
 */
typedef struct NETenderChatroomSendFileMessageOptions {
    const char* id_client;                /**< Optional client id (NULL to auto-generate) */
    NETenderChatroomFileMessageType type; /**< File message type */
    NETenderChatroomFileUpload file;      /**< File payload descriptor */
    int8_t is_waiting_room;               /**< NETENDER_OPTION_BOOL_NOT_SET to omit, otherwise 0/1 */
    const char** to_user_uuid_list;       /**< Optional recipient list */
    uint32_t to_user_uuid_count;          /**< Recipient count */

#ifdef __cplusplus
    NETenderChatroomSendFileMessageOptions() noexcept
        : id_client(nullptr),
          type(NETENDER_CHATROOM_FILE_MESSAGE_FILE),
          file(),
          is_waiting_room(NETENDER_OPTION_BOOL_NOT_SET),
          to_user_uuid_list(nullptr),
          to_user_uuid_count(0) {}
#endif
} NETenderChatroomSendFileMessageOptions;

/**
 * @brief Generic async callback (no payload)
 * @param code Result code (0 = success, negative = error)
 * @param message Optional message (may be NULL)
 * @param user_data User data passed to the function
 */
typedef void (*NETenderAsyncCallback)(int32_t code, const char* message, void* user_data);

/**
 * @brief Account info async callback
 * @param code Result code (0 = success, negative = error)
 * @param message Optional message (may be NULL)
 * @param account_info SDK-owned account info structure (NULL on error)
 * @param user_data User data passed to the function
 *
 * @note Callers must release @p account_info by invoking NETender_FreeAccountInfo
 *       after the callback returns.
 */
typedef void (*NETenderAccountInfoCallback)(int32_t code, const char* message, NETenderAccountInfo* account_info, void* user_data);

/**
 * @brief Device list async callback
 * @param devices SDK-owned device array (NULL if count is 0 or on error)
 * @param count Number of devices in @p devices
 *
 * @note Callers must release @p devices with NETender_FreeDeviceList when done.
 */
typedef void (*NETenderDeviceListCallback)(int32_t code, const char* message, NETenderDeviceInfo* devices, uint32_t count, void* user_data);

/**
 * @brief Chat message async callback
 *
 * @note @p message is allocated by the SDK and must be released with NETender_FreeChatMessage.
 */
typedef void (*NETenderChatMessageCallback)(
    int32_t code,
    const char* message,
    NETenderChatMessage* chat_message,
    void* user_data
);

/**
 * @brief Login by token options
 */
typedef struct NETenderLoginByTokenOptions {
    const char* account_id;     /**< Account ID */
    const char* account_token;  /**< Account token */
#ifdef __cplusplus
    NETenderLoginByTokenOptions() noexcept
        : account_id(nullptr),
          account_token(nullptr) {}
#endif
} NETenderLoginByTokenOptions;

/**
 * @brief Login by password options
 */
typedef struct NETenderLoginByPasswordOptions {
    const char* username;       /**< Username */
    const char* password;       /**< Password */
#ifdef __cplusplus
    NETenderLoginByPasswordOptions() noexcept
        : username(nullptr),
          password(nullptr) {}
#endif
} NETenderLoginByPasswordOptions;

/**
 * @brief Login by SMS code options
 */
typedef struct NETenderLoginBySmsCodeOptions {
    const char* phone_number;   /**< Phone number */
    const char* sms_code;       /**< SMS verification code */
#ifdef __cplusplus
    NETenderLoginBySmsCodeOptions() noexcept
        : phone_number(nullptr),
          sms_code(nullptr) {}
#endif
} NETenderLoginBySmsCodeOptions;

/**
 * @brief Reset password options
 */
typedef struct NETenderResetPasswordOptions {
    const char* user_uuid;      /**< User UUID */
    const char* old_password;   /**< Old password */
    const char* new_password;   /**< New password */
#ifdef __cplusplus
    NETenderResetPasswordOptions() noexcept
        : user_uuid(nullptr),
          old_password(nullptr),
          new_password(nullptr) {}
#endif
} NETenderResetPasswordOptions;

/**
 * @brief Search account information
 */
typedef struct NETenderSearchAccountInfo {
    const char* user_uuid;     /**< User UUID */
    const char* name;          /**< User name */
    const char* avatar;        /**< Avatar URL (NULL if not available) */
    const char* dept;          /**< Department (NULL if not available) */
    const char* phone_number;  /**< Phone number (NULL if not available) */
#ifdef __cplusplus
    NETenderSearchAccountInfo() noexcept
        : user_uuid(nullptr),
          name(nullptr),
          avatar(nullptr),
          dept(nullptr),
          phone_number(nullptr) {}
#endif
} NETenderSearchAccountInfo;

/**
 * @brief Invite module async callback delivering account list payload
 */
typedef void (*NETenderInviteAccountListCallback)(
    int32_t code,
    const char* message,
    NETenderSearchAccountInfo* accounts,
    int32_t count,
    void* user_data
);

/**
 * @brief Screen capture source type
 */
typedef enum NETenderScreenCaptureSourceType {
    NETENDER_SOURCE_TYPE_SCREEN = 0,  /**< Screen/Display source */
    NETENDER_SOURCE_TYPE_WINDOW = 1   /**< Window source */
} NETenderScreenCaptureSourceType;

/**
 * @brief Image buffer for screen source icon/thumbnail
 */
typedef struct NETenderImageBuffer {
    int32_t width;     /**< Image width */
    int32_t height;    /**< Image height */
    uint32_t length;   /**< Byte length of data */
    uint8_t* data;     /**< Raw image bytes */
#ifdef __cplusplus
    NETenderImageBuffer() noexcept
        : width(0), height(0), length(0), data(nullptr) {}
#endif
} NETenderImageBuffer;

/**
 * @brief Screen capture source information
 */
typedef struct NETenderScreenCaptureSource {
    int64_t source_id;                        /**< Source ID (unique identifier) */
    const char* source_name;                  /**< Source name (display name or window title) */
    NETenderScreenCaptureSourceType source_type; /**< Source type (screen or window) */
    const char* title;                        /**< Optional: window title (if available) */
    const char* process_path;                 /**< Optional: process path (if available) */
    int32_t primary_monitor;                  /**< Optional: primary monitor (1: yes, 0: no, -1: unknown) */
    NETenderImageBuffer icon;                 /**< Optional: icon image buffer */
    NETenderImageBuffer thumb_image;          /**< Optional: thumbnail image buffer */
#ifdef __cplusplus
    NETenderScreenCaptureSource() noexcept
        : source_id(0),
          source_name(nullptr),
          source_type(NETENDER_SOURCE_TYPE_SCREEN),
          title(nullptr),
          process_path(nullptr),
          primary_monitor(-1),
          icon(),
          thumb_image() {}
#endif
} NETenderScreenCaptureSource;

/**
 * @brief Screen share configuration
 * 
 * Strictly aligned with C++ NEScreenShareConfig and TypeScript NERoomStartScreenConfigEnhanced.
 * Field order matches NEScreenShareConfig structure for consistency.
 * 
 * C++ NEScreenShareConfig alignment:
 * - std::optional<bool> needRequestMeetingServerScreenShare → int32_t need_request_meeting_server_screen_share (-1=not set, 0=false, 1=true)
 * - std::optional<std::string> sourceId → const char* source_id (NULL=not set)
 * - std::optional<VideoResolution> resolution → int32_t resolution (-1=not set, otherwise VideoResolution value)
 * - std::optional<VideoFrameRate> frameRate → int32_t frame_rate (-1=not set, otherwise VideoFrameRate value)
 * - std::optional<VideoFrameRate> limitFrameRate → int32_t limit_frame_rate (-1=not set, otherwise VideoFrameRate value)
 * - std::optional<std::string> videoProfile → const char* video_profile (NULL=not set)
 * - std::optional<bool> isApp → int32_t is_app (-1=not set, 0=false, 1=true)
 * - std::optional<std::string> forceDisplaySurface → const char* force_display_surface (NULL=not set)
 * - std::optional<bool> preferMotion → int32_t prefer_motion (-1=not set, 0=false, 1=true)
 * - std::optional<bool> isLinux → int32_t is_linux (-1=not set, 0=false, 1=true)
 */
typedef struct NETenderScreenShareConfig {
    /** Need request meeting server screen share (-1=not set, 0=false, 1=true), aligned with NEScreenShareConfig::needRequestMeetingServerScreenShare */
    int32_t need_request_meeting_server_screen_share;
    
    /** Source ID (NULL=not set), aligned with NEScreenShareConfig::sourceId */
    const char* source_id;
    
    /** Resolution (-1=not set, otherwise VideoResolution value), aligned with NEScreenShareConfig::resolution */
    int32_t resolution;
    
    /** Frame rate (-1=not set, otherwise VideoFrameRate value), aligned with NEScreenShareConfig::frameRate */
    int32_t frame_rate;
    
    /** Limit frame rate (-1=not set, otherwise VideoFrameRate value), aligned with NEScreenShareConfig::limitFrameRate */
    int32_t limit_frame_rate;
    
    /** Video profile (NULL=not set), aligned with NEScreenShareConfig::videoProfile */
    const char* video_profile;
    
    /** Is app (-1=not set, 0=false, 1=true), aligned with NEScreenShareConfig::isApp */
    int32_t is_app;
    
    /** Force display surface (NULL=not set), aligned with NEScreenShareConfig::forceDisplaySurface */
    const char* force_display_surface;
    
    /** Prefer motion (-1=not set, 0=false, 1=true), aligned with NEScreenShareConfig::preferMotion */
    int32_t prefer_motion;
    
    /** Is Linux platform (-1=not set, 0=false, 1=true), aligned with NEScreenShareConfig::isLinux */
    int32_t is_linux;

#ifdef __cplusplus
    NETenderScreenShareConfig() noexcept
        : need_request_meeting_server_screen_share(-1),
          source_id(nullptr),
          resolution(-1),
          frame_rate(-1),
          limit_frame_rate(-1),
          video_profile(nullptr),
          is_app(-1),
          force_display_surface(nullptr),
          prefer_motion(-1),
          is_linux(-1) {}
#endif
} NETenderScreenShareConfig;

/**
 * @brief Stop screen share configuration
 * 
 * Strictly aligned with C++ NEStopScreenShareConfig and TypeScript NERoomStopScreenConfig.
 * Field order matches NEStopScreenShareConfig structure for consistency.
 * 
 * C++ NEStopScreenShareConfig alignment:
 * - std::optional<bool> needRequestMeetingServerScreenShare → int32_t need_request_meeting_server_screen_share (-1=not set, 0=false, 1=true)
 */
typedef struct NETenderStopScreenShareConfig {
    /** Need request meeting server screen share (-1=not set, 0=false, 1=true), aligned with NEStopScreenShareConfig::needRequestMeetingServerScreenShare */
    int32_t need_request_meeting_server_screen_share;

#ifdef __cplusplus
    NETenderStopScreenShareConfig() noexcept
        : need_request_meeting_server_screen_share(-1) {}
#endif
} NETenderStopScreenShareConfig;

/**
 * @brief Callback delivering screen capture source list payload
 */
typedef void (*NETenderScreenCaptureSourceListCallback)(
    int32_t code,
    const char* message,
    NETenderScreenCaptureSource* sources,
    uint32_t count,
    void* user_data
);

/**
 * @brief Chatroom permission information
 */
typedef struct NETenderChatroomPermission {
    const char* cr_perm;    /**< Chatroom permission (1-4) */
    const char* wt_pr_chat; /**< Waiting room chat permission (0-1) */
#ifdef __cplusplus
    NETenderChatroomPermission() noexcept
        : cr_perm(nullptr),
          wt_pr_chat(nullptr) {}
#endif
} NETenderChatroomPermission;

/**
 * @brief Callback delivering chatroom permission payload
 */
typedef void (*NETenderChatroomPermissionCallback)(
    int32_t code,
    const char* message,
    NETenderChatroomPermission* permission,
    void* user_data
);

/**
 * @brief Member information
 */
typedef struct NETenderMember {
    const char* user_uuid;      /**< User UUID */
    const char* user_name;      /**< User name */
    int32_t is_host;            /**< Is host (1: yes, 0: no) */
    int32_t is_co_host;         /**< Is co-host (1: yes, 0: no) */
    int32_t is_audio_on;        /**< Is audio on (1: on, 0: off) */
    int32_t is_video_on;        /**< Is video on (1: on, 0: off) */
    int32_t is_sharing_screen;  /**< Is sharing screen (1: yes, 0: no) */
    int32_t is_hands_up;        /**< Is hands up (1: yes, 0: no) */
#ifdef __cplusplus
    NETenderMember() noexcept
        : user_uuid(nullptr),
          user_name(nullptr),
          is_host(0),
          is_co_host(0),
          is_audio_on(0),
          is_video_on(0),
          is_sharing_screen(0),
          is_hands_up(0) {}
#endif
} NETenderMember;

/**
 * @brief Meeting list query parameters
 */
typedef struct NETenderMeetingListParams {
    int32_t* states;     /**< Meeting state array (optional) */
    int32_t state_count; /**< Number of states (0 if not specified) */
    int32_t offset;      /**< Offset for pagination (-1 if not specified) */
    int32_t size;        /**< Page size (-1 if not specified) */
#ifdef __cplusplus
    NETenderMeetingListParams() noexcept
        : states(nullptr),
          state_count(0),
          offset(-1),
          size(-1) {}
#endif
} NETenderMeetingListParams;

/**
 * @brief Scheduled member information
 */
typedef struct NETenderScheduledMember {
    const char* user_uuid; /**< User UUID */
    const char* role;      /**< Role: "host", "evaluator", "bidder", "supervise" */
#ifdef __cplusplus
    NETenderScheduledMember() noexcept
        : user_uuid(nullptr),
          role(nullptr) {}
#endif
} NETenderScheduledMember;

/**
 * @brief Pre-meeting cloud record configuration
 */
typedef struct NETenderPreMeetingCloudRecordConfig {
    int32_t enable; /**< Enable cloud recording (1=yes, 0=no) */
#ifdef __cplusplus
    NETenderPreMeetingCloudRecordConfig() noexcept
        : enable(0) {}
#endif
} NETenderPreMeetingCloudRecordConfig;

/**
 * @brief Pre-meeting creation options
 */
typedef struct NETenderPreMeetingCreateOptions {
    const char* subject;                                      /**< Meeting subject */
    int64_t start_time;                                       /**< Start timestamp (-1 if not specified) */
    int64_t end_time;                                         /**< End timestamp (-1 if not specified) */
    int32_t enable_waiting_room;                              /**< Enable waiting room (-1=not specified, 0=no, 1=yes) */
    NETenderScheduledMember* scheduled_members;               /**< Scheduled members array (optional) */
    int32_t scheduled_member_count;                           /**< Number of scheduled members (0 if not specified) */
    NETenderPreMeetingCloudRecordConfig* cloud_record_config; /**< Cloud record config (NULL if not specified) */
#ifdef __cplusplus
    NETenderPreMeetingCreateOptions() noexcept
        : subject(nullptr),
          start_time(-1),
          end_time(-1),
          enable_waiting_room(-1),
          scheduled_members(nullptr),
          scheduled_member_count(0),
          cloud_record_config(nullptr) {}
#endif
} NETenderPreMeetingCreateOptions;

/**
 * @brief Pre-meeting edit options (Partial<NEMeetingCreateOptions>)
 */
typedef struct NETenderPreMeetingEditOptions {
    const char* subject;                                      /**< Meeting subject (NULL if not updated) */
    int64_t start_time;                                       /**< Start timestamp (-1 if not updated) */
    int64_t end_time;                                         /**< End timestamp (-1 if not updated) */
    int32_t enable_waiting_room;                              /**< Enable waiting room (-1=not updated, 0=disable, 1=enable) */
    NETenderScheduledMember* scheduled_members;               /**< Scheduled members array (optional) */
    int32_t scheduled_member_count;                           /**< Number of scheduled members (-1 if not updated) */
    NETenderPreMeetingCloudRecordConfig* cloud_record_config; /**< Cloud record config (NULL if not updated) */
#ifdef __cplusplus
    NETenderPreMeetingEditOptions() noexcept
        : subject(nullptr),
          start_time(-1),
          end_time(-1),
          enable_waiting_room(-1),
          scheduled_members(nullptr),
          scheduled_member_count(-1),
          cloud_record_config(nullptr) {}
#endif
} NETenderPreMeetingEditOptions;

/**
 * @brief Pre-meeting local member information
 */
typedef struct NETenderPreMeetingLocalMember {
    const char* user_uuid; /**< User UUID */
    const char* name;      /**< User name */
    const char* role;      /**< Role */
#ifdef __cplusplus
    NETenderPreMeetingLocalMember() noexcept
        : user_uuid(nullptr),
          name(nullptr),
          role(nullptr) {}
#endif
} NETenderPreMeetingLocalMember;

/**
 * @brief Meeting information
 * 
 * Strictly aligned with C++ NEMeetingInfo and TypeScript NEMeetingInfo.
 * Field order matches NEMeetingInfo structure for consistency.
 * 
 * C++ NEMeetingInfo alignment:
 * - std::optional<NELocalMember> localMember → NETenderPreMeetingLocalMember* local_member
 * - int64_t meetingId → int64_t meeting_id
 * - std::string meetingNum → const char* meeting_num
 * - std::string roomUuid → const char* room_uuid
 * - int state → int32_t state
 * - int64_t startTime → int64_t start_time
 * - int64_t endTime → int64_t end_time
 * - std::string subject → const char* subject
 * - std::string ownerUserUuid → const char* owner_user_uuid
 * - std::string ownerNickname → const char* owner_nickname
 * - std::optional<std::vector<NEScheduledMember>> scheduledMembers → NETenderScheduledMember* scheduled_members + int32_t scheduled_member_count
 * - std::optional<bool> noCloudRecord → int32_t no_cloud_record (-1=not set, 0=false, 1=true)
 * - std::optional<bool> noChat → int32_t no_chat (-1=not set, 0=false, 1=true)
 * - bool enableWaitingRoom → int32_t enable_waiting_room (0=no, 1=yes)
 */
typedef struct NETenderMeetingInfo {
    NETenderPreMeetingLocalMember* local_member; /**< Local member (NULL if not present), aligned with NEMeetingInfo::localMember */
    int64_t meeting_id;                          /**< Meeting ID, aligned with NEMeetingInfo::meetingId */
    const char* meeting_num;                     /**< Meeting number, aligned with NEMeetingInfo::meetingNum */
    const char* room_uuid;                       /**< Room UUID, aligned with NEMeetingInfo::roomUuid */
    int32_t state;                               /**< Meeting state, aligned with NEMeetingInfo::state */
    int64_t start_time;                          /**< Start timestamp, aligned with NEMeetingInfo::startTime */
    int64_t end_time;                            /**< End timestamp, aligned with NEMeetingInfo::endTime */
    const char* subject;                         /**< Meeting subject, aligned with NEMeetingInfo::subject */
    const char* owner_user_uuid;                 /**< Owner user UUID, aligned with NEMeetingInfo::ownerUserUuid */
    const char* owner_nickname;                  /**< Owner nickname, aligned with NEMeetingInfo::ownerNickname */
    NETenderScheduledMember* scheduled_members;  /**< Scheduled members (NULL if not present), aligned with NEMeetingInfo::scheduledMembers */
    int32_t scheduled_member_count;              /**< Number of scheduled members (auxiliary field for C API) */
    int32_t no_cloud_record;                     /**< No cloud record (-1=not specified, 0=record, 1=no record), aligned with NEMeetingInfo::noCloudRecord */
    int32_t no_chat;                             /**< No chat (-1=not specified, 0=chat enabled, 1=no chat), aligned with NEMeetingInfo::noChat */
    int32_t enable_waiting_room;                 /**< Enable waiting room (0=no, 1=yes), aligned with NEMeetingInfo::enableWaitingRoom */
#ifdef __cplusplus
    NETenderMeetingInfo() noexcept
        : local_member(nullptr),
          meeting_id(0),
          meeting_num(nullptr),
          room_uuid(nullptr),
          state(0),
          start_time(0),
          end_time(0),
          subject(nullptr),
          owner_user_uuid(nullptr),
          owner_nickname(nullptr),
          scheduled_members(nullptr),
          scheduled_member_count(0),
          no_cloud_record(-1),
          no_chat(-1),
          enable_waiting_room(0) {}
#endif
} NETenderMeetingInfo;

/**
 * @brief Callback delivering a meeting list payload
 */
typedef void (*NETenderPreMeetingListCallback)(int32_t code, const char* message, NETenderMeetingInfo* meetings, int32_t count, void* user_data);

/**
 * @brief Callback delivering single meeting info payload
 */
typedef void (*NETenderPreMeetingInfoCallback)(int32_t code, const char* message, NETenderMeetingInfo* meeting_info, void* user_data);

/**
 * @brief Callback delivering scheduled member list payload
 */
typedef void (
    *NETenderScheduledMemberListCallback)(int32_t code, const char* message, NETenderScheduledMember* members, int32_t count, void* user_data);

/**
 * @brief String async callback
 * @param value SDK-owned string (NULL on error)
 *
 * @note Callers must release @p value with NETender_FreeString when non-NULL.
 */
typedef void (*NETenderStringCallback)(int32_t code, const char* message, char* value, void* user_data);

/**
 * @brief Unsigned integer async callback
 *
 * Suitable for APIs that resolve to scalar numeric results (e.g., volume levels).
 */
typedef void (*NETenderUintCallback)(int32_t code, const char* message, uint32_t value, void* user_data);

// ==================== Memory Management ====================

/**
 * @brief Free device list allocated by SDK
 * @param devices Device array
 * @param count Number of devices
 *
 * @note This function should be called to free device lists returned by
 *       NETender_Audio_GetSpeakerDeviceList, NETender_Audio_GetMicrophoneDeviceList, etc.
 */
NETENDER_API void NETender_FreeDeviceList(NETenderDeviceInfo* devices, uint32_t count);

/**
 * @brief Free string allocated by SDK
 * @param str String to free (can be NULL)
 *
 * @note This function should be called to free strings returned by some SDK functions.
 */
NETENDER_API void NETender_FreeString(const char* str);


typedef enum {
    NETENDER_SUCCESS = 0,                       /**< Operation successful */
    NETENDER_ERROR_INVALID_PARAM = -1,          /**< Invalid parameter */
    NETENDER_ERROR_NOT_INITIALIZED = -2,        /**< Manager not initialized */
    NETENDER_ERROR_ALREADY_INITIALIZED = -3,    /**< Already initialized */
    NETENDER_ERROR_NETWORK = -4,                /**< Network error */
    NETENDER_ERROR_TIMEOUT = -5,                /**< Operation timeout */
    NETENDER_ERROR_PERMISSION_DENIED = -6,      /**< Permission denied */
    NETENDER_ERROR_MEETING_NOT_EXIST = -7,      /**< Meeting does not exist */
    NETENDER_ERROR_ALREADY_IN_MEETING = -8,     /**< Already in a meeting */
    NETENDER_ERROR_OUT_OF_MEMORY = -9,          /**< Out of memory */
    NETENDER_ERROR_DEVICE_NOT_FOUND = -10,      /**< Device not found */
    NETENDER_ERROR_INVALID_STATE = -11,         /**< Invalid state */
    NETENDER_ERROR_NOT_IMPLEMENTED = -12,       /**< Feature not yet implemented */
    NETENDER_ERROR_BUFFER_TOO_SMALL = -13,
    NETENDER_ERROR_UNKNOWN = -999               /**< Unknown error */
} NETenderErrorCode;

#ifdef __cplusplus
}
#endif

// ==================== Meeting Kit ====================
/**
 * @brief IM private server configuration
 */
typedef struct NETenderIMServerConfig {
    const char* lbs_server;
    const char* link_server;
    const char* nos_lbs_server;
    const char* default_link_server;
    const char* nos_upload_server;
    const char* nos_upload_host;
    const char* nos_download_host;
    const char* nos_accelerate_host;
    const char* nos_accelerate_upload_host;
    const char* module;
    const char* version;
    const char* appkey;

#ifdef __cplusplus
    NETenderIMServerConfig() noexcept
        : lbs_server(nullptr),
          link_server(nullptr),
          nos_lbs_server(nullptr),
          default_link_server(nullptr),
          nos_upload_server(nullptr),
          nos_upload_host(nullptr),
          nos_download_host(nullptr),
          nos_accelerate_host(nullptr),
          nos_accelerate_upload_host(nullptr),
          module(nullptr),
          version(nullptr),
          appkey(nullptr) {}
#endif
} NETenderIMServerConfig;

/**
 * @brief RTC private server configuration
 */
typedef struct NETenderRtcServerConfig {
    const char* channel_server;
    const char* statistics_server;
    const char* room_server;
    const char* compat_server;

#ifdef __cplusplus
    NETenderRtcServerConfig() noexcept
        : channel_server(nullptr),
          statistics_server(nullptr),
          room_server(nullptr),
          compat_server(nullptr) {}
#endif
} NETenderRtcServerConfig;

/**
 * @brief Whiteboard private server configuration
 */
typedef struct NETenderWhiteboardServerConfig {
    const char* channel_server;
    const char* doc_trans_server;
    const char* direct_server;

#ifdef __cplusplus
    NETenderWhiteboardServerConfig() noexcept
        : channel_server(nullptr),
          doc_trans_server(nullptr),
          direct_server(nullptr) {}
#endif
} NETenderWhiteboardServerConfig;

typedef struct NETenderInitConfig {
    /** Application key (required) */
    const char* app_key;

    /** Log path (required) */
    const char* log_path;

    /** Server URL (optional, NULL for default) */
    const char* server_url;

    /** Locale code (optional, e.g., "zh-CN", "en-US") */
    const char* locale;

    /** Use asset server config (0=false, 1=true, -1=not specified) */
    int32_t use_asset_server_config;

    /** SDK entry path (optional, NULL to use environment variable NETENDER_SDK_ENTRY) */
    // const char* sdk_entry;

    /** Debug mode (0=false, 1=true, -1=not specified, use environment variable NETENDER_SDK_DEBUG) */
    int32_t debug;

    /** Event tracking (0=false, 1=true, -1=not specified) */
    int32_t event_tracking;

    // ===== Private server configurations (optional) =====
    /** IM private server config (optional, NULL for default) */
    const NETenderIMServerConfig* im_private_conf;

    /** RTC private server config (optional, NULL for default) */
    const NETenderRtcServerConfig* rtc_server_addresses;

    /** Whiteboard private server config (optional, NULL for default) */
    const NETenderWhiteboardServerConfig* whiteboard_config;

    /** Reserved for future extensions */
    void* reserved[4];

#ifdef __cplusplus
    NETenderInitConfig() noexcept
        : app_key(nullptr),
          log_path(nullptr),
          server_url(nullptr),
          locale(nullptr),
          use_asset_server_config(-1),
          debug(-1),
          event_tracking(-1),
          im_private_conf(nullptr),
          rtc_server_addresses(nullptr),
          whiteboard_config(nullptr) {
              for (int i = 0; i < 4; ++i) reserved[i] = nullptr;
          }
#endif
} NETenderInitConfig;

/**
 * @brief Global event listener callbacks
 *
 * All callbacks are optional (can be NULL).
 * User data pointer is passed back to each callback.
 */
typedef struct NETenderGlobalEventListener {
    /** Called before RTC engine initializes (align with TS: beforeRtcEngineInitialize) */
    void (*before_rtc_engine_initialize)(const char* room_uuid, void* user_data);

    /** Called after RTC engine initializes (align with TS: afterRtcEngineInitialize) */
    void (*after_rtc_engine_initialize)(const char* room_uuid, void* user_data);

    /** Called before RTC engine releases (align with TS: beforeRtcEngineRelease) */
    void (*before_rtc_engine_release)(const char* room_uuid, void* user_data);

    /** User data pointer (optional) */
    void* user_data;

#ifdef __cplusplus
    NETenderGlobalEventListener() noexcept
        : before_rtc_engine_initialize(nullptr),
          after_rtc_engine_initialize(nullptr),
          before_rtc_engine_release(nullptr),
          user_data(nullptr) {}
#endif
} NETenderGlobalEventListener;

// ==================== Meeting Manager ====================

/**
 * @brief Video resolution enumeration
 */
typedef enum {
    NETENDER_VIDEO_RESOLUTION_180 = 180,
    NETENDER_VIDEO_RESOLUTION_480 = 480,
    NETENDER_VIDEO_RESOLUTION_720 = 720,
    NETENDER_VIDEO_RESOLUTION_1080 = 1080
} NETenderVideoResolution;

/**
 * @brief Video frame rate enumeration
 */
typedef enum {
    NETENDER_VIDEO_FRAMERATE_5 = 5,
    NETENDER_VIDEO_FRAMERATE_10 = 10,
    NETENDER_VIDEO_FRAMERATE_15 = 15,
    NETENDER_VIDEO_FRAMERATE_20 = 20,
    NETENDER_VIDEO_FRAMERATE_25 = 25
} NETenderVideoFrameRate;

/**
 * @brief Video profile configuration
 */
typedef struct NETenderVideoProfile {
    /** Video resolution */
    NETenderVideoResolution resolution;
    /** Video frame rate */
    NETenderVideoFrameRate frame_rate;

#ifdef __cplusplus
    NETenderVideoProfile() noexcept
        : resolution(NETENDER_VIDEO_RESOLUTION_720),
          frame_rate(NETENDER_VIDEO_FRAMERATE_25) {}
#endif
} NETenderVideoProfile;

/**
 * @brief Cloud record configuration
 */
typedef struct NETenderCloudRecordConfig {
    /** Enable cloud recording (0=disable, 1=enable) */
    int32_t enable;

#ifdef __cplusplus
    NETenderCloudRecordConfig() noexcept
        : enable(0) {}
#endif
} NETenderCloudRecordConfig;

/**
 * @brief Meeting creation options
 * 
 * Strictly corresponds to TypeScript NEMeetingCreateOptions.
 * All optional fields use -1 for integers, NULL for strings, and special structs for complex types.
 */
typedef struct NETenderMeetingCreateOptions {
    /** Meeting number (required) */
    const char* meeting_num;
    
    /** User nickname (required) */
    const char* nickname;
    
    /** Meeting subject (required) */
    const char* subject;
    
    /** Meeting password (NULL = not specified) */
    const char* password;
    
    /** Member tag (NULL = not specified) */
    const char* member_tag;
    
    /** Disable chat functionality (0=enable, 1=disable, -1=not specified) */
    int32_t no_chat;
    
    /** Disable whiteboard functionality (0=enable, 1=disable, -1=not specified) */
    int32_t no_whiteboard;
    
    /** Disable captions functionality (0=enable, 1=disable, -1=not specified) */
    int32_t no_captions;
    
    /** Organization name (NULL = not specified) */
    const char* org_name;
    
    /** User avatar URL (NULL = not specified) */
    const char* avatar;
    
    /** Video profile configuration (NULL = not specified) */
    const NETenderVideoProfile* video_profile;
    
    /** Join timeout in milliseconds (-1 = not specified) */
    int32_t join_timeout;
    
    /** Session identifier (NULL = not specified) */
    const char* session;
    
    /** Meeting sub type (-1 = not specified, 0 = default, 1 = personal recording) */
    int32_t sub_type;
    
    /** Meeting start time (Unix timestamp, -1 = not specified) */
    int64_t start_time;
    
    /** Meeting end time (Unix timestamp, -1 = not specified) */
    int64_t end_time;
    
    /** Enable waiting room (0=disable, 1=enable, -1=not specified) */
    int32_t enable_waiting_room;
    
    /** Cloud record configuration (NULL = not specified) */
    const NETenderCloudRecordConfig* cloud_record_config;

#ifdef __cplusplus
    NETenderMeetingCreateOptions() noexcept
        : meeting_num(nullptr),
          nickname(nullptr),
          subject(nullptr),
          password(nullptr),
          member_tag(nullptr),
          no_chat(-1),
          no_whiteboard(-1),
          no_captions(-1),
          org_name(nullptr),
          avatar(nullptr),
          video_profile(nullptr),
          join_timeout(-1),
          session(nullptr),
          sub_type(-1),
          start_time(-1),
          end_time(-1),
          enable_waiting_room(-1),
          cloud_record_config(nullptr) {}
#endif
} NETenderMeetingCreateOptions;

/**
 * @brief Meeting join options
 * 
 * Strictly corresponds to TypeScript NEMeetingJoinOptions:
 * export interface NEMeetingJoinOptions {
 *   meetingNum: string
 *   userUuid: string
 *   nickname: string
 * }
 */
typedef struct NETenderMeetingJoinOptions {
    /** Meeting number (required) */
    const char* meeting_num;
    
    /** User UUID (required) */
    const char* user_uuid;
    
    /** User nickname (required) */
    const char* nickname;

#ifdef __cplusplus
    NETenderMeetingJoinOptions() noexcept
        : meeting_num(nullptr),
          user_uuid(nullptr),
          nickname(nullptr) {}
#endif
} NETenderMeetingJoinOptions;

/**
 * @brief Local member information
 */
typedef struct NETenderLocalMember {
    /** User UUID */
    const char* user_uuid;
    
    /** User name */
    const char* name;
    
    /** User role (see NETenderRole enum) */
    int32_t role;

#ifdef __cplusplus
    NETenderLocalMember() noexcept
        : user_uuid(nullptr),
          name(nullptr),
          role(0) {}
#endif
} NETenderLocalMember;

/**
 * @brief Meeting SDK information
 * 
 * Strictly aligned with C++ NEMeetingSDKInfo and TypeScript NEMeetingSDKInfo.
 * Field order matches NEMeetingSDKInfo structure for consistency.
 * 
 * C++ NEMeetingSDKInfo alignment:
 * - NELocalMember localMember → NETenderLocalMember local_member
 * - std::string myUuid → const char* my_uuid
 * - std::string hostUuid → const char* host_uuid
 * - std::string hostName → const char* host_name
 * - std::string activeSpeakerUuid → const char* active_speaker_uuid
 * - bool isSupportChatroom → int32_t is_support_chatroom
 * - std::string subject → const char* subject
 * - int64_t startTime → int64_t start_time
 * - int64_t endTime → int64_t end_time
 * - int type → int32_t type
 * - std::string ownerUserUuid → const char* owner_user_uuid
 * - int64_t rtcStartTime → int64_t rtc_start_time
 * - std::string roomArchiveId → const char* room_archive_id
 * - std::string meetingNum → const char* meeting_num
 * - std::optional<int64_t> meetingId → int64_t meeting_id (-1=not set)
 * - std::optional<bool> isWaitingRoomEnabled → int32_t is_waiting_room_enabled (-1=not set, 0=no, 1=yes)
 * - std::optional<bool> inWaitingRoom → int32_t in_waiting_room (-1=not set, 0=no, 1=yes)
 * - std::optional<int> maxMembers → int32_t max_members (-1=not set)
 * - bool isCloudRecording → int32_t is_cloud_recording (0=no, 1=yes)
 * - int64_t joinMeetingTime → int64_t join_meeting_time
 * - std::optional<bool> isBreakoutRoom → int32_t is_breakout_room (-1=not set, 0=no, 1=yes)
 */
typedef struct NETenderMeetingSDKInfo {
    /** Local member information */
    NETenderLocalMember local_member;
    
    /** Current user UUID */
    const char* my_uuid;
    
    /** Host UUID */
    const char* host_uuid;
    
    /** Host name */
    const char* host_name;
    
    /** Active speaker UUID */
    const char* active_speaker_uuid;
    
    /** Support chatroom */
    int32_t is_support_chatroom;
    
    /** Meeting subject */
    const char* subject;
    
    /** Meeting start time */
    int64_t start_time;
    
    /** Meeting end time */
    int64_t end_time;
    
    /** Meeting type */
    int32_t type;
    
    /** Owner user UUID */
    const char* owner_user_uuid;
    
    /** RTC start time */
    int64_t rtc_start_time;
    
    /** Room archive ID */
    const char* room_archive_id;
    
    /** Meeting number */
    const char* meeting_num;
    
    /** Meeting ID (-1 if not available) */
    int64_t meeting_id;
    
    /** Is waiting room enabled (-1=unknown, 0=no, 1=yes) */
    int32_t is_waiting_room_enabled;
    
    /** In waiting room (-1=unknown, 0=no, 1=yes) */
    int32_t in_waiting_room;
    
    /** Is cloud recording */
    int32_t is_cloud_recording;
    
    /** Join meeting time */
    int64_t join_meeting_time;
    
    /** Max members (-1 if not available) */
    int32_t max_members;
    
    /** Is breakout room (-1=unknown, 0=no, 1=yes) */
    int32_t is_breakout_room;

#ifdef __cplusplus
    NETenderMeetingSDKInfo() noexcept
        : my_uuid(nullptr),
          host_uuid(nullptr),
          host_name(nullptr),
          active_speaker_uuid(nullptr),
          is_support_chatroom(0),
          subject(nullptr),
          start_time(0),
          end_time(0),
          type(0),
          owner_user_uuid(nullptr),
          rtc_start_time(0),
          room_archive_id(nullptr),
          meeting_num(nullptr),
          meeting_id(-1),
          is_waiting_room_enabled(-1),
          in_waiting_room(-1),
          is_cloud_recording(0),
          join_meeting_time(0),
          max_members(-1),
          is_breakout_room(-1) {}
#endif
} NETenderMeetingSDKInfo;

/**
 * @brief Asynchronous callback for operations with no return data
 * 
 * @param code Error code (0 = success, negative = error)
 * @param message Error message (NULL if success)
 * @param user_data User-provided data pointer
 */
typedef void (*NETenderMeetingAsyncCallback)(
    int32_t code,
    const char* message,
    void* user_data
);

/**
 * @brief Member information structure
 * 
 * Strictly aligned with TypeScript NERoomMember (excluding @ignore fields)
 * Reference: meeting-fe/packages/room-kit-type/dist/types/commonTypes.d.ts (380-498)
 */
typedef struct NETenderMemberInfo {
    // 基本标识信息
    const char* uuid;                ///< 用户id (对应 TS: uuid)
    const char* name;                 ///< 用户名 (对应 TS: name)
    
    // 音频相关状态
    int32_t is_audio_connected;      ///< 是否音频已连接
    int32_t is_audio_on;              ///< 音频是否打开
    
    // 视频相关状态
    int32_t is_video_on;              ///< 视频是否打开
    
    // 共享相关状态
    int32_t is_sharing_screen;        ///< 当前成员是否正在屏幕共享中
    int32_t is_sharing_system_audio;  ///< 当前成员是否正在共享系统音频
    int32_t is_sharing_whiteboard;    ///< 当前成员是否正在共享白板
    
    // 房间状态
    int32_t is_in_chatroom;           ///< 当前成员是否在聊天室内
    int32_t is_in_rtc_channel;        ///< 当前成员是否在RTC房间内
    int32_t in_waiting_room;          ///< 是否在等候室
    
    // 邀请相关状态
    int32_t is_in_sip_inviting;       ///< 当前是否在SIP邀请状态
    int32_t is_in_app_inviting;       ///< 当前是否在App邀请状态
    int32_t invite_state;             ///< 当前成员邀请状态 (NERoomMemberInviteState enum)
    int32_t invite_type;              ///< 当前成员邀请类型 (NERoomMemberInviteType enum, -1=not set)
    
    // 角色信息
    const char* role_name;            ///< 角色名称 (对应 TS: role.name)
    int32_t role_limit;               ///< 角色限制数量 (对应 TS: role.limit)
    
    // 客户端信息
    int32_t client_type;              ///< 用户的终端类型 (NEClientType enum)
    
    // 其他信息
    const char* avatar;               ///< 用户头像
    int32_t is_chat_banned;           ///< 当前成员是否被禁言 (-1=not set, 0=false, 1=true)
    const char* ext;                  ///< 扩展字段 (可选, NULL if not set)
    
    // 属性信息
    int32_t properties_wb_drawable;   ///< 是否可以白板绘制 (-1=not set, 0=false, 1=true)
    int32_t properties_phone_state;   ///< 是否在系统通话状态 (-1=not set, 0=false, 1=true)
    const char* properties_tag;        ///< 成员标签 (NULL if not set)
    int32_t properties_speaker_on;    ///< 是否开启扬声器 (-1=not set, 0=false, 1=true)

#ifdef __cplusplus
    NETenderMemberInfo() noexcept
        : uuid(nullptr),
          name(nullptr),
          is_audio_connected(0),
          is_audio_on(0),
          is_video_on(0),
          is_sharing_screen(0),
          is_sharing_system_audio(0),
          is_sharing_whiteboard(0),
          is_in_chatroom(0),
          is_in_rtc_channel(0),
          in_waiting_room(0),
          is_in_sip_inviting(0),
          is_in_app_inviting(0),
          invite_state(0),
          invite_type(-1),
          role_name(nullptr),
          role_limit(0),
          client_type(0),
          avatar(nullptr),
          is_chat_banned(-1),
          ext(nullptr),
          properties_wb_drawable(-1),
          properties_phone_state(-1),
          properties_tag(nullptr),
          properties_speaker_on(-1) {}
#endif
} NETenderMemberInfo;

/**
 * @brief 聊天室消息类型枚举（C API）
 */
typedef enum {
    NETENDER_ROOM_CHAT_MESSAGE_TEXT = 0,           ///< 文本消息
    NETENDER_ROOM_CHAT_MESSAGE_IMAGE = 1,          ///< 图片消息
    NETENDER_ROOM_CHAT_MESSAGE_FILE = 2,           ///< 文件消息
    NETENDER_ROOM_CHAT_MESSAGE_CUSTOM = 3,         ///< 自定义消息
    NETENDER_ROOM_CHAT_MESSAGE_NOTIFICATION = 4    ///< 通知消息
} NETenderRoomChatMessageType;

/**
 * @brief 聊天室消息结构体（C API）
 * 
 * 对应 TypeScript: NERoomMessage 及其子类型
 * 使用标记联合表示不同类型的消息
 */
typedef struct NETenderRoomChatMessage {
    NETenderRoomChatMessageType message_type;       ///< 消息类型
    
    // 基础字段（所有消息类型共有）
    const char* from_user_uuid;                    ///< 发送者用户ID
    const char* from_nick;                         ///< 发送者昵称
    const char* from_avatar;                        ///< 发送者头像
    int64_t time;                                  ///< 时间戳
    int32_t chatroom_type;                         ///< 聊天室类型 (0=COMMON, 1=WAITING_ROOM)
    const char** to_user_uuid_list;                ///< 接收者列表（可选，NULL 表示未设置）
    uint32_t to_user_uuid_count;                   ///< 接收者数量
    
    // 文本消息字段（message_type == TEXT）
    const char* text;                              ///< 文本内容（TEXT 类型）
    
    // 文件/图片消息字段（message_type == FILE 或 IMAGE）
    const char* display_name;                      ///< 显示名称（FILE/IMAGE）
    const char* extension;                         ///< 文件扩展名（FILE/IMAGE）
    const char* md5;                               ///< MD5校验值（FILE/IMAGE）
    const char* url;                               ///< 文件URL（FILE/IMAGE）
    const char* path;                              ///< 文件路径（FILE/IMAGE）
    uint64_t size;                                 ///< 文件大小（FILE/IMAGE）
    uint32_t width;                                ///< 图片宽度（IMAGE only）
    uint32_t height;                               ///< 图片高度（IMAGE only）
    
    // 自定义/通知消息字段（message_type == CUSTOM 或 NOTIFICATION）
    const char* attach_str;                        ///< 附件字符串（CUSTOM/NOTIFICATION）

#ifdef __cplusplus
    NETenderRoomChatMessage() noexcept
        : message_type(NETENDER_ROOM_CHAT_MESSAGE_TEXT),
          from_user_uuid(nullptr),
          from_nick(nullptr),
          from_avatar(nullptr),
          time(0),
          chatroom_type(0),
          to_user_uuid_list(nullptr),
          to_user_uuid_count(0),
          text(nullptr),
          display_name(nullptr),
          extension(nullptr),
          md5(nullptr),
          url(nullptr),
          path(nullptr),
          size(0),
          width(0),
          height(0),
          attach_str(nullptr) {}
#endif
} NETenderRoomChatMessage;

typedef struct NETenderMeetingListener {
    /** Called when meeting status changes */
    void (*on_meeting_status_changed)(int32_t status, void* user_data);
    
    /** Called when member joined */
    void (*on_member_joined)(const NETenderMemberInfo* member, void* user_data);
    
    /** Called when member left */
    void (*on_member_left)(const NETenderMemberInfo* member, void* user_data);
    
    /** Called when host changed */
    void (*on_host_changed)(const char* host_uuid, void* user_data);
    
    /** Called when member audio mute state changed */
    void (*on_member_audio_mute_changed)(
        const char* user_uuid,
        int32_t muted,
        void* user_data
    );
    
    /** Called when member video mute state changed */
    void (*on_member_video_mute_changed)(
        const char* user_uuid,
        int32_t muted,
        void* user_data
    );
    
    /** Called when room ended (P0) */
    void (*on_room_ended)(const char* reason, const char* extra, void* user_data);
    
    /** Called when member audio connect state changed (P0) */
    void (*on_member_audio_connect_state_changed)(
        const NETenderMemberInfo* member,
        int32_t is_audio_connected,
        void* user_data
    );
    
    /** Called when member joined chatroom (P0) */
    void (*on_member_join_chatroom)(const NETenderMemberInfo* members, uint32_t count, void* user_data);
    
    /** Called when member left chatroom (P0) */
    void (*on_member_leave_chatroom)(const NETenderMemberInfo* members, uint32_t count, void* user_data);
    
    /** Called when member screen share state changed (P0) */
    void (*on_member_screen_share_state_changed)(
        const NETenderMemberInfo* member,
        int32_t is_sharing,
        const NETenderMemberInfo* operate_by,
        void* user_data
    );
    
    /** Called when chatroom messages received (P0) */
    void (*on_receive_chatroom_messages)(const NETenderRoomChatMessage* messages, uint32_t count, void* user_data);
    
    /** Called when member chat ban state changed (P0) */
    void (*on_member_chat_ban_state_changed)(
        const NETenderMemberInfo* member,
        int32_t banned,
        int32_t duration,
        const char* notify_ext,
        const NETenderMemberInfo* operate_by,
        void* user_data
    );
    
    /** User data pointer (optional) */
    void* user_data;

#ifdef __cplusplus
    NETenderMeetingListener() noexcept
        : on_meeting_status_changed(nullptr),
          on_member_joined(nullptr),
          on_member_left(nullptr),
          on_host_changed(nullptr),
          on_member_audio_mute_changed(nullptr),
          on_member_video_mute_changed(nullptr),
          on_room_ended(nullptr),
          on_member_audio_connect_state_changed(nullptr),
          on_member_join_chatroom(nullptr),
          on_member_leave_chatroom(nullptr),
          on_member_screen_share_state_changed(nullptr),
          on_receive_chatroom_messages(nullptr),
          on_member_chat_ban_state_changed(nullptr),
          user_data(nullptr) {}
#endif
} NETenderMeetingListener;

// ==================== RTC Statistics Structures ====================

/**
 * @brief RTC statistics structure (C API)
 * 
 * Mirrors NERoomRtcStats from C++ API
 */
typedef struct NETenderRtcStats {
    int64_t duration;           /**< Call duration in seconds */
    int32_t txBytes;            /**< Total bytes sent */
    int32_t rxBytes;            /**< Total bytes received */
    int32_t txAudioBytes;       /**< Audio bytes sent */
    int32_t txVideoBytes;       /**< Video bytes sent */
    int32_t rxAudioBytes;       /**< Audio bytes received */
    int32_t rxVideoBytes;       /**< Video bytes received */
} NETenderRtcStats;

/**
 * @brief Local audio send statistics (C API)
 * 
 * Mirrors NERoomRtcAudioSendStats from C++ API
 */
typedef struct NETenderRtcAudioSendStats {
    int32_t volume;             /**< Volume (0-100) */
    int32_t numChannels;        /**< Number of audio channels */
    int32_t sentSampleRate;     /**< Sample rate in Hz */
    int32_t sentBitrate;        /**< Bitrate in kbps */
} NETenderRtcAudioSendStats;

/**
 * @brief Remote audio receive statistics (C API)
 * 
 * Mirrors NERoomRtcAudioRecvStats from C++ API
 */
typedef struct NETenderRtcAudioRecvStats {
    const char* userUuid;       /**< User UUID (managed by SDK, do not free) */
    int32_t volume;             /**< Volume (0-100) */
    int32_t receivedBitrate;    /**< Received bitrate in kbps */
} NETenderRtcAudioRecvStats;

/**
 * @brief Local video send statistics (C API)
 * 
 * Mirrors NERoomRtcVideoSendStats from C++ API
 */
typedef struct NETenderRtcVideoSendStats {
    int32_t captureWidth;       /**< Capture width in pixels */
    int32_t captureHeight;      /**< Capture height in pixels */
    int32_t encodedFrameWidth;  /**< Encoded frame width in pixels */
    int32_t encodedFrameHeight; /**< Encoded frame height in pixels */
    int32_t encoderOutputFrameRate; /**< Encoder output frame rate in fps */
    int32_t sentFrameRate;      /**< Sent frame rate in fps */
    int32_t sentBitrate;        /**< Sent bitrate in kbps */
} NETenderRtcVideoSendStats;

/**
 * @brief Remote video receive statistics (C API)
 * 
 * Mirrors NERoomRtcVideoRecvStats from C++ API
 */
typedef struct NETenderRtcVideoRecvStats {
    const char* userUuid;       /**< User UUID (managed by SDK, do not free) */
    int32_t width;              /**< Video width in pixels */
    int32_t height;             /**< Video height in pixels */
    int32_t receivedBitrate;    /**< Received bitrate in kbps */
    int32_t decoderOutputFrameRate; /**< Decoder output frame rate in fps */
    int32_t rendererOutputFrameRate; /**< Renderer output frame rate in fps */
} NETenderRtcVideoRecvStats;

/**
 * @brief Network quality information (C API)
 * 
 * Mirrors NERoomRtcNetworkQualityInfo from C++ API
 */
typedef struct NETenderRtcNetworkQualityInfo {
    const char* userUuid;       /**< User UUID (managed by SDK, do not free) */
    int32_t uplinkQuality;      /**< Uplink quality (0-5: 0=Unknown, 1=Excellent, 2=Good, 3=Poor, 4=Bad, 5=VeryBad) */
    int32_t downlinkQuality;    /**< Downlink quality (0-5: 0=Unknown, 1=Excellent, 2=Good, 3=Poor, 4=Bad, 5=VeryBad) */
} NETenderRtcNetworkQualityInfo;

/**
 * @brief RTC statistics listener callbacks
 * 
 * All callbacks are optional (can be NULL).
 * User data pointer is passed back to each callback.
 * 
 * @note All string pointers (userUuid) in stats structures are managed by the SDK
 *       and remain valid only during the callback execution. Do not store or free them.
 */
typedef struct NETenderRtcStatsListener {
    /** Called when RTC statistics are available */
    void (*on_rtc_stats)(const NETenderRtcStats* stats, void* user_data);
    
    /** Called when local audio statistics are available */
    void (*on_local_audio_stats)(const NETenderRtcAudioSendStats* stats, void* user_data);
    
    /** Called when remote audio statistics are available */
    void (*on_remote_audio_stats)(const NETenderRtcAudioRecvStats* stats, uint32_t count, void* user_data);
    
    /** Called when local video statistics are available */
    void (*on_local_video_stats)(const NETenderRtcVideoSendStats* stats, void* user_data);
    
    /** Called when remote video statistics are available */
    void (*on_remote_video_stats)(const NETenderRtcVideoRecvStats* stats, uint32_t count, void* user_data);
    
    /** Called when network quality information is available */
    void (*on_network_quality)(const NETenderRtcNetworkQualityInfo* info, uint32_t count, void* user_data);
    
    /** User data pointer (optional) */
    void* user_data;

#ifdef __cplusplus
    NETenderRtcStatsListener() noexcept
        : on_rtc_stats(nullptr),
          on_local_audio_stats(nullptr),
          on_remote_audio_stats(nullptr),
          on_local_video_stats(nullptr),
          on_remote_video_stats(nullptr),
          on_network_quality(nullptr),
          user_data(nullptr) {}
#endif
} NETenderRtcStatsListener;

/**
 * @brief Message channel listener callbacks
 * 
 * All callbacks are optional (can be NULL).
 * User data pointer is passed back to each callback.
 */

/**
 * @brief Custom message structure for MessageChannel events
 * @note This structure is used by NETenderMessageChannelListener callbacks
 */
typedef struct NETenderCustomMessage {
    const char* roomUuid;    /**< Room UUID (SDK manages lifecycle) */
    const char* senderUuid; /**< Sender UUID (SDK manages lifecycle) */
    const char* data;       /**< Message data (SDK manages lifecycle) */
    int64_t timestamp;     /**< Message timestamp */
    
#ifdef __cplusplus
    NETenderCustomMessage() noexcept
        : roomUuid(nullptr),
          senderUuid(nullptr),
          data(nullptr),
          timestamp(0) {}
#endif
} NETenderCustomMessage;

/**
 * @brief Custom session message structure for MessageChannel events
 * @note This structure is used by NETenderMessageChannelListener callbacks
 */
typedef struct NETenderCustomSessionMessage {
    const char* sessionId;    /**< Session ID (SDK manages lifecycle) */
    int32_t sessionType;      /**< Session type (0=P2P) */
    const char* messageId;   /**< Message ID (SDK manages lifecycle) */
    const char* data;         /**< Message data (SDK manages lifecycle) */
    int64_t timestamp;        /**< Message timestamp */
    
#ifdef __cplusplus
    NETenderCustomSessionMessage() noexcept
        : sessionId(nullptr),
          sessionType(0),
          messageId(nullptr),
          data(nullptr),
          timestamp(0) {}
#endif
} NETenderCustomSessionMessage;

/**
 * @brief Recent session structure for MessageChannel events
 * @note This structure is used by NETenderMessageChannelListener callbacks
 */
typedef struct NETenderRecentSession {
    const char* sessionId;    /**< Session ID (SDK manages lifecycle) */
    int32_t sessionType;      /**< Session type (0=P2P) */
    int32_t unreadCount;       /**< Unread message count */
    
#ifdef __cplusplus
    NETenderRecentSession() noexcept
        : sessionId(nullptr),
          sessionType(0),
          unreadCount(0) {}
#endif
} NETenderRecentSession;

typedef struct NETenderMessageChannelListener {
    /** Called when a custom message is received */
    void (*on_custom_message_received)(const NETenderCustomMessage* message, void* user_data);
    
    /** Called when a session message is received */
    void (*on_session_message_received)(const NETenderCustomSessionMessage* data, void* user_data);
    
    /** Called when recent session list changes */
    void (*on_session_message_recent_changed)(const NETenderRecentSession* sessions, uint32_t count, void* user_data);
    
    /** Called when a session message is deleted */
    void (*on_session_message_deleted)(const NETenderCustomSessionMessage* data, void* user_data);
    
    /** Called when all messages in a session are deleted */
    void (*on_delete_all_session_message)(const char* session_id, int32_t session_type, void* user_data);
    
    /** User data pointer (optional) */
    void* user_data;

#ifdef __cplusplus
    NETenderMessageChannelListener() noexcept
        : on_custom_message_received(nullptr),
          on_session_message_received(nullptr),
          on_session_message_recent_changed(nullptr),
          on_session_message_deleted(nullptr),
          on_delete_all_session_message(nullptr),
          user_data(nullptr) {}
#endif
} NETenderMessageChannelListener;

/**
 * @brief Waiting room member information
 * 
 * Strictly aligned with C++ NEWaitingRoomMember and TypeScript NEWaitingRoomMember.
 * Field order matches NEWaitingRoomMember structure for consistency.
 * 
 * C++ NEWaitingRoomMember alignment:
 * - std::string uuid → const char* user_uuid
 * - std::string name → const char* user_name
 * - std::optional<std::string> avatar → const char* avatar (NULL if not set)
 * - int64_t joinTime → int64_t join_time
 * - int status → int32_t status
 */
typedef struct NETenderWaitingRoomMember {
    /** User UUID, aligned with NEWaitingRoomMember::uuid */
    const char* user_uuid;
    /** User name, aligned with NEWaitingRoomMember::name */
    const char* user_name;
    /** Avatar URL (NULL if not available), aligned with NEWaitingRoomMember::avatar */
    const char* avatar;
    /** Join time timestamp, aligned with NEWaitingRoomMember::joinTime */
    int64_t join_time;
    /** Member status, aligned with NEWaitingRoomMember::status */
    int32_t status;

#ifdef __cplusplus
    NETenderWaitingRoomMember() noexcept
        : user_uuid(nullptr),
          user_name(nullptr),
          avatar(nullptr),
          join_time(0),
          status(0) {}
#endif
} NETenderWaitingRoomMember;

/**
 * @brief Waiting room information
 * 
 * Strictly aligned with C++ NEWaitingRoomInfo and TypeScript NEWaitingRoomInfo.
 * Field order matches NEWaitingRoomInfo structure for consistency.
 * 
 * C++ NEWaitingRoomInfo alignment:
 * - int memberCount → int32_t member_count
 * - bool isEnabledOnEntry → int32_t is_enabled (0=no, 1=yes)
 * - std::string backgroundImageUrl → const char* background_image_url
 */
typedef struct NETenderWaitingRoomInfo {
    /** Member count, aligned with NEWaitingRoomInfo::memberCount */
    int32_t member_count;
    /** Is waiting room enabled on entry (0=no, 1=yes), aligned with NEWaitingRoomInfo::isEnabledOnEntry */
    int32_t is_enabled;
    /** Background image URL, aligned with NEWaitingRoomInfo::backgroundImageUrl */
    const char* background_image_url;

#ifdef __cplusplus
    NETenderWaitingRoomInfo() noexcept
        : member_count(0),
          is_enabled(0),
          background_image_url(nullptr) {}
#endif
} NETenderWaitingRoomInfo;

/**
 * @brief Waiting room listener callbacks
 */
typedef struct NETenderWaitingRoomListener {
    /** 等候室有新成员加入事件 */
    void (*on_member_join)(const NETenderWaitingRoomMember* member, int32_t reason, void* user_data);
    /** 成员离开等候室事件 */
    void (*on_member_leave)(const char* user_uuid, int32_t reason, void* user_data);
    /** 成员被准入事件 */
    void (*on_member_admitted)(const char* user_uuid, void* user_data);
    /** 本端成员等候室状态变更回调 */
    void (*on_my_status_changed)(int32_t status, int32_t reason, void* user_data);
    /** 等候室成员昵称变更回调 */
    void (*on_member_name_changed)(const char* user_uuid, const char* name, const NETenderMemberInfo* operate_by, void* user_data);
    /** 等候室信息更新事件 */
    void (*on_info_updated)(const NETenderWaitingRoomInfo* info, void* user_data);
    /** 全部成员被移除房间事件 */
    void (*on_all_members_kicked)(void* user_data);
    /** 等候室监听管理员变更 */
    void (*on_managers_updated)(const NETenderMemberInfo* managers, uint32_t count, void* user_data);
    /** User data pointer */
    void* user_data;

#ifdef __cplusplus
    NETenderWaitingRoomListener() noexcept
        : on_member_join(nullptr),
          on_member_leave(nullptr),
          on_member_admitted(nullptr),
          on_my_status_changed(nullptr),
          on_member_name_changed(nullptr),
          on_info_updated(nullptr),
          on_all_members_kicked(nullptr),
          on_managers_updated(nullptr),
          user_data(nullptr) {}
#endif
} NETenderWaitingRoomListener;

/**
 * @brief Callback delivering waiting room member list payload
 */
typedef void (*NETenderWaitingRoomMemberListCallback)(
    int32_t code,
    const char* message,
    NETenderWaitingRoomMember* members,
    int32_t count,
    void* user_data
);

/**
 * @brief App notice tip structure
 */
typedef struct NETenderAppNoticeTip {
    const char* title;    ///< Title
    const char* content;  ///< Content
    const char* url;      ///< URL
    int64_t time;         ///< Timestamp

#ifdef __cplusplus
    NETenderAppNoticeTip() noexcept
        : title(nullptr),
          content(nullptr),
          url(nullptr),
          time(0) {}
#endif
} NETenderAppNoticeTip;

/**
 * @brief App notice tips structure
 */
typedef struct NETenderAppNoticeTips {
    const char* app_key;               ///< App key
    const NETenderAppNoticeTip* tips;  ///< Tips array
    int32_t tips_count;                ///< Number of tips
    int64_t cur_time;                  ///< Current timestamp

#ifdef __cplusplus
    NETenderAppNoticeTips() noexcept
        : app_key(nullptr),
          tips(nullptr),
          tips_count(0),
          cur_time(0) {}
#endif
} NETenderAppNoticeTips;

#endif  // NETENDER_C_API_TYPES_H_
