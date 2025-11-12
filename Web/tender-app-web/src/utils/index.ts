import { sha1 } from 'js-sha1';
import dayjs from 'dayjs';

/* eslint-disable prettier/prettier */
export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getNearestHourDayjs = (d: dayjs.Dayjs) =>
  d.minute() === 0
    ? d.minute(0).second(0).millisecond(0)
    : d.add(1, 'hour').minute(0).second(0).millisecond(0);

export const checkChrome = () => {
  // 排除 Firefox/Safari 等非 Chromium 内核
  if (
    navigator.userAgent.includes('Firefox') ||
    (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome'))
  ) {
    return false;
  }

  // 核心检测逻辑
  const isChromium = 'chrome' in window;
  const isEdge = navigator.userAgent.includes('Edg/');
  const isOpera = navigator.userAgent.includes('OPR/');

  // 包含 Chrome、Edge、Opera、Vivaldi 等 Chromium 系浏览器
  return (isChromium || navigator.userAgent.includes('Chrome')) && !isEdge && !isOpera;
};

// 从 location.hash 提取查询参数
export const getHashSearch = (hash: string) => {
  const searchIndex = hash.indexOf('?');
  const search = searchIndex !== -1 ? hash.substring(searchIndex) : '';

  return search;
};

// 获取token
// 这里仅用于测试，实际项目中不要在web端使用明文的 secret，建议使用应用服务器生成 token
export const getAppToken = async ({
  appkey,
  secret,
  uid,
  channelName,
}: {
  appkey: string;
  secret: string;
  uid: string;
  channelName: string;
}) => {
  const Nonce = Math.ceil(Math.random() * 1e9);
  const CurTime = Math.ceil(Date.now() / 1000);
  const CheckSum = sha1(`${secret}${Nonce}${CurTime}`);

  const headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  });

  headers.append('AppKey', appkey);
  headers.append('Nonce', Nonce.toString());
  headers.append('CurTime', CurTime.toString());
  headers.append('CheckSum', CheckSum);

  const data = await fetch('https://api.netease.im/nimserver/user/getToken.action', {
    method: 'POST',
    headers: headers,
    body: `uid=${encodeURIComponent(uid)}&channelName=${encodeURIComponent(channelName)}`,
  });

  const result = await data.json();

  if (result?.token) {
    return result.token;
  } else {
    console.error(result || data);
    return null;
  }
};

// 获取验证码
export const getSMSCode = async (
  { appkey, serverUrl, mobile }: { appkey: string; serverUrl: string; mobile: string },
  timeout = 10000, // 默认超时时间 10秒
) => {
  console.log('获取验证码 appkey serverUrl mobile: ', appkey, serverUrl, mobile);
  const url = serverUrl ?? 'https://roomkit-dev-default.netease.im';
  const controller = new AbortController();

  // 定时器，超时后调用 controller.abort()
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(`${url}/scene/meeting/${appkey}/v1/sms/${mobile}/1`, {
      method: 'GET',
      signal: controller.signal,
    });

    clearTimeout(timeoutId); // 成功返回时清理定时器

    const result = await response.json();

    console.log('验证码: ', result);
    return result;
  } catch (error) {
    console.error('getSMSCode失败: ', error);
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('网络请求超时，请稍后再试');
    }

    throw error;
  }
};
