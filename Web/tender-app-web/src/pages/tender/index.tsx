import React, { useEffect, memo } from 'react';
import styles from './index.less';
import { notification } from 'antd';
import { history } from 'umi';
import { useRtcStore } from '@/store/useGlobalStore';
import NETenderKit from 'netender-web-kit';
//import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import { getHashSearch } from '@/utils';
import { appkey, privateConfig, privateServer, serverUrl } from '@/config';
import LogoImg from '@/assets/logo.png';

const Tender: React.FC = () => {
  const { nickname, userUuid } = useRtcStore();

  console.log('Tender页面加载 nickname', nickname);
  // 加入评标会议
  const handleJoinMeeting = async (joinMeetingNum: string) => {
    try {
      console.warn('加入会议 joinMeetingNum: ', joinMeetingNum, 'nickname: ', nickname);
      if (!joinMeetingNum || !nickname) {
        return;
      }

      if (!NETenderKit?.isInitialized()) {
        console.log('重新初始化');
        if (privateServer) {
          await NETenderKit.init(privateConfig);
        } else {
          await NETenderKit.init({
            appKey: appkey,
            serverUrl,
          });
        }
      }

      console.log('加入会议');
      await NETenderKit.joinTenderMeeting({
        meetingNum: joinMeetingNum,
        nickname,
        userUuid,
        logo: LogoImg,
      });
    } catch (error) {
      console.error('加入会议失败:', error);
      const message = (error as { message?: string })?.message ?? String(error);

      notification.error({
        placement: 'top',
        key: 'join-meeting-error',
        message: '加入会议失败：' + (message ?? ''),
      });
    }
  };

  const handleRender = async () => {
    try {
      console.log('渲染');
      await NETenderKit.render({
        containerId: 'tender-container',
        // onLeave: () => {
        //   console.log('监听到离开会议');
        //   NETenderKit.destroy();
        //   history.push({
        //     pathname: '/home',
        //   });
        // },
        onError: (error: unknown) => {
          console.error('render失败:', error);
        },
      });
      console.log('渲染成功');
    } catch (error) {
      console.error('渲染失败:', error);
      const message = (error as { message?: string })?.message ?? String(error);

      notification.error({
        placement: 'top',
        key: 'render-meeting-error',
        message: '会议渲染失败：' + (message ?? ''),
      });
    }
  };

  // 页面加载完成后，如果 meetingNum 自动加入会议 & 渲染
  useEffect(() => {
    let destroyed = false;
    const run = async (joinMeetingNum: string) => {
      console.warn('页面加载完成后 joinMeetingNum:  ', joinMeetingNum);
      if (joinMeetingNum) {
        await handleJoinMeeting(joinMeetingNum); // 加入会议
        // 只有加入会议成功后，才渲染
        console.warn('加入会议成功，开始渲染 destroyed: ', destroyed);
        await handleRender();
      }
    };

    //获取入会链接的信息
    const queryString = getHashSearch(location.hash);
    const params = new URLSearchParams(queryString);
    const meetingNum = params.get('meetingNum') || '';

    console.log('tender页面加载完成 meetingNum：', meetingNum);
    if (!meetingNum) {
      notification.warning({
        placement: 'top',
        message: '没有会议号，返回预约会议页面',
      });
      history.push({
        pathname: '/home',
      });
      return;
    }

    run(meetingNum);

    // 页面销毁时清理
    return () => {
      console.log('tender组件卸载，调用 destroy');
      destroyed = true;
      // NETenderKit.destroy();
      window.location.reload();
    };
  }, []);

  return (
    <div className={styles.tender_container} id='tender-container'>
      {/* {loading && (
      <Result
        icon={
          <Spin
            indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
            size="large"
            style={{ display: 'block', margin: '0 auto' }}
          />
        }
        title="会议加载中…"
        subTitle="请耐心等待"
      />
    )} */}
    </div>
  );
};

export default memo(Tender);
