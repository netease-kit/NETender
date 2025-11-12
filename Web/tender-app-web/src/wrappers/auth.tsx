import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'umi';
import { useRtcStore } from '@/store/useGlobalStore';
import NETenderKit from 'netender-web-kit';
import { appkey, privateConfig, privateServer, serverUrl } from '@/config';

const Auth: React.FC = () => {
  const { account, nickname, updateMeetingInfo } = useRtcStore();
  const [checking, setChecking] = useState(true); // 检查中
  const [redirect, setRedirect] = useState<string | null>(null);

  useEffect(() => {
    const checkLogin = async () => {
      // 已登录
      console.log('检查登录状态', account, nickname);
      if (account && nickname) {
        setChecking(false);
        return;
      }

      // 检查本地缓存
      const tenderAccountInfo = localStorage.getItem('tenderAccountInfo');
      let parsed;

      try {
        parsed = tenderAccountInfo && JSON.parse(tenderAccountInfo);
      } catch (e) {
        console.warn('tenderAccountInfo 解析失败', e);
      }

      const { accountId, accountToken } = parsed || {};

      if (accountId && accountToken) {
        try {
          // 静默登录
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

          const result = await NETenderKit.loginByToken({
            accountId,
            accountToken,
          });

          console.log('token登录成功: ', result);
          if (result?.userUuid && result?.userToken) {
            localStorage.setItem(
              'tenderAccountInfo',
              JSON.stringify({
                accountId: result.userUuid,
                accountToken: result.userToken,
              }),
            );
          }

          // 更新用户信息
          updateMeetingInfo({
            account: result.username || '',
            nickname: result.nickname || '',
            userUuid: result.userUuid || '',
          });
          setChecking(false);
          // 登录成功后，如果不在 /home，就跳 /home
          if (!location.href.includes('home')) {
            setRedirect('/home');
          } else {
            setRedirect(null);
          }
        } catch (e) {
          console.error('token登录流程异常:', e);
          setRedirect('/login');
        }
      } else {
        // 没有本地账号
        setRedirect('/login');
      }
    };

    checkLogin();
    // eslint-disable-next-line
  }, []);

  // 跳转
  if (redirect) {
    return <Navigate to={redirect} replace />;
  }

  // 检查期间显示 loading
  if (checking) {
    return <div style={{ textAlign: 'center', marginTop: 80 }}>登录检查中 ...</div>;
  }

  // 通过，渲染子路由
  return <Outlet />;
};

export default Auth;
