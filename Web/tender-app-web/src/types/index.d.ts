import dayjs from 'dayjs';

export interface NEMeetingScheduledMember {
  userUuid: string;
  role: Role;
}

export enum AttendeeOffType {
  /** 打开全体关闭视频, 允许自行打开 */
  offNotAllowSelfOn = 'offNotAllowSelfOn',
  /** 打开全体关闭视频，不允许自行打开 */
  offAllowSelfOn = 'offAllowSelfOn',
  /** 关闭全体关闭视频 */
  disable = 'disable',
}

export interface NEMeetingInfo {
  /** 会议id */
  meetingId: number;
  /** 会议号 */
  meetingNum: string;
  /** 房间uuid */
  roomUuid: string;
  /** 会议状态 */
  state: number;
  /** 会议开始时间 */
  startTime: number;
  /** 会议结束时间 */
  endTime: number;
  /** 会议主题 */
  subject: string;
  /** 会议邀请链接 */
  meetingInviteUrl: string;
  /** 会议 code */
  meetingCode: string;
  /** 会议类型 */
  type: number;
  /** 会议短号 */
  shortMeetingNum?: string;
  /** @ignore 跨应用加入房间使用的userUuid */
  meetingUserUuid?: string;
  /** @ignore 跨应用加入房间使用的userToken */
  meetingUserToken?: string;
  /** @ignore 跨应用加入房间使用的appKey */
  meetingAppKey?: string;
  /** @ignore 跨应用加入房间使用的鉴权类型 */
  meetingAuthType?: string;
  /** @ignore 不对外暴露  */
  roomArchiveId: string;
  /** 房间拥有者 uuid */
  ownerUserUuid: string;
  /** 房间拥有者 用户名 */
  ownerNickname: string;
  /** 预约指定角色的成员  */
  scheduledMembers?: NEMeetingScheduledMember[];
  /** 时区 */
  timezoneId?: string;
  /** @ignore 不对外暴露 */
  settings: {
    roomInfo: {
      roomConfigId: number;
      openWaitingRoom: boolean;
      enableJoinBeforeHost: boolean;
      roleBinds: Record<string, Role>;
      roomConfig: {
        resource: {
          chatroom: boolean;
          live: boolean;
          record: boolean;
          rtc: boolean;
          sip: boolean;
          whiteboard: boolean;
          waitingRoom: boolean;
        };
      };
      password?: string;
      roomProperties?: Record<string, NEProps>;
      viewOrder?: string;
    };
    recordConfig?: {
      recordStrategy: number;
      enableSmartRecording?: boolean;
      enableTranscript?: boolean;
    };
    liveConfig?: {
      liveAddress: string;
    };
    livePrivateConfig?: {
      title: string;
      password?: string;
      pushThirdParties: NEmeetingItemLivePushThirdPart[];
      background?: NEMeetingItemLiveBackground;
      enableThirdParties?: boolean;
    };
  };
  /** 周期性会议 */
  recurringRule?: {
    type: MeetingRepeatType;
    customizedFrequency?: {
      stepSize: number;
      stepUnit: MeetingRepeatCustomStepUnit;
      daysOfWeek: number[];
      daysOfMonth: number[];
    };
    endRule: {
      type: number;
      date?: string;
      times?: number;
    };
  };
  inviteUrl?: string;
  /** 与会者视频关闭 */
  attendeeVideoOff?: boolean;
  /** 与会者音频关闭 */
  attendeeAudioOff?: boolean;
  /** 与会者音频关闭模式 */
  attendeeAudioOffType?: AttendeeOffType;
  /** 会议密码 */
  password?: string;
  /** 是否开启云录制 */
  noCloudRecord?: boolean;
  /** 是否开启聊天室 */
  noChat?: boolean;
  /** 是否开启直播 */
  openLive?: boolean;
  /** 直播是否本企业可用 */
  liveOnlyEmployees?: boolean;
  /** 是否开启SIP功能 */
  noSip: boolean;
  /** 配置会议是否默认开启等候室 */
  enableWaitingRoom: boolean;
  /** 配置会议是否允许参会者在主持人进入会议前加入会议，默认为允许 */
  enableJoinBeforeHost: boolean;
  /** 是否允许访客入会 */
  enableGuestJoin: boolean;
  /** 会议扩展字段，可空，最大长度为 2K。 */
  extraData?: string;
  /** 会议主持人角色绑定 */
  roleBinds?: Record<string, string>;
  /** 同声传译 */
  interpretation?: {
    interpreters?: {
      [key: string]: string[];
    };
    started: boolean;
  };
  /** 云录制 */
  cloudRecordConfig?: NECloudRecordConfig;
  /** 访客跨应用入会类型 0 不允许访客入会 1 实名访客入会 2 匿名访客入会*/
  guestJoinType?: '0' | '1' | '2';
  /** 是否是分组讨论 */
  isBreakoutRoom?: boolean;
  /** 是否返回主会议 */
  backToMainRoom?: boolean;
  /** 会议类型 0 默认，普通会议；1 个人录音，秒录 */
  subType?: number;
}

