import React, { useEffect, useState } from 'react';
import { Modal, Button, Input, notification } from 'antd';
import { history } from 'umi';
import styles from './index.less';
import phoneIcon from '@/assets/phoneIcon.svg';
import phoneCodeIcon from '@/assets/phoneCodeIcon.svg';
import NETenderKit from 'netender-web-kit';
import { appkey, privateConfig, privateServer, serverUrl } from '@/config';
import { getSMSCode } from '@/utils';
import { useRtcStore } from '@/store/useGlobalStore';

const Invite: React.FC = () => {
  const { account, nickname, updateMeetingInfo } = useRtcStore();
  const [isInitialized, setIsInitialized] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [checked, setChecked] = useState(false);

  // 验证码倒计时
  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }

    return () => clearTimeout(timer);
  }, [countdown]);

  useEffect(() => {
    let isUnmounted = false;
    const doInit = async () => {
      if (isInitialized) {
        console.log('已经初始化了');
        return;
      }

      try {
        if (privateServer) {
          await NETenderKit.init(privateConfig);
        } else {
          await NETenderKit.init({
            appKey: appkey,
            serverUrl,
          });
        }
        if (!isUnmounted) {
          setIsInitialized(true);
        }
      } catch (err) {
        console.error('初始化失败', err);
        // 可以考虑设置 error 状态
      }
    };

    doInit();

    return () => {
      isUnmounted = true;
    };
  }, [appkey]);

  useEffect(() => {
    // 已初始化，并且没 account 和 nickname 时触发
    if (isInitialized && !account && !nickname) {
      const loginByToken = async () => {
        try {
          console.log('已经初始化了');
          const tenderAccountInfo = localStorage.getItem('tenderAccountInfo');

          console.log('tenderAccountInfo: ', tenderAccountInfo);

          if (!tenderAccountInfo) return; // 本地没有信息

          let parsed;

          try {
            parsed = JSON.parse(tenderAccountInfo);
          } catch (e) {
            console.warn('tenderAccountInfo 解析失败', e);
            return;
          }

          const { accountId, accountToken } = parsed || {};

          if (accountId && accountToken) {
            console.log('使用token登录');
            const result = await NETenderKit.loginByToken({
              accountId,
              accountToken,
            });

            console.log('使用token登录成功: ', result);

            // 确保 result 的结构与预期相符
            if (result?.userUuid && result?.userToken) {
              localStorage.setItem(
                'tenderAccountInfo',
                JSON.stringify({
                  accountId: result.userUuid,
                  accountToken: result.userToken,
                }),
              );
            }

            // 更新 store 信息
            updateMeetingInfo({
              account: result.username || '', // 可默认空串
              nickname: result.nickname || '',
              userUuid: result.userUuid || '',
            });
          }
        } catch (e) {
          console.error('token登录流程异常:', e);
        }
      };

      // 调用异步函数
      loginByToken();
    }
  }, [isInitialized]);

  useEffect(() => {
    if (account && nickname) {
      console.log('已经登录了，进入预约会议页面');
      history.push({
        pathname: '/home',
      });
    }
  }, [account, nickname]);

  // 获取验证码
  const getCaptcha = async () => {
    if (!hasPhoneNumber()) {
      notification.warning({
        key: 'input-phone-number-warning', // 指定唯一key
        placement: 'top',
        message: '请输入有效手机号',
      });
      return;
    }

    // 后端请求验证码逻辑...
    setCountdown(60);
    try {
      const result = await getSMSCode({
        appkey: appkey as string,
        serverUrl: serverUrl as string,
        mobile: phone,
      });

      console.log('getSMSCode result: ', result);
      if (result.code != 0) {
        notification.warning({
          key: 'get-verification-code-warning', // 指定唯一key
          placement: 'top',
          message: '获取验证码失败：' + result.msg,
        });
        setCountdown(0);
      }
    } catch (error) {
      setCountdown(0);
      console.error('获取验证码失败', error);
      const message = (error as { message?: string })?.message ?? String(error);

      notification.error({
        key: 'get-verification-code-error', // 指定唯一key
        placement: 'top',
        message: '获取验证码失败：' + (message ?? '网络超时'),
      });
    }
  };

  // 登录
  const handleLogin = () => {
    console.log('Current code:', code);
    if (!hasPhoneNumber()) {
      notification.warning({
        placement: 'top',
        message: '请输入有效手机号',
        key: 'no-phone-number-warning',
      });
      return;
    }

    if (!code) {
      notification.warning({
        placement: 'top',
        message: '请输入验证码',
        key: 'no-verification-code-warning',
      });
      return;
    }

    if (!checked) {
      notification.warning({
        placement: 'top',
        key: 'no-checked-warning',
        message: '请勾选：同意并遵守《隐私条款》和《用户协议》',
      });
      return;
    }

    //setIsModalOpen(true);
    enterHome();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const enterHome = async () => {
    try {
      console.log('开始登录');
      const result = await NETenderKit.loginBySmsCode({
        phoneNumber: phone,
        smsCode: code,
      });

      console.log('loginBySmsCode result', result);
      localStorage.setItem(
        'tenderAccountInfo',
        JSON.stringify({
          accountId: result.userUuid,
          accountToken: result.userToken,
        }),
      );
      updateMeetingInfo({
        account: result.username || '', // 可默认空串
        nickname: result.nickname || '',
        userUuid: result.userUuid || '',
      });
      // const accoutInfo = await NETenderKit.getAccountInfo();
      // console.log('accoutInfo: ', accoutInfo);
      // history.push({
      //   pathname: '/home',
      // });
    } catch (error) {
      console.error('登录失败:', error);
      const message =
        ((error as { message?: string })?.message || (error as { msg?: string })?.msg) ??
        String(error);

      notification.error({
        placement: 'top',
        key: 'login-warning',
        message: '登录失败，' + (message ?? '请检查手机号和验证码是否正确！'),
      });
    }
  };

  const hasPhoneNumber = () => {
    console.warn('判断是否有输入手机号码: ', phone);
    return /^1\d{10}$/.test(phone);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.loading}>
          <div className={styles.content}>
            <div className={styles.logo}></div>
            <div className={styles.panel}>
              <div className={styles.title}>在线音视频评标室</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {/* 手机号输入框 */}
                <div className={styles.formItem} style={{ display: 'flex' }}>
                  <Input
                    prefix={<img src={phoneIcon} style={{ width: '100%', marginRight: 10 }} />}
                    placeholder='请输入手机号'
                    maxLength={11}
                    value={phone}
                    className={styles.input40}
                    onChange={e => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                  />
                </div>
                {/* 验证码输入框 + 按钮 */}
                <div className={styles.formItem} style={{ display: 'flex', gap: 8 }}>
                  <Input
                    prefix={<img src={phoneCodeIcon} style={{ width: '100%', marginRight: 10 }} />}
                    placeholder='请输入验证码'
                    maxLength={6}
                    value={code}
                    className={styles.input40}
                    onChange={e => setCode(e.target.value.replace(/[^0-9]/g, ''))}
                  />
                  <Button disabled={countdown > 0} className={styles.codeBtn} onClick={getCaptcha}>
                    {countdown > 0 ? `${countdown}s` : '获取验证码'}
                  </Button>
                </div>
              </div>
              <div>
                <div className={styles.formItem} style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type='checkbox'
                    style={{ width: 16, height: 16, opacity: 1 }}
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                  <span
                    style={{
                      marginLeft: 4,
                      fontSize: 14,
                      fontFamily: 'PingFang SC',
                      fontWeight: 400,
                      letterSpacing: 0,
                      color: '#666',
                      textAlign: 'center',
                    }}
                  >
                    同意并遵守
                    <a
                      className={styles.hrefItem}
                      href='https://yunxin.163.com/clauses?serviceType=3'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      《隐私条款》
                    </a>
                    和
                    <a
                      className={styles.hrefItem}
                      href='https://yunxin.163.com/clauses?serviceType=4'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      《用户协议》
                    </a>
                  </span>
                </div>
                <button
                  className={`${styles.loginBtn} ${
                    code.length === 6 && hasPhoneNumber() ? styles.active : ''
                  }`}
                  disabled={code.length !== 6 || !hasPhoneNumber()}
                  onClick={handleLogin}
                >
                  立即登录
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        width={400}
        height={176}
        centered
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        {/* 第一行：标题+右上角X按钮 */}
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
        {/* 第二行：输入框 */}
        <div style={{ marginBottom: 24 }}>
          <Input
            value={nickname}
            //onChange={e => setNickname(e.target.value)}
            placeholder='请输入昵称'
            size='large'
          />
        </div>
        {/* 第三行：确认按钮 */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button className={styles['copy-btn']} type='primary' onClick={enterHome}>
            确认账号昵称
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Invite;
