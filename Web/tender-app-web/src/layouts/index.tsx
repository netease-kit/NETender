import { Outlet, useLocation, history } from 'umi';
import Nav from '@/components/nav';
import Logo from '@/assets/logo.png';
import avatarIconSrc from '@/assets/avatar.png';
import { useState, useEffect } from 'react';
import { Modal, Input, Button, notification } from 'antd';
import { useRtcStore } from '@/store/useGlobalStore';
import NETenderKit from 'netender-web-kit';

// 需要排除 Layout 的页面路径统一在这个数组里管理
const noLayoutPaths = ['/tender']; // 你可根据需要自行扩展

export default function Layout() {
  const location = useLocation();
  const pathname = location.pathname;

  // 将所有 Hooks 调用移到条件判断之前
  const { nickname, updateMeetingInfo } = useRtcStore();
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [nicknameInput, setNicknameInput] = useState('');
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // 清理
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // 这里适配你的路由 base，如果有 /webdemo 前缀，建议统一处理
  // 例如：实际访问的是 /webdemo/tender，则需要去掉 base
  // const path = pathname.replace(/^\/webdemo/, '');
  // 并用 path 进行判断。如果 base 部署没问题，可以直接用 pathname 判断。

  if (noLayoutPaths.includes(pathname)) {
    // 只渲染页面内容，不展示 Layout
    return <Outlet />;
  }

  // 修改昵称菜单事件
  const handleModifyNickname = () => {
    setNicknameInput(nickname || ''); // 初始化输入框
    setIsModifyModalOpen(true);
  };

  // 退出登录菜单事件
  const handleLogout = () => {
    setIsLogoutModalOpen(true);
  };

  // 修改昵称Modal确认
  const submitNickname = async () => {
    try {
      const result = await NETenderKit.updateNickname(nicknameInput);

      console.log('修改昵称成功:', result);
      updateMeetingInfo({ nickname: nicknameInput }); // 更新全局model
      setIsModifyModalOpen(false);
    } catch (error) {
      console.error('修改昵称失败:', error);
      const message = (error as { message?: string })?.message ?? String(error);

      notification.error({
        key: 'submit-nicknam-error',
        placement: 'top',
        message: '修改昵称失败: ' + (message ?? '网络超时'),
      });
    }
  };

  // 退出登录Modal确认
  const confirmLogout = async () => {
    try {
      const result = await NETenderKit.logout();

      console.log('退出登录成功:', result);
      updateMeetingInfo({ nickname: '', account: '', userUuid: '' }); //清除存储账号信息
      setIsLogoutModalOpen(false);
      localStorage.setItem('tenderAccountInfo', ''); //清除本地存储的账号token信息
      history.push({
        pathname: '/login',
      });
    } catch (error) {
      console.error('修改昵称失败:', error);
    }
  };

  return (
    <>
      <Nav
        logoSrc={Logo}
        appName='在线评标室'
        nickname={nickname}
        avatarIconSrc={avatarIconSrc}
        isOnline={isOnline}
        onModifyNickname={handleModifyNickname}
        onLogout={handleLogout}
      />
      <Outlet />

      {/* 修改昵称弹窗 */}
      <Modal
        width={400}
        height={160}
        centered
        open={isModifyModalOpen}
        onCancel={() => setIsModifyModalOpen(false)}
        footer={null}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
          }}
        >
          <span
            style={{ fontFamily: 'PingFang SC', fontWeight: 550, fontSize: 16, letterSpacing: 0 }}
          >
            请确认您的体验账号昵称
          </span>
        </div>
        <div style={{ marginBottom: 24 }}>
          <Input
            value={nicknameInput}
            onChange={e => setNicknameInput(e.target.value)}
            placeholder='请输入昵称'
            size='large'
            maxLength={20}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
          <Button style={{ marginRight: 8, width: 88 }} onClick={() => setIsModifyModalOpen(false)}>
            取消
          </Button>
          <Button
            type='primary'
            style={{ width: 88 }}
            disabled={!nicknameInput}
            onClick={submitNickname}
          >
            确认修改
          </Button>
        </div>
      </Modal>

      {/* 退出登录弹窗 */}
      <Modal
        width={400}
        height={160}
        open={isLogoutModalOpen}
        centered
        onCancel={() => setIsLogoutModalOpen(false)}
        footer={null}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
          }}
        >
          <span
            style={{ fontFamily: 'PingFang SC', fontWeight: 550, fontSize: 16, letterSpacing: 0 }}
          >
            请确认是否退出登录
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
          }}
        >
          <span
            style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontSize: 14, letterSpacing: 0 }}
          >
            退出登录后，将不能预约会议加入评标会议
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button style={{ marginRight: 8, width: 88 }} onClick={() => setIsLogoutModalOpen(false)}>
            取消
          </Button>
          <Button type='primary' style={{ width: 88 }} danger onClick={confirmLogout}>
            退出
          </Button>
        </div>
      </Modal>
    </>
  );
}
