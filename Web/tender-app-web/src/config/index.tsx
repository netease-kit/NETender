console.log('process.env.MEETING_DOMAIN', process.env.MEETING_DOMAIN);
console.log('process.env.APP_KEY', process.env.APP_KEY);
export const appkey = process.env.APP_KEY || '';
export const serverUrl = process.env.MEETING_DOMAIN;

export const secret = '';
// 是否开启云端录制功能
// enableRecord为true时，使用join()方法加入频道时会自动开启录制，这时的录制文件布局为默认布局，会和招采建议布局冲突
// 如需使用招采建议布局，请将enableRecord设置为false
export const enableRecord = true;

// 私有化, privateServer为true时，使用私有化的NERTC服务，privateConfig中的地址需要替换为私有化的服务地址
// 具体地址请联系技术支持
export const privateServer = false;
export const privateConfig = {
  appKey: '',
  serverUrl: '',
  serverConfig: {
    roomKitServerConfig: {
      roomServer: '',
      lbsServer: '',
    },
    imServerConfig: {
      lbs: '',
      link: '',
      linkSslWeb: true,
      nosUploader: '',
      httpsEnabled: true,
      nosDownloader: '',
      nosLbs: '',
    },
    rtcServerConfig: {
      channelServer: '',
      statisticsServer: '',
      statisticsWebSocketServer: '',
      roomServer: '',
      useIPv6: true,
    },
  },
};

