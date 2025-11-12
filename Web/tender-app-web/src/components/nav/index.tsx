import React from 'react';
import { Divider, Dropdown } from 'antd';
import styles from './index.less';

interface NavProps {
  logoSrc: string;
  appName: string;
  nickname: string;
  avatarIconSrc: string;
  onModifyNickname: () => void;
  onLogout: () => void;
  isOnline?: boolean;
}

const Nav: React.FC<NavProps> = ({
  logoSrc,
  appName,
  nickname,
  avatarIconSrc,
  onModifyNickname,
  onLogout,
  isOnline = true,
}) => {
  const menuItems = [
    {
      key: 'modify',
      label: '修改昵称',
      onClick: onModifyNickname,
    },
    {
      key: 'logout',
      label: <span className={styles.logoutMenuItem}>退出登录</span>,
      onClick: onLogout,
    },
  ];

  return (
    <nav className={styles.nav}>
      {!isOnline && (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#fffbe6',
            color: '#d48806',
            padding: '10px 28px',
            fontSize: 15,
            border: '1px solid #ffe58f',
            borderRadius: 7,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            zIndex: 1002,
            fontFamily: 'PingFang SC, Arial, sans-serif',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}
        >
          当前网络不可用，请检查您的网络连接
        </div>
      )}
      <div className={styles.leftSection}>
        <img src={logoSrc} alt='Logo' className={styles.logo} />
        <Divider type='vertical' className={styles.divider} />
        <span className={styles.appName}>{appName}</span>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.userInfo}>
          {nickname && (
            <>
              <span className={styles.nickname}>{nickname} </span>
              <Dropdown menu={{ items: menuItems }} trigger={['click']}>
                <img
                  src={avatarIconSrc}
                  alt='Avatar'
                  className={styles.avatar}
                  style={{ cursor: 'pointer' }}
                />
              </Dropdown>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
