import { create } from 'zustand';
//netender-web-kit从src中引入，因此类型需要从源文件中引入

export interface MeetingState {
  account: string | null;
  nickname: string;
  userUuid: string;
}

interface RtcStore extends MeetingState {
  updateMeetingInfo: (data: Partial<MeetingState>) => void;
}

export const useRtcStore = create<RtcStore>(set => ({
  account: '',
  nickname: '',
  userUuid: '',
  updateMeetingInfo: data =>
    set(state => ({
      ...state,
      ...data,
    })),
}));
