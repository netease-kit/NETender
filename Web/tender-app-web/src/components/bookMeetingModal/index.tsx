import React, { useState, useRef, useEffect } from 'react';
import {
  Modal,
  Button,
  Input,
  DatePicker,
  TimePicker,
  Checkbox,
  Select,
  Tooltip,
  notification,
} from 'antd';
import { CloseOutlined, PlusOutlined, SearchOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from './index.less';
import dayjs from 'dayjs';
import { Member, ScheduleMeetingInfo } from '@/types';
import NETenderKit from 'netender-web-kit';
import { getRandomInt, getNearestHourDayjs } from '@/utils';

const ROLE_OPTIONS = [
  { label: '评标专家', value: 'evaluator' },
  { label: '投标人', value: 'bidder' },
  { label: '监督', value: 'supervise' },
  //{ label: '执行人', value: 'host' },
];

interface Props {
  visible: boolean;
  meetingOwner: Member;
  scheduleMeetingInfo?: ScheduleMeetingInfo;
  onCancel: () => void;
  onOk: (vals: unknown) => void;
}

const BookMeetingModal: React.FC<Props> = ({
  visible,
  scheduleMeetingInfo,
  meetingOwner,
  onCancel,
  onOk,
}) => {
  const [showConfirmCancelModal, setShowConfirmCancelModal] = useState(false);
  const [topic, setTopic] = useState('');
  const [members, setMembers] = useState<Member[]>([]);
  const [waitingRoom, setWaitingRoom] = useState<boolean>(false);
  const initialDataRef = useRef<unknown>(null);
  // 时间选择
  const [startDate, setStartDate] = useState<dayjs.Dayjs | undefined>();
  const [startTime, setStartTime] = useState<dayjs.Dayjs | undefined>();
  const [endDate, setEndDate] = useState<dayjs.Dayjs | undefined>();
  const [endTime, setEndTime] = useState<dayjs.Dayjs | undefined>();

  // 搜索的手机号码
  const [searchPhoneNumber, setSearchPhoneNumber] = useState('');
  // 添加成员的弹框
  const [addMemberModal, setAddMemberModal] = useState(false);

  // 联动时间对象
  const start =
    startDate && startTime
      ? dayjs(`${startDate.format('YYYY-MM-DD')} ${startTime.format('HH:mm')}`)
      : null;
  const end =
    endDate && endTime ? dayjs(`${endDate.format('YYYY-MM-DD')} ${endTime.format('HH:mm')}`) : null;

  const [searchResults, setSearchResults] = useState<Member[]>([]);
  const [searchResultVisible, setSearchResultVisible] = useState(false);
  const [checkedResults, setCheckedResults] = useState<Member[]>([]);
  const searchResultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!searchResultVisible) return;
    function handleClick(e: MouseEvent) {
      if (searchResultRef.current && !searchResultRef.current.contains(e.target as Node)) {
        setSearchResultVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [searchResultVisible]);

  useEffect(() => {
    console.log('预约会议弹框 scheduleMeetingInfo: ', scheduleMeetingInfo);
    if (!visible) return;
    if (!scheduleMeetingInfo) {
      const now = dayjs();
      const DEFAULT_START_DATE = now.startOf('day');
      const DEFAULT_START_TIME = getNearestHourDayjs(now);
      const DEFAULT_END_DATE = DEFAULT_START_DATE.add(1, 'day');
      const DEFAULT_END_TIME = DEFAULT_START_TIME.add(24, 'hour');

      setTopic('');
      setMembers([]);
      setWaitingRoom(false);
      setStartDate(DEFAULT_START_DATE);
      setStartTime(DEFAULT_START_TIME);
      setEndDate(DEFAULT_END_DATE.startOf('day'));
      setEndTime(
        dayjs()
          .hour(DEFAULT_END_TIME.hour())
          .minute(DEFAULT_END_TIME.minute())
          .second(0)
          .millisecond(0),
      );
      setSearchPhoneNumber('');
      return;
    }

    const { topic, members, waitingRoom, startTimestamp, endTimestamp } = scheduleMeetingInfo;
    const initial = {
      topic,
      members: JSON.stringify(members),
      waitingRoom,
      startTimestamp,
      endTimestamp,
    };

    setTopic(topic || '');
    setWaitingRoom(Boolean(waitingRoom));
    // 定义异步内联函数处理成员
    if (members && members.length > 0) {
      (async () => {
        try {
          const result = await NETenderKit.getInviteAccountInfoList(members.map(m => m.userUuid));

          console.log('getInviteAccountInfoList result: ', result);
          const accountList: {
            userUuid: string;
            name: string;
            phoneNumber?: string;
          }[] = result?.meetingAccountListResp ?? [];
          // **不要直接修改 props 数据，应深拷贝，然后映射 nickname**
          const membersWithNickname = members.map(m => ({
            ...m,
            nickname: accountList.find(item => item.userUuid === m.userUuid)?.name || '',
          }));

          console.log('membersWithNickname: ', membersWithNickname);
          const newMembers = [
            ...membersWithNickname.filter(m => m.userUuid !== meetingOwner.userUuid),
          ];

          setMembers(newMembers);
          initial.members = JSON.stringify(newMembers);
        } catch (err) {
          console.error('获取成员信息失败: ', err);

          setMembers([...members]);
        }
      })();
    } else {
      setMembers([]); // 没有成员清空
    }

    // 日期与时间处理
    if (startTimestamp && endTimestamp) {
      const startDayjs = dayjs(startTimestamp);
      const endDayjs = dayjs(endTimestamp);

      setStartDate(startDayjs.startOf('day'));
      const startTime = dayjs()
        .hour(startDayjs.hour())
        .minute(startDayjs.minute())
        .second(startDayjs.second())
        .millisecond(0);

      setStartTime(startTime);
      setEndDate(endDayjs.startOf('day'));
      const endTime = dayjs()
        .hour(endDayjs.hour())
        .minute(endDayjs.minute())
        .second(endDayjs.second())
        .millisecond(0);

      setEndTime(endTime);
    } else {
      setStartDate(undefined);
      setStartTime(undefined);
      setEndDate(undefined);
      setEndTime(undefined);
    }

    initialDataRef.current = initial;
  }, [visible, scheduleMeetingInfo]);

  useEffect(() => {
    // 1. startDate变化后，自动设置startTime
    if (!startDate) {
      setStartTime(undefined);
      return;
    }

    if (startDate.isSame(now, 'day')) {
      setStartTime(getNearestHourDayjs(now));
    } else {
      setStartTime(dayjs().hour(0).minute(0).second(0).millisecond(0));
    }
  }, [startDate]);

  useEffect(() => {
    // 2. endDate始终比startDate大一天，随startDate变化
    if (!startDate) {
      setEndDate(undefined);
      return;
    }

    setEndDate(startDate.clone().add(1, 'day'));
  }, [startDate]);

  useEffect(() => {
    // 3. startTime变化时，endTime跟着变化，时分与startTime相同
    if (!startTime || !endDate) {
      setEndTime(undefined);
      return;
    }

    setEndTime(
      endDate.clone().hour(startTime.hour()).minute(startTime.minute()).second(0).millisecond(0),
    );
  }, [startTime, endDate]);

  // 当前时间
  const now = dayjs();

  // ----------- 开始时间限制 ----------
  // DatePicker 只能选今天及以后
  const disabledStartDate = (d: dayjs.Dayjs) => d && d.isBefore(now.startOf('day'));

  // TimePicker，今天禁用当前时间之前
  const disabledStartTime = () => {
    if (!startDate) return {};
    if (!startDate.isSame(now, 'day')) return {};
    const currHour = now.hour();
    const currMinute = now.minute();

    return {
      disabledHours: () => Array.from({ length: currHour }, (_, i) => i),
      disabledMinutes: (selectedHour: number) =>
        selectedHour === currHour ? Array.from({ length: currMinute }, (_, i) => i) : [],
    };
  };

  // ----------- 结束时间限制 ----------
  // 最早=开始时间+30min，最晚=开始时间+24h
  const minEnd = start ? start.add(30, 'minute') : null;
  const maxEnd = start ? start.add(24, 'hour') : null;

  // DatePicker 的range
  const disabledEndDate = (d: dayjs.Dayjs) => {
    if (!minEnd || !maxEnd) return true; // 没选开始时间不能选
    return d.isBefore(minEnd.startOf('day')) || d.isAfter(maxEnd.startOf('day'));
  };

  // TimePicker 复杂联动
  const disabledEndTime = () => {
    if (!endDate || !minEnd || !maxEnd) return {};

    // 结束日期是否等于最早/最晚
    const isMinDay = endDate.isSame(minEnd, 'day');
    const isMaxDay = endDate.isSame(maxEnd, 'day');

    // 可用小时
    let minHour = 0,
      maxHour = 23;

    if (isMinDay) minHour = minEnd.hour();
    if (isMaxDay) maxHour = maxEnd.hour();

    const disabledHours = () => {
      let hours: number[] = [];

      if (isMinDay) hours = Array.from({ length: minHour }, (_, i) => i);
      if (isMaxDay)
        hours = hours.concat(Array.from({ length: 23 - maxHour }, (_, i) => maxHour + 1 + i));
      // 去重
      return [...new Set(hours)];
    };

    // 可用分钟
    const disabledMinutes = (selectedHour: number) => {
      let mins: number[] = [];

      if (isMinDay && selectedHour === minHour) {
        mins = Array.from({ length: minEnd.minute() }, (_, i) => i);
      }

      if (isMaxDay && selectedHour === maxHour) {
        mins = mins.concat(
          Array.from({ length: 60 - maxEnd.minute() - 1 }, (_, i) => maxEnd.minute() + 1 + i),
        );
      }

      return [...new Set(mins)];
    };

    return { disabledHours, disabledMinutes };
  };

  //将时间和日期组件合并成时间戳
  const getMergedDateTime = (date?: dayjs.Dayjs, time?: dayjs.Dayjs) => {
    if (!date || !time) return undefined;
    return date.hour(time.hour()).minute(time.minute()).second(0).millisecond(0);
  };

  // 结束时间未选开始时间时不可点
  const endDisable = !start;

  //打开添加成员弹窗
  const openAddMemberModal = () => {
    console.log('openAddMemberModal members:', members);
    setCheckedResults([...members.filter(m => m.userUuid !== meetingOwner.userUuid)]);
    setAddMemberModal(true);
  };

  // 搜索成员
  const doSearch = async (phoneNumber: string) => {
    setSearchPhoneNumber(phoneNumber);

    if (phoneNumber.length !== 11) {
      setSearchResults([]);
      setSearchResultVisible(false);
      return false;
    }

    setCheckedResults([
      ...members.filter(m => !checkedResults.some(c => c.userUuid === m.userUuid)),
      ...checkedResults,
    ]);
    setSearchResultVisible(true);
    try {
      const result = await NETenderKit.searchAccountInfoByPhone(phoneNumber);

      console.log('searchAccountInfoByPhone result: ', result);
      if (result?.length) {
        const searchResults = result
          //.filter((m: any) => m.userUuid !== meetingOwner.userUuid)
          .map((m: { name?: string; userUuid?: string; phoneNumber?: string; role?: string }) => ({
            nickname: m.name || 'unknown',
            userUuid: m.userUuid || getRandomInt(100, 9999).toString(),
            phoneNumber: m.phoneNumber,
            role: m.role || 'evaluator',
          }));

        setSearchResults(searchResults);
      } else {
        setSearchResults([]);
        notification.warning({ placement: 'top', message: '无法找到该手机号对应的账号信息' });
      }
    } catch (error) {
      const message = (error as { message?: string })?.message ?? String(error);

      setSearchResults([]);
      notification.warning({
        placement: 'top',
        key: 'cancel-error',
        message: '查找成员失败: ' + message,
      });
    }

    return true;
  };

  // 输入变更时
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let phoneNumber = e.target.value.replace(/\D/g, '');

    if (phoneNumber.length > 11) phoneNumber = phoneNumber.slice(0, 11);
    setSearchPhoneNumber(phoneNumber);

    // 11位自动搜索
    if (phoneNumber.length === 11) {
      doSearch(phoneNumber);
    } else {
      setSearchResults([]);
      setSearchResultVisible(false);
    }
  };

  // 回车搜索
  const handleSearchEnter = () => {
    const phoneNumber = searchPhoneNumber.replace(/\D/g, '');

    if (phoneNumber.length !== 11) {
      notification.warning({
        placement: 'top',
        message: '请输入11位手机号',
        key: 'search-warning',
      });
      return;
    }

    doSearch(phoneNumber);
  };

  //参会人列表中更新参会人角色
  const handleRoleChange = (userUuid: string, role: string) => {
    console.log('handleRoleChange userUuid: ', userUuid, ' role: ', role);
    setCheckedResults(prev => prev.map(m => (m.userUuid === userUuid ? { ...m, role } : m)));
  };

  //参会人列表中删除参会人角色
  const handleDelete = (userUuid: string) => {
    console.log('handleDelete userUuid: ', userUuid);
    console.log('handleDelete checkedResults: ', checkedResults);
    setCheckedResults(prev => prev.filter(m => m.userUuid !== userUuid));
  };

  // 退出add member弹窗
  const closeAddMemberModal = () => {
    setCheckedResults([]);
    setSearchResultVisible(false);
    setSearchResults([]);
    setAddMemberModal(false);
  };

  // 参会人列表中编辑完成的确认按钮
  const handleMemberEdit = () => {
    console.log('参会者编辑完成更新成员列表 members: ', members);
    console.log('添加成员 checkedResults : ', checkedResults);
    // setMembers(prev => {
    //   // 合并两个数组
    //   const all = [...prev, ...checkedResults];
    //   // 用 Map 去重，后面的覆盖前面的
    //   const map = new Map();
    //   all.forEach(m => map.set(m.userUuid, m));
    //   return Array.from(map.values());
    // });
    setMembers(checkedResults);
    setAddMemberModal(false);
  };

  const handleScheduleMeeting = async () => {
    console.log('开始预约会议: ', {
      topic,
      members,
      start,
      end,
      waitingRoom,
      startDate,
      startTime,
    });
    try {
      console.log('开始预约会议 members: ', members);
      const startTimeMergedDayjs = getMergedDateTime(startDate, startTime);
      const endTimeMergedDayjs = getMergedDateTime(endDate, endTime);
      // 统计每个角色已分配人数
      const roleCount: Record<string, number> = {};
      const ROLE_OPTIONS = {
        evaluator: '评标专家',
        bidder: '投标人',
        supervise: '监督',
        host: '执行人',
      };
      const scheduledMembers = [
        {
          userUuid: meetingOwner.userUuid,
          role: 'host',
          name: '执行人',
        },
      ];

      members.forEach(member => {
        const role = member.role;

        if (!role) return;
        if (!(role in ROLE_OPTIONS)) return;
        // 这里类型断言，保证 role 一定是 ROLE_OPTIONS 的 key
        const roleKey = role as keyof typeof ROLE_OPTIONS;

        roleCount[roleKey] = (roleCount[roleKey] || 0) + 1;
        scheduledMembers.push({
          userUuid: member.userUuid,
          role: roleKey,
          name: `${ROLE_OPTIONS[roleKey]}${roleCount[roleKey]}`,
        });
      });
      console.log('开始预约会议 scheduledMembers: ', scheduledMembers);
      const options = {
        subject: topic,
        startTime: startTimeMergedDayjs?.valueOf(), //毫秒时间戳
        endTime: endTimeMergedDayjs?.valueOf(), //毫秒时间戳
        enableWaitingRoom: waitingRoom,
        scheduledMembers,
        cloudRecordConfig: {
          enable: true, //demo先配置开启，后续有kit组件默认开启
        },
      };

      if (scheduleMeetingInfo) {
        const meetingInfo = await NETenderKit.editMeeting(
          scheduleMeetingInfo.meetingId as number,
          options,
        );

        console.log('编辑会议成功: ', meetingInfo);
        onOk(meetingInfo);
      } else {
        const meetingInfo = await NETenderKit.scheduleMeeting(options);

        console.log('预约会议成功: ', meetingInfo);
        onOk(meetingInfo);
      }
    } catch (error) {
      console.error('预约会议失败: ', error);

      const message = (error as { message?: string })?.message ?? String(error);

      notification.error({
        placement: 'top',
        key: 'schedule-meeting-error',
        message: `${scheduleMeetingInfo ? '编辑' : '预约'}会议失败：` + message,
      });
    }
  };

  function isFormChanged() {
    console.log('isFormChanged() scheduleMeetingInfo: ', scheduleMeetingInfo);
    if (!scheduleMeetingInfo) return false;
    const startTimestamp = getMergedDateTime(startDate, startTime)?.valueOf();
    const endTimestamp = getMergedDateTime(endDate, endTime)?.valueOf();
    const nowData = {
      topic,
      members: JSON.stringify([...members]),
      waitingRoom,
      startTimestamp,
      endTimestamp,
    };
    const initial = initialDataRef.current;

    console.log('nowData: ', nowData);
    console.log('initial: ', initial);
    const keys: Array<keyof typeof nowData> = [
      'topic',
      'members',
      'waitingRoom',
      'startTimestamp',
      'endTimestamp',
    ];

    //@ts-expect-error 暂时忽略
    return keys.some(k => nowData[k] !== initial[k]);
  }

  const handlePromptCancel = () => {
    if (isFormChanged()) {
      setShowConfirmCancelModal(true);
    } else {
      onCancel();
    }
  };

  return (
    <>
      <Modal
        open={visible}
        closable={false}
        centered
        footer={null}
        className={styles.customModal}
        width={540}
        maskClosable={false}
      >
        {/* 1. 标题+关闭 */}
        <div className={styles.header}>
          <div className={styles.title}>预约会议</div>
          <Button
            className={styles.closeBtn}
            type='text'
            icon={<CloseOutlined />}
            onClick={handlePromptCancel}
          />
        </div>

        {/* 2. 会议主题 */}
        <div className={styles.section}>
          <span className={styles.sectionLabel}>会议主题</span>
          <Input
            className={styles.input}
            value={topic}
            placeholder='请输入会议主题'
            allowClear
            maxLength={30}
            onChange={e => setTopic(e.target.value)}
          />
        </div>

        {/* 3. 参会人列表 */}
        <div className={styles.section}>
          <span className={styles.sectionLabel}>参会人（{members.length + 1}）</span>
          <div className={styles.members}>
            <Tooltip title='添加成员'>
              <div className={styles.memberAdd} onClick={openAddMemberModal}>
                <PlusOutlined />
              </div>
            </Tooltip>
            <Tooltip key={meetingOwner.userUuid} title={meetingOwner.nickname}>
              <div className={styles.memberAvatar}>{meetingOwner.nickname.slice(0, 2)}</div>
            </Tooltip>
            {members.map(m => (
              <Tooltip key={m.userUuid} title={m.nickname}>
                <div className={styles.memberAvatar}>{m.nickname.slice(0, 2)}</div>
              </Tooltip>
            ))}
          </div>
        </div>

        {/* 4. 开始时间 */}
        <div className={styles.section}>
          <span className={styles.sectionLabel}>开始时间</span>
          <div style={{ display: 'flex', gap: '10px' }}>
            <DatePicker
              className={styles.dateInput}
              style={{ width: 349, height: 36 }}
              value={startDate}
              onChange={v => {
                setStartDate(v);
                if (!v || (startDate && !v.isSame(startDate, 'day'))) {
                  setStartTime(undefined); // 切天清空时间，防止时间非法
                }
              }}
              format='YYYY-MM-DD'
              placeholder='日期'
              disabledDate={disabledStartDate}
            />
            <TimePicker
              className={styles.timeInput}
              style={{ width: 119, height: 36 }}
              value={startTime}
              onChange={v => setStartTime(v)}
              format='HH:mm'
              placeholder='时间'
              minuteStep={15}
              disabledTime={disabledStartTime}
              disabled={!startDate}
            />
          </div>
        </div>

        {/* 5. 结束时间 */}
        <div className={styles.section}>
          <span className={styles.sectionLabel}>结束时间</span>
          <div style={{ display: 'flex', gap: '10px' }}>
            <DatePicker
              className={styles.dateInput}
              style={{ width: 349, height: 36 }}
              value={endDate}
              onChange={v => {
                setEndDate(v);
                if (!v || (endDate && !v.isSame(endDate, 'day'))) {
                  setEndTime(undefined); // 切天清空
                }
              }}
              format='YYYY-MM-DD'
              placeholder='日期'
              disabledDate={disabledEndDate}
              disabled={endDisable}
            />
            <TimePicker
              className={styles.timeInput}
              style={{ width: 119, height: 36 }}
              value={endTime}
              onChange={v => setEndTime(v)}
              format='HH:mm'
              placeholder='时间'
              minuteStep={15}
              disabledTime={disabledEndTime}
              disabled={endDisable || !endDate}
            />
          </div>
        </div>

        {/* 6. 安全与等候室 */}
        <div className={styles.section}>
          <span className={styles.sectionLabel}>安全</span>
          <Checkbox
            checked={waitingRoom}
            className={styles.checkbox}
            onChange={e => setWaitingRoom(e.target.checked)}
          >
            <span className={styles.checkboxLabel}>等候室</span>
          </Checkbox>
        </div>

        {/* 7. 底部按钮 */}
        <div className={styles.footer}>
          <Button className={styles.cancelBtn} onClick={handlePromptCancel}>
            取消
          </Button>
          <Button
            className={styles.okBtn}
            type='primary'
            onClick={handleScheduleMeeting}
            disabled={!topic || !start || !end}
          >
            {scheduleMeetingInfo ? '编辑' : '预约'}会议
          </Button>
        </div>
      </Modal>
      {/* 添加成员弹窗 */}
      <Modal
        open={addMemberModal}
        title={<span className={styles.memberModalTitle}>参会者</span>}
        width={520}
        onCancel={closeAddMemberModal}
        footer={null}
        className={styles.memberModal}
      >
        {/* 搜索输入框 */}
        <div style={{ position: 'relative' }}>
          <Input
            className={styles.memberSearch}
            prefix={<SearchOutlined />}
            placeholder='请输入手机号查询'
            value={searchPhoneNumber}
            maxLength={11}
            allowClear
            onChange={handleSearch}
            onPressEnter={handleSearchEnter}
          />
          {/* 搜索结果小列表 */}
          {searchResultVisible && searchResults.length >= 0 && (
            <div
              ref={searchResultRef}
              style={{
                position: 'absolute',
                background: '#fff',
                zIndex: 1000,
                width: 480,
                boxShadow: '0px 4px 20px 0px #00000033',
                borderRadius: 8,
                border: '1px solid #F0F1F5',
                marginTop: -20,
                left: 0,
              }}
            >
              {searchResults.map(m => (
                <div
                  key={m.userUuid}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 16px',
                    borderBottom: '1px solid #f0f1f5',
                  }}
                >
                  <Checkbox
                    checked={false}
                    onChange={() => {
                      console.log('添加成员 m : ', m);
                      console.log('添加成员 checkedResults : ', checkedResults);
                      setCheckedResults(prev => {
                        console.log('添加成员 prev : ', prev);
                        let exists = prev.some(item => item.userUuid === m.userUuid);

                        if (m.userUuid === meetingOwner.userUuid) {
                          exists = true;
                        }

                        console.log('添加成员 exists : ', exists);
                        if (exists) {
                          return prev;
                        }

                        return [...prev, m];
                      });
                      setSearchResultVisible(false);
                      setSearchPhoneNumber('');
                      setSearchResults([]);
                    }}
                  />
                  <span style={{ flex: 1, marginLeft: 8 }}>{m.nickname}</span>
                  <span style={{ color: '#999' }}>{m.phoneNumber}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* member Table */}
        <div className={styles.memberTable}>
          <div className={styles.memberTableHeader}>
            <span className={styles.memberTh} style={{ width: 240 }}>
              参会者
            </span>
            <span className={styles.memberTh} style={{ width: 160 }}>
              角色
            </span>
            <span className={styles.memberTh} style={{ width: 80 }}>
              操作
            </span>
          </div>

          {/* 将 meetingOwner 和 members 合并渲染，方便后续扩展 */}
          <div>
            {(() => {
              const dataList = [];

              // meetingOwner 保证在第一位
              if (meetingOwner) dataList.push(meetingOwner);
              if (Array.isArray(checkedResults)) dataList.push(...checkedResults);

              if (dataList.length === 0) {
                return <div className={styles.memberEmpty}>暂无成员</div>;
              }

              return dataList.map(m => (
                <div className={styles.memberRow} key={m.userUuid}>
                  <span className={styles.memberTd} style={{ width: 240 }}>
                    {m.nickname}
                  </span>
                  <span className={styles.memberTd} style={{ width: 160 }}>
                    {m.role !== 'host' ? (
                      <Select
                        value={m.role}
                        options={ROLE_OPTIONS}
                        className={styles.memberRoleSelect}
                        style={{ width: 200, height: 32 }}
                        onChange={val => handleRoleChange(m.userUuid, val)}
                      />
                    ) : (
                      '执行人'
                    )}
                  </span>
                  <span className={styles.memberTd} style={{ width: 80 }}>
                    {m.role !== 'host' && (
                      <Tooltip title='移出成员'>
                        <Button
                          icon={<DeleteOutlined />}
                          type='text'
                          danger
                          onClick={() => handleDelete(m.userUuid)}
                        />
                      </Tooltip>
                    )}
                  </span>
                </div>
              ));
            })()}
          </div>
        </div>

        {/* 底部按钮 */}
        <div className={styles.memberFooter}>
          <Button onClick={closeAddMemberModal}>取消</Button>
          <Button type='primary' style={{ marginLeft: 16 }} onClick={handleMemberEdit}>
            确定
          </Button>
        </div>
      </Modal>
      {/* 新增二次确认弹框 */}
      <Modal
        open={showConfirmCancelModal}
        onCancel={() => setShowConfirmCancelModal(false)}
        footer={null}
        closable={false}
        centered
        width={400}
      >
        <div style={{ padding: '24px', textAlign: 'center' }}>
          <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 16 }}>
            确认退出会议编辑吗？
          </div>
          <div style={{ color: '#999', marginBottom: 32 }}>退出后，将无法保存当前会议的更改</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
            <Button onClick={() => setShowConfirmCancelModal(false)}>继续编辑</Button>
            <Button
              type='primary'
              danger
              onClick={() => {
                setShowConfirmCancelModal(false);
                onCancel();
              }}
            >
              确认退出
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BookMeetingModal;
