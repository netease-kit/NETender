# NETender Web Kit 招采UI组件的实例Demo

## 项目概述

- 招采组件kitDemo是一个基于网易云信NETender Web Kit技术的远程在线音视频评标室解决方案。
- NETender Web Kit 是网易会议招采场景专用的带 UI 的整体解放方案，提供了招采会议场景下的核心接口服务

## 安装和运行

### 环境要求

- 脚手架: umi4
- 环境要求：node v18.x
- 运行环境：Chrome浏览器

### 开发环境启动

- 修改 .umirc.ts 中的相关配置
- npm install
- npm run dev

### 打包

- npm run build

### 开发人员注意事项

- 打包时默认path为/webdemo/tender/，如需修改请到.umirc.ts配置publicPath
- 该Demo初次登录使用手机号、验证码的方式，本地会换成登陆的账号信息，重进会自动登录（通过accout、token校验的方式）
- 支持私有化配置，需至src/config/index.tsx中修改相关配置
