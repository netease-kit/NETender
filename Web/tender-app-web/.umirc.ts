import { defineConfig } from 'umi';
import path from 'path';

const RUN_ENV = process.env.RUN_ENV || 'development';
console.log('RUN_ENV>>>>', RUN_ENV);

const MEETING_DOMAIN = {
  development: 'https://meeting.yunxinroom.com',
  production: 'https://meeting.yunxinroom.com',
  private: '',
}[RUN_ENV];

const APP_KEY = {
  development: '',
  production: '',
  private: '',
}[RUN_ENV];

console.log('ROOMS_DOMAIN: ', MEETING_DOMAIN, APP_KEY);

export default defineConfig({
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/home',
      component: 'home',
      title: '招采会议首页',
      wrappers: ['@/wrappers/auth'],
    },
    { path: '/login', component: 'login', title: '招采会议登录' },
    {
      path: '/tender',
      component: 'tender',
      title: '在线评标',
      wrappers: ['@/wrappers/auth'],
    }
  ],
  hash: true,
  history: { type: 'hash' },
  base: '/',
  publicPath: '/webdemo/tender-kit/',
  outputPath: 'dist',

  mfsu: false,
  fastRefresh: true, // 热更新 umi 4兼容
  define: {
    'process.env.MEETING_DOMAIN': MEETING_DOMAIN,
    'process.env.APP_KEY': APP_KEY,
  },
  // 如需要可以添加 headScripts 来设置 favicon
  headScripts: [{ src: '/favicon.ico', rel: 'icon', type: 'image/x-icon' }],
  https: {
    cert: './ssl/server.crt',
    key: './ssl/server.key',
  },
});