interface Member {
  userUuid: string;
  nickname: string;
  phoneNumber?: string;
  role?: string; // 用于存储角色
}

interface ScheduleMeetingInfo {
  topic: string; //预约会议的主题
  members?: Member[]; //预约会议的成员
  start?: dayjs.Dayjs; //预约会议的开始时间信息
  startDate?: dayjs.Dayjs; //预约会议的开始日期
  startTime?: dayjs.Dayjs; //预约会议的开始时间
  endDate?: dayjs.Dayjs; //预约会议的结束日期
  endTime?: dayjs.Dayjs; //预约会议的结束时间
  waitingRoom?: boolean; //是否需要等待室
  meetingId?: number; //预约会议的ID
  meetingNum?: string; //预约会议的会议号
  startTimestamp?: number; //预约会议的开始时间戳
  endTimestamp?: number; //预约会议的结束时间戳
  ownerNickname?: string; //预约会议的创建者昵称
  ownerUserUuid?: string; //预约会议的创建者用户UUID
}

interface MeetingInfo extends ScheduleMeetingInfo {
  index: number; //预约会议列表的索引
  key: string; //预约会议的唯一标识
  reserver: string; //预约会议的预约人
  stringStartTimeWithData: string; //预约会议的开始时间字符串
  scheduledMembers: Member[]; //预约会议的成员
}

//角色类型：专家，代理人，监督
export type Role = 'expert' | 'agent' | 'supervisor';

//参会人
export interface AttendeeProps {
  uid: string;
  userName: string;
  audioEnabled: boolean;
  videoEnabled: boolean;
  screenEnabled: boolean;
  online: boolean; // 是否在线
  downlinkNetworkQuality?: number;
  uplinkNetworkQuality?: number;
}

//网络信号
export type NetworkStatus = 'good' | 'normal' | 'bad';

/*
 * 对Stream做扩展
 * videoEnabled、screenEnabled、audioEnabled 表示是否存在对应的流
 * 对于localStream，本地流开启时为true，关闭时为false；对于remoteStream，触发stream-added事件时为true，触发stream-removed事件时为false
 * hasVideo、hasScreen、hasAudio 表示是否已开启对应的流
 * 对于localStream，本地流开启时为true，关闭时为false；对于remoteStream，触发stream-subscribed事件时为true，触发stream-unsubscribed事件时为false
 *
 * 注意：本示例中使用muteAudio来代替close()方法来关闭音频流，所以在mute-audio事件中，hasAudio和audioEnabled会同时变为false
 *      如果使用close()方法来关闭音频流，则需要参照video的逻辑来处理
 * */
export interface VideoProps {
  stream: Stream; // NERTC Stream 对象
  hasVideo?: boolean; // 是否已开启视频流
  hasScreen?: boolean; // 是否已开启屏幕共享流
  hasAudio?: boolean; // 是否已开启音频流
  videoEnabled?: boolean; // 是否存在视频流
  screenEnabled?: boolean; // 是否存在屏幕共享流
  audioEnabled?: boolean; // 是否存在音频流
  subscribe?: boolean;
}
