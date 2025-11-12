/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useRef } from 'react';
import { history, createSearchParams } from 'umi';
import { Button, Table, Popconfirm, notification } from 'antd';
import styles from './index.less';
import noMeetintlist from '@/assets/noMeetintlist.png';
import BookMeetingModal from '@/components/bookMeetingModal';
import { Member, ScheduleMeetingInfo, MeetingInfo, NEMeetingInfo } from '@/types';
import NETenderKit from 'netender-web-kit';
import dayjs from 'dayjs';
import { appkey, privateConfig, privateServer, serverUrl } from '@/config';
import { useRtcStore } from '@/store/useGlobalStore';

const Home: React.FC = () => {
  const { userUuid, nickname } = useRtcStore();
  const isUnmountedRef = useRef(false);
  const [scheduleMeetingModalVisible, setScheduleMeetingModalVisible] = useState(false);
  // 预约会议列表
  const [meetingList, setMeetingList] = useState<MeetingInfo[]>([]);
  const meetingOwnerRef = useRef<Member>({
    userUuid: '',
    nickname: '',
    role: 'host',
  });
  const scheduleMeetingInfoRef = useRef<ScheduleMeetingInfo | undefined>();
  // 表格的列
  const columns = [
    {
      title: '预约开始时间',
      dataIndex: 'stringStartTimeWithData',
      key: 'stringStartTimeWithData',
      width: 200,
      ellipsis: false, // 可选，建议不加，避免内容被截断
      align: 'left' as const,
    },
    {
      title: '会议主题',
      dataIndex: 'topic',
      key: 'topic',
      align: 'left' as const,
      ellipsis: false, // 可选，建议不加，避免内容被截断
    },
    {
      title: '预约人',
      dataIndex: 'reserver',
      key: 'reserver',
      width: 164,
      ellipsis: false, // 可选，建议不加，避免内容被截断
      align: 'left' as const,
    },
    {
      title: '操作',
      key: 'action',
      align: 'left',
      width: 176,
      render: (_: any, record: any) => (
        <div className={styles.btnGroup}>
          <Button
            type='text'
            className={`${styles.actionBtn} ${styles.blueText}`}
            onClick={() => join(record)}
            style={{ margin: 0 }}
          >
            加入
          </Button>
          {record.ownerUserUuid === userUuid && (
            <>
              <Button
                type='text'
                className={`${styles.actionBtn} ${styles.blueText}`}
                onClick={() => edit(record)}
                style={{ margin: 0 }}
              >
                编辑
              </Button>
              <Popconfirm
                title='确定要取消该会议吗？'
                onConfirm={() => cancel(record)}
                okText='确认'
                cancelText='取消'
              >
                <Button
                  type='text'
                  className={`${styles.actionBtn} ${styles.redText}`}
                  style={{ margin: 0 }}
                >
                  取消会议
                </Button>
              </Popconfirm>
            </>
          )}
        </div>
      ),
    },
  ];

  useEffect(() => {
    isUnmountedRef.current = false;
    fetchAllMeetings();

    return () => {
      isUnmountedRef.current = true;
    };
  }, [scheduleMeetingModalVisible]);

  useEffect(() => {
    async function initNetender() {
      if (!NETenderKit.neTenderMeeting) {
        if (privateServer) {
          await NETenderKit.init(privateConfig);
        } else {
          await NETenderKit.init({
            appKey: appkey,
            serverUrl,
          });
        }
      }

      NETenderKit.addEventListener({
        onMeetingItemInfoChanged: () => {
          console.warn('会议信息变更回调, 刷新列表');
          fetchAllMeetings();
        },
      });
    }

    initNetender();
  }, []);

  const fetchAllMeetings = async () => {
    if (isUnmountedRef.current) return;
    let allMeetings: NEMeetingInfo[] = [];
    let offset = 0;
    const size = 20;
    let down = false;

    if (!NETenderKit.neTenderMeeting) {
      if (privateServer) {
        await NETenderKit.init(privateConfig);
      } else {
        await NETenderKit.init({
          appKey: appkey,
          serverUrl,
        });
      }
    }

    while (!down) {
      //@ts-expect-error ignore
      const list: NEMeetingInfo[] = await NETenderKit.getMeetingListBySize({
        states: [1, 2, 3],
        offset: offset,
        size: size,
      });

      console.log('获取到会议列表: ', list);
      allMeetings = allMeetings.concat(list);
      if (list.length < size) {
        down = true;
      } else {
        offset += list.length;
      }
    }

    // 转 MeetingInfo 格式
    const meetingInfos: MeetingInfo[] = allMeetings.map((item, idx) => ({
      index: idx,
      key: item.meetingId.toString(),
      reserver: item.ownerNickname ?? '',
      topic: item.subject,
      meetingId: item.meetingId,
      meetingNum: item.meetingNum,
      ownerNickname: item.ownerNickname,
      ownerUserUuid: item.ownerUserUuid,
      scheduledMembers: (item.scheduledMembers || []).map(mem => ({
        userUuid: mem.userUuid,
        nickname: '', //mem.nickname,
        role: mem.role,
      })),
      stringStartTimeWithData: dayjs(item.startTime).format('YYYY-MM-DD HH:mm'),
      // 如需加其他字段，可补充
      startTimestamp: item.startTime,
      endTimestamp: item.endTime,
      waitingRoom: item.settings.roomInfo.openWaitingRoom,
    }));
    if (
      //scheduleMeetingModalVisible &&
      scheduleMeetingInfoRef.current?.meetingId &&
      (!meetingInfos.some(item => item.meetingId === scheduleMeetingInfoRef.current!.meetingId) ||
        !meetingInfos.length)
    ) {
      console.log('会议已被取消，关闭弹窗');
      setScheduleMeetingModalVisible(false);
      scheduleMeetingInfoRef.current = undefined;
      notification.warning({
        placement: 'top',
        message: '该会议已经被取消',
      });
    }

    if (isUnmountedRef.current) return;
    setMeetingList(meetingInfos);
  };

  const schedule = () => {
    console.log('预约会议');
    scheduleMeetingInfoRef.current = undefined;
    meetingOwnerRef.current = {
      userUuid: userUuid,
      nickname: nickname,
      role: 'host',
    };
    setScheduleMeetingModalVisible(true);
  };

  const join = (record: MeetingInfo) => {
    console.log('接入评标室会议 当前行数据: ', record);
    const meetingNum = record.meetingNum as string;

    history.push({
      pathname: '/tender',
      search: createSearchParams({ meetingNum }).toString(),
    });
  };

  const edit = (record: MeetingInfo) => {
    console.log('edit 当前行数据: ', record);
    scheduleMeetingInfoRef.current = {
      topic: record.topic,
      members: record.scheduledMembers,
      startTimestamp: record.startTimestamp,
      endTimestamp: record.endTimestamp,
      waitingRoom: record.waitingRoom,
      meetingId: record.meetingId,
      meetingNum: record.meetingNum,
    };
    meetingOwnerRef.current = {
      userUuid: record.ownerUserUuid as string,
      nickname: record.ownerNickname as string,
      role: 'host',
    };
    setScheduleMeetingModalVisible(true);
  };

  const cancel = async (record: MeetingInfo) => {
    console.log('cancel 当前行数据: ', record);
    try {
      const result = await NETenderKit.cancelMeeting(record.meetingId as number);

      console.log('取消会议成功 result: ', result);
      // 取消会议成功，优化刷新列表
      setMeetingList(prevList => prevList.filter(item => item.meetingId !== record.meetingId));
    } catch (err: any) {
      console.error('取消会议失败', err);
      notification.error({
        placement: 'top',
        key: 'cancel-error', // 指定唯一key
        message: '取消会议失败：' + err?.message,
      });
    }
  };

  // 2. 预约会议弹窗"确认"的处理
  const handleBookMeeting = (vals: any) => {
    console.log('预约成功！', vals);
    setScheduleMeetingModalVisible(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.schedule_div}>
        <Button className={styles.schedule_btn} onClick={schedule}>
          预约会议
        </Button>
      </div>
      <div>
        <div className={styles.title}>
          <span className={styles.title_text}>
            {meetingList.length
              ? '以下为当前体验角色用户的预约会议列表，不含已结束会议'
              : '当前还未有预约的开评标相关会议，您可体验主持人（投标人）发起预约会议、并添加其他会议角色参与体验；也可加入被添加的预约会议进行音视频评标的体验。'}
          </span>
        </div>
        {/* 这里写表格 */}
        <div className={meetingList.length ? styles.table_content : styles.table_content_no_data}>
          {meetingList.length ? (
            <Table
              dataSource={meetingList}
              //@ts-expect-error ts 报错，但是不影响使用
              columns={columns}
              bordered
              pagination={
                meetingList.length > 10
                  ? {
                      pageSize: 10,
                      showSizeChanger: false,
                      showQuickJumper: true,
                      showTotal: total => `共 ${total} 条`,
                      position: ['bottomRight'],
                      locale: {
                        jump_to: '前往',
                        page: '页',
                      },
                    }
                  : false
              }
              rowClassName={() => styles.custom_row}
              style={{ width: '100%' }}
            />
          ) : (
            <div className={styles.no_data_div}>
              <img className={styles.no_data_div_img} src={noMeetintlist}></img>
              <div className={styles.no_data_div_text}>暂无会议</div>
            </div>
          )}
        </div>
      </div>

      <BookMeetingModal
        visible={scheduleMeetingModalVisible}
        scheduleMeetingInfo={scheduleMeetingInfoRef.current}
        meetingOwner={meetingOwnerRef.current}
        onCancel={() => setScheduleMeetingModalVisible(false)}
        onOk={handleBookMeeting}
      />
    </div>
  );
};

export default Home;
