import * as console$1 from 'node:console';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var o,e,E,i,N,n,t,r,d,a,A,c,_,R,O,u,S,l,T,I,C,k,L,f,D,P,U,M,m,V,s,p,F,B,G,g,H,h,y,K,W,w,Y;function b(o,i){return {code:e.SUCCESS,message:i||E.SUCCESS,data:o}}function v(o,i,N){if(o){if(o.code)throw {code:N||o.code,message:o.msg||o.message||E.FAILURE};throw {code:N||e.FAILURE,message:i||E.FAILURE,data:o}}throw {code:N||e.FAILURE,message:i||E.FAILURE}}function J(o,i,N){return o?o.code?{code:N||o.code,message:o.msg||E.FAILURE,data:o}:{code:N||e.FAILURE,message:i||E.FAILURE,data:o}:{code:N||e.FAILURE,message:i||E.FAILURE,data:null}}!function(o){o[o.KICK_OUT=0]="KICK_OUT",o[o.UNAUTHORIZED=1]="UNAUTHORIZED",o[o.FORBIDDEN=2]="FORBIDDEN",o[o.ACCOUNT_TOKEN_ERROR=3]="ACCOUNT_TOKEN_ERROR",o[o.LOGGED_IN=4]="LOGGED_IN",o[o.LOGGED_OUT=5]="LOGGED_OUT",o[o.NET_BROKEN=6]="NET_BROKEN",o[o.TOKEN_EXPIRED=1026]="TOKEN_EXPIRED",o[o.TOKEN_INCORRECT=1027]="TOKEN_INCORRECT";}(o||(o={})),function(o){o[o.FAILURE=-1]="FAILURE",o[o.SUCCESS=0]="SUCCESS",o[o.UNAUTHORIZED=402]="UNAUTHORIZED",o[o.TOKEN_EXPIRED=1026]="TOKEN_EXPIRED",o[o.TOKEN_INCORRECT=1027]="TOKEN_INCORRECT",o[o.IM_REUSE_NOT_LOGIN=100004]="IM_REUSE_NOT_LOGIN",o[o.IM_REUSE_ACCOUNT_NOT_MATCH=100005]="IM_REUSE_ACCOUNT_NOT_MATCH";}(e||(e={})),function(o){o.SUCCESS="success",o.FAILURE="failure",o.NOT_SUPPORT="not support",o.NOT_INIT_RTC="not init rtc",o.NOT_INIT_CHATROOM="not init chatroom",o.NOT_JOIN_ROOMKIT="not join roomkit",o.NOT_JOIN_RTC="not join rtc",o.NOT_JOIN_WHITEBOARD="not join whiteboard",o.NOT_INIT_PREVIEW="not init preview",o.NOT_JOIN_CHATROOM="not join chatroom",o.CHATROOM_JOIN_FAIL="join chatroom fail",o.NO_UUID="lack of uuid",o.NO_DEVICEID="no deviceId",o.GET_REMOTE_MEMBER_FAILED_BY_UUID="get remote member fail by uuid",o.NO_MESSAGE_CONTENT="lack of message content",o.NO_APPKEY="lack of appKey",o.NOT_OPEN_VIDEO="not open video",o.NOT_SHARING_SCREEN="Member is not sharing screen",o.MEMBER_IS_EMPTY="Member is empty",o.PARAMS_IS_INCORRECT="params is incorrect";}(E||(E={})),function(o){o[o.kNEAudioDumpTypePCM=0]="kNEAudioDumpTypePCM",o[o.kNEAudioDumpTypeAll=1]="kNEAudioDumpTypeAll",o[o.kNEAudioDumpTypeWAV=2]="kNEAudioDumpTypeWAV";}(i||(i={})),function(o){o[o.UNKNOWN=0]="UNKNOWN",o[o.IOS=1]="IOS",o[o.ANDROID=2]="ANDROID",o[o.PC=3]="PC",o[o.WEB=4]="WEB",o[o.SIP=5]="SIP",o[o.MAC=6]="MAC",o[o.MINIAPP=7]="MINIAPP",o[o.H323=8]="H323",o[o.LINUX=9]="LINUX",o[o.OHOS=10]="OHOS";}(N||(N={})),function(o){o[o.unknown=0]="unknown",o[o.SIP=1]="SIP",o[o.APP=2]="APP";}(n||(n={})),function(o){o[o.unknown=0]="unknown",o[o.waitingCall=1]="waitingCall",o[o.calling=2]="calling",o[o.rejected=3]="rejected",o[o.noAnswer=4]="noAnswer",o[o.error=5]="error",o[o.removed=6]="removed",o[o.canceled=7]="canceled",o[o.waitingJoin=8]="waitingJoin",o[o.busy=9]="busy";}(t||(t={})),function(o){o[o.SIP=1]="SIP",o[o.H323=2]="H323";}(r||(r={})),function(o){o.speech_low_quality="speech_low_quality",o.speech_standard="speech_standard",o.music_standard="music_standard",o.standard_stereo="standard_stereo",o.high_quality="high_quality",o.high_quality_stereo="high_quality_stereo";}(d||(d={})),function(o){o[o.kNEAudioProfileDefault=0]="kNEAudioProfileDefault",o[o.kNEAudioProfileStandard=1]="kNEAudioProfileStandard",o[o.kNEAudioProfileStandardExtend=2]="kNEAudioProfileStandardExtend",o[o.kNEAudioProfileMiddleQuality=3]="kNEAudioProfileMiddleQuality",o[o.kNEAudioProfileMiddleQualityStereo=4]="kNEAudioProfileMiddleQualityStereo",o[o.kNEAudioProfileHighQuality=5]="kNEAudioProfileHighQuality",o[o.kNEAudioProfileHighQualityStereo=6]="kNEAudioProfileHighQualityStereo";}(a||(a={})),function(o){o[o.kNEAudioScenarioDefault=0]="kNEAudioScenarioDefault",o[o.kNEAudioScenarioSpeech=1]="kNEAudioScenarioSpeech",o[o.kNEAudioScenarioMusic=2]="kNEAudioScenarioMusic";}(A||(A={})),function(o){o[o.kNEVideoProfileUsingTemplate=-1]="kNEVideoProfileUsingTemplate",o[o.kNEVideoProfileLowest=0]="kNEVideoProfileLowest",o[o.kNEVideoProfileLow=1]="kNEVideoProfileLow",o[o.kNEVideoProfileStandard=2]="kNEVideoProfileStandard",o[o.kNEVideoProfileHD720P=3]="kNEVideoProfileHD720P",o[o.kNEVideoProfileHD1080P=4]="kNEVideoProfileHD1080P",o[o.kNEVideoProfile4KUHD=5]="kNEVideoProfile4KUHD",o[o.kNEVideoProfile8KUHD=6]="kNEVideoProfile8KUHD",o[o.kNEVideoProfileNone=7]="kNEVideoProfileNone",o[o.kNEVideoProfileMAX=6]="kNEVideoProfileMAX";}(c||(c={})),function(o){o[o.HIGH=0]="HIGH",o[o.LOW=1]="LOW",o[o.MEDIUM=2]="MEDIUM";}(_||(_={})),function(o){o[o.NERTCAudioAINSModeOff=0]="NERTCAudioAINSModeOff",o[o.NERTCAudioAINSModeNormal=1]="NERTCAudioAINSModeNormal",o[o.NERTCAudioAINSModeEnhanced=2]="NERTCAudioAINSModeEnhanced";}(R||(R={})),function(o){o[o.NONE=0]="NONE",o[o.GALLERY=1]="GALLERY",o[o.FOCUS=2]="FOCUS",o[o.SCREEN_SHARE=4]="SCREEN_SHARE";}(O||(O={})),function(o){o[o.INVALID=0]="INVALID",o[o.INIT=1]="INIT",o[o.STARTED=2]="STARTED",o[o.ENDED=3]="ENDED";}(u||(u={})),function(o){o[o.SAMPLE_RATE_32000=32e3]="SAMPLE_RATE_32000",o[o.SAMPLE_RATE_44100=44100]="SAMPLE_RATE_44100",o[o.SAMPLE_RATE_48000=48e3]="SAMPLE_RATE_48000";}(S||(S={})),function(o){o[o["LC-AAC"]=0]="LC-AAC",o[o["HE-AAC"]=1]="HE-AAC";}(l||(l={})),function(o){o[o.adaption=0]="adaption",o[o.aspectRatio_16_9=1]="aspectRatio_16_9";}(T||(T={})),function(o){o.CHINESE="CHINESE",o.ENGLISH="ENGLISH",o.JAPANESE="JAPANESE";}(I||(I={})),function(o){o[o.unknown=0]="unknown",o[o.init=1]="init",o[o.inRoom=2]="inRoom",o[o.leave=3]="leave",o[o.inviting=4]="inviting";}(C||(C={})),function(o){o[o.kConnectionUnknown=0]="kConnectionUnknown",o[o.kConnectionEthernet=1]="kConnectionEthernet",o[o.kConnectionWifi=2]="kConnectionWifi",o[o.kConnection2G=3]="kConnection2G",o[o.kConnection3G=4]="kConnection3G",o[o.kConnection4G=5]="kConnection4G",o[o.kConnectionNone=6]="kConnectionNone";}(k||(k={})),function(o){o[o.kNEVirtualBackgroundSupportFull=0]="kNEVirtualBackgroundSupportFull",o[o.kNEVirtualBackgroundSupportHardwareLimit=1]="kNEVirtualBackgroundSupportHardwareLimit",o[o.kNEVirtualBackgroundSupportPerformanceLimit=2]="kNEVirtualBackgroundSupportPerformanceLimit";}(L||(L={})),function(o){o[o.kNERoomLocalRecorderErrorNone=0]="kNERoomLocalRecorderErrorNone",o[o.kNERoomLocalRecorderFileOpenFailed=1]="kNERoomLocalRecorderFileOpenFailed",o[o.kNERoomLocalRecorderWriteFailed=2]="kNERoomLocalRecorderWriteFailed",o[o.kNERoomLocalRecorderWriteTrailerFailed=3]="kNERoomLocalRecorderWriteTrailerFailed",o[o.kNERoomLocalRecorderFailed=4]="kNERoomLocalRecorderFailed",o[o.kNERoomLocalRecorderCallbackConflict=5]="kNERoomLocalRecorderCallbackConflict",o[o.kNERoomLocalRecorderTaskAlreadyExist=6]="kNERoomLocalRecorderTaskAlreadyExist",o[o.kNERoomLocalRecorderTaskNotFound=7]="kNERoomLocalRecorderTaskNotFound",o[o.kNERoomLocalRecorderSourceNotFoundForTask=8]="kNERoomLocalRecorderSourceNotFoundForTask",o[o.kNERoomLocalRecorderInputOpenFailed=9]="kNERoomLocalRecorderInputOpenFailed",o[o.kNERoomLocalRecorderVideoStreamCreateFailed=10]="kNERoomLocalRecorderVideoStreamCreateFailed",o[o.kNERoomLocalRecorderAudioStreamCreateFailed=11]="kNERoomLocalRecorderAudioStreamCreateFailed";}(f||(f={})),function(o){o[o.main=0]="main",o[o.sub=1]="sub";}(D||(D={})),function(o){o[o.low=0]="low",o[o.meddle=1]="meddle",o[o.high=2]="high",o[o.higher=3]="higher";}(P||(P={})),function(o){o[o.fullFill=0]="fullFill",o[o.CropFill=1]="CropFill";}(U||(U={})),function(o){o[o.kNEVideoRotation_0=0]="kNEVideoRotation_0",o[o.kNEVideoRotation_90=90]="kNEVideoRotation_90",o[o.kNEVideoRotation_180=180]="kNEVideoRotation_180",o[o.kNEVideoRotation_270=270]="kNEVideoRotation_270";}(M||(M={})),function(o){o[o.kNEVideoTypeI420=0]="kNEVideoTypeI420",o[o.kNEVideoTypeNV12=1]="kNEVideoTypeNV12",o[o.kNEVideoTypeNV21=2]="kNEVideoTypeNV21",o[o.kNEVideoTypeBGRA=3]="kNEVideoTypeBGRA",o[o.kNEVideoTypeARGB=4]="kNEVideoTypeARGB",o[o.kNEVideoTypeCVPixelBuffer=5]="kNEVideoTypeCVPixelBuffer",o[o.kNEVideoTypeRGBA=6]="kNEVideoTypeRGBA";}(m||(m={})),function(o){o[o.None=-1]="None",o[o.P2P=0]="P2P";}(V||(V={})),function(o){o[o.FORWARD=0]="FORWARD",o[o.BACKWARD=1]="BACKWARD";}(s||(s={})),function(o){o[o.COMMON=0]="COMMON",o[o.WAITING_ROOM=1]="WAITING_ROOM";}(p||(p={})),function(o){o[o.NORMAL=0]="NORMAL",o[o.ONLINE_NORMAL=1]="ONLINE_NORMAL",o[o.GUEST_DESC=2]="GUEST_DESC",o[o.GUEST_ASC=3]="GUEST_ASC";}(F||(F={})),function(o){o.TEXT="text",o.IMAGE="image",o.AUDIO="audio",o.VIDEO="video",o.FILE="file",o.GEO="geo",o.CUSTOM="custom",o.TIP="tip",o.NOTIFICATION="notification",o.ATTACHSTR="attachStr";}(B||(B={})),function(o){o[o.STATE_ENABLE_CAPTION_FAIL=0]="STATE_ENABLE_CAPTION_FAIL",o[o.STATE_DISABLE_CAPTION_FAIL=1]="STATE_DISABLE_CAPTION_FAIL",o[o.STATE_ENABLE_CAPTION_SUCCESS=2]="STATE_ENABLE_CAPTION_SUCCESS",o[o.STATE_DISABLE_CAPTION_SUCCESS=3]="STATE_DISABLE_CAPTION_SUCCESS";}(G||(G={})),function(o){o[o.CODE_SUCCESS=200]="CODE_SUCCESS",o[o.CODE_INVALID_REQUEST=400]="CODE_INVALID_REQUEST",o[o.CODE_NOT_LOGGED_IN=402]="CODE_NOT_LOGGED_IN",o[o.CODE_INVALID_PARAMS=601]="CODE_INVALID_PARAMS",o[o.CODE_NO_PERMISSION=611]="CODE_NO_PERMISSION",o[o.CODE_NO_BACKEND_SERVICE=612]="CODE_NO_BACKEND_SERVICE";}(g||(g={})),function(o){o[o.RecordingStart=0]="RecordingStart",o[o.RecordingStop=1]="RecordingStop";}(H||(H={})),function(o){o[o.Disconnect=0]="Disconnect",o[o.Reconnect=1]="Reconnect";}(h||(h={})),function(o){o.UNKNOWN="UNKNOWN",o.LOGIN_STATE_ERROR="LOGIN_STATE_ERROR",o.CLOSE_BY_BACKEND="CLOSE_BY_BACKEND",o.ALL_MEMBERS_OUT="ALL_MEMBERS_OUT",o.END_OF_LIFE="END_OF_LIFE",o.CLOSE_BY_MEMBER="CLOSE_BY_MEMBER",o.KICK_OUT="KICK_OUT",o.SYNC_DATA_ERROR="SYNC_DATA_ERROR",o.LEAVE_BY_SELF="LEAVE_BY_SELF",o.kICK_BY_SELF="kICK_BY_SELF",o.MOVE_TO_WAITING_ROOM="MOVE_TO_WAITING_ROOM";}(y||(y={})),function(o){o[o.UNKNOWN=0]="UNKNOWN",o[o.EXCELLENT=1]="EXCELLENT",o[o.GOOD=2]="GOOD",o[o.POOR=3]="POOR",o[o.BAD=4]="BAD",o[o.VERYBAD=5]="VERYBAD",o[o.DOWN=6]="DOWN";}(K||(K={})),function(o){o[o.kNERtcAudioScenarioDefault=0]="kNERtcAudioScenarioDefault",o[o.kNERtcAudioScenarioSpeech=1]="kNERtcAudioScenarioSpeech",o[o.kNERtcAudioScenarioMusic=2]="kNERtcAudioScenarioMusic";}(W||(W={})),function(o){o[o.NONE=0]="NONE",o[o.CHINESE=1]="CHINESE",o[o.ENGLISH=2]="ENGLISH",o[o.JAPANESE=3]="JAPANESE";}(w||(w={})),function(o){o[o.VirtualBackground=1]="VirtualBackground";}(Y||(Y={}));

var NEAuthService = /** @class */ (function () {
    function NEAuthService(initOptions) {
        this._listenerMap = new Map();
        console.log('NEAuthService constructor');
        this._authService = initOptions.roomKit.getAuthService();
    }
    NEAuthService.prototype.addAuthListener = function (listener) {
        var _a;
        function _authListenerCallback(key) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (listener[key]) {
                listener[key].apply(listener, __spreadArray([], __read(args), false));
            }
        }
        var index = (_a = this._authService) === null || _a === void 0 ? void 0 : _a.addAuthListener(_authListenerCallback);
        this._listenerMap.set(listener, index);
    };
    NEAuthService.prototype.login = function (account, token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._authService) === null || _a === void 0 ? void 0 : _a.login(account, token, function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NEAuthService.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._authService) === null || _a === void 0 ? void 0 : _a.logout(function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NEAuthService.prototype.loginByIM = function () {
        return new Promise(function () {
            // todo
        });
    };
    NEAuthService.prototype.loginByDynamicToken = function (account, token, authType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._authService) === null || _a === void 0 ? void 0 : _a.loginByDynamicToken(account, token, authType || '0', function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NEAuthService.prototype.removeAuthListener = function (listener) {
        var _a;
        var index = this._listenerMap.get(listener);
        if (typeof index !== 'undefined') {
            (_a = this._authService) === null || _a === void 0 ? void 0 : _a.removeAuthListener(index);
        }
    };
    Object.defineProperty(NEAuthService.prototype, "isLoggedIn", {
        get: function () {
            var _a;
            return (_a = this._authService) === null || _a === void 0 ? void 0 : _a.isLoggedIn();
        },
        enumerable: false,
        configurable: true
    });
    NEAuthService.prototype.destroy = function () {
        var _a;
        (_a = this._authService) === null || _a === void 0 ? void 0 : _a.destroy();
    };
    NEAuthService.prototype.renewToken = function () {
        return new Promise(function () {
            // todo
        });
    };
    return NEAuthService;
}());

var NEMessageChannelService = /** @class */ (function () {
    function NEMessageChannelService(initOptions) {
        this._listenerMap = new Map();
        this._messageChannelService = initOptions.messageChannelService;
    }
    NEMessageChannelService.prototype.addMessageChannelListener = function (listener) {
        var _a;
        var _onCustomMessageReceived = listener.onCustomMessageReceived;
        if (_onCustomMessageReceived) {
            listener.onCustomMessageReceived = function (message) {
                var roomUuid = message.roomUuid, senderUuid = message.senderUuid, commandId = message.commandId, data = message.data;
                var resData = data;
                if (commandId === 99) {
                    resData = {
                        body: data,
                    };
                }
                _onCustomMessageReceived({
                    roomUuid: roomUuid,
                    senderUuid: senderUuid,
                    commandId: commandId,
                    data: resData,
                });
            };
        }
        function _messageChannelListenerCallback(key) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (listener[key]) {
                listener[key].apply(listener, __spreadArray([], __read(args), false));
            }
        }
        var index = (_a = this._messageChannelService) === null || _a === void 0 ? void 0 : _a.addMessageChannelListener(_messageChannelListenerCallback);
        this._listenerMap.set(listener, index);
    };
    NEMessageChannelService.prototype.removeMessageChannelListener = function (listener) {
        var _a;
        var index = this._listenerMap.get(listener);
        if (index !== undefined) {
            (_a = this._messageChannelService) === null || _a === void 0 ? void 0 : _a.removeMessageChannelListener(index);
        }
    };
    NEMessageChannelService.prototype.sendCustomMessage = function (roomUuid, userUuid, commandId, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._messageChannelService) === null || _a === void 0 ? void 0 : _a.sendCustomMessage(roomUuid, userUuid, commandId, data, function (code, message) {
                if (code === 0) {
                    resolve({ code: 0, message: null, data: null });
                }
                else {
                    reject({ code: code, message: message });
                }
            });
        });
    };
    NEMessageChannelService.prototype.sendCustomMessageToRoom = function (roomUuid, commandId, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._messageChannelService) === null || _a === void 0 ? void 0 : _a.sendCustomMessageToRoom(roomUuid, commandId, data, function (code, message) {
                if (code === 0) {
                    resolve({ code: 0, message: null, data: null });
                }
                else {
                    reject({ code: code, message: message });
                }
            });
        });
    };
    NEMessageChannelService.prototype.sendCustomMessageToRoles = function (roomUuid, commandId, roles, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._messageChannelService) === null || _a === void 0 ? void 0 : _a.sendCustomMessageToRoles(roomUuid, commandId, roles, data, function (code, message) {
                if (code === 0) {
                    resolve({ code: 0, message: null, data: null });
                }
                else {
                    reject({ code: code, message: message });
                }
            });
        });
    };
    NEMessageChannelService.prototype.queryUnreadMessageList = function (sessionId, sessionType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._messageChannelService) === null || _a === void 0 ? void 0 : _a.queryUnreadMessageList(sessionId, sessionType, function (code, message, data) {
                if (code === 0) {
                    resolve(b(data));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NEMessageChannelService.prototype.clearUnreadCount = function (sessionId, sessionType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._messageChannelService) === null || _a === void 0 ? void 0 : _a.clearUnreadCount(sessionId, sessionType, function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NEMessageChannelService.prototype.deleteSessionMessage = function (sessionId, sessionType, messageId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._messageChannelService) === null || _a === void 0 ? void 0 : _a.deleteSessionMessage(sessionId, sessionType, messageId, function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NEMessageChannelService.prototype.deleteAllSessionMessage = function (sessionId, sessionType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._messageChannelService) === null || _a === void 0 ? void 0 : _a.deleteAllSessionMessage(sessionId, sessionType, function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NEMessageChannelService.prototype.getSessionMessagesHistory = function (param) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._messageChannelService) === null || _a === void 0 ? void 0 : _a.getSessionMessagesHistory(param, function (code, message, data) {
                if (code === 0) {
                    resolve(b(data));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NEMessageChannelService.prototype.destroy = function () {
        return new Promise(function () {
            // todo
        });
    };
    return NEMessageChannelService;
}());

var NENosService = /** @class */ (function () {
    function NENosService(initOptions) {
        console.log('NENosService constructor');
        this._nosService = initOptions.roomKit.getNosService();
    }
    NENosService.prototype.setNosDownloadFilePath = function (path) {
        var _a;
        return (_a = this._nosService) === null || _a === void 0 ? void 0 : _a.setNosDownloadFilePath(path);
    };
    NENosService.prototype.uploadResource = function (path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._nosService) === null || _a === void 0 ? void 0 : _a.uploadResource(path, function (code, message, data) {
                if (code === 200) {
                    resolve(b(data));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NENosService.TAG_NAME = 'NEAuthService';
    return NENosService;
}());

var NEExtensionService = /** @class */ (function () {
    function NEExtensionService(initOptions) {
        console.log('NEExtensionService constructor');
        this._extensionService = initOptions.roomKit.getExtensionService();
    }
    NEExtensionService.prototype.loadExtension = function (type, path) {
        var _a, _b;
        return (_b = (_a = this._extensionService) === null || _a === void 0 ? void 0 : _a.loadExtension(type, path)) !== null && _b !== void 0 ? _b : -1;
    };
    NEExtensionService.prototype.enableExtension = function (type, enable, value) {
        var _a, _b;
        return (_b = (_a = this._extensionService) === null || _a === void 0 ? void 0 : _a.enableExtension(type, enable, value)) !== null && _b !== void 0 ? _b : -1;
    };
    NEExtensionService.TAG_NAME = 'NEExtensionService';
    return NEExtensionService;
}());

var NERoomLiveController = /** @class */ (function () {
    function NERoomLiveController(initOptions) {
        console.log('NERoomLiveController constructor');
        this._liveController = initOptions.liveController;
    }
    Object.defineProperty(NERoomLiveController.prototype, "isSupported", {
        get: function () {
            var _a, _b;
            return ((_b = (_a = this._liveController) === null || _a === void 0 ? void 0 : _a.isSupported) === null || _b === void 0 ? void 0 : _b.call(_a)) || false;
        },
        enumerable: false,
        configurable: true
    });
    NERoomLiveController.prototype.startLive = function (request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._liveController) === null || _a === void 0 ? void 0 : _a.startLive(request, function (code, message, data) {
                if (code === 0) {
                    resolve(b(data));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomLiveController.prototype.stopLive = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._liveController) === null || _a === void 0 ? void 0 : _a.stopLive(function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomLiveController.prototype.updateLive = function (request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._liveController) === null || _a === void 0 ? void 0 : _a.updateLive(request, function (code, message, data) {
                if (code === 0) {
                    resolve(b(data));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomLiveController.prototype.getLiveInfo = function () {
        var _a;
        var info = (_a = this._liveController) === null || _a === void 0 ? void 0 : _a.getLiveInfo();
        try {
            // 目前sdk返回的info.userUuIdList不是最新，需要取extensionConfig中的listUids
            if (info.extensionConfig) {
                var _config = JSON.parse(info.extensionConfig);
                if (Array.isArray(_config === null || _config === void 0 ? void 0 : _config.listUids)) {
                    info.userUuidList = [].concat(_config.listUids);
                }
            }
        }
        catch (error) {
            console.log('getLiveInfo json parse extensionConfig error:', error);
        }
        return info;
    };
    //  不需要实现
    NERoomLiveController.prototype.setLiveInfoFromRoomPropertiesLive = function () {
        throw new Error('Method not implemented.');
    };
    NERoomLiveController.prototype.setLiveInfo = function () {
        throw new Error('Method not implemented.');
    };
    NERoomLiveController.prototype.addLiveStreamTask = function (taskInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._liveController) === null || _a === void 0 ? void 0 : _a.addLiveStreamTask(taskInfo, function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomLiveController.prototype.updateLiveStreamTask = function (taskInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._liveController) === null || _a === void 0 ? void 0 : _a.updateLiveStreamTask(taskInfo, function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomLiveController.prototype.getBackgroundInfo = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._liveController) === null || _a === void 0 ? void 0 : _a.getBackgroundInfo(function (code, message, data) {
                if (code === 0) {
                    resolve(b(data));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomLiveController.prototype.updateBackgroundInfo = function (param) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a, _b;
            console.log('updateBackgroundInfo>>>>>>', param, (_a = _this._liveController) === null || _a === void 0 ? void 0 : _a.updateBackgroundInfo);
            (_b = _this._liveController) === null || _b === void 0 ? void 0 : _b.updateBackgroundInfo(param, function (code, message, data) {
                if (code === 0) {
                    resolve(b(data));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomLiveController.prototype.removeLiveStreamTask = function (taskId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._liveController) === null || _a === void 0 ? void 0 : _a.removeLiveStreamTask(taskId, function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    // 不需要实现
    NERoomLiveController.prototype._getUuidListByRtcUidList = function () {
        throw new Error('Method not implemented.');
    };
    return NERoomLiveController;
}());

function supportMaxVideoFPS() {
    var supportMaxVideoFPS = localStorage.getItem('NE_MEETING_SUPPORT_MAX_VIDEO_FPS');
    return supportMaxVideoFPS ? parseInt(supportMaxVideoFPS) : 30;
}
function isSupportRendererFormat() {
    var supportRendererFormat = localStorage.getItem('NE_MEETING_SUPPORT_RENDERER_FORMAT');
    if (supportRendererFormat) {
        return supportRendererFormat;
    }
    return 'yuv';
}
function isSupportRendererType() {
    var _a;
    var supportRendererType = localStorage.getItem('NE_MEETING_SUPPORT_RENDERER_TYPE');
    if (supportRendererType) {
        return supportRendererType;
    }
    /*
    if (navigator.gpu) {
      return 'webgpu'
    }
    */
    var flag = false;
    var canvas = document.createElement('canvas');
    try {
        var getContext = function (contextNames) {
            var e_1, _a;
            if (contextNames === void 0) { contextNames = ['webgl2', 'webgl', 'experimental-webgl']; }
            try {
                for (var contextNames_1 = __values(contextNames), contextNames_1_1 = contextNames_1.next(); !contextNames_1_1.done; contextNames_1_1 = contextNames_1.next()) {
                    var contextName = contextNames_1_1.value;
                    var context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext(contextName);
                    if (context) {
                        return context;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (contextNames_1_1 && !contextNames_1_1.done && (_a = contextNames_1.return)) _a.call(contextNames_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return null;
        };
        var gl = getContext();
        flag = !!gl;
        (_a = gl === null || gl === void 0 ? void 0 : gl.getExtension('WEBGL_lose_context')) === null || _a === void 0 ? void 0 : _a.loseContext();
        gl = null;
        console.log('Your browser support webGL');
    }
    catch (e) {
        console.warn('Your browser may not support webGL');
        flag = false;
    }
    return flag ? 'webgl' : 'software';
}
function getVideoFrame(yuv) {
    var width = yuv.width, height = yuv.height, data = yuv.data;
    return {
        width: width,
        height: height,
        yStride: data.yStride,
        uStride: data.uStride,
        vStride: data.vStride,
        yOffset: data.yOffset,
        uOffset: data.uOffset,
        vOffset: data.vOffset,
        yBuffer: data.bytes.subarray(0, data.yOffset),
        uBuffer: data.bytes.subarray(data.yOffset, data.uOffset),
        vBuffer: data.bytes.subarray(data.uOffset, data.vOffset),
        data: data.bytes,
        rotation: 0,
    };
}
// 生成uuid
function getUUID() {
    var date = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, function (c) {
        var r = (date + Math.random() * 16) % 16 | 0;
        date = Math.floor(date / 16);
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
}

function decodeBase64(base64, enableUnicode) {
    var binaryString = atob(base64);
    if (enableUnicode) {
        var binaryView = new Uint8Array(binaryString.length);
        for (var i = 0, n = binaryString.length; i < n; ++i) {
            binaryView[i] = binaryString.charCodeAt(i);
        }
        const decoder = new TextDecoder("utf-16le");
        return decoder.decode(new Uint16Array(binaryView.buffer));
    }
    return binaryString;
}

function createURL(base64, sourcemapArg, enableUnicodeArg) {
    var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
    var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
    var source = decodeBase64(base64, enableUnicode);
    var start = source.indexOf('\n', 10) + 1;
    var body = source.substring(start) + (sourcemap ? '\/\/# sourceMappingURL=' + sourcemap : '');
    var blob = new Blob([body], { type: 'application/javascript' });
    return URL.createObjectURL(blob);
}

function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
    var url;
    return function WorkerFactory(options) {
        url = url || createURL(base64, sourcemapArg, enableUnicodeArg);
        return new Worker(url, options);
    };
}

var WorkerFactory = /*#__PURE__*/createBase64WorkerFactory('Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewoJJ3VzZSBzdHJpY3QnOwoKCXZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9OwoKCXZhciByZW5kZXJlcl9zb2Z0d2FyZV95dXYgPSB7fTsKCgkvKgoJQ29weXJpZ2h0IChjKSAyMDE0LTIwMjQgQnJvb2tlIFZpYmJlciA8YnZpYmJlckBwb2JveC5jb20+CgoJUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZgoJdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgIlNvZnR3YXJlIiksIHRvIGRlYWwgaW4KCXRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8KCXVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mCgl0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sCglzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczoKCglUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwKCWNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuCgoJVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IKCU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MKCUZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUgoJQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSCglJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTgoJT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLgoJKi8KCgkvKioKCSAqIFJlcHJlc2VudHMgbWV0YWRhdGEgYWJvdXQgYSBZVVYgZnJhbWUgZm9ybWF0LgoJICogQHR5cGVkZWYge09iamVjdH0gWVVWRm9ybWF0CgkgKiBAcHJvcGVydHkge251bWJlcn0gd2lkdGggLSB3aWR0aCBvZiBlbmNvZGVkIGZyYW1lIGluIGx1bWEgcGl4ZWxzCgkgKiBAcHJvcGVydHkge251bWJlcn0gaGVpZ2h0IC0gaGVpZ2h0IG9mIGVuY29kZWQgZnJhbWUgaW4gbHVtYSBwaXhlbHMKCSAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjaHJvbWFXaWR0aCAtIHdpZHRoIG9mIGVuY29kZWQgZnJhbWUgaW4gY2hyb21hIHBpeGVscwoJICogQHByb3BlcnR5IHtudW1iZXJ9IGNocm9tYUhlaWdodCAtIGhlaWdodCBvZiBlbmNvZGVkIGZyYW1lIGluIGNocm9tYSBwaXhlbHMKCSAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjcm9wTGVmdCAtIHVwcGVyLWxlZnQgWCBjb29yZGluYXRlIG9mIHZpc2libGUgY3JvcCByZWdpb24sIGluIGx1bWEgcGl4ZWxzCgkgKiBAcHJvcGVydHkge251bWJlcn0gY3JvcFRvcCAtIHVwcGVyLWxlZnQgWSBjb29yZGluYXRlIG9mIHZpc2libGUgY3JvcCByZWdpb24sIGluIGx1bWEgcGl4ZWxzCgkgKiBAcHJvcGVydHkge251bWJlcn0gY3JvcFdpZHRoIC0gd2lkdGggb2YgdmlzaWJsZSBjcm9wIHJlZ2lvbiwgaW4gbHVtYSBwaXhlbHMKCSAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjcm9wSGVpZ2h0IC0gaGVpZ2h0IG9mIHZpc2libGUgY3JvcCByZWdpb24sIGluIGx1bWEgcGl4ZWxzCgkgKiBAcHJvcGVydHkge251bWJlcn0gZGlzcGxheVdpZHRoIC0gZmluYWwgZGlzcGxheSB3aWR0aCBvZiB2aXNpYmxlIHJlZ2lvbiwgaW4gbHVtYSBwaXhlbHMKCSAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkaXNwbGF5SGVpZ2h0IC0gZmluYWwgZGlzcGxheSBoZWlnaHQgb2YgdmlzaWJsZSByZWdpb24sIGluIGx1bWEgcGl4ZWxzCgkgKi8KCgkvKioKCSAqIFJlcHJlc2VudHMgdW5kZXJseWluZyBpbWFnZSBkYXRhIGZvciBhIHNpbmdsZSBsdW1hIG9yIGNocm9tYSBwbGFuZS4KCSAqIENhbm5vdCBiZSBpbnRlcnByZXRlZCB3aXRob3V0IHRoZSBmb3JtYXQgZGF0YSBmcm9tIGEgZnJhbWUgYnVmZmVyLgoJICogQHR5cGVkZWYge09iamVjdH0gWVVWUGxhbmUKCSAqIEBwcm9wZXJ0eSB7VWludDhBcnJheX0gYnl0ZXMgLSB0eXBlZCBhcnJheSBjb250YWluaW5nIGltYWdlIGRhdGEgYnl0ZXMKCSAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdHJpZGUgLSBieXRlIGRpc3RhbmNlIGJldHdlZW4gcm93cyBpbiBkYXRhCgkgKi8KCgkvKioKCSAqIFJlcHJlc2VudHMgYSBZVVYgaW1hZ2UgZnJhbWUgYnVmZmVyLCB3aXRoIGVub3VnaCBmb3JtYXQgaW5mb3JtYXRpb24KCSAqIHRvIGludGVycHJldCB0aGUgZGF0YSB1c2VmdWxseS4gQnVmZmVyIG9iamVjdHMgdXNlIGdlbmVyaWMgb2JqZWN0cwoJICogdW5kZXIgdGhlIGhvb2QgYW5kIGNhbiBiZSB0cmFuc2ZlcnJlZCBiZXR3ZWVuIHdvcmtlciB0aHJlYWRzIHVzaW5nCgkgKiB0aGUgc3RydWN0dXJlZCBjbG9uZSBhbGdvcml0aG0uCgkgKgoJICogQHR5cGVkZWYge09iamVjdH0gWVVWRnJhbWUKCSAqIEBwcm9wZXJ0eSB7WVVWRm9ybWF0fSBmb3JtYXQKCSAqIEBwcm9wZXJ0eSB7WVVWUGxhbmV9IHkKCSAqIEBwcm9wZXJ0eSB7WVVWUGxhbmV9IHUKCSAqIEBwcm9wZXJ0eSB7WVVWUGxhbmV9IHYKCSAqLwoKCS8qKgoJICogSG9sZGVyIG5hbWVzcGFjZSBmb3IgdXRpbGl0eSBmdW5jdGlvbnMgYW5kIGNvbnN0YW50cyByZWxhdGVkIHRvCgkgKiBZVVYgZnJhbWUgYW5kIHBsYW5lIGJ1ZmZlcnMuCgkgKgoJICogQG5hbWVzcGFjZQoJICovCgl2YXIgWVVWQnVmZmVyJDEgPSB7CgkgIC8qKgoJICAgKiBWYWxpZGF0ZSBhIHBsYW5lIGRpbWVuc2lvbgoJICAgKiBAcGFyYW0ge251bWJlcn0gZGltIC0gdmVydGljYWwgb3IgaG9yaXpvbnRhbCBkaW1lbnNpb24KCSAgICogQHRocm93cyBleGNlcHRpb24gb24gemVybywgbmVnYXRpdmUsIG9yIG5vbi1pbnRlZ2VyIHZhbHVlCgkgICAqLwoJICB2YWxpZGF0ZURpbWVuc2lvbjogZnVuY3Rpb24oZGltKSB7CgkgICAgaWYgKGRpbSA8PSAwIHx8IGRpbSAhPT0gKGRpbSB8IDApKSB7CgkgICAgICB0aHJvdyAnWVVWIHBsYW5lIGRpbWVuc2lvbnMgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXInOwoJICAgIH0KCSAgfSwKCgkgIC8qKgoJICAgKiBWYWxpZGF0ZSBhIHBsYW5lIG9mZnNldAoJICAgKiBAcGFyYW0ge251bWJlcn0gZGltIC0gdmVydGljYWwgb3IgaG9yaXpvbnRhbCBkaW1lbnNpb24KCSAgICogQHRocm93cyBleGNlcHRpb24gb24gbmVnYXRpdmUgb3Igbm9uLWludGVnZXIgdmFsdWUKCSAgICovCgkgIHZhbGlkYXRlT2Zmc2V0OiBmdW5jdGlvbihkaW0pIHsKCSAgICBpZiAoZGltIDwgMCB8fCBkaW0gIT09IChkaW0gfCAwKSkgewoJICAgICAgdGhyb3cgJ1lVViBwbGFuZSBvZmZzZXRzIG11c3QgYmUgYSBub24tbmVnYXRpdmUgaW50ZWdlcic7CgkgICAgfQoJICB9LAoKCSAgLyoqCgkgICAqIFZhbGlkYXRlIGFuZCBmaWxsIG91dCBhIFlVVkZvcm1hdCBvYmplY3Qgc3RydWN0dXJlLgoJICAgKgoJICAgKiBBdCBsZWFzdCB3aWR0aCBhbmQgaGVpZ2h0IGZpZWxkcyBhcmUgcmVxdWlyZWQ7IG90aGVyIGZpZWxkcyB3aWxsIGJlCgkgICAqIGRlcml2ZWQgaWYgbGVmdCBtaXNzaW5nIG9yIGVtcHR5OgoJICAgKiAtIGNocm9tYVdpZHRoIGFuZCBjaHJvbWFIZWlnaHQgd2lsbCBiZSBjb3BpZWQgZnJvbSB3aWR0aCBhbmQgaGVpZ2h0IGFzIGZvciBhIDQ6NDo0IGxheW91dAoJICAgKiAtIGNyb3BMZWZ0IGFuZCBjcm9wVG9wIHdpbGwgYmUgMAoJICAgKiAtIGNyb3BXaWR0aCBhbmQgY3JvcEhlaWdodCB3aWxsIGJlIHNldCB0byB3aGF0ZXZlciBvZiB0aGUgZnJhbWUgaXMgdmlzaWJsZSBhZnRlciBjcm9wVG9wIGFuZCBjcm9wTGVmdCBhcmUgYXBwbGllZAoJICAgKiAtIGRpc3BsYXlXaWR0aCBhbmQgZGlzcGxheUhlaWdodCB3aWxsIGJlIHNldCB0byBjcm9wV2lkdGggYW5kIGNyb3BIZWlnaHQuCgkgICAqCgkgICAqIEBwYXJhbSB7WVVWRm9ybWF0fSBmaWVsZHMgLSBpbnB1dCBmaWVsZHMsIG11c3QgaW5jbHVkZSB3aWR0aCBhbmQgaGVpZ2h0LgoJICAgKiBAcmV0dXJucyB7WVVWRm9ybWF0fSAtIHZhbGlkYXRlZCBzdHJ1Y3R1cmUsIHdpdGggYWxsIGRlcml2YWJsZSBmaWVsZHMgZmlsbGVkIG91dC4KCSAgICogQHRocm93cyBleGNlcHRpb24gb24gaW52YWxpZCBmaWVsZHMgb3IgbWlzc2luZyB3aWR0aC9oZWlnaHQKCSAgICovCgkgIGZvcm1hdDogZnVuY3Rpb24oZmllbGRzKSB7CgkgICAgdmFyIHdpZHRoID0gZmllbGRzLndpZHRoLAoJICAgICAgaGVpZ2h0ID0gZmllbGRzLmhlaWdodCwKCSAgICAgIGNocm9tYVdpZHRoID0gZmllbGRzLmNocm9tYVdpZHRoIHx8IHdpZHRoLAoJICAgICAgY2hyb21hSGVpZ2h0ID0gZmllbGRzLmNocm9tYUhlaWdodCB8fCBoZWlnaHQsCgkgICAgICBjcm9wTGVmdCA9IGZpZWxkcy5jcm9wTGVmdCB8fCAwLAoJICAgICAgY3JvcFRvcCA9IGZpZWxkcy5jcm9wVG9wIHx8IDAsCgkgICAgICBjcm9wV2lkdGggPSBmaWVsZHMuY3JvcFdpZHRoIHx8IHdpZHRoIC0gY3JvcExlZnQsCgkgICAgICBjcm9wSGVpZ2h0ID0gZmllbGRzLmNyb3BIZWlnaHQgfHwgaGVpZ2h0IC0gY3JvcFRvcCwKCSAgICAgIGRpc3BsYXlXaWR0aCA9IGZpZWxkcy5kaXNwbGF5V2lkdGggfHwgY3JvcFdpZHRoLAoJICAgICAgZGlzcGxheUhlaWdodCA9IGZpZWxkcy5kaXNwbGF5SGVpZ2h0IHx8IGNyb3BIZWlnaHQ7CgkgICAgdGhpcy52YWxpZGF0ZURpbWVuc2lvbih3aWR0aCk7CgkgICAgdGhpcy52YWxpZGF0ZURpbWVuc2lvbihoZWlnaHQpOwoJICAgIHRoaXMudmFsaWRhdGVEaW1lbnNpb24oY2hyb21hV2lkdGgpOwoJICAgIHRoaXMudmFsaWRhdGVEaW1lbnNpb24oY2hyb21hSGVpZ2h0KTsKCSAgICB0aGlzLnZhbGlkYXRlT2Zmc2V0KGNyb3BMZWZ0KTsKCSAgICB0aGlzLnZhbGlkYXRlT2Zmc2V0KGNyb3BUb3ApOwoJICAgIHRoaXMudmFsaWRhdGVEaW1lbnNpb24oY3JvcFdpZHRoKTsKCSAgICB0aGlzLnZhbGlkYXRlRGltZW5zaW9uKGNyb3BIZWlnaHQpOwoJICAgIHRoaXMudmFsaWRhdGVEaW1lbnNpb24oZGlzcGxheVdpZHRoKTsKCSAgICB0aGlzLnZhbGlkYXRlRGltZW5zaW9uKGRpc3BsYXlIZWlnaHQpOwoJICAgIHJldHVybiB7CgkgICAgICB3aWR0aDogd2lkdGgsCgkgICAgICBoZWlnaHQ6IGhlaWdodCwKCSAgICAgIGNocm9tYVdpZHRoOiBjaHJvbWFXaWR0aCwKCSAgICAgIGNocm9tYUhlaWdodDogY2hyb21hSGVpZ2h0LAoJICAgICAgY3JvcExlZnQ6IGNyb3BMZWZ0LAoJICAgICAgY3JvcFRvcDogY3JvcFRvcCwKCSAgICAgIGNyb3BXaWR0aDogY3JvcFdpZHRoLAoJICAgICAgY3JvcEhlaWdodDogY3JvcEhlaWdodCwKCSAgICAgIGRpc3BsYXlXaWR0aDogZGlzcGxheVdpZHRoLAoJICAgICAgZGlzcGxheUhlaWdodDogZGlzcGxheUhlaWdodAoJICAgIH07CgkgIH0sCgoJICAvKioKCSAgICogUGljayBhIHN1aXRhYmxlIHN0cmlkZSBmb3IgYSBjdXN0b20tYWxsb2NhdGVkIHRoaW5neQoJICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggLSB3aWR0aCBpbiBieXRlcwoJICAgKiBAcmV0dXJucyB7bnVtYmVyfSAtIG5ldyB3aWR0aCBpbiBieXRlcyBhdCBsZWFzdCBhcyBsYXJnZQoJICAgKiBAdGhyb3dzIGV4Y2VwdGlvbiBvbiBpbnZhbGlkIGlucHV0IHdpZHRoCgkgICAqLwoJICBzdWl0YWJsZVN0cmlkZTogZnVuY3Rpb24od2lkdGgpIHsKCSAgICBZVVZCdWZmZXIkMS52YWxpZGF0ZURpbWVuc2lvbih3aWR0aCk7CgkgICAgdmFyIGFsaWdubWVudCA9IDQsCgkgICAgICByZW1haW5kZXIgPSB3aWR0aCAlIGFsaWdubWVudDsKCSAgICBpZiAocmVtYWluZGVyID09IDApIHsKCSAgICAgIHJldHVybiB3aWR0aDsKCSAgICB9IGVsc2UgewoJICAgICAgcmV0dXJuIHdpZHRoICsgKGFsaWdubWVudCAtIHJlbWFpbmRlcik7CgkgICAgfQoJICB9LAoKCSAgLyoqCgkgICAqIEFsbG9jYXRlIG9yIGV4dHJhY3QgYSBZVVZQbGFuZSBvYmplY3QgZnJvbSBnaXZlbiBkaW1lbnNpb25zL3NvdXJjZS4KCSAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gd2lkdGggaW4gcGl4ZWxzCgkgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBoZWlnaHQgaW4gcGl4ZWxzCgkgICAqIEBwYXJhbSB7VWludDhBcnJheX0gc291cmNlIC0gaW5wdXQgYnl0ZSBhcnJheTsgb3B0aW9uYWwgKHdpbGwgY3JlYXRlIGVtcHR5IGJ1ZmZlciBpZiBtaXNzaW5nKQoJICAgKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIC0gcm93IGxlbmd0aCBpbiBieXRlczsgb3B0aW9uYWwgKHdpbGwgY3JlYXRlIGEgZGVmYXVsdCBpZiBtaXNzaW5nKQoJICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IC0gb2Zmc2V0IGludG8gc291cmNlIGFycmF5IHRvIGV4dHJhY3Q7IG9wdGlvbmFsICh3aWxsIHN0YXJ0IGF0IDAgaWYgbWlzc2luZykKCSAgICogQHJldHVybnMge1lVVlBsYW5lfSAtIGZyZXNobHkgYWxsb2NhdGVkIHBsYW5hciBidWZmZXIKCSAgICovCgkgIGFsbG9jUGxhbmU6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQsIHNvdXJjZSwgc3RyaWRlLCBvZmZzZXQpIHsKCSAgICB2YXIgc2l6ZSwgYnl0ZXM7CgoJICAgIHRoaXMudmFsaWRhdGVEaW1lbnNpb24od2lkdGgpOwoJICAgIHRoaXMudmFsaWRhdGVEaW1lbnNpb24oaGVpZ2h0KTsKCgkgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7CgoJICAgIHN0cmlkZSA9IHN0cmlkZSB8fCB0aGlzLnN1aXRhYmxlU3RyaWRlKHdpZHRoKTsKCSAgICB0aGlzLnZhbGlkYXRlRGltZW5zaW9uKHN0cmlkZSk7CgkgICAgaWYgKHN0cmlkZSA8IHdpZHRoKSB7CgkgICAgICB0aHJvdyAiSW52YWxpZCBpbnB1dCBzdHJpZGUgZm9yIFlVViBwbGFuZTsgbXVzdCBiZSBsYXJnZXIgdGhhbiB3aWR0aCI7CgkgICAgfQoKCSAgICBzaXplID0gc3RyaWRlICogaGVpZ2h0OwoKCSAgICBpZiAoc291cmNlKSB7CgkgICAgICBpZiAoc291cmNlLmxlbmd0aCAtIG9mZnNldCA8IHNpemUpIHsKCSAgICAgICAgdGhyb3cgIkludmFsaWQgaW5wdXQgYnVmZmVyIGZvciBZVVYgcGxhbmU7IG11c3QgYmUgbGFyZ2UgZW5vdWdoIGZvciBzdHJpZGUgdGltZXMgaGVpZ2h0IjsKCSAgICAgIH0KCSAgICAgIGJ5dGVzID0gc291cmNlLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgc2l6ZSk7CgkgICAgfSBlbHNlIHsKCSAgICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSk7CgkgICAgICBzdHJpZGUgPSBzdHJpZGUgfHwgdGhpcy5zdWl0YWJsZVN0cmlkZSh3aWR0aCk7CgkgICAgfQoKCSAgICByZXR1cm4gewoJICAgICAgYnl0ZXM6IGJ5dGVzLAoJICAgICAgc3RyaWRlOiBzdHJpZGUKCSAgICB9OwoJICB9LAoKCSAgLyoqCgkgICAqIEFsbG9jYXRlIGEgbmV3IFlVVlBsYW5lIG9iamVjdCBiaWcgZW5vdWdoIGZvciBhIGx1bWEgcGxhbmUgaW4gdGhlIGdpdmVuIGZvcm1hdAoJICAgKiBAcGFyYW0ge1lVVkZvcm1hdH0gZm9ybWF0IC0gdGFyZ2V0IGZyYW1lIGZvcm1hdAoJICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IHNvdXJjZSAtIGlucHV0IGJ5dGUgYXJyYXk7IG9wdGlvbmFsICh3aWxsIGNyZWF0ZSBlbXB0eSBidWZmZXIgaWYgbWlzc2luZykKCSAgICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSAtIHJvdyBsZW5ndGggaW4gYnl0ZXM7IG9wdGlvbmFsICh3aWxsIGNyZWF0ZSBhIGRlZmF1bHQgaWYgbWlzc2luZykKCSAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCAtIG9mZnNldCBpbnRvIHNvdXJjZSBhcnJheSB0byBleHRyYWN0OyBvcHRpb25hbCAod2lsbCBzdGFydCBhdCAwIGlmIG1pc3NpbmcpCgkgICAqIEByZXR1cm5zIHtZVVZQbGFuZX0gLSBmcmVzaGx5IGFsbG9jYXRlZCBwbGFuYXIgYnVmZmVyCgkgICAqLwoJICBsdW1hUGxhbmU6IGZ1bmN0aW9uKGZvcm1hdCwgc291cmNlLCBzdHJpZGUsIG9mZnNldCkgewoJICAgIHJldHVybiB0aGlzLmFsbG9jUGxhbmUoZm9ybWF0LndpZHRoLCBmb3JtYXQuaGVpZ2h0LCBzb3VyY2UsIHN0cmlkZSwgb2Zmc2V0KTsKCSAgfSwKCgkgIC8qKgoJICAgKiBBbGxvY2F0ZSBhIG5ldyBZVVZQbGFuZSBvYmplY3QgYmlnIGVub3VnaCBmb3IgYSBjaHJvbWEgcGxhbmUgaW4gdGhlIGdpdmVuIGZvcm1hdCwKCSAgICogb3B0aW9uYWxseSBjb3B5aW5nIGRhdGEgZnJvbSBhbiBleGlzdGluZyBidWZmZXIuCgkgICAqCgkgICAqIEBwYXJhbSB7WVVWRm9ybWF0fSBmb3JtYXQgLSB0YXJnZXQgZnJhbWUgZm9ybWF0CgkgICAqIEBwYXJhbSB7VWludDhBcnJheX0gc291cmNlIC0gaW5wdXQgYnl0ZSBhcnJheTsgb3B0aW9uYWwgKHdpbGwgY3JlYXRlIGVtcHR5IGJ1ZmZlciBpZiBtaXNzaW5nKQoJICAgKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIC0gcm93IGxlbmd0aCBpbiBieXRlczsgb3B0aW9uYWwgKHdpbGwgY3JlYXRlIGEgZGVmYXVsdCBpZiBtaXNzaW5nKQoJICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IC0gb2Zmc2V0IGludG8gc291cmNlIGFycmF5IHRvIGV4dHJhY3Q7IG9wdGlvbmFsICh3aWxsIHN0YXJ0IGF0IDAgaWYgbWlzc2luZykKCSAgICogQHJldHVybnMge1lVVlBsYW5lfSAtIGZyZXNobHkgYWxsb2NhdGVkIHBsYW5hciBidWZmZXIKCSAgICovCgkgIGNocm9tYVBsYW5lOiBmdW5jdGlvbihmb3JtYXQsIHNvdXJjZSwgc3RyaWRlLCBvZmZzZXQpIHsKCSAgICByZXR1cm4gdGhpcy5hbGxvY1BsYW5lKGZvcm1hdC5jaHJvbWFXaWR0aCwgZm9ybWF0LmNocm9tYUhlaWdodCwgc291cmNlLCBzdHJpZGUsIG9mZnNldCk7CgkgIH0sCgoJICAvKioKCSAgICogQWxsb2NhdGUgYSBuZXcgWVVWRnJhbWUgb2JqZWN0IGJpZyBlbm91Z2ggZm9yIHRoZSBnaXZlbiBmb3JtYXQKCSAgICogQHBhcmFtIHtZVVZGb3JtYXR9IGZvcm1hdCAtIHRhcmdldCBmcmFtZSBmb3JtYXQKCSAgICogQHBhcmFtIHtZVVZQbGFuZX0geSAtIG9wdGlvbmFsIFkgcGxhbmU7IGlmIG1pc3NpbmcsIGZyZXNoIG9uZSB3aWxsIGJlIGFsbG9jYXRlZAoJICAgKiBAcGFyYW0ge1lVVlBsYW5lfSB1IC0gb3B0aW9uYWwgVSBwbGFuZTsgaWYgbWlzc2luZywgZnJlc2ggb25lIHdpbGwgYmUgYWxsb2NhdGVkCgkgICAqIEBwYXJhbSB7WVVWUGxhbmV9IHYgLSBvcHRpb25hbCBWIHBsYW5lOyBpZiBtaXNzaW5nLCBmcmVzaCBvbmUgd2lsbCBiZSBhbGxvY2F0ZWQKCSAgICogQHJldHVybnMge1lVVkZyYW1lfSAtIGZyZXNobHkgYWxsb2NhdGVkIGZyYW1lIGJ1ZmZlcgoJICAgKi8KCSAgZnJhbWU6IGZ1bmN0aW9uKGZvcm1hdCwgeSwgdSwgdikgewoJICAgIHkgPSB5IHx8IHRoaXMubHVtYVBsYW5lKGZvcm1hdCk7CgkgICAgdSA9IHUgfHwgdGhpcy5jaHJvbWFQbGFuZShmb3JtYXQpOwoJICAgIHYgPSB2IHx8IHRoaXMuY2hyb21hUGxhbmUoZm9ybWF0KTsKCSAgICByZXR1cm4gewoJICAgICAgZm9ybWF0OiBmb3JtYXQsCgkgICAgICB5OiB5LAoJICAgICAgdTogdSwKCSAgICAgIHY6IHYKCSAgICB9CgkgIH0sCgoJICAvKioKCSAgICogRHVwbGljYXRlIGEgcGxhbmUgdXNpbmcgbmV3IGJ1ZmZlciBtZW1vcnkuCgkgICAqIEBwYXJhbSB7WVVWUGxhbmV9IHBsYW5lIC0gaW5wdXQgcGxhbmUgdG8gY29weQoJICAgKiBAcmV0dXJucyB7WVVWUGxhbmV9IC0gZnJlc2hseSBhbGxvY2F0ZWQgYW5kIGZpbGxlZCBwbGFuYXIgYnVmZmVyCgkgICAqLwoJICBjb3B5UGxhbmU6IGZ1bmN0aW9uKHBsYW5lKSB7CgkgICAgcmV0dXJuIHsKCSAgICAgIGJ5dGVzOiBwbGFuZS5ieXRlcy5zbGljZSgpLAoJICAgICAgc3RyaWRlOiBwbGFuZS5zdHJpZGUKCSAgICB9OwoJICB9LAoKCSAgLyoqCgkgICAqIER1cGxpY2F0ZSBhIGZyYW1lIHVzaW5nIG5ldyBidWZmZXIgbWVtb3J5LgoJICAgKiBAcGFyYW0ge1lVVkZyYW1lfSBmcmFtZSAtIGlucHV0IGZyYW1lIHRvIGNvcHlGcmFtZQoJICAgKiBAcmV0dXJucyB7WVVWRnJhbWV9IC0gZnJlc2hseSBhbGxvY2F0ZWQgYW5kIGZpbGxlZCBmcmFtZSBidWZmZXIKCSAgICovCgkgIGNvcHlGcmFtZTogZnVuY3Rpb24oZnJhbWUpIHsKCSAgICByZXR1cm4gewoJICAgICAgZm9ybWF0OiBmcmFtZS5mb3JtYXQsCgkgICAgICB5OiB0aGlzLmNvcHlQbGFuZShmcmFtZS55KSwKCSAgICAgIHU6IHRoaXMuY29weVBsYW5lKGZyYW1lLnUpLAoJICAgICAgdjogdGhpcy5jb3B5UGxhbmUoZnJhbWUudikKCSAgICB9CgkgIH0sCgoJICAvKioKCSAgICogTGlzdCB0aGUgYmFja2luZyBidWZmZXJzIGZvciB0aGUgZnJhbWUncyBwbGFuZXMgZm9yIHRyYW5zZmVyIGJldHdlZW4KCSAgICogdGhyZWFkcyB2aWEgV29ya2VyLnBvc3RNZXNzYWdlLgoJICAgKiBAcGFyYW0ge1lVVkZyYW1lfSBmcmFtZSAtIGlucHV0IGZyYW1lCgkgICAqIEByZXR1cm5zIHtBcnJheX0gLSBsaXN0IG9mIHRyYW5zZmVyYWJsZSBvYmplY3RzCgkgICAqLwoJICB0cmFuc2ZlcmFibGVzOiBmdW5jdGlvbihmcmFtZSkgewoJICAgIHJldHVybiBbZnJhbWUueS5ieXRlcy5idWZmZXIsIGZyYW1lLnUuYnl0ZXMuYnVmZmVyLCBmcmFtZS52LmJ5dGVzLmJ1ZmZlcl07CgkgIH0KCX07CgoJdmFyIHl1dkJ1ZmZlciA9IFlVVkJ1ZmZlciQxOwoKCXZhciB5dXZDYW52YXMgPSB7ZXhwb3J0czoge319OwoKCXZhciBGcmFtZVNpbmsgPSB7ZXhwb3J0czoge319OwoKCShmdW5jdGlvbigpIHsKCgkgIC8qKgoJICAgKiBDcmVhdGUgYSBZVVZDYW52YXMgYW5kIGF0dGFjaCBpdCB0byBhbiBIVE1MNSBjYW52YXMgZWxlbWVudC4KCSAgICoKCSAgICogVGhpcyB3aWxsIHRha2Ugb3ZlciB0aGUgZHJhd2luZyBjb250ZXh0IG9mIHRoZSBjYW52YXMgYW5kIG1heSB0dXJuCgkgICAqIGl0IGludG8gYSBXZWJHTCAzZCBjYW52YXMgaWYgcG9zc2libGUuIERvIG5vdCBhdHRlbXB0IHRvIHVzZSB0aGUKCSAgICogZHJhd2luZyBjb250ZXh0IGRpcmVjdGx5IGFmdGVyIHRoaXMuCgkgICAqCgkgICAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyAtIEhUTUwgY2FudmFzIGVsZW1lbnQgdG8gYXR0YWNoIHRvCgkgICAqIEBwYXJhbSB7WVVWQ2FudmFzT3B0aW9uc30gb3B0aW9ucyAtIG1hcCBvZiBvcHRpb25zCgkgICAqIEB0aHJvd3MgZXhjZXB0aW9uIGlmIFdlYkdMIHJlcXVlc3RlZCBidXQgdW5hdmFpbGFibGUKCSAgICogQGNvbnN0cnVjdG9yCgkgICAqIEBhYnN0cmFjdAoJICAgKi8KCSAgZnVuY3Rpb24gRnJhbWVTaW5rJDEoY2FudmFzLCBvcHRpb25zKSB7CgkgICAgdGhyb3cgbmV3IEVycm9yKCdhYnN0cmFjdCcpOwoJICB9CgoJICAvKioKCSAgICogRHJhdyBhIHNpbmdsZSBZVVYgZnJhbWUgb24gdGhlIHVuZGVybHlpbmcgY2FudmFzLCBjb252ZXJ0aW5nIHRvIFJHQi4KCSAgICogSWYgbmVjZXNzYXJ5IHRoZSBjYW52YXMgd2lsbCBiZSByZXNpemVkIHRvIHRoZSBvcHRpbWFsIHBpeGVsIHNpemUKCSAgICogZm9yIHRoZSBnaXZlbiBidWZmZXIncyBmb3JtYXQuCgkgICAqCgkgICAqIEBwYXJhbSB7WVVWQnVmZmVyfSBidWZmZXIgLSB0aGUgWVVWIGJ1ZmZlciB0byBkcmF3CgkgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3l1di1idWZmZXJ8eXV2LWJ1ZmZlcn0gZm9yIGZvcm1hdAoJICAgKi8KCSAgRnJhbWVTaW5rJDEucHJvdG90eXBlLmRyYXdGcmFtZSA9IGZ1bmN0aW9uKGJ1ZmZlcikgewoJICAgIHRocm93IG5ldyBFcnJvcignYWJzdHJhY3QnKTsKCSAgfTsKCgkgIC8qKgoJICAgKiBDbGVhciB0aGUgY2FudmFzIHVzaW5nIGFwcHJvcHJpYXRlIHVuZGVybHlpbmcgMmQgb3IgM2QgY29udGV4dC4KCSAgICovCgkgIEZyYW1lU2luayQxLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkgewoJICAgIHRocm93IG5ldyBFcnJvcignYWJzdHJhY3QnKTsKCSAgfTsKCgkgIEZyYW1lU2luay5leHBvcnRzID0gRnJhbWVTaW5rJDE7CgoJfSkoKTsKCgl2YXIgU29mdHdhcmVGcmFtZVNpbmsgPSB7ZXhwb3J0czoge319OwoKCXZhciBZQ2JDciA9IHtleHBvcnRzOiB7fX07CgoJdmFyIGRlcG93ZXIgPSB7ZXhwb3J0czoge319OwoKCS8qCglDb3B5cmlnaHQgKGMpIDIwMTQtMjAyNCBCcm9va2UgVmliYmVyIDxidmliYmVyQHBvYm94LmNvbT4KCglQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mCgl0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAiU29mdHdhcmUiKSwgdG8gZGVhbCBpbgoJdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0bwoJdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YKCXRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywKCXN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOgoKCVRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbAoJY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS4KCglUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgIkFTIElTIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUgoJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUwoJRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SCglDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIKCUlOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOCglDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLgoJKi8KCgkoZnVuY3Rpb24oKSB7CgoJICAvKioKCSAgICogQ29udmVydCBhIHJhdGlvIGludG8gYSBiaXQtc2hpZnQgY291bnQ7IGZvciBpbnN0YW5jZSBhIHJhdGlvIG9mIDIKCSAgICogYmVjb21lcyBhIGJpdC1zaGlmdCBvZiAxLCB3aGlsZSBhIHJhdGlvIG9mIDEgaXMgYSBiaXQtc2hpZnQgb2YgMC4KCSAgICoKCSAgICogQGF1dGhvciBCcm9va2UgVmliYmVyIDxidmliYmVyQHBvYm94LmNvbT4KCSAgICogQGNvcHlyaWdodCAyMDE2LTIwMjQKCSAgICogQGxpY2Vuc2UgTUlULXN0eWxlCgkgICAqCgkgICAqIEBwYXJhbSB7bnVtYmVyfSByYXRpbyAtIHRoZSBpbnRlZ2VyIHJhdGlvIHRvIGNvbnZlcnQuCgkgICAqIEByZXR1cm5zIHtudW1iZXJ9IC0gbnVtYmVyIG9mIGJpdHMgdG8gc2hpZnQgdG8gbXVsdGlwbHkvZGl2aWRlIGJ5IHRoZSByYXRpby4KCSAgICogQHRocm93cyBleGNlcHRpb24gaWYgZ2l2ZW4gYSBub24tcG93ZXItb2YtdHdvCgkgICAqLwoJICBmdW5jdGlvbiBkZXBvd2VyJDEocmF0aW8pIHsKCSAgICB2YXIgc2hpZnRDb3VudCA9IDAsCgkgICAgICBuID0gcmF0aW8gPj4gMTsKCSAgICB3aGlsZSAobiAhPSAwKSB7CgkgICAgICBuID0gbiA+PiAxOwoJICAgICAgc2hpZnRDb3VudCsrOwoJICAgIH0KCSAgICBpZiAocmF0aW8gIT09ICgxIDw8IHNoaWZ0Q291bnQpKSB7CgkgICAgICB0aHJvdyAnY2hyb21hIHBsYW5lIGRpbWVuc2lvbnMgbXVzdCBiZSBwb3dlciBvZiAyIHJhdGlvIHRvIGx1bWEgcGxhbmUgZGltZW5zaW9uczsgZ290ICcgKyByYXRpbzsKCSAgICB9CgkgICAgcmV0dXJuIHNoaWZ0Q291bnQ7CgkgIH0KCgkgIGRlcG93ZXIuZXhwb3J0cyA9IGRlcG93ZXIkMTsKCX0pKCk7CgoJLyoKCUNvcHlyaWdodCAoYykgMjAxNC0yMDI0IEJyb29rZSBWaWJiZXIgPGJ2aWJiZXJAcG9ib3guY29tPgoKCVBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YKCXRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlICJTb2Z0d2FyZSIpLCB0byBkZWFsIGluCgl0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvCgl1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZgoJdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLAoJc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6CgoJVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsCgljb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLgoKCVRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAiQVMgSVMiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SCglNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTCglGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IKCUNPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUgoJSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4KCUNPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuCgkqLwoKCShmdW5jdGlvbigpIHsKCgkJdmFyIGRlcG93ZXIkMSA9IGRlcG93ZXIuZXhwb3J0czsKCgkJLyoqCgkJICogQmFzaWMgWUNiQ3ItPlJHQiBjb252ZXJzaW9uCgkJICoKCQkgKiBAYXV0aG9yIEJyb29rZSBWaWJiZXIgPGJ2aWJiZXJAcG9ib3guY29tPgoJCSAqIEBjb3B5cmlnaHQgMjAxNC0yMDI0CgkJICogQGxpY2Vuc2UgTUlULXN0eWxlCgkJICoKCQkgKiBAcGFyYW0ge1lVVkZyYW1lfSBidWZmZXIgLSBpbnB1dCBmcmFtZSBidWZmZXIKCQkgKiBAcGFyYW0ge1VpbnQ4Q2xhbXBlZEFycmF5fSBvdXRwdXQgLSBhcnJheSB0byBkcmF3IFJHQkEgaW50bwoJCSAqIEFzc3VtZXMgdGhhdCB0aGUgb3V0cHV0IGFycmF5IGFscmVhZHkgaGFzIGFscGhhIGNoYW5uZWwgc2V0IHRvIG9wYXF1ZS4KCQkgKi8KCQlmdW5jdGlvbiBjb252ZXJ0WUNiQ3IoYnVmZmVyLCBvdXRwdXQpIHsKCQkJdmFyIHdpZHRoID0gYnVmZmVyLmZvcm1hdC53aWR0aCB8IDAsCgkJCQloZWlnaHQgPSBidWZmZXIuZm9ybWF0LmhlaWdodCB8IDAsCgkJCQloZGVjID0gZGVwb3dlciQxKGJ1ZmZlci5mb3JtYXQud2lkdGggLyBidWZmZXIuZm9ybWF0LmNocm9tYVdpZHRoKSB8IDAsCgkJCQl2ZGVjID0gZGVwb3dlciQxKGJ1ZmZlci5mb3JtYXQuaGVpZ2h0IC8gYnVmZmVyLmZvcm1hdC5jaHJvbWFIZWlnaHQpIHwgMCwKCQkJCWJ5dGVzWSA9IGJ1ZmZlci55LmJ5dGVzLAoJCQkJYnl0ZXNDYiA9IGJ1ZmZlci51LmJ5dGVzLAoJCQkJYnl0ZXNDciA9IGJ1ZmZlci52LmJ5dGVzLAoJCQkJc3RyaWRlWSA9IGJ1ZmZlci55LnN0cmlkZSB8IDAsCgkJCQlzdHJpZGVDYiA9IGJ1ZmZlci51LnN0cmlkZSB8IDAsCgkJCQlzdHJpZGVDciA9IGJ1ZmZlci52LnN0cmlkZSB8IDAsCgkJCQlvdXRTdHJpZGUgPSB3aWR0aCA8PCAyLAoJCQkJWVB0ciA9IDAsIFkwUHRyID0gMCwgWTFQdHIgPSAwLAoJCQkJQ2JQdHIgPSAwLCBDclB0ciA9IDAsCgkJCQlvdXRQdHIgPSAwLCBvdXRQdHIwID0gMCwgb3V0UHRyMSA9IDAsCgkJCQljb2xvckNiID0gMCwgY29sb3JDciA9IDAsCgkJCQltdWx0WSA9IDAsIG11bHRDclIgPSAwLCBtdWx0Q2JDckcgPSAwLCBtdWx0Q2JCID0gMCwKCQkJCXggPSAwLCB5ID0gMCwgeGRlYyA9IDAsIHlkZWMgPSAwOwoKCQkJaWYgKGhkZWMgPT0gMSAmJiB2ZGVjID09IDEpIHsKCQkJCS8vIE9wdGltaXplIGZvciA0OjI6MCwgd2hpY2ggaXMgbW9zdCBjb21tb24KCQkJCW91dFB0cjAgPSAwOwoJCQkJb3V0UHRyMSA9IG91dFN0cmlkZTsKCQkJCXlkZWMgPSAwOwoJCQkJZm9yICh5ID0gMDsgeSA8IGhlaWdodDsgeSArPSAyKSB7CgkJCQkJWTBQdHIgPSB5ICogc3RyaWRlWSB8IDA7CgkJCQkJWTFQdHIgPSBZMFB0ciArIHN0cmlkZVkgfCAwOwoJCQkJCUNiUHRyID0geWRlYyAqIHN0cmlkZUNiIHwgMDsKCQkJCQlDclB0ciA9IHlkZWMgKiBzdHJpZGVDciB8IDA7CgkJCQkJZm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4ICs9IDIpIHsKCQkJCQkJY29sb3JDYiA9IGJ5dGVzQ2JbQ2JQdHIrK10gfCAwOwoJCQkJCQljb2xvckNyID0gYnl0ZXNDcltDclB0cisrXSB8IDA7CgoJCQkJCQkvLyBRdWlja2llIFlVViBjb252ZXJzaW9uCgkJCQkJCS8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1lDYkNyI0lUVS1SX0JULjIwMjBfY29udmVyc2lvbgoJCQkJCQkvLyBtdWx0aXBsaWVkIGJ5IDI1NiBmb3IgaW50ZWdlci1mcmllbmRsaW5lc3MKCQkJCQkJbXVsdENyUiAgID0gKDQwOSAqIGNvbG9yQ3IgfCAwKSAtIDU3MDg4IHwgMDsKCQkJCQkJbXVsdENiQ3JHID0gKDEwMCAqIGNvbG9yQ2IgfCAwKSArICgyMDggKiBjb2xvckNyIHwgMCkgLSAzNDgxNiB8IDA7CgkJCQkJCW11bHRDYkIgICA9ICg1MTYgKiBjb2xvckNiIHwgMCkgLSA3MDkxMiB8IDA7CgoJCQkJCQltdWx0WSA9IDI5OCAqIGJ5dGVzWVtZMFB0cisrXSB8IDA7CgkJCQkJCW91dHB1dFtvdXRQdHIwICAgIF0gPSAobXVsdFkgKyBtdWx0Q3JSKSA+PiA4OwoJCQkJCQlvdXRwdXRbb3V0UHRyMCArIDFdID0gKG11bHRZIC0gbXVsdENiQ3JHKSA+PiA4OwoJCQkJCQlvdXRwdXRbb3V0UHRyMCArIDJdID0gKG11bHRZICsgbXVsdENiQikgPj4gODsKCQkJCQkJb3V0UHRyMCArPSA0OwoKCQkJCQkJbXVsdFkgPSAyOTggKiBieXRlc1lbWTBQdHIrK10gfCAwOwoJCQkJCQlvdXRwdXRbb3V0UHRyMCAgICBdID0gKG11bHRZICsgbXVsdENyUikgPj4gODsKCQkJCQkJb3V0cHV0W291dFB0cjAgKyAxXSA9IChtdWx0WSAtIG11bHRDYkNyRykgPj4gODsKCQkJCQkJb3V0cHV0W291dFB0cjAgKyAyXSA9IChtdWx0WSArIG11bHRDYkIpID4+IDg7CgkJCQkJCW91dFB0cjAgKz0gNDsKCgkJCQkJCW11bHRZID0gMjk4ICogYnl0ZXNZW1kxUHRyKytdIHwgMDsKCQkJCQkJb3V0cHV0W291dFB0cjEgICAgXSA9IChtdWx0WSArIG11bHRDclIpID4+IDg7CgkJCQkJCW91dHB1dFtvdXRQdHIxICsgMV0gPSAobXVsdFkgLSBtdWx0Q2JDckcpID4+IDg7CgkJCQkJCW91dHB1dFtvdXRQdHIxICsgMl0gPSAobXVsdFkgKyBtdWx0Q2JCKSA+PiA4OwoJCQkJCQlvdXRQdHIxICs9IDQ7CgoJCQkJCQltdWx0WSA9IDI5OCAqIGJ5dGVzWVtZMVB0cisrXSB8IDA7CgkJCQkJCW91dHB1dFtvdXRQdHIxICAgIF0gPSAobXVsdFkgKyBtdWx0Q3JSKSA+PiA4OwoJCQkJCQlvdXRwdXRbb3V0UHRyMSArIDFdID0gKG11bHRZIC0gbXVsdENiQ3JHKSA+PiA4OwoJCQkJCQlvdXRwdXRbb3V0UHRyMSArIDJdID0gKG11bHRZICsgbXVsdENiQikgPj4gODsKCQkJCQkJb3V0UHRyMSArPSA0OwoJCQkJCX0KCQkJCQlvdXRQdHIwICs9IG91dFN0cmlkZTsKCQkJCQlvdXRQdHIxICs9IG91dFN0cmlkZTsKCQkJCQl5ZGVjKys7CgkJCQl9CgkJCX0gZWxzZSB7CgkJCQlvdXRQdHIgPSAwOwoJCQkJZm9yICh5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7CgkJCQkJeGRlYyA9IDA7CgkJCQkJeWRlYyA9IHkgPj4gdmRlYzsKCQkJCQlZUHRyID0geSAqIHN0cmlkZVkgfCAwOwoJCQkJCUNiUHRyID0geWRlYyAqIHN0cmlkZUNiIHwgMDsKCQkJCQlDclB0ciA9IHlkZWMgKiBzdHJpZGVDciB8IDA7CgoJCQkJCWZvciAoeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7CgkJCQkJCXhkZWMgPSB4ID4+IGhkZWM7CgkJCQkJCWNvbG9yQ2IgPSBieXRlc0NiW0NiUHRyICsgeGRlY10gfCAwOwoJCQkJCQljb2xvckNyID0gYnl0ZXNDcltDclB0ciArIHhkZWNdIHwgMDsKCgkJCQkJCS8vIFF1aWNraWUgWVVWIGNvbnZlcnNpb24KCQkJCQkJLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvWUNiQ3IjSVRVLVJfQlQuMjAyMF9jb252ZXJzaW9uCgkJCQkJCS8vIG11bHRpcGxpZWQgYnkgMjU2IGZvciBpbnRlZ2VyLWZyaWVuZGxpbmVzcwoJCQkJCQltdWx0Q3JSICAgPSAoNDA5ICogY29sb3JDciB8IDApIC0gNTcwODggfCAwOwoJCQkJCQltdWx0Q2JDckcgPSAoMTAwICogY29sb3JDYiB8IDApICsgKDIwOCAqIGNvbG9yQ3IgfCAwKSAtIDM0ODE2IHwgMDsKCQkJCQkJbXVsdENiQiAgID0gKDUxNiAqIGNvbG9yQ2IgfCAwKSAtIDcwOTEyIHwgMDsKCgkJCQkJCW11bHRZID0gMjk4ICogYnl0ZXNZW1lQdHIrK10gfCAwOwoJCQkJCQlvdXRwdXRbb3V0UHRyICAgIF0gPSAobXVsdFkgKyBtdWx0Q3JSKSA+PiA4OwoJCQkJCQlvdXRwdXRbb3V0UHRyICsgMV0gPSAobXVsdFkgLSBtdWx0Q2JDckcpID4+IDg7CgkJCQkJCW91dHB1dFtvdXRQdHIgKyAyXSA9IChtdWx0WSArIG11bHRDYkIpID4+IDg7CgkJCQkJCW91dFB0ciArPSA0OwoJCQkJCX0KCQkJCX0KCQkJfQoJCX0KCgkJWUNiQ3IuZXhwb3J0cyA9IHsKCQkJY29udmVydFlDYkNyOiBjb252ZXJ0WUNiQ3IKCQl9OwoJfSkoKTsKCgkvKgoJQ29weXJpZ2h0IChjKSAyMDE0LTIwMTI0IEJyb29rZSBWaWJiZXIgPGJ2aWJiZXJAcG9ib3guY29tPgoKCVBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YKCXRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlICJTb2Z0d2FyZSIpLCB0byBkZWFsIGluCgl0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvCgl1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZgoJdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLAoJc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6CgoJVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsCgljb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLgoKCVRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAiQVMgSVMiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SCglNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTCglGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IKCUNPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUgoJSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4KCUNPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuCgkqLwoKCShmdW5jdGlvbigpIHsKCgkJdmFyIEZyYW1lU2luayQxID0gRnJhbWVTaW5rLmV4cG9ydHMsCgkJCVlDYkNyJDEgPSBZQ2JDci5leHBvcnRzOwoKCQkvKioKCQkgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXMgLSBIVE1MIGNhbnZhcyBlbGVkbWVudCB0byBhdHRhY2ggdG8KCQkgKiBAY29uc3RydWN0b3IKCQkgKi8KCQlmdW5jdGlvbiBTb2Z0d2FyZUZyYW1lU2luayQxKGNhbnZhcykgewoJCQl2YXIgc2VsZiA9IHRoaXMsCgkJCQljdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSwKCQkJCWltYWdlRGF0YSA9IG51bGwsCgkJCQlyZXNhbXBsZUNhbnZhcyA9IG51bGwsCgkJCQlyZXNhbXBsZUNvbnRleHQgPSBudWxsOwoKCgoJCQlmdW5jdGlvbiBpbml0SW1hZ2VEYXRhKHdpZHRoLCBoZWlnaHQpIHsKCQkJCWltYWdlRGF0YSA9IGN0eC5jcmVhdGVJbWFnZURhdGEod2lkdGgsIGhlaWdodCk7CgoJCQkJLy8gUHJlZmlsbCB0aGUgYWxwaGEgdG8gb3BhcXVlCgkJCQl2YXIgZGF0YSA9IGltYWdlRGF0YS5kYXRhLAoJCQkJCXBpeGVsQ291bnQgPSB3aWR0aCAqIGhlaWdodCAqIDQ7CgkJCQlmb3IgKHZhciBpID0gMDsgaSA8IHBpeGVsQ291bnQ7IGkgKz0gNCkgewoJCQkJCWRhdGFbaSArIDNdID0gMjU1OwoJCQkJfQoJCQl9CgoJCQlmdW5jdGlvbiBpbml0UmVzYW1wbGVDYW52YXMoY3JvcFdpZHRoLCBjcm9wSGVpZ2h0KSB7CgkJCQlyZXNhbXBsZUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpOwoJCQkJcmVzYW1wbGVDYW52YXMud2lkdGggPSBjcm9wV2lkdGg7CgkJCQlyZXNhbXBsZUNhbnZhcy5oZWlnaHQgPSBjcm9wSGVpZ2h0OwoJCQkJcmVzYW1wbGVDb250ZXh0ID0gcmVzYW1wbGVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTsKCQkJfQoKCQkJLyoqCgkJCSAqIEFjdHVhbGx5IGRyYXcgYSBmcmFtZSBpbnRvIHRoZSBjYW52YXMuCgkJCSAqIEBwYXJhbSB7WVVWRnJhbWV9IGJ1ZmZlciAtIFlVViBmcmFtZSBidWZmZXIgb2JqZWN0IHRvIGRyYXcKCQkJICovCgkJCXNlbGYuZHJhd0ZyYW1lID0gZnVuY3Rpb24gZHJhd0ZyYW1lKGJ1ZmZlcikgewoJCQkJdmFyIGZvcm1hdCA9IGJ1ZmZlci5mb3JtYXQ7CgoJCQkJaWYgKGNhbnZhcy53aWR0aCAhPT0gZm9ybWF0LmRpc3BsYXlXaWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBmb3JtYXQuZGlzcGxheUhlaWdodCkgewoJCQkJCS8vIEtlZXAgdGhlIGNhbnZhcyBhdCB0aGUgcmlnaHQgc2l6ZS4uLgoJCQkJCWNhbnZhcy53aWR0aCA9IGZvcm1hdC5kaXNwbGF5V2lkdGg7CgkJCQkJY2FudmFzLmhlaWdodCA9IGZvcm1hdC5kaXNwbGF5SGVpZ2h0OwoJCQkJfQoKCQkJCWlmIChpbWFnZURhdGEgPT09IG51bGwgfHwKCQkJCQkJaW1hZ2VEYXRhLndpZHRoICE9IGZvcm1hdC53aWR0aCB8fAoJCQkJCQlpbWFnZURhdGEuaGVpZ2h0ICE9IGZvcm1hdC5oZWlnaHQpIHsKCQkJCQlpbml0SW1hZ2VEYXRhKGZvcm1hdC53aWR0aCwgZm9ybWF0LmhlaWdodCk7CgkJCQl9CgoJCQkJLy8gWVVWIC0+IFJHQiBvdmVyIHRoZSBlbnRpcmUgZW5jb2RlZCBmcmFtZQoJCQkJWUNiQ3IkMS5jb252ZXJ0WUNiQ3IoYnVmZmVyLCBpbWFnZURhdGEuZGF0YSk7CgoJCQkJdmFyIHJlc2FtcGxlID0gKGZvcm1hdC5jcm9wV2lkdGggIT0gZm9ybWF0LmRpc3BsYXlXaWR0aCB8fCBmb3JtYXQuY3JvcEhlaWdodCAhPSBmb3JtYXQuZGlzcGxheUhlaWdodCk7CgkJCQl2YXIgZHJhd0NvbnRleHQ7CgkJCQlpZiAocmVzYW1wbGUpIHsKCQkJCQkvLyBoYWNrIGZvciBub24tc3F1YXJlIGFzcGVjdC1yYXRpbwoJCQkJCS8vIHB1dEltYWdlRGF0YSBkb2Vzbid0IHJlc2FtcGxlLCBzbyB3ZSBoYXZlIHRvIGRyYXcgaW4gdHdvIHN0ZXBzLgoJCQkJCWlmICghcmVzYW1wbGVDYW52YXMpIHsKCQkJCQkJaW5pdFJlc2FtcGxlQ2FudmFzKGZvcm1hdC5jcm9wV2lkdGgsIGZvcm1hdC5jcm9wSGVpZ2h0KTsKCQkJCQl9CgkJCQkJZHJhd0NvbnRleHQgPSByZXNhbXBsZUNvbnRleHQ7CgkJCQl9IGVsc2UgewoJCQkJCWRyYXdDb250ZXh0ID0gY3R4OwoJCQkJfQoKCQkJCS8vIERyYXcgY3JvcHBlZCBmcmFtZSB0byBlaXRoZXIgdGhlIGZpbmFsIG9yIHRlbXBvcmFyeSBjYW52YXMKCQkJCWRyYXdDb250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsCgkJCQkJLWZvcm1hdC5jcm9wTGVmdCwgLWZvcm1hdC5jcm9wVG9wLCAvLyBtdXN0IG9mZnNldCB0aGUgb2Zmc2V0CgkJCQkJZm9ybWF0LmNyb3BMZWZ0LCBmb3JtYXQuY3JvcFRvcCwKCQkJCQlmb3JtYXQuY3JvcFdpZHRoLCBmb3JtYXQuY3JvcEhlaWdodCk7CgoJCQkJaWYgKHJlc2FtcGxlKSB7CgkJCQkJY3R4LmRyYXdJbWFnZShyZXNhbXBsZUNhbnZhcywgMCwgMCwgZm9ybWF0LmRpc3BsYXlXaWR0aCwgZm9ybWF0LmRpc3BsYXlIZWlnaHQpOwoJCQkJfQoJCQl9OwoKCQkJc2VsZi5jbGVhciA9IGZ1bmN0aW9uKCkgewoJCQkJY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOwoJCQl9OwoKCQkJcmV0dXJuIHNlbGY7CgkJfQoKCQlTb2Z0d2FyZUZyYW1lU2luayQxLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRnJhbWVTaW5rJDEucHJvdG90eXBlKTsKCgkJU29mdHdhcmVGcmFtZVNpbmsuZXhwb3J0cyA9IFNvZnR3YXJlRnJhbWVTaW5rJDE7Cgl9KSgpOwoKCXZhciBXZWJHTEZyYW1lU2luayA9IHtleHBvcnRzOiB7fX07CgoJdmFyIHNoYWRlcnMgPSB7CgkgIHZlcnRleDogInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xuXG5hdHRyaWJ1dGUgdmVjMiBhUG9zaXRpb247XG5hdHRyaWJ1dGUgdmVjMiBhTHVtYVBvc2l0aW9uO1xuYXR0cmlidXRlIHZlYzIgYUNocm9tYVBvc2l0aW9uO1xudmFyeWluZyB2ZWMyIHZMdW1hUG9zaXRpb247XG52YXJ5aW5nIHZlYzIgdkNocm9tYVBvc2l0aW9uO1xudm9pZCBtYWluKCkge1xuICAgIGdsX1Bvc2l0aW9uID0gdmVjNChhUG9zaXRpb24sIDAsIDEpO1xuICAgIHZMdW1hUG9zaXRpb24gPSBhTHVtYVBvc2l0aW9uO1xuICAgIHZDaHJvbWFQb3NpdGlvbiA9IGFDaHJvbWFQb3NpdGlvbjtcbn1cbiIsCgkgIGZyYWdtZW50OiAiLy8gaW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL21iZWJlbml0YS9Ccm9hZHdheS9ibG9iL21hc3Rlci9QbGF5ZXIvY2FudmFzLmpzXG5cbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xuXG51bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZVk7XG51bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZUNiO1xudW5pZm9ybSBzYW1wbGVyMkQgdVRleHR1cmVDcjtcbnZhcnlpbmcgdmVjMiB2THVtYVBvc2l0aW9uO1xudmFyeWluZyB2ZWMyIHZDaHJvbWFQb3NpdGlvbjtcbnZvaWQgbWFpbigpIHtcbiAgIC8vIFksIENiLCBhbmQgQ3IgcGxhbmVzIGFyZSB1cGxvYWRlZCBhcyBBTFBIQSB0ZXh0dXJlcy5cbiAgIGZsb2F0IGZZID0gdGV4dHVyZTJEKHVUZXh0dXJlWSwgdkx1bWFQb3NpdGlvbikudztcbiAgIGZsb2F0IGZDYiA9IHRleHR1cmUyRCh1VGV4dHVyZUNiLCB2Q2hyb21hUG9zaXRpb24pLnc7XG4gICBmbG9hdCBmQ3IgPSB0ZXh0dXJlMkQodVRleHR1cmVDciwgdkNocm9tYVBvc2l0aW9uKS53O1xuXG4gICAvLyBQcmVtdWx0aXB5IHRoZSBZLi4uXG4gICBmbG9hdCBmWW11bCA9IGZZICogMS4xNjQzODI4MTI1O1xuXG4gICAvLyBBbmQgY29udmVydCB0aGF0IHRvIFJHQiFcbiAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoXG4gICAgIGZZbXVsICsgMS41OTYwMjczNDM3NSAqIGZDciAtIDAuODcwNzg1MTU2MjUsXG4gICAgIGZZbXVsIC0gMC4zOTE3NjE3MTg3NSAqIGZDYiAtIDAuODEyOTY4NzUgKiBmQ3IgKyAwLjUyOTU5Mzc1LFxuICAgICBmWW11bCArIDIuMDE3MjM0Mzc1ICAgKiBmQ2IgLSAxLjA4MTM5MDYyNSxcbiAgICAgMVxuICAgKTtcbn1cbiIsCgkgIHZlcnRleFN0cmlwZTogInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xuXG5hdHRyaWJ1dGUgdmVjMiBhUG9zaXRpb247XG5hdHRyaWJ1dGUgdmVjMiBhVGV4dHVyZVBvc2l0aW9uO1xudmFyeWluZyB2ZWMyIHZUZXh0dXJlUG9zaXRpb247XG5cbnZvaWQgbWFpbigpIHtcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoYVBvc2l0aW9uLCAwLCAxKTtcbiAgICB2VGV4dHVyZVBvc2l0aW9uID0gYVRleHR1cmVQb3NpdGlvbjtcbn1cbiIsCgkgIGZyYWdtZW50U3RyaXBlOiAiLy8gZXh0cmEgJ3N0cmlwZScgdGV4dHVyZSBmaWRkbGluZyB0byB3b3JrIGFyb3VuZCBJRSAxMSdzIHBvb3IgcGVyZm9ybWFuY2Ugb24gZ2wuTFVNSU5BTkNFIGFuZCBnbC5BTFBIQSB0ZXh0dXJlc1xuXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcblxudW5pZm9ybSBzYW1wbGVyMkQgdVN0cmlwZTtcbnVuaWZvcm0gc2FtcGxlcjJEIHVUZXh0dXJlO1xudmFyeWluZyB2ZWMyIHZUZXh0dXJlUG9zaXRpb247XG52b2lkIG1haW4oKSB7XG4gICAvLyBZLCBDYiwgYW5kIENyIHBsYW5lcyBhcmUgbWFwcGVkIGludG8gYSBwc2V1ZG8tUkdCQSB0ZXh0dXJlXG4gICAvLyBzbyB3ZSBjYW4gdXBsb2FkIHRoZW0gd2l0aG91dCBleHBhbmRpbmcgdGhlIGJ5dGVzIG9uIElFIDExXG4gICAvLyB3aGljaCBkb2Vzbid0IGFsbG93IExVTUlOQU5DRSBvciBBTFBIQSB0ZXh0dXJlc1xuICAgLy8gVGhlIHN0cmlwZSB0ZXh0dXJlcyBtYXJrIHdoaWNoIGNoYW5uZWwgdG8ga2VlcCBmb3IgZWFjaCBwaXhlbC5cbiAgIC8vIEVhY2ggdGV4dHVyZSBleHRyYWN0aW9uIHdpbGwgY29udGFpbiB0aGUgcmVsZXZhbnQgdmFsdWUgaW4gb25lXG4gICAvLyBjaGFubmVsIG9ubHkuXG5cbiAgIGZsb2F0IGZMdW1pbmFuY2UgPSBkb3QoXG4gICAgICB0ZXh0dXJlMkQodVN0cmlwZSwgdlRleHR1cmVQb3NpdGlvbiksXG4gICAgICB0ZXh0dXJlMkQodVRleHR1cmUsIHZUZXh0dXJlUG9zaXRpb24pXG4gICApO1xuXG4gICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDAsIDAsIDAsIGZMdW1pbmFuY2UpO1xufVxuIgoJfTsKCgkvKgoJQ29weXJpZ2h0IChjKSAyMDE0LTIwMjQgQnJvb2tlIFZpYmJlciA8YnZpYmJlckBwb2JveC5jb20+CgoJUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZgoJdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgIlNvZnR3YXJlIiksIHRvIGRlYWwgaW4KCXRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8KCXVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mCgl0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sCglzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczoKCglUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwKCWNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuCgoJVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IKCU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MKCUZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUgoJQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSCglJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTgoJQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS4KCSovCgoJKGZ1bmN0aW9uKCkgewoKCQl2YXIgRnJhbWVTaW5rJDEgPSBGcmFtZVNpbmsuZXhwb3J0cywKCQkJc2hhZGVycyQxID0gc2hhZGVyczsKCgkJLyoqCgkJICogV2FybmluZzogY2FudmFzIG11c3Qgbm90IGhhdmUgYmVlbiB1c2VkIGZvciAyZCBkcmF3aW5nIHByaW9yIQoJCSAqCgkJICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIC0gSFRNTCBjYW52YXMgZWxlbWVudCB0byBhdHRhY2ggdG8KCQkgKiBAY29uc3RydWN0b3IKCQkgKi8KCQlmdW5jdGlvbiBXZWJHTEZyYW1lU2luayQxKGNhbnZhcykgewoJCQl2YXIgc2VsZiA9IHRoaXMsCgkJCQlnbCA9IFdlYkdMRnJhbWVTaW5rJDEuY29udGV4dEZvckNhbnZhcyhjYW52YXMpOwoJIC8vIHN3YXAgdGhpcyB0byBlbmFibGUgbW9yZSBlcnJvciBjaGVja3MsIHdoaWNoIGNhbiBzbG93IGRvd24gcmVuZGVyaW5nCgoJCQlpZiAoZ2wgPT09IG51bGwpIHsKCQkJCXRocm93IG5ldyBFcnJvcignV2ViR0wgdW5hdmFpbGFibGUnKTsKCQkJfQoKCQkJZnVuY3Rpb24gY29tcGlsZVNoYWRlcih0eXBlLCBzb3VyY2UpIHsKCQkJCXZhciBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7CgkJCQlnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpOwoJCQkJZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpOwoKCQkJCWlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7CgkJCQkJdmFyIGVyciA9IGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKTsKCQkJCQlnbC5kZWxldGVTaGFkZXIoc2hhZGVyKTsKCQkJCQl0aHJvdyBuZXcgRXJyb3IoJ0dMIHNoYWRlciBjb21waWxhdGlvbiBmb3IgJyArIHR5cGUgKyAnIGZhaWxlZDogJyArIGVycik7CgkJCQl9CgoJCQkJcmV0dXJuIHNoYWRlcjsKCQkJfQoKCgkJCXZhciBwcm9ncmFtLAoJCQkJdW5wYWNrUHJvZ3JhbTsKCgkJCS8vIEluIHRoZSB3b3JsZCBvZiBHTCB0aGVyZSBhcmUgbm8gcmVjdGFuZ2xlcy4KCQkJLy8gVGhlcmUgYXJlIG9ubHkgdHJpYW5nbGVzLgoJCQkvLyBUSEVSRSBJUyBOTyBTUE9PTi4KCQkJdmFyIHJlY3RhbmdsZSA9IG5ldyBGbG9hdDMyQXJyYXkoWwoJCQkJLy8gRmlyc3QgdHJpYW5nbGUgKHRvcCBsZWZ0LCBjbG9ja3dpc2UpCgkJCQktMS4wLCAtMS4wLAoJCQkJKzEuMCwgLTEuMCwKCQkJCS0xLjAsICsxLjAsCgoJCQkJLy8gU2Vjb25kIHRyaWFuZ2xlIChib3R0b20gcmlnaHQsIGNsb2Nrd2lzZSkKCQkJCS0xLjAsICsxLjAsCgkJCQkrMS4wLCAtMS4wLAoJCQkJKzEuMCwgKzEuMAoJCQldKTsKCgkJCXZhciB0ZXh0dXJlcyA9IHt9OwoJCQl2YXIgZnJhbWVidWZmZXJzID0ge307CgkJCXZhciBzdHJpcGVzID0ge307CgkJCXZhciBidWYsIHBvc2l0aW9uTG9jYXRpb247CgkJCXZhciB1bnBhY2tUZXh0dXJlUG9zaXRpb25CdWZmZXIsIHVucGFja1RleHR1cmVQb3NpdGlvbkxvY2F0aW9uOwoJCQl2YXIgc3RyaXBlTG9jYXRpb24sIHVucGFja1RleHR1cmVMb2NhdGlvbjsKCQkJdmFyIGx1bWFQb3NpdGlvbkJ1ZmZlciwgbHVtYVBvc2l0aW9uTG9jYXRpb247CgkJCXZhciBjaHJvbWFQb3NpdGlvbkJ1ZmZlciwgY2hyb21hUG9zaXRpb25Mb2NhdGlvbjsKCgkJCWZ1bmN0aW9uIGNyZWF0ZU9yUmV1c2VUZXh0dXJlKG5hbWUsIGZvcm1hdFVwZGF0ZSkgewoJCQkJaWYgKCF0ZXh0dXJlc1tuYW1lXSB8fCBmb3JtYXRVcGRhdGUpIHsKCQkJCQl0ZXh0dXJlc1tuYW1lXSA9IGdsLmNyZWF0ZVRleHR1cmUoKTsKCQkJCX0KCQkJCXJldHVybiB0ZXh0dXJlc1tuYW1lXTsKCQkJfQoKCQkJZnVuY3Rpb24gdXBsb2FkVGV4dHVyZShuYW1lLCBmb3JtYXRVcGRhdGUsIHdpZHRoLCBoZWlnaHQsIGRhdGEpIHsKCQkJCXZhciBjcmVhdGUgPSAhdGV4dHVyZXNbbmFtZV0gfHwgZm9ybWF0VXBkYXRlOwoJCQkJdmFyIHRleHR1cmUgPSBjcmVhdGVPclJldXNlVGV4dHVyZShuYW1lLCBmb3JtYXRVcGRhdGUpOwoJCQkJZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCk7CgoJCQkJaWYgKFdlYkdMRnJhbWVTaW5rJDEuc3RyaXBlKSB7CgkJCQkJdmFyIHVwbG9hZFRlbXAgPSAhdGV4dHVyZXNbbmFtZSArICdfdGVtcCddIHx8IGZvcm1hdFVwZGF0ZTsKCQkJCQl2YXIgdGVtcFRleHR1cmUgPSBjcmVhdGVPclJldXNlVGV4dHVyZShuYW1lICsgJ190ZW1wJywgZm9ybWF0VXBkYXRlKTsKCQkJCQlnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZW1wVGV4dHVyZSk7CgkJCQkJaWYgKHVwbG9hZFRlbXApIHsKCQkJCQkJLy8gbmV3IHRleHR1cmUKCQkJCQkJZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7CgkJCQkJCWdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpOwoJCQkJCQlnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7CgkJCQkJCWdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTsKCQkJCQkJZ2wudGV4SW1hZ2UyRCgKCQkJCQkJCWdsLlRFWFRVUkVfMkQsCgkJCQkJCQkwLCAvLyBtaXAgbGV2ZWwKCQkJCQkJCWdsLlJHQkEsIC8vIGludGVybmFsIGZvcm1hdAoJCQkJCQkJd2lkdGggLyA0LAoJCQkJCQkJaGVpZ2h0LAoJCQkJCQkJMCwgLy8gYm9yZGVyCgkJCQkJCQlnbC5SR0JBLCAvLyBmb3JtYXQKCQkJCQkJCWdsLlVOU0lHTkVEX0JZVEUsIC8vIHR5cGUKCQkJCQkJCWRhdGEgLy8gZGF0YSEKCQkJCQkJKTsKCQkJCQl9IGVsc2UgewoJCQkJCQkvLyB1cGRhdGUgdGV4dHVyZQoJCQkJCQlnbC50ZXhTdWJJbWFnZTJEKAoJCQkJCQkJZ2wuVEVYVFVSRV8yRCwKCQkJCQkJCTAsIC8vIG1pcCBsZXZlbAoJCQkJCQkJMCwgLy8geCBvZmZzZXQKCQkJCQkJCTAsIC8vIHkgb2Zmc2V0CgkJCQkJCQl3aWR0aCAvIDQsCgkJCQkJCQloZWlnaHQsCgkJCQkJCQlnbC5SR0JBLCAvLyBmb3JtYXQKCQkJCQkJCWdsLlVOU0lHTkVEX0JZVEUsIC8vIHR5cGUKCQkJCQkJCWRhdGEgLy8gZGF0YSEKCQkJCQkJKTsKCQkJCQl9CgoJCQkJCXZhciBzdHJpcGVUZXh0dXJlID0gdGV4dHVyZXNbbmFtZSArICdfc3RyaXBlJ107CgkJCQkJdmFyIHVwbG9hZFN0cmlwZSA9ICFzdHJpcGVUZXh0dXJlIHx8IGZvcm1hdFVwZGF0ZTsKCQkJCQlpZiAodXBsb2FkU3RyaXBlKSB7CgkJCQkJCXN0cmlwZVRleHR1cmUgPSBjcmVhdGVPclJldXNlVGV4dHVyZShuYW1lICsgJ19zdHJpcGUnLCBmb3JtYXRVcGRhdGUpOwoJCQkJCX0KCQkJCQlnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBzdHJpcGVUZXh0dXJlKTsKCQkJCQlpZiAodXBsb2FkU3RyaXBlKSB7CgkJCQkJCWdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpOwoJCQkJCQlnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTsKCQkJCQkJZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpOwoJCQkJCQlnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7CgkJCQkJCWdsLnRleEltYWdlMkQoCgkJCQkJCQlnbC5URVhUVVJFXzJELAoJCQkJCQkJMCwgLy8gbWlwIGxldmVsCgkJCQkJCQlnbC5SR0JBLCAvLyBpbnRlcm5hbCBmb3JtYXQKCQkJCQkJCXdpZHRoLAoJCQkJCQkJMSwKCQkJCQkJCTAsIC8vIGJvcmRlcgoJCQkJCQkJZ2wuUkdCQSwgLy8gZm9ybWF0CgkJCQkJCQlnbC5VTlNJR05FRF9CWVRFLCAvL3R5cGUKCQkJCQkJCWJ1aWxkU3RyaXBlKHdpZHRoKSAvLyBkYXRhIQoJCQkJCQkpOwoJCQkJCX0KCgkJCQl9IGVsc2UgewoJCQkJCWdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpOwoJCQkJCWlmIChjcmVhdGUpIHsKCQkJCQkJZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7CgkJCQkJCWdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpOwoJCQkJCQlnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTsKCQkJCQkJZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7CgkJCQkJCWdsLnRleEltYWdlMkQoCgkJCQkJCQlnbC5URVhUVVJFXzJELAoJCQkJCQkJMCwgLy8gbWlwIGxldmVsCgkJCQkJCQlnbC5BTFBIQSwgLy8gaW50ZXJuYWwgZm9ybWF0CgkJCQkJCQl3aWR0aCwKCQkJCQkJCWhlaWdodCwKCQkJCQkJCTAsIC8vIGJvcmRlcgoJCQkJCQkJZ2wuQUxQSEEsIC8vIGZvcm1hdAoJCQkJCQkJZ2wuVU5TSUdORURfQllURSwgLy90eXBlCgkJCQkJCQlkYXRhIC8vIGRhdGEhCgkJCQkJCSk7CgkJCQkJfSBlbHNlIHsKCQkJCQkJZ2wudGV4U3ViSW1hZ2UyRCgKCQkJCQkJCWdsLlRFWFRVUkVfMkQsCgkJCQkJCQkwLCAvLyBtaXAgbGV2ZWwKCQkJCQkJCTAsIC8vIHgKCQkJCQkJCTAsIC8vIHkKCQkJCQkJCXdpZHRoLAoJCQkJCQkJaGVpZ2h0LAoJCQkJCQkJZ2wuQUxQSEEsIC8vIGludGVybmFsIGZvcm1hdAoJCQkJCQkJZ2wuVU5TSUdORURfQllURSwgLy90eXBlCgkJCQkJCQlkYXRhIC8vIGRhdGEhCgkJCQkJCSk7CgkJCQkJfQoJCQkJfQoJCQl9CgoJCQlmdW5jdGlvbiB1bnBhY2tUZXh0dXJlKG5hbWUsIGZvcm1hdFVwZGF0ZSwgd2lkdGgsIGhlaWdodCkgewoJCQkJdmFyIHRleHR1cmUgPSB0ZXh0dXJlc1tuYW1lXTsKCgkJCQkvLyBVcGxvYWQgdG8gYSB0ZW1wb3JhcnkgUkdCQSB0ZXh0dXJlLCB0aGVuIHVucGFjayBpdC4KCQkJCS8vIFRoaXMgaXMgZmFzdGVyIHRoYW4gQ1BVLXNpZGUgc3dpenpsaW5nIGluIEFOR0xFIG9uIFdpbmRvd3MuCgkJCQlnbC51c2VQcm9ncmFtKHVucGFja1Byb2dyYW0pOwoKCQkJCXZhciBmYiA9IGZyYW1lYnVmZmVyc1tuYW1lXTsKCQkJCWlmICghZmIgfHwgZm9ybWF0VXBkYXRlKSB7CgkJCQkJLy8gQ3JlYXRlIGEgZnJhbWVidWZmZXIgYW5kIGFuIGVtcHR5IHRhcmdldCBzaXplCgkJCQkJZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCk7CgkJCQkJZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7CgkJCQkJZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7CgkJCQkJZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7CgkJCQkJZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7CgkJCQkJZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7CgkJCQkJZ2wudGV4SW1hZ2UyRCgKCQkJCQkJZ2wuVEVYVFVSRV8yRCwKCQkJCQkJMCwgLy8gbWlwIGxldmVsCgkJCQkJCWdsLlJHQkEsIC8vIGludGVybmFsIGZvcm1hdAoJCQkJCQl3aWR0aCwKCQkJCQkJaGVpZ2h0LAoJCQkJCQkwLCAvLyBib3JkZXIKCQkJCQkJZ2wuUkdCQSwgLy8gZm9ybWF0CgkJCQkJCWdsLlVOU0lHTkVEX0JZVEUsIC8vdHlwZQoJCQkJCQludWxsIC8vIGRhdGEhCgkJCQkJKTsKCgkJCQkJZmIgPSBmcmFtZWJ1ZmZlcnNbbmFtZV0gPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpOwoJCQkJfQoKCQkJCWdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgZmIpOwoJCQkJZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCB0ZXh0dXJlLCAwKTsKCgkJCQl2YXIgdGVtcFRleHR1cmUgPSB0ZXh0dXJlc1tuYW1lICsgJ190ZW1wJ107CgkJCQlnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUxKTsKCQkJCWdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRlbXBUZXh0dXJlKTsKCQkJCWdsLnVuaWZvcm0xaSh1bnBhY2tUZXh0dXJlTG9jYXRpb24sIDEpOwoKCQkJCXZhciBzdHJpcGVUZXh0dXJlID0gdGV4dHVyZXNbbmFtZSArICdfc3RyaXBlJ107CgkJCQlnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUyKTsKCQkJCWdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHN0cmlwZVRleHR1cmUpOwoJCQkJZ2wudW5pZm9ybTFpKHN0cmlwZUxvY2F0aW9uLCAyKTsKCgkJCQkvLyBSZWN0YW5nbGUgZ2VvbWV0cnkKCQkJCWdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWYpOwoJCQkJZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9zaXRpb25Mb2NhdGlvbik7CgkJCQlnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHBvc2l0aW9uTG9jYXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7CgoJCQkJLy8gU2V0IHVwIHRoZSB0ZXh0dXJlIGdlb21ldHJ5Li4uCgkJCQlnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdW5wYWNrVGV4dHVyZVBvc2l0aW9uQnVmZmVyKTsKCQkJCWdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHVucGFja1RleHR1cmVQb3NpdGlvbkxvY2F0aW9uKTsKCQkJCWdsLnZlcnRleEF0dHJpYlBvaW50ZXIodW5wYWNrVGV4dHVyZVBvc2l0aW9uTG9jYXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7CgoJCQkJLy8gRHJhdyBpbnRvIHRoZSB0YXJnZXQgdGV4dHVyZS4uLgoJCQkJZ2wudmlld3BvcnQoMCwgMCwgd2lkdGgsIGhlaWdodCk7CgoJCQkJZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIHJlY3RhbmdsZS5sZW5ndGggLyAyKTsKCgkJCQlnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpOwoKCQkJfQoKCQkJZnVuY3Rpb24gYXR0YWNoVGV4dHVyZShuYW1lLCByZWdpc3RlciwgaW5kZXgpIHsKCQkJCWdsLmFjdGl2ZVRleHR1cmUocmVnaXN0ZXIpOwoJCQkJZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZXNbbmFtZV0pOwoJCQkJZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7CgkJCQlnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTsKCQkJCWdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpOwoJCQkJZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7CgoJCQkJZ2wudW5pZm9ybTFpKGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSwgaW5kZXgpOwoJCQl9CgoJCQlmdW5jdGlvbiBidWlsZFN0cmlwZSh3aWR0aCkgewoJCQkJaWYgKHN0cmlwZXNbd2lkdGhdKSB7CgkJCQkJcmV0dXJuIHN0cmlwZXNbd2lkdGhdOwoJCQkJfQoJCQkJdmFyIGxlbiA9IHdpZHRoLAoJCQkJCW91dCA9IG5ldyBVaW50MzJBcnJheShsZW4pOwoJCQkJZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkgewoJCQkJCW91dFtpICAgIF0gPSAweDAwMDAwMGZmOwoJCQkJCW91dFtpICsgMV0gPSAweDAwMDBmZjAwOwoJCQkJCW91dFtpICsgMl0gPSAweDAwZmYwMDAwOwoJCQkJCW91dFtpICsgM10gPSAweGZmMDAwMDAwOwoJCQkJfQoJCQkJcmV0dXJuIHN0cmlwZXNbd2lkdGhdID0gbmV3IFVpbnQ4QXJyYXkob3V0LmJ1ZmZlcik7CgkJCX0KCgkJCWZ1bmN0aW9uIGluaXRQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpIHsKCQkJCXZhciB2ZXJ0ZXhTaGFkZXIgPSBjb21waWxlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIsIHZlcnRleFNoYWRlclNvdXJjZSk7CgkJCQl2YXIgZnJhZ21lbnRTaGFkZXIgPSBjb21waWxlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUiwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpOwoKCQkJCXZhciBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpOwoJCQkJZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7CgkJCQlnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpOwoKCQkJCWdsLmxpbmtQcm9ncmFtKHByb2dyYW0pOwoJCQkJaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkgewoJCQkJCXZhciBlcnIgPSBnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKTsKCQkJCQlnbC5kZWxldGVQcm9ncmFtKHByb2dyYW0pOwoJCQkJCXRocm93IG5ldyBFcnJvcignR0wgcHJvZ3JhbSBsaW5raW5nIGZhaWxlZDogJyArIGVycik7CgkJCQl9CgoJCQkJcmV0dXJuIHByb2dyYW07CgkJCX0KCgkJCWZ1bmN0aW9uIGluaXQoKSB7CgkJCQlpZiAoV2ViR0xGcmFtZVNpbmskMS5zdHJpcGUpIHsKCQkJCQl1bnBhY2tQcm9ncmFtID0gaW5pdFByb2dyYW0oc2hhZGVycyQxLnZlcnRleFN0cmlwZSwgc2hhZGVycyQxLmZyYWdtZW50U3RyaXBlKTsKCQkJCQlnbC5nZXRBdHRyaWJMb2NhdGlvbih1bnBhY2tQcm9ncmFtLCAnYVBvc2l0aW9uJyk7CgoJCQkJCXVucGFja1RleHR1cmVQb3NpdGlvbkJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpOwoJCQkJCXZhciB0ZXh0dXJlUmVjdGFuZ2xlID0gbmV3IEZsb2F0MzJBcnJheShbCgkJCQkJCTAsIDAsCgkJCQkJCTEsIDAsCgkJCQkJCTAsIDEsCgkJCQkJCTAsIDEsCgkJCQkJCTEsIDAsCgkJCQkJCTEsIDEKCQkJCQldKTsKCQkJCQlnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdW5wYWNrVGV4dHVyZVBvc2l0aW9uQnVmZmVyKTsKCQkJCQlnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdGV4dHVyZVJlY3RhbmdsZSwgZ2wuU1RBVElDX0RSQVcpOwoKCQkJCQl1bnBhY2tUZXh0dXJlUG9zaXRpb25Mb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHVucGFja1Byb2dyYW0sICdhVGV4dHVyZVBvc2l0aW9uJyk7CgkJCQkJc3RyaXBlTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odW5wYWNrUHJvZ3JhbSwgJ3VTdHJpcGUnKTsKCQkJCQl1bnBhY2tUZXh0dXJlTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odW5wYWNrUHJvZ3JhbSwgJ3VUZXh0dXJlJyk7CgkJCQl9CgkJCQlwcm9ncmFtID0gaW5pdFByb2dyYW0oc2hhZGVycyQxLnZlcnRleCwgc2hhZGVycyQxLmZyYWdtZW50KTsKCgkJCQlidWYgPSBnbC5jcmVhdGVCdWZmZXIoKTsKCQkJCWdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWYpOwoJCQkJZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHJlY3RhbmdsZSwgZ2wuU1RBVElDX0RSQVcpOwoKCQkJCXBvc2l0aW9uTG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAnYVBvc2l0aW9uJyk7CgkJCQlsdW1hUG9zaXRpb25CdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTsKCQkJCWx1bWFQb3NpdGlvbkxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ2FMdW1hUG9zaXRpb24nKTsKCQkJCWNocm9tYVBvc2l0aW9uQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7CgkJCQljaHJvbWFQb3NpdGlvbkxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ2FDaHJvbWFQb3NpdGlvbicpOwoJCQl9CgoJCQkvKioKCQkJICogQWN0dWFsbHkgZHJhdyBhIGZyYW1lLgoJCQkgKiBAcGFyYW0ge1lVVkZyYW1lfSBidWZmZXIgLSBZVVYgZnJhbWUgYnVmZmVyIG9iamVjdAoJCQkgKi8KCQkJc2VsZi5kcmF3RnJhbWUgPSBmdW5jdGlvbihidWZmZXIpIHsKCQkJCXZhciBmb3JtYXQgPSBidWZmZXIuZm9ybWF0OwoKCQkJCXZhciBmb3JtYXRVcGRhdGUgPSAoIXByb2dyYW0gfHwgY2FudmFzLndpZHRoICE9PSBmb3JtYXQuZGlzcGxheVdpZHRoIHx8IGNhbnZhcy5oZWlnaHQgIT09IGZvcm1hdC5kaXNwbGF5SGVpZ2h0KTsKCQkJCWlmIChmb3JtYXRVcGRhdGUpIHsKCQkJCQkvLyBLZWVwIHRoZSBjYW52YXMgYXQgdGhlIHJpZ2h0IHNpemUuLi4KCQkJCQljYW52YXMud2lkdGggPSBmb3JtYXQuZGlzcGxheVdpZHRoOwoJCQkJCWNhbnZhcy5oZWlnaHQgPSBmb3JtYXQuZGlzcGxheUhlaWdodDsKCQkJCQlzZWxmLmNsZWFyKCk7CgkJCQl9CgoJCQkJaWYgKCFwcm9ncmFtKSB7CgkJCQkJaW5pdCgpOwoJCQkJfQoKCQkJCWlmIChmb3JtYXRVcGRhdGUpIHsKCQkJCQl2YXIgc2V0dXBUZXh0dXJlUG9zaXRpb24gPSBmdW5jdGlvbihidWZmZXIsIGxvY2F0aW9uLCB0ZXhXaWR0aCkgewoJCQkJCQkvLyBXYXJuaW5nOiBhc3N1bWVzIHRoYXQgdGhlIHN0cmlkZSBmb3IgQ2IgYW5kIENyIGlzIHRoZSBzYW1lIHNpemUgaW4gb3V0cHV0IHBpeGVscwoJCQkJCQl2YXIgdGV4dHVyZVgwID0gZm9ybWF0LmNyb3BMZWZ0IC8gdGV4V2lkdGg7CgkJCQkJCXZhciB0ZXh0dXJlWDEgPSAoZm9ybWF0LmNyb3BMZWZ0ICsgZm9ybWF0LmNyb3BXaWR0aCkgLyB0ZXhXaWR0aDsKCQkJCQkJdmFyIHRleHR1cmVZMCA9IChmb3JtYXQuY3JvcFRvcCArIGZvcm1hdC5jcm9wSGVpZ2h0KSAvIGZvcm1hdC5oZWlnaHQ7CgkJCQkJCXZhciB0ZXh0dXJlWTEgPSBmb3JtYXQuY3JvcFRvcCAvIGZvcm1hdC5oZWlnaHQ7CgkJCQkJCXZhciB0ZXh0dXJlUmVjdGFuZ2xlID0gbmV3IEZsb2F0MzJBcnJheShbCgkJCQkJCQl0ZXh0dXJlWDAsIHRleHR1cmVZMCwKCQkJCQkJCXRleHR1cmVYMSwgdGV4dHVyZVkwLAoJCQkJCQkJdGV4dHVyZVgwLCB0ZXh0dXJlWTEsCgkJCQkJCQl0ZXh0dXJlWDAsIHRleHR1cmVZMSwKCQkJCQkJCXRleHR1cmVYMSwgdGV4dHVyZVkwLAoJCQkJCQkJdGV4dHVyZVgxLCB0ZXh0dXJlWTEKCQkJCQkJXSk7CgoJCQkJCQlnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTsKCQkJCQkJZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHRleHR1cmVSZWN0YW5nbGUsIGdsLlNUQVRJQ19EUkFXKTsKCQkJCQl9OwoJCQkJCXNldHVwVGV4dHVyZVBvc2l0aW9uKAoJCQkJCQlsdW1hUG9zaXRpb25CdWZmZXIsCgkJCQkJCWx1bWFQb3NpdGlvbkxvY2F0aW9uLAoJCQkJCQlidWZmZXIueS5zdHJpZGUpOwoJCQkJCXNldHVwVGV4dHVyZVBvc2l0aW9uKAoJCQkJCQljaHJvbWFQb3NpdGlvbkJ1ZmZlciwKCQkJCQkJY2hyb21hUG9zaXRpb25Mb2NhdGlvbiwKCQkJCQkJYnVmZmVyLnUuc3RyaWRlICogZm9ybWF0LndpZHRoIC8gZm9ybWF0LmNocm9tYVdpZHRoKTsKCQkJCX0KCgkJCQkvLyBDcmVhdGUgb3IgdXBkYXRlIHRoZSB0ZXh0dXJlcy4uLgoJCQkJdXBsb2FkVGV4dHVyZSgndVRleHR1cmVZJywgZm9ybWF0VXBkYXRlLCBidWZmZXIueS5zdHJpZGUsIGZvcm1hdC5oZWlnaHQsIGJ1ZmZlci55LmJ5dGVzKTsKCQkJCXVwbG9hZFRleHR1cmUoJ3VUZXh0dXJlQ2InLCBmb3JtYXRVcGRhdGUsIGJ1ZmZlci51LnN0cmlkZSwgZm9ybWF0LmNocm9tYUhlaWdodCwgYnVmZmVyLnUuYnl0ZXMpOwoJCQkJdXBsb2FkVGV4dHVyZSgndVRleHR1cmVDcicsIGZvcm1hdFVwZGF0ZSwgYnVmZmVyLnYuc3RyaWRlLCBmb3JtYXQuY2hyb21hSGVpZ2h0LCBidWZmZXIudi5ieXRlcyk7CgoJCQkJaWYgKFdlYkdMRnJhbWVTaW5rJDEuc3RyaXBlKSB7CgkJCQkJLy8gVW5wYWNrIHRoZSB0ZXh0dXJlcyBhZnRlciB1cGxvYWQgdG8gYXZvaWQgYmxvY2tpbmcgb24gR1BVCgkJCQkJdW5wYWNrVGV4dHVyZSgndVRleHR1cmVZJywgZm9ybWF0VXBkYXRlLCBidWZmZXIueS5zdHJpZGUsIGZvcm1hdC5oZWlnaHQpOwoJCQkJCXVucGFja1RleHR1cmUoJ3VUZXh0dXJlQ2InLCBmb3JtYXRVcGRhdGUsIGJ1ZmZlci51LnN0cmlkZSwgZm9ybWF0LmNocm9tYUhlaWdodCk7CgkJCQkJdW5wYWNrVGV4dHVyZSgndVRleHR1cmVDcicsIGZvcm1hdFVwZGF0ZSwgYnVmZmVyLnYuc3RyaWRlLCBmb3JtYXQuY2hyb21hSGVpZ2h0KTsKCQkJCX0KCgkJCQkvLyBTZXQgdXAgdGhlIHJlY3RhbmdsZSBhbmQgZHJhdyBpdAoJCQkJZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTsKCQkJCWdsLnZpZXdwb3J0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7CgoJCQkJYXR0YWNoVGV4dHVyZSgndVRleHR1cmVZJywgZ2wuVEVYVFVSRTAsIDApOwoJCQkJYXR0YWNoVGV4dHVyZSgndVRleHR1cmVDYicsIGdsLlRFWFRVUkUxLCAxKTsKCQkJCWF0dGFjaFRleHR1cmUoJ3VUZXh0dXJlQ3InLCBnbC5URVhUVVJFMiwgMik7CgoJCQkJLy8gU2V0IHVwIGdlb21ldHJ5CgkJCQlnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmKTsKCQkJCWdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvc2l0aW9uTG9jYXRpb24pOwoJCQkJZ2wudmVydGV4QXR0cmliUG9pbnRlcihwb3NpdGlvbkxvY2F0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApOwoKCQkJCS8vIFNldCB1cCB0aGUgdGV4dHVyZSBnZW9tZXRyeS4uLgoJCQkJZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGx1bWFQb3NpdGlvbkJ1ZmZlcik7CgkJCQlnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShsdW1hUG9zaXRpb25Mb2NhdGlvbik7CgkJCQlnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGx1bWFQb3NpdGlvbkxvY2F0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApOwoKCQkJCWdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBjaHJvbWFQb3NpdGlvbkJ1ZmZlcik7CgkJCQlnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShjaHJvbWFQb3NpdGlvbkxvY2F0aW9uKTsKCQkJCWdsLnZlcnRleEF0dHJpYlBvaW50ZXIoY2hyb21hUG9zaXRpb25Mb2NhdGlvbiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTsKCgkJCQkvLyBBYWFhYW5kIGRyYXcgc3R1ZmYuCgkJCQlnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFUywgMCwgcmVjdGFuZ2xlLmxlbmd0aCAvIDIpOwoJCQl9OwoKCQkJc2VsZi5jbGVhciA9IGZ1bmN0aW9uKCkgewoJCQkJZ2wudmlld3BvcnQoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTsKCQkJCWdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMC4wKTsKCQkJCWdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpOwoJCQl9OwoKCQkJc2VsZi5jbGVhcigpOwoKCQkJcmV0dXJuIHNlbGY7CgkJfQoKCQkvLyBPcHRpb25hbCBwZXJmb3JtYW5jZSBoYWNrIGZvciBXaW5kb3dzOyBsdW1pbmFuY2UgYW5kIGFscGhhIHRleHR1cmVzIGFyZQoJCS8vIHNzbGxvb3d3IHRvIHVwbG9hZCBvbiBzb21lIG1hY2hpbmVzLCBzbyB3ZSBwYWNrIGludG8gUkdCQSBhbmQgdW5wYWNrIGluCgkJLy8gdGhlIHNoYWRlcnMuCgkJLy8KCQkvLyBTb21lIGJyb3dzZXJzIC8gR1BVcyBzZWVtIHRvIGhhdmUgbm8gcHJvYmxlbSB3aXRoIHRoaXMsIG90aGVycyBoYXZlCgkJLy8gYSBodWdlIGltcGFjdCBpbiBDUFUgZG9pbmcgdGhlIHRleHR1cmUgdXBsb2Fkcy4KCQkvLwoJCS8vIEZvciBpbnN0YW5jZSBvbiBtYWNPUyAxMi4yIG9uIGEgTWFjQm9vayBQcm8gMjAxOCB3aXRoIEFNRCBHUFUgaXQKCQkvLyBjYW4gcmVhbCBkb3duIGF0IGhpZ2ggcmVzLiBUaGlzIGlzIHBhcnRpYWxseSBjb21wZW5zYXRlZCBmb3IgYnkKCQkvLyBpbXByb3ZpbmcgdGhlIHVwbG9hZC12cy11cGRhdGUgYmVoYXZpb3IgZm9yIHRoZSBhbHBoYSB0ZXh0dXJlcy4KCQkvLwoJCS8vIEN1cnJlbnRseSBrZWVwaW5nIGl0IG9mZiBhcyBvZiBBcHJpbCAyMDIyLCBidXQgbGVhdmluZyBpdCBpbiBzbyBpdAoJCS8vIGNhbiBiZSBlbmFibGVkIGlmIGRlc2lyZWQuCgkJV2ViR0xGcmFtZVNpbmskMS5zdHJpcGUgPSBmYWxzZTsKCgkJV2ViR0xGcmFtZVNpbmskMS5jb250ZXh0Rm9yQ2FudmFzID0gZnVuY3Rpb24oY2FudmFzKSB7CgkJCXZhciBvcHRpb25zID0gewoJCQkJLy8gRG9uJ3QgdHJpZ2dlciBkaXNjcmV0ZSBHUFUgaW4gbXVsdGktR1BVIHN5c3RlbXMKCQkJCXByZWZlckxvd1Bvd2VyVG9IaWdoUGVyZm9ybWFuY2U6IHRydWUsCgkJCQlwb3dlclByZWZlcmVuY2U6ICdsb3ctcG93ZXInLAoJCQkJLy8gRG9uJ3QgdHJ5IHRvIHVzZSBzb2Z0d2FyZSBHTCByZW5kZXJpbmchCgkJCQlmYWlsSWZNYWpvclBlcmZvcm1hbmNlQ2F2ZWF0OiB0cnVlLAoJCQkJLy8gSW4gY2FzZSB3ZSBuZWVkIHRvIGNhcHR1cmUgdGhlIHJlc3VsdGluZyBvdXRwdXQuCgkJCQlwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUKCQkJfTsKCQkJcmV0dXJuIGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcsIG9wdGlvbnMpIHx8IGNhbnZhcy5nZXRDb250ZXh0KCdleHBlcmltZW50YWwtd2ViZ2wnLCBvcHRpb25zKTsKCQl9OwoKCQkvKioKCQkgKiBTdGF0aWMgZnVuY3Rpb24gdG8gY2hlY2sgaWYgV2ViR0wgd2lsbCBiZSBhdmFpbGFibGUgd2l0aCBhcHByb3ByaWF0ZSBmZWF0dXJlcy4KCQkgKgoJCSAqIEByZXR1cm5zIHtib29sZWFufSAtIHRydWUgaWYgYXZhaWxhYmxlCgkJICovCgkJV2ViR0xGcmFtZVNpbmskMS5pc0F2YWlsYWJsZSA9IGZ1bmN0aW9uKCkgewoJCQl2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyksCgkJCQlnbDsKCQkJY2FudmFzLndpZHRoID0gMTsKCQkJY2FudmFzLmhlaWdodCA9IDE7CgkJCXRyeSB7CgkJCQlnbCA9IFdlYkdMRnJhbWVTaW5rJDEuY29udGV4dEZvckNhbnZhcyhjYW52YXMpOwoJCQl9IGNhdGNoIChlKSB7CgkJCQlyZXR1cm4gZmFsc2U7CgkJCX0KCQkJaWYgKGdsKSB7CgkJCQl2YXIgcmVnaXN0ZXIgPSBnbC5URVhUVVJFMCwKCQkJCQl3aWR0aCA9IDQsCgkJCQkJaGVpZ2h0ID0gNCwKCQkJCQl0ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpLAoJCQkJCWRhdGEgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCksCgkJCQkJdGV4V2lkdGggPSBXZWJHTEZyYW1lU2luayQxLnN0cmlwZSA/ICh3aWR0aCAvIDQpIDogd2lkdGgsCgkJCQkJZm9ybWF0ID0gV2ViR0xGcmFtZVNpbmskMS5zdHJpcGUgPyBnbC5SR0JBIDogZ2wuQUxQSEEsCgkJCQkJZmlsdGVyID0gV2ViR0xGcmFtZVNpbmskMS5zdHJpcGUgPyBnbC5ORUFSRVNUIDogZ2wuTElORUFSOwoKCQkJCWdsLmFjdGl2ZVRleHR1cmUocmVnaXN0ZXIpOwoJCQkJZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7CgkJCQlnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTsKCQkJCWdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpOwoJCQkJZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGZpbHRlcik7CgkJCQlnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZmlsdGVyKTsKCQkJCWdsLnRleEltYWdlMkQoCgkJCQkJZ2wuVEVYVFVSRV8yRCwKCQkJCQkwLCAvLyBtaXAgbGV2ZWwKCQkJCQlmb3JtYXQsIC8vIGludGVybmFsIGZvcm1hdAoJCQkJCXRleFdpZHRoLAoJCQkJCWhlaWdodCwKCQkJCQkwLCAvLyBib3JkZXIKCQkJCQlmb3JtYXQsIC8vIGZvcm1hdAoJCQkJCWdsLlVOU0lHTkVEX0JZVEUsIC8vdHlwZQoJCQkJCWRhdGEgLy8gZGF0YSEKCQkJCSk7CgoJCQkJdmFyIGVyciA9IGdsLmdldEVycm9yKCk7CgkJCQlpZiAoZXJyKSB7CgkJCQkJLy8gRG9lc24ndCBzdXBwb3J0IGFscGhhIHRleHR1cmVzPwoJCQkJCXJldHVybiBmYWxzZTsKCQkJCX0gZWxzZSB7CgkJCQkJcmV0dXJuIHRydWU7CgkJCQl9CgkJCX0gZWxzZSB7CgkJCQlyZXR1cm4gZmFsc2U7CgkJCX0KCQl9OwoKCQlXZWJHTEZyYW1lU2luayQxLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRnJhbWVTaW5rJDEucHJvdG90eXBlKTsKCgkJV2ViR0xGcmFtZVNpbmsuZXhwb3J0cyA9IFdlYkdMRnJhbWVTaW5rJDE7Cgl9KSgpOwoKCS8qCglDb3B5cmlnaHQgKGMpIDIwMTQtMjAyNCBCcm9va2UgVmliYmVyIDxidmliYmVyQHBvYm94LmNvbT4KCglQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mCgl0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAiU29mdHdhcmUiKSwgdG8gZGVhbCBpbgoJdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0bwoJdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YKCXRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywKCXN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOgoKCVRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbAoJY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS4KCglUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgIkFTIElTIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUgoJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUwoJRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SCglDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIKCUlOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOCglDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLgoJKi8KCgkoZnVuY3Rpb24oKSB7CgoJICB2YXIgRnJhbWVTaW5rJDEgPSBGcmFtZVNpbmsuZXhwb3J0cywKCSAgICBTb2Z0d2FyZUZyYW1lU2luayQxID0gU29mdHdhcmVGcmFtZVNpbmsuZXhwb3J0cywKCSAgICBXZWJHTEZyYW1lU2luayQxID0gV2ViR0xGcmFtZVNpbmsuZXhwb3J0czsKCgkgIC8qKgoJICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBZVVZDYW52YXNPcHRpb25zCgkgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2ViR0wgLSBXaGV0aGVyIHRvIHVzZSBXZWJHTCB0byBkcmF3IHRvIHRoZSBjYW52YXMgYW5kIGFjY2VsZXJhdGUgY29sb3Igc3BhY2UgY29udmVyc2lvbi4gSWYgbGVmdCBvdXQsIGRlZmF1bHRzIHRvIGF1dG8tZGV0ZWN0LgoJICAgKi8KCgkgIHZhciBZVVZDYW52YXMgPSB7CgkgICAgRnJhbWVTaW5rOiBGcmFtZVNpbmskMSwKCgkgICAgU29mdHdhcmVGcmFtZVNpbms6IFNvZnR3YXJlRnJhbWVTaW5rJDEsCgoJICAgIFdlYkdMRnJhbWVTaW5rOiBXZWJHTEZyYW1lU2luayQxLAoKCSAgICAvKioKCSAgICAgKiBBdHRhY2ggYSBzdWl0YWJsZSBGcmFtZVNpbmsgaW5zdGFuY2UgdG8gYW4gSFRNTDUgY2FudmFzIGVsZW1lbnQuCgkgICAgICoKCSAgICAgKiBUaGlzIHdpbGwgdGFrZSBvdmVyIHRoZSBkcmF3aW5nIGNvbnRleHQgb2YgdGhlIGNhbnZhcyBhbmQgbWF5IHR1cm4KCSAgICAgKiBpdCBpbnRvIGEgV2ViR0wgM2QgY2FudmFzIGlmIHBvc3NpYmxlLiBEbyBub3QgYXR0ZW1wdCB0byB1c2UgdGhlCgkgICAgICogZHJhd2luZyBjb250ZXh0IGRpcmVjdGx5IGFmdGVyIHRoaXMuCgkgICAgICoKCSAgICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXMgLSBIVE1MIGNhbnZhcyBlbGVtZW50IHRvIGF0dGFjaCB0bwoJICAgICAqIEBwYXJhbSB7WVVWQ2FudmFzT3B0aW9uc30gb3B0aW9ucyAtIG1hcCBvZiBvcHRpb25zCgkgICAgICogQHJldHVybnMge0ZyYW1lU2lua30gLSBpbnN0YW5jZSBvZiBzdWl0YWJsZSBzdWJjbGFzcy4KCSAgICAgKi8KCSAgICBhdHRhY2g6IGZ1bmN0aW9uKGNhbnZhcywgb3B0aW9ucykgewoJICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307CgkgICAgICB2YXIgd2ViR0wgPSAoJ3dlYkdMJyBpbiBvcHRpb25zKSA/IG9wdGlvbnMud2ViR0wgOiBXZWJHTEZyYW1lU2luayQxLmlzQXZhaWxhYmxlKCk7CgkgICAgICBpZiAod2ViR0wpIHsKCSAgICAgICAgcmV0dXJuIG5ldyBXZWJHTEZyYW1lU2luayQxKGNhbnZhcywgb3B0aW9ucyk7CgkgICAgICB9IGVsc2UgewoJICAgICAgICByZXR1cm4gbmV3IFNvZnR3YXJlRnJhbWVTaW5rJDEoY2FudmFzLCBvcHRpb25zKTsKCSAgICAgIH0KCSAgICB9CgkgIH07CgoJICB5dXZDYW52YXMuZXhwb3J0cyA9IFlVVkNhbnZhczsKCX0pKCk7CgoJT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlbmRlcmVyX3NvZnR3YXJlX3l1diwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOw0KCS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzDQoJdmFyIFlVVkJ1ZmZlciA9IHl1dkJ1ZmZlcjsNCgkvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlcw0KCXZhciBZVVZDYW52YXMgPSB5dXZDYW52YXMuZXhwb3J0czsNCgl2YXIgU29mdHdhcmVSZW5kZXJlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsNCgkgICAgZnVuY3Rpb24gU29mdHdhcmVSZW5kZXJlcihjYW52YXMpIHsNCgkgICAgICAgIHRoaXMuaXNJbml0ID0gZmFsc2U7DQoJICAgICAgICB0aGlzLmZyYW1lU2luayA9IFlVVkNhbnZhcy5hdHRhY2goY2FudmFzLCB7DQoJICAgICAgICAgICAgd2ViR0w6IGZhbHNlLA0KCSAgICAgICAgfSk7DQoJICAgICAgICB0aGlzLmlzSW5pdCA9IHRydWU7DQoJICAgIH0NCgkgICAgU29mdHdhcmVSZW5kZXJlci5wcm90b3R5cGUuZHJhd0ZyYW1lID0gZnVuY3Rpb24gKHZpZGVvRnJhbWUpIHsNCgkgICAgICAgIGlmICghdGhpcy5mcmFtZVNpbmspDQoJICAgICAgICAgICAgcmV0dXJuOw0KCSAgICAgICAgdmFyIHdpZHRoID0gdmlkZW9GcmFtZS53aWR0aCwgaGVpZ2h0ID0gdmlkZW9GcmFtZS5oZWlnaHQsIHlTdHJpZGUgPSB2aWRlb0ZyYW1lLnlTdHJpZGUsIHVTdHJpZGUgPSB2aWRlb0ZyYW1lLnVTdHJpZGUsIHZTdHJpZGUgPSB2aWRlb0ZyYW1lLnZTdHJpZGUsIHlCdWZmZXIgPSB2aWRlb0ZyYW1lLnlCdWZmZXIsIHVCdWZmZXIgPSB2aWRlb0ZyYW1lLnVCdWZmZXIsIHZCdWZmZXIgPSB2aWRlb0ZyYW1lLnZCdWZmZXI7DQoJICAgICAgICB0aGlzLmZyYW1lU2luay5kcmF3RnJhbWUoWVVWQnVmZmVyLmZyYW1lKFlVVkJ1ZmZlci5mb3JtYXQoew0KCSAgICAgICAgICAgIHdpZHRoOiB3aWR0aCwNCgkgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCwNCgkgICAgICAgICAgICBjaHJvbWFXaWR0aDogd2lkdGggLyAyLA0KCSAgICAgICAgICAgIGNocm9tYUhlaWdodDogaGVpZ2h0IC8gMiwNCgkgICAgICAgIH0pLCB7DQoJICAgICAgICAgICAgYnl0ZXM6IHlCdWZmZXIsDQoJICAgICAgICAgICAgc3RyaWRlOiB5U3RyaWRlLA0KCSAgICAgICAgfSwgew0KCSAgICAgICAgICAgIGJ5dGVzOiB1QnVmZmVyLA0KCSAgICAgICAgICAgIHN0cmlkZTogdVN0cmlkZSwNCgkgICAgICAgIH0sIHsNCgkgICAgICAgICAgICBieXRlczogdkJ1ZmZlciwNCgkgICAgICAgICAgICBzdHJpZGU6IHZTdHJpZGUsDQoJICAgICAgICB9KSk7DQoJICAgIH07DQoJICAgIFNvZnR3YXJlUmVuZGVyZXIucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkgew0KCSAgICAgICAgdmFyIF9hOw0KCSAgICAgICAgKF9hID0gdGhpcy5mcmFtZVNpbmspID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGVhcigpOw0KCSAgICB9Ow0KCSAgICBTb2Z0d2FyZVJlbmRlcmVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkgew0KCSAgICAgICAgdGhpcy5mcmFtZVNpbmsgPSB1bmRlZmluZWQ7DQoJICAgICAgICB0aGlzLmlzSW5pdCA9IGZhbHNlOw0KCSAgICB9Ow0KCSAgICByZXR1cm4gU29mdHdhcmVSZW5kZXJlcjsNCgl9KCkpOw0KCXZhciBfZGVmYXVsdCQ1ID0gcmVuZGVyZXJfc29mdHdhcmVfeXV2LmRlZmF1bHQgPSBTb2Z0d2FyZVJlbmRlcmVyOwoKCXZhciByZW5kZXJlcl93ZWJnbF95dXYgPSB7fTsKCglPYmplY3QuZGVmaW5lUHJvcGVydHkocmVuZGVyZXJfd2ViZ2xfeXV2LCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7DQoJdmFyIGRlZmF1bHRTaGFkZXJUeXBlID0gWydWRVJURVhfU0hBREVSJywgJ0ZSQUdNRU5UX1NIQURFUiddOw0KCWZ1bmN0aW9uIGVycm9yKG1zZykgew0KCSAgICBpZiAod2luZG93LmNvbnNvbGUpIHsNCgkgICAgICAgIGlmICh3aW5kb3cuY29uc29sZS5lcnJvcikgew0KCSAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmVycm9yKG1zZyk7DQoJICAgICAgICB9DQoJICAgICAgICBlbHNlIGlmICh3aW5kb3cuY29uc29sZS5sb2cpIHsNCgkgICAgICAgICAgICB3aW5kb3cuY29uc29sZS5sb2cobXNnKTsNCgkgICAgICAgIH0NCgkgICAgfQ0KCX0NCglmdW5jdGlvbiBsb2FkU2hhZGVyKGdsLCBzaGFkZXJTb3VyY2UsIHNoYWRlclR5cGUsIG9wdF9lcnJvckNhbGxiYWNrKSB7DQoJICAgIHZhciBlcnJGbiA9IG9wdF9lcnJvckNhbGxiYWNrIHx8IGVycm9yOw0KCSAgICAvLyBDcmVhdGUgdGhlIHNoYWRlciBvYmplY3QNCgkgICAgdmFyIHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihzaGFkZXJUeXBlKTsNCgkgICAgLy8gTG9hZCB0aGUgc2hhZGVyIHNvdXJjZQ0KCSAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpOw0KCSAgICAvLyBDb21waWxlIHRoZSBzaGFkZXINCgkgICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpOw0KCSAgICAvLyBDaGVjayB0aGUgY29tcGlsZSBzdGF0dXMNCgkgICAgdmFyIGNvbXBpbGVkID0gZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpOw0KCSAgICBpZiAoIWNvbXBpbGVkKSB7DQoJICAgICAgICAvLyBTb21ldGhpbmcgd2VudCB3cm9uZyBkdXJpbmcgY29tcGlsYXRpb247IGdldCB0aGUgZXJyb3INCgkgICAgICAgIHZhciBsYXN0RXJyb3IgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7DQoJICAgICAgICBlcnJGbigiKioqIEVycm9yIGNvbXBpbGluZyBzaGFkZXIgJyIgKyBzaGFkZXIgKyAiJzoiICsgbGFzdEVycm9yKTsNCgkgICAgICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpOw0KCSAgICAgICAgcmV0dXJuIG51bGw7DQoJICAgIH0NCgkgICAgcmV0dXJuIHNoYWRlcjsNCgl9DQoJZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSQxKGdsLCBzaGFkZXJzLCBvcHRfYXR0cmlicywgb3B0X2xvY2F0aW9ucywgb3B0X2Vycm9yQ2FsbGJhY2spIHsNCgkgICAgdmFyIGVyckZuID0gb3B0X2Vycm9yQ2FsbGJhY2sgfHwgZXJyb3I7DQoJICAgIHZhciBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpOw0KCSAgICBzaGFkZXJzLmZvckVhY2goZnVuY3Rpb24gKHNoYWRlcikgew0KCSAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHNoYWRlcik7DQoJICAgIH0pOw0KCSAgICBpZiAob3B0X2F0dHJpYnMpIHsNCgkgICAgICAgIG9wdF9hdHRyaWJzLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYiwgbmR4KSB7DQoJICAgICAgICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIG9wdF9sb2NhdGlvbnMgPyBvcHRfbG9jYXRpb25zW25keF0gOiBuZHgsIGF0dHJpYik7DQoJICAgICAgICB9KTsNCgkgICAgfQ0KCSAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTsNCgkgICAgLy8gQ2hlY2sgdGhlIGxpbmsgc3RhdHVzDQoJICAgIHZhciBsaW5rZWQgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKTsNCgkgICAgaWYgKCFsaW5rZWQpIHsNCgkgICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggdGhlIGxpbmsNCgkgICAgICAgIHZhciBsYXN0RXJyb3IgPSBnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKTsNCgkgICAgICAgIGVyckZuKCdFcnJvciBpbiBwcm9ncmFtIGxpbmtpbmc6JyArIGxhc3RFcnJvcik7DQoJICAgICAgICBnbC5kZWxldGVQcm9ncmFtKHByb2dyYW0pOw0KCSAgICAgICAgcmV0dXJuIG51bGw7DQoJICAgIH0NCgkgICAgcmV0dXJuIHByb2dyYW07DQoJfQ0KCWZ1bmN0aW9uIGNyZWF0ZVByb2dyYW1Gcm9tU291cmNlcyhnbCwgc2hhZGVyU291cmNlcywgb3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJvckNhbGxiYWNrKSB7DQoJICAgIHZhciBzaGFkZXJzID0gW107DQoJICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBzaGFkZXJTb3VyY2VzLmxlbmd0aDsgKytpaSkgew0KCSAgICAgICAgc2hhZGVycy5wdXNoKA0KCSAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBKUyB1dGlscw0KCSAgICAgICAgbG9hZFNoYWRlcihnbCwgc2hhZGVyU291cmNlc1tpaV0sIGdsW2RlZmF1bHRTaGFkZXJUeXBlW2lpXV0sIG9wdF9lcnJvckNhbGxiYWNrKSk7DQoJICAgIH0NCgkgICAgcmV0dXJuIGNyZWF0ZVByb2dyYW0kMShnbCwgc2hhZGVycywgb3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJvckNhbGxiYWNrKTsNCgl9DQoJdmFyIHZlcnRleFNoYWRlclNvdXJjZSQxID0gJ2F0dHJpYnV0ZSB2ZWMyIGFfcG9zaXRpb247JyArDQoJICAgICdhdHRyaWJ1dGUgdmVjMiBhX3RleENvb3JkOycgKw0KCSAgICAndW5pZm9ybSB2ZWMyIHVfcmVzb2x1dGlvbjsnICsNCgkgICAgJ3ZhcnlpbmcgdmVjMiB2X3RleENvb3JkOycgKw0KCSAgICAndm9pZCBtYWluKCkgeycgKw0KCSAgICAndmVjMiB6ZXJvVG9PbmUgPSBhX3Bvc2l0aW9uIC8gdV9yZXNvbHV0aW9uOycgKw0KCSAgICAnICAgdmVjMiB6ZXJvVG9Ud28gPSB6ZXJvVG9PbmUgKiAyLjA7JyArDQoJICAgICcgICB2ZWMyIGNsaXBTcGFjZSA9IHplcm9Ub1R3byAtIDEuMDsnICsNCgkgICAgJyAgIGdsX1Bvc2l0aW9uID0gdmVjNChjbGlwU3BhY2UgKiB2ZWMyKDEsIC0xKSwgMCwgMSk7JyArDQoJICAgICd2X3RleENvb3JkID0gYV90ZXhDb29yZDsnICsNCgkgICAgJ30nOw0KCXZhciB5dXZTaGFkZXJTb3VyY2UgPSAncHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7JyArDQoJICAgICd1bmlmb3JtIHNhbXBsZXIyRCBZdGV4OycgKw0KCSAgICAndW5pZm9ybSBzYW1wbGVyMkQgVXRleDsnICsNCgkgICAgJ3VuaWZvcm0gc2FtcGxlcjJEIFZ0ZXg7JyArDQoJICAgICd2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDsnICsNCgkgICAgJ3ZvaWQgbWFpbih2b2lkKSB7JyArDQoJICAgICcgIGZsb2F0IG54LG55LHIsZyxiLHksdSx2OycgKw0KCSAgICAnICBtZWRpdW1wIHZlYzQgdHhsLHV4LHZ4OycgKw0KCSAgICAnICBueD12X3RleENvb3JkWzBdOycgKw0KCSAgICAnICBueT12X3RleENvb3JkWzFdOycgKw0KCSAgICAnICB5PXRleHR1cmUyRChZdGV4LHZlYzIobngsbnkpKS5yOycgKw0KCSAgICAnICB1PXRleHR1cmUyRChVdGV4LHZlYzIobngsbnkpKS5yOycgKw0KCSAgICAnICB2PXRleHR1cmUyRChWdGV4LHZlYzIobngsbnkpKS5yOycgKw0KCSAgICAnICB5PTEuMTY0MyooeS0wLjA2MjUpOycgKw0KCSAgICAnICB1PXUtMC41OycgKw0KCSAgICAnICB2PXYtMC41OycgKw0KCSAgICAnICByPXkrMS41OTU4KnY7JyArDQoJICAgICcgIGc9eS0wLjM5MTczKnUtMC44MTI5MCp2OycgKw0KCSAgICAnICBiPXkrMi4wMTcqdTsnICsNCgkgICAgJyAgZ2xfRnJhZ0NvbG9yPXZlYzQocixnLGIsMS4wKTsnICsNCgkgICAgJ30nOw0KCXZhciBXZWJHTFJlbmRlcmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkgew0KCSAgICBmdW5jdGlvbiBXZWJHTFJlbmRlcmVyKGNhbnZhcywgb25Db250ZXh0TG9zdCkgew0KCSAgICAgICAgdmFyIF90aGlzID0gdGhpczsNCgkgICAgICAgIHRoaXMuaXNJbml0ID0gZmFsc2U7DQoJICAgICAgICB0aGlzLnlUZXh0dXJlV2lkdGggPSAwOw0KCSAgICAgICAgdGhpcy55VGV4dHVyZUhlaWdodCA9IDA7DQoJICAgICAgICB0aGlzLnVUZXh0dXJlV2lkdGggPSAwOw0KCSAgICAgICAgdGhpcy51VGV4dHVyZUhlaWdodCA9IDA7DQoJICAgICAgICB0aGlzLnZUZXh0dXJlV2lkdGggPSAwOw0KCSAgICAgICAgdGhpcy52VGV4dHVyZUhlaWdodCA9IDA7DQoJICAgICAgICB0aGlzLmhhbmRsZUNvbnRleHRMb3N0ID0gZnVuY3Rpb24gKGV2ZW50KSB7DQoJICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsNCgkgICAgICAgICAgICBfdGhpcy5yZWxlYXNlVGV4dHVyZXMoKTsNCgkgICAgICAgICAgICBvbkNvbnRleHRMb3N0Py4oKTsNCgkgICAgICAgIH07DQoJICAgICAgICB0aGlzLmhhbmRsZUNvbnRleHRSZXN0b3JlZCA9IGZ1bmN0aW9uIChldmVudCkgew0KCSAgICAgICAgICAgIHZhciBfYTsNCgkgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOw0KCSAgICAgICAgICAgIC8vIFNldHVwIEdMU0wgcHJvZ3JhbQ0KCSAgICAgICAgICAgIF90aGlzLnByb2dyYW0gPSBjcmVhdGVQcm9ncmFtRnJvbVNvdXJjZXMoX3RoaXMuZ2wsIFsNCgkgICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyU291cmNlJDEsDQoJICAgICAgICAgICAgICAgIHl1dlNoYWRlclNvdXJjZSwNCgkgICAgICAgICAgICBdKTsNCgkgICAgICAgICAgICAoX2EgPSBfdGhpcy5nbCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnVzZVByb2dyYW0oX3RoaXMucHJvZ3JhbSk7DQoJICAgICAgICAgICAgX3RoaXMuaW5pdFRleHR1cmVzKCk7DQoJICAgICAgICB9Ow0KCSAgICAgICAgdGhpcy5nbCA9IHVuZGVmaW5lZDsNCgkgICAgICAgIHRoaXMueVRleHR1cmUgPSBudWxsOw0KCSAgICAgICAgdGhpcy51VGV4dHVyZSA9IG51bGw7DQoJICAgICAgICB0aGlzLnZUZXh0dXJlID0gbnVsbDsNCgkgICAgICAgIHRoaXMudGV4Q29vcmRCdWZmZXIgPSBudWxsOw0KCSAgICAgICAgdGhpcy5zdXJmYWNlQnVmZmVyID0gbnVsbDsNCgkgICAgICAgIHRoaXMuYmluZChjYW52YXMpOw0KCSAgICAgICAgdGhpcy5pc0luaXQgPSB0cnVlOw0KCSAgICB9DQoJICAgIFdlYkdMUmVuZGVyZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY2FudmFzKSB7DQoJICAgICAgICB2YXIgX3RoaXMgPSB0aGlzOw0KCSAgICAgICAgdmFyIF9hLCBfYiwgX2M7DQoJICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhczsNCgkgICAgICAgIChfYSA9IHRoaXMuY2FudmFzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcignd2ViZ2xjb250ZXh0bG9zdCcsIHRoaXMuaGFuZGxlQ29udGV4dExvc3QsIGZhbHNlKTsNCgkgICAgICAgIChfYiA9IHRoaXMuY2FudmFzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYWRkRXZlbnRMaXN0ZW5lcignd2ViZ2xjb250ZXh0cmVzdG9yZWQnLCB0aGlzLmhhbmRsZUNvbnRleHRSZXN0b3JlZCwgZmFsc2UpOw0KCSAgICAgICAgdmFyIGdldENvbnRleHQgPSBmdW5jdGlvbiAoY29udGV4dE5hbWVzKSB7DQoJICAgICAgICAgICAgdmFyIF9hOw0KCSAgICAgICAgICAgIGlmIChjb250ZXh0TmFtZXMgPT09IHZvaWQgMCkgeyBjb250ZXh0TmFtZXMgPSBbJ3dlYmdsMicsICd3ZWJnbCcsICdleHBlcmltZW50YWwtd2ViZ2wnXTsgfQ0KCSAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgY29udGV4dE5hbWVzXzEgPSBjb250ZXh0TmFtZXM7IF9pIDwgY29udGV4dE5hbWVzXzEubGVuZ3RoOyBfaSsrKSB7DQoJICAgICAgICAgICAgICAgIHZhciBjb250ZXh0TmFtZSA9IGNvbnRleHROYW1lc18xW19pXTsNCgkgICAgICAgICAgICAgICAgdmFyIGNvbnRleHQgPSAoX2EgPSBfdGhpcy5jYW52YXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRDb250ZXh0KGNvbnRleHROYW1lLCB7DQoJICAgICAgICAgICAgICAgICAgICBkZXB0aDogZmFsc2UsDQoJICAgICAgICAgICAgICAgICAgICBzdGVuY2lsOiBmYWxzZSwNCgkgICAgICAgICAgICAgICAgICAgIGFscGhhOiBmYWxzZSwNCgkgICAgICAgICAgICAgICAgICAgIGFudGlhbGlhczogZmFsc2UsDQoJICAgICAgICAgICAgICAgICAgICBwcmVtdWx0aXBsaWVkQWxwaGE6IHRydWUsDQoJICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IGZhbHNlLA0KCSAgICAgICAgICAgICAgICAgICAgcG93ZXJQcmVmZXJlbmNlOiAnaGlnaC1wZXJmb3JtYW5jZScsDQoJICAgICAgICAgICAgICAgICAgICBmYWlsSWZNYWpvclBlcmZvcm1hbmNlQ2F2ZWF0OiBmYWxzZSwNCgkgICAgICAgICAgICAgICAgfSk7DQoJICAgICAgICAgICAgICAgIGlmIChjb250ZXh0KSB7DQoJICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dDsNCgkgICAgICAgICAgICAgICAgfQ0KCSAgICAgICAgICAgIH0NCgkgICAgICAgICAgICByZXR1cm4gbnVsbDsNCgkgICAgICAgIH07DQoJICAgICAgICAoX2MgPSB0aGlzLmdsKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAodGhpcy5nbCA9IGdldENvbnRleHQoKSk7DQoJICAgICAgICBpZiAoIXRoaXMuZ2wpIHsNCgkgICAgICAgICAgICByZXR1cm47DQoJICAgICAgICB9DQoJICAgICAgICAvLyBTZXQgY2xlYXIgY29sb3IgdG8gYmxhY2ssIGZ1bGx5IG9wYXF1ZQ0KCSAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7DQoJICAgICAgICAvLyBFbmFibGUgZGVwdGggdGVzdGluZw0KCSAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5ERVBUSF9URVNUKTsNCgkgICAgICAgIC8vIE5lYXIgdGhpbmdzIG9ic2N1cmUgZmFyIHRoaW5ncw0KCSAgICAgICAgdGhpcy5nbC5kZXB0aEZ1bmModGhpcy5nbC5MRVFVQUwpOw0KCSAgICAgICAgLy8gQ2xlYXIgdGhlIGNvbG9yIGFzIHdlbGwgYXMgdGhlIGRlcHRoIGJ1ZmZlci4NCgkgICAgICAgIHRoaXMuZ2wuY2xlYXIodGhpcy5nbC5DT0xPUl9CVUZGRVJfQklUIHwNCgkgICAgICAgICAgICB0aGlzLmdsLkRFUFRIX0JVRkZFUl9CSVQgfA0KCSAgICAgICAgICAgIHRoaXMuZ2wuU1RFTkNJTF9CVUZGRVJfQklUKTsNCgkgICAgICAgIC8vIFNldHVwIEdMU0wgcHJvZ3JhbQ0KCSAgICAgICAgdGhpcy5wcm9ncmFtID0gY3JlYXRlUHJvZ3JhbUZyb21Tb3VyY2VzKHRoaXMuZ2wsIFsNCgkgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UkMSwNCgkgICAgICAgICAgICB5dXZTaGFkZXJTb3VyY2UsDQoJICAgICAgICBdKTsNCgkgICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pOw0KCSAgICAgICAgdGhpcy5pbml0VGV4dHVyZXMoKTsNCgkgICAgfTsNCgkgICAgV2ViR0xSZW5kZXJlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHsNCgkgICAgICAgIHZhciBfYSwgX2I7DQoJICAgICAgICAoX2EgPSB0aGlzLmNhbnZhcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmdsY29udGV4dGxvc3QnLCB0aGlzLmhhbmRsZUNvbnRleHRMb3N0LCBmYWxzZSk7DQoJICAgICAgICAoX2IgPSB0aGlzLmNhbnZhcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmdsY29udGV4dHJlc3RvcmVkJywgdGhpcy5oYW5kbGVDb250ZXh0UmVzdG9yZWQsIGZhbHNlKTsNCgkgICAgICAgIHRoaXMucmVsZWFzZVRleHR1cmVzKCk7DQoJICAgICAgICB0aGlzLmdsID0gdW5kZWZpbmVkOw0KCSAgICAgICAgdGhpcy5pc0luaXQgPSBmYWxzZTsNCgkgICAgfTsNCgkgICAgV2ViR0xSZW5kZXJlci5wcm90b3R5cGUuZHJhd0ZyYW1lID0gZnVuY3Rpb24gKHZpZGVvRnJhbWUpIHsNCgkgICAgICAgIHZhciB3aWR0aCA9IHZpZGVvRnJhbWUud2lkdGgsIGhlaWdodCA9IHZpZGVvRnJhbWUuaGVpZ2h0LCB5U3RyaWRlID0gdmlkZW9GcmFtZS55U3RyaWRlLCB1U3RyaWRlID0gdmlkZW9GcmFtZS51U3RyaWRlLCB2U3RyaWRlID0gdmlkZW9GcmFtZS52U3RyaWRlLCB5QnVmZmVyID0gdmlkZW9GcmFtZS55QnVmZmVyLCB1QnVmZmVyID0gdmlkZW9GcmFtZS51QnVmZmVyLCB2QnVmZmVyID0gdmlkZW9GcmFtZS52QnVmZmVyOw0KCSAgICAgICAgdGhpcy5yb3RhdGVDYW52YXModmlkZW9GcmFtZSk7DQoJICAgICAgICBpZiAoIXRoaXMuZ2wgfHwgIXRoaXMucHJvZ3JhbSB8fCAhdGhpcy5jYW52YXMpDQoJICAgICAgICAgICAgcmV0dXJuOw0KCSAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDsNCgkgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDsNCgkgICAgICAgIHZhciBsZWZ0ID0gMCwgdG9wID0gMCwgcmlnaHQgPSB5U3RyaWRlIC0gd2lkdGgsIGJvdHRvbSA9IDA7DQoJICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHRoaXMudGV4Q29vcmRCdWZmZXIpOw0KCSAgICAgICAgdmFyIHhXaWR0aCA9IHdpZHRoICsgbGVmdCArIHJpZ2h0Ow0KCSAgICAgICAgdmFyIHhIZWlnaHQgPSBoZWlnaHQgKyB0b3AgKyBib3R0b207DQoJICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoWw0KCSAgICAgICAgICAgIGxlZnQgLyB4V2lkdGgsDQoJICAgICAgICAgICAgYm90dG9tIC8geEhlaWdodCwNCgkgICAgICAgICAgICAxIC0gcmlnaHQgLyB4V2lkdGgsDQoJICAgICAgICAgICAgYm90dG9tIC8geEhlaWdodCwNCgkgICAgICAgICAgICBsZWZ0IC8geFdpZHRoLA0KCSAgICAgICAgICAgIDEgLSB0b3AgLyB4SGVpZ2h0LA0KCSAgICAgICAgICAgIGxlZnQgLyB4V2lkdGgsDQoJICAgICAgICAgICAgMSAtIHRvcCAvIHhIZWlnaHQsDQoJICAgICAgICAgICAgMSAtIHJpZ2h0IC8geFdpZHRoLA0KCSAgICAgICAgICAgIGJvdHRvbSAvIHhIZWlnaHQsDQoJICAgICAgICAgICAgMSAtIHJpZ2h0IC8geFdpZHRoLA0KCSAgICAgICAgICAgIDEgLSB0b3AgLyB4SGVpZ2h0LA0KCSAgICAgICAgXSksIHRoaXMuZ2wuU1RBVElDX0RSQVcpOw0KCSAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnRleENvb3JkTG9jYXRpb24pOw0KCSAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMudGV4Q29vcmRMb2NhdGlvbiwgMiwgdGhpcy5nbC5GTE9BVCwgZmFsc2UsIDAsIDApOw0KCSAgICAgICAgdGhpcy5nbC5waXhlbFN0b3JlaSh0aGlzLmdsLlVOUEFDS19BTElHTk1FTlQsIDEpOw0KCSAgICAgICAgLy8gWSB0ZXh0dXJlDQoJICAgICAgICB0aGlzLmdsLmFjdGl2ZVRleHR1cmUodGhpcy5nbC5URVhUVVJFMCk7DQoJICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy55VGV4dHVyZSk7DQoJICAgICAgICBpZiAodGhpcy55VGV4dHVyZVdpZHRoICE9PSB4V2lkdGggfHwgdGhpcy55VGV4dHVyZUhlaWdodCAhPT0gaGVpZ2h0KSB7DQoJICAgICAgICAgICAgdGhpcy5nbC50ZXhJbWFnZTJEKHRoaXMuZ2wuVEVYVFVSRV8yRCwgMCwgdGhpcy5nbC5MVU1JTkFOQ0UsIHhXaWR0aCwgaGVpZ2h0LCAwLCB0aGlzLmdsLkxVTUlOQU5DRSwgdGhpcy5nbC5VTlNJR05FRF9CWVRFLCB5QnVmZmVyKTsNCgkgICAgICAgICAgICB0aGlzLnlUZXh0dXJlV2lkdGggPSB4V2lkdGg7DQoJICAgICAgICAgICAgdGhpcy55VGV4dHVyZUhlaWdodCA9IGhlaWdodDsNCgkgICAgICAgIH0NCgkgICAgICAgIGVsc2Ugew0KCSAgICAgICAgICAgIHRoaXMuZ2wudGV4U3ViSW1hZ2UyRCh0aGlzLmdsLlRFWFRVUkVfMkQsIDAsIDAsIDAsIHhXaWR0aCwgaGVpZ2h0LCB0aGlzLmdsLkxVTUlOQU5DRSwgdGhpcy5nbC5VTlNJR05FRF9CWVRFLCB5QnVmZmVyKTsNCgkgICAgICAgIH0NCgkgICAgICAgIC8vIFUgdGV4dHVyZQ0KCSAgICAgICAgdGhpcy5nbC5hY3RpdmVUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRTEpOw0KCSAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMudVRleHR1cmUpOw0KCSAgICAgICAgaWYgKHRoaXMudVRleHR1cmVXaWR0aCAhPT0gdVN0cmlkZSB8fCB0aGlzLnVUZXh0dXJlSGVpZ2h0ICE9PSBoZWlnaHQgLyAyKSB7DQoJICAgICAgICAgICAgdGhpcy5nbC50ZXhJbWFnZTJEKHRoaXMuZ2wuVEVYVFVSRV8yRCwgMCwgdGhpcy5nbC5MVU1JTkFOQ0UsIHVTdHJpZGUsIGhlaWdodCAvIDIsIDAsIHRoaXMuZ2wuTFVNSU5BTkNFLCB0aGlzLmdsLlVOU0lHTkVEX0JZVEUsIHVCdWZmZXIpOw0KCSAgICAgICAgICAgIHRoaXMudVRleHR1cmVXaWR0aCA9IHVTdHJpZGU7DQoJICAgICAgICAgICAgdGhpcy51VGV4dHVyZUhlaWdodCA9IGhlaWdodCAvIDI7DQoJICAgICAgICB9DQoJICAgICAgICBlbHNlIHsNCgkgICAgICAgICAgICB0aGlzLmdsLnRleFN1YkltYWdlMkQodGhpcy5nbC5URVhUVVJFXzJELCAwLCAwLCAwLCB1U3RyaWRlLCBoZWlnaHQgLyAyLCB0aGlzLmdsLkxVTUlOQU5DRSwgdGhpcy5nbC5VTlNJR05FRF9CWVRFLCB1QnVmZmVyKTsNCgkgICAgICAgIH0NCgkgICAgICAgIC8vIFYgdGV4dHVyZQ0KCSAgICAgICAgdGhpcy5nbC5hY3RpdmVUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRTIpOw0KCSAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMudlRleHR1cmUpOw0KCSAgICAgICAgaWYgKHRoaXMudlRleHR1cmVXaWR0aCAhPT0gdlN0cmlkZSB8fCB0aGlzLnZUZXh0dXJlSGVpZ2h0ICE9PSBoZWlnaHQgLyAyKSB7DQoJICAgICAgICAgICAgdGhpcy5nbC50ZXhJbWFnZTJEKHRoaXMuZ2wuVEVYVFVSRV8yRCwgMCwgdGhpcy5nbC5MVU1JTkFOQ0UsIHZTdHJpZGUsIGhlaWdodCAvIDIsIDAsIHRoaXMuZ2wuTFVNSU5BTkNFLCB0aGlzLmdsLlVOU0lHTkVEX0JZVEUsIHZCdWZmZXIpOw0KCSAgICAgICAgICAgIHRoaXMudlRleHR1cmVXaWR0aCA9IHZTdHJpZGU7DQoJICAgICAgICAgICAgdGhpcy52VGV4dHVyZUhlaWdodCA9IGhlaWdodCAvIDI7DQoJICAgICAgICB9DQoJICAgICAgICBlbHNlIHsNCgkgICAgICAgICAgICB0aGlzLmdsLnRleFN1YkltYWdlMkQodGhpcy5nbC5URVhUVVJFXzJELCAwLCAwLCAwLCB2U3RyaWRlLCBoZWlnaHQgLyAyLCB0aGlzLmdsLkxVTUlOQU5DRSwgdGhpcy5nbC5VTlNJR05FRF9CWVRFLCB2QnVmZmVyKTsNCgkgICAgICAgIH0NCgkgICAgICAgIHRoaXMuZ2wuZHJhd0FycmF5cyh0aGlzLmdsLlRSSUFOR0xFUywgMCwgNik7DQoJICAgIH07DQoJICAgIFdlYkdMUmVuZGVyZXIucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkgew0KCSAgICAgICAgaWYgKCF0aGlzLmdsKQ0KCSAgICAgICAgICAgIHJldHVybjsNCgkgICAgICAgIC8vIFNldCBjbGVhciBjb2xvciB0byBibGFjaywgZnVsbHkgb3BhcXVlDQoJICAgICAgICB0aGlzLmdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMS4wKTsNCgkgICAgICAgIC8vIENsZWFyIHRoZSBjb2xvciBhcyB3ZWxsIGFzIHRoZSBkZXB0aCBidWZmZXIuDQoJICAgICAgICB0aGlzLmdsLmNsZWFyKHRoaXMuZ2wuQ09MT1JfQlVGRkVSX0JJVCB8DQoJICAgICAgICAgICAgdGhpcy5nbC5ERVBUSF9CVUZGRVJfQklUIHwNCgkgICAgICAgICAgICB0aGlzLmdsLlNURU5DSUxfQlVGRkVSX0JJVCk7DQoJICAgIH07DQoJICAgIFdlYkdMUmVuZGVyZXIucHJvdG90eXBlLnJvdGF0ZUNhbnZhcyA9IGZ1bmN0aW9uIChfYSkgew0KCSAgICAgICAgdmFyIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodCwgcm90YXRpb24gPSBfYS5yb3RhdGlvbjsNCgkgICAgICAgIGlmICghdGhpcy5nbCkNCgkgICAgICAgICAgICByZXR1cm47DQoJICAgICAgICB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHdpZHRoLCBoZWlnaHQpOw0KCSAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnN1cmZhY2VCdWZmZXIpOw0KCSAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnBvc2l0aW9uTG9jYXRpb24pOw0KCSAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMucG9zaXRpb25Mb2NhdGlvbiwgMiwgdGhpcy5nbC5GTE9BVCwgZmFsc2UsIDAsIDApOw0KCSAgICAgICAgLy8gNCB2ZXJ0ZXgsIDEoeDEseTEpLCAyKHgyLHkxKSwgMyh4Mix5MiksIDQoeDEseTIpDQoJICAgICAgICAvLyAwOiAxLDIsNC80LDIsMw0KCSAgICAgICAgLy8gOTA6IDIsMywxLzEsMyw0DQoJICAgICAgICAvLyAxODA6IDMsNCwyLzIsNCwxDQoJICAgICAgICAvLyAyNzA6IDQsMSwzLzMsMSwyDQoJICAgICAgICB2YXIgcDEgPSB7IHg6IDAsIHk6IDAgfTsNCgkgICAgICAgIHZhciBwMiA9IHsgeDogd2lkdGgsIHk6IDAgfTsNCgkgICAgICAgIHZhciBwMyA9IHsgeDogd2lkdGgsIHk6IGhlaWdodCB9Ow0KCSAgICAgICAgdmFyIHA0ID0geyB4OiAwLCB5OiBoZWlnaHQgfTsNCgkgICAgICAgIHZhciBwcDEgPSBwMSwgcHAyID0gcDIsIHBwMyA9IHAzLCBwcDQgPSBwNDsNCgkgICAgICAgIHN3aXRjaCAocm90YXRpb24pIHsNCgkgICAgICAgICAgICBjYXNlIDA6DQoJICAgICAgICAgICAgICAgIGJyZWFrOw0KCSAgICAgICAgICAgIGNhc2UgOTA6DQoJICAgICAgICAgICAgICAgIHBwMSA9IHAyOw0KCSAgICAgICAgICAgICAgICBwcDIgPSBwMzsNCgkgICAgICAgICAgICAgICAgcHAzID0gcDQ7DQoJICAgICAgICAgICAgICAgIHBwNCA9IHAxOw0KCSAgICAgICAgICAgICAgICBicmVhazsNCgkgICAgICAgICAgICBjYXNlIDE4MDoNCgkgICAgICAgICAgICAgICAgcHAxID0gcDM7DQoJICAgICAgICAgICAgICAgIHBwMiA9IHA0Ow0KCSAgICAgICAgICAgICAgICBwcDMgPSBwMTsNCgkgICAgICAgICAgICAgICAgcHA0ID0gcDI7DQoJICAgICAgICAgICAgICAgIGJyZWFrOw0KCSAgICAgICAgICAgIGNhc2UgMjcwOg0KCSAgICAgICAgICAgICAgICBwcDEgPSBwNDsNCgkgICAgICAgICAgICAgICAgcHAyID0gcDE7DQoJICAgICAgICAgICAgICAgIHBwMyA9IHAyOw0KCSAgICAgICAgICAgICAgICBwcDQgPSBwMzsNCgkgICAgICAgICAgICAgICAgYnJlYWs7DQoJICAgICAgICB9DQoJICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoWw0KCSAgICAgICAgICAgIHBwMS54LA0KCSAgICAgICAgICAgIHBwMS55LA0KCSAgICAgICAgICAgIHBwMi54LA0KCSAgICAgICAgICAgIHBwMi55LA0KCSAgICAgICAgICAgIHBwNC54LA0KCSAgICAgICAgICAgIHBwNC55LA0KCSAgICAgICAgICAgIHBwNC54LA0KCSAgICAgICAgICAgIHBwNC55LA0KCSAgICAgICAgICAgIHBwMi54LA0KCSAgICAgICAgICAgIHBwMi55LA0KCSAgICAgICAgICAgIHBwMy54LA0KCSAgICAgICAgICAgIHBwMy55LA0KCSAgICAgICAgXSksIHRoaXMuZ2wuU1RBVElDX0RSQVcpOw0KCSAgICAgICAgdmFyIHJlc29sdXRpb25Mb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3VfcmVzb2x1dGlvbicpOw0KCSAgICAgICAgdGhpcy5nbC51bmlmb3JtMmYocmVzb2x1dGlvbkxvY2F0aW9uLCB3aWR0aCwgaGVpZ2h0KTsNCgkgICAgfTsNCgkgICAgV2ViR0xSZW5kZXJlci5wcm90b3R5cGUuaW5pdFRleHR1cmVzID0gZnVuY3Rpb24gKCkgew0KCSAgICAgICAgdmFyIF90aGlzID0gdGhpczsNCgkgICAgICAgIGlmICghdGhpcy5nbCkNCgkgICAgICAgICAgICByZXR1cm47DQoJICAgICAgICB0aGlzLnBvc2l0aW9uTG9jYXRpb24gPSB0aGlzLmdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ2FfcG9zaXRpb24nKTsNCgkgICAgICAgIHRoaXMudGV4Q29vcmRMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5wcm9ncmFtLCAnYV90ZXhDb29yZCcpOw0KCSAgICAgICAgdGhpcy5zdXJmYWNlQnVmZmVyID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKTsNCgkgICAgICAgIHRoaXMudGV4Q29vcmRCdWZmZXIgPSB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpOw0KCSAgICAgICAgdmFyIGNyZWF0ZVRleHR1cmUgPSBmdW5jdGlvbiAodGV4dHVyZUluZGV4KSB7DQoJICAgICAgICAgICAgaWYgKCFfdGhpcy5nbCkNCgkgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7DQoJICAgICAgICAgICAgLy8gQ3JlYXRlIGEgdGV4dHVyZS4NCgkgICAgICAgICAgICBfdGhpcy5nbC5hY3RpdmVUZXh0dXJlKHRleHR1cmVJbmRleCk7DQoJICAgICAgICAgICAgdmFyIHRleHR1cmUgPSBfdGhpcy5nbC5jcmVhdGVUZXh0dXJlKCk7DQoJICAgICAgICAgICAgX3RoaXMuZ2wuYmluZFRleHR1cmUoX3RoaXMuZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7DQoJICAgICAgICAgICAgLy8gU2V0IHRoZSBwYXJhbWV0ZXJzIHNvIHdlIGNhbiByZW5kZXIgYW55IHNpemUNCgkgICAgICAgICAgICBfdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKF90aGlzLmdsLlRFWFRVUkVfMkQsIF90aGlzLmdsLlRFWFRVUkVfV1JBUF9TLCBfdGhpcy5nbC5DTEFNUF9UT19FREdFKTsNCgkgICAgICAgICAgICBfdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKF90aGlzLmdsLlRFWFRVUkVfMkQsIF90aGlzLmdsLlRFWFRVUkVfV1JBUF9ULCBfdGhpcy5nbC5DTEFNUF9UT19FREdFKTsNCgkgICAgICAgICAgICBfdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKF90aGlzLmdsLlRFWFRVUkVfMkQsIF90aGlzLmdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgX3RoaXMuZ2wuTkVBUkVTVCk7DQoJICAgICAgICAgICAgX3RoaXMuZ2wudGV4UGFyYW1ldGVyaShfdGhpcy5nbC5URVhUVVJFXzJELCBfdGhpcy5nbC5URVhUVVJFX01BR19GSUxURVIsIF90aGlzLmdsLk5FQVJFU1QpOw0KCSAgICAgICAgICAgIHJldHVybiB0ZXh0dXJlOw0KCSAgICAgICAgfTsNCgkgICAgICAgIHRoaXMueVRleHR1cmUgPSBjcmVhdGVUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRTApOw0KCSAgICAgICAgdGhpcy51VGV4dHVyZSA9IGNyZWF0ZVRleHR1cmUodGhpcy5nbC5URVhUVVJFMSk7DQoJICAgICAgICB0aGlzLnZUZXh0dXJlID0gY3JlYXRlVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkUyKTsNCgkgICAgICAgIHZhciB5ID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAnWXRleCcpOw0KCSAgICAgICAgdGhpcy5nbC51bmlmb3JtMWkoeSwgMCk7IC8qIEJpbmQgWXRleCB0byB0ZXh0dXJlIHVuaXQgMCAqLw0KCSAgICAgICAgdmFyIHUgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sICdVdGV4Jyk7DQoJICAgICAgICB0aGlzLmdsLnVuaWZvcm0xaSh1LCAxKTsgLyogQmluZCBVdGV4IHRvIHRleHR1cmUgdW5pdCAxICovDQoJICAgICAgICB2YXIgdiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ1Z0ZXgnKTsNCgkgICAgICAgIHRoaXMuZ2wudW5pZm9ybTFpKHYsIDIpOyAvKiBCaW5kIFZ0ZXggdG8gdGV4dHVyZSB1bml0IDIgKi8NCgkgICAgfTsNCgkgICAgV2ViR0xSZW5kZXJlci5wcm90b3R5cGUucmVsZWFzZVRleHR1cmVzID0gZnVuY3Rpb24gKCkgew0KCSAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2Y7DQoJICAgICAgICAoX2EgPSB0aGlzLmdsKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZGVsZXRlUHJvZ3JhbSh0aGlzLnByb2dyYW0pOw0KCSAgICAgICAgdGhpcy5wcm9ncmFtID0gdW5kZWZpbmVkOw0KCSAgICAgICAgdGhpcy5wb3NpdGlvbkxvY2F0aW9uID0gdW5kZWZpbmVkOw0KCSAgICAgICAgdGhpcy50ZXhDb29yZExvY2F0aW9uID0gdW5kZWZpbmVkOw0KCSAgICAgICAgKF9iID0gdGhpcy5nbCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmRlbGV0ZVRleHR1cmUodGhpcy55VGV4dHVyZSk7DQoJICAgICAgICAoX2MgPSB0aGlzLmdsKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZGVsZXRlVGV4dHVyZSh0aGlzLnVUZXh0dXJlKTsNCgkgICAgICAgIChfZCA9IHRoaXMuZ2wpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5kZWxldGVUZXh0dXJlKHRoaXMudlRleHR1cmUpOw0KCSAgICAgICAgdGhpcy55VGV4dHVyZSA9IG51bGw7DQoJICAgICAgICB0aGlzLnVUZXh0dXJlID0gbnVsbDsNCgkgICAgICAgIHRoaXMudlRleHR1cmUgPSBudWxsOw0KCSAgICAgICAgKF9lID0gdGhpcy5nbCkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLmRlbGV0ZUJ1ZmZlcih0aGlzLnRleENvb3JkQnVmZmVyKTsNCgkgICAgICAgIChfZiA9IHRoaXMuZ2wpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5kZWxldGVCdWZmZXIodGhpcy5zdXJmYWNlQnVmZmVyKTsNCgkgICAgICAgIHRoaXMudGV4Q29vcmRCdWZmZXIgPSBudWxsOw0KCSAgICAgICAgdGhpcy5zdXJmYWNlQnVmZmVyID0gbnVsbDsNCgkgICAgfTsNCgkgICAgcmV0dXJuIFdlYkdMUmVuZGVyZXI7DQoJfSgpKTsNCgl2YXIgX2RlZmF1bHQkNCA9IHJlbmRlcmVyX3dlYmdsX3l1di5kZWZhdWx0ID0gV2ViR0xSZW5kZXJlcjsKCgl2YXIgcmVuZGVyZXJfd2ViZ3B1X3l1diA9IHt9OwoKCXZhciBfX2F3YWl0ZXIgPSAoY29tbW9uanNHbG9iYWwgJiYgY29tbW9uanNHbG9iYWwuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7DQoJICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfQ0KCSAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsNCgkgICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH0NCgkgICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yWyJ0aHJvdyJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH0NCgkgICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9DQoJICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7DQoJICAgIH0pOw0KCX07DQoJdmFyIF9fZ2VuZXJhdG9yID0gKGNvbW1vbmpzR2xvYmFsICYmIGNvbW1vbmpzR2xvYmFsLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkgew0KCSAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnOw0KCSAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgInRocm93IjogdmVyYigxKSwgInJldHVybiI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gImZ1bmN0aW9uIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZzsNCgkgICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9DQoJICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHsNCgkgICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuIik7DQoJICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkgew0KCSAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbInJldHVybiJdIDogb3BbMF0gPyB5WyJ0aHJvdyJdIHx8ICgodCA9IHlbInJldHVybiJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDsNCgkgICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07DQoJICAgICAgICAgICAgc3dpdGNoIChvcFswXSkgew0KCSAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhazsNCgkgICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTsNCgkgICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlOw0KCSAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7DQoJICAgICAgICAgICAgICAgIGRlZmF1bHQ6DQoJICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH0NCgkgICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9DQoJICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH0NCgkgICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH0NCgkgICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTsNCgkgICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7DQoJICAgICAgICAgICAgfQ0KCSAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pOw0KCSAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfQ0KCSAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07DQoJICAgIH0NCgl9Ow0KCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZW5kZXJlcl93ZWJncHVfeXV2LCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7DQoJdmFyIGNvZGUgPSAiXG4gIHN0cnVjdCBPdXJWZXJ0ZXhTaGFkZXJPdXRwdXQge1xuICAgIEBidWlsdGluKHBvc2l0aW9uKSBwb3NpdGlvbjogdmVjNGYsXG4gICAgQGxvY2F0aW9uKDApIHRleGNvb3JkOiB2ZWMyZixcbiAgfTtcbiAgXG4gIEB2ZXJ0ZXggZm4gdnMoXG4gICAgQGJ1aWx0aW4odmVydGV4X2luZGV4KSB2ZXJ0ZXhJbmRleCA6IHUzMixcbiAgICBAbG9jYXRpb24oMCkgeE9mZnNldDogZjMyXG4gICkgLT4gT3VyVmVydGV4U2hhZGVyT3V0cHV0IHtcbiAgICB2YXIgcG9zID0gYXJyYXk8dmVjMjxmMzI+LCA2PihcbiAgICAgIHZlYzI8ZjMyPiggMS4wLCAgMS4wKSxcbiAgICAgIHZlYzI8ZjMyPigtMS4wLCAtMS4wKSxcbiAgICAgIHZlYzI8ZjMyPigtMS4wLCAgMS4wKSxcbiAgICAgIHZlYzI8ZjMyPiggMS4wLCAgMS4wKSxcbiAgICAgIHZlYzI8ZjMyPiggMS4wLCAtMS4wKSxcbiAgICAgIHZlYzI8ZjMyPigtMS4wLCAtMS4wKSxcbiAgICApO1xuICBcbiAgICB2YXIgdXYgPSBhcnJheTx2ZWMyPGYzMj4sIDY+KFxuICAgICAgdmVjMjxmMzI+KDEuMCwgMC4wKSxcbiAgICAgIHZlYzI8ZjMyPigwLjAsIDEuMCksXG4gICAgICB2ZWMyPGYzMj4oMC4wLCAwLjApLFxuICAgICAgdmVjMjxmMzI+KDEuMCwgMC4wKSxcbiAgICAgIHZlYzI8ZjMyPigxLjAsIDEuMCksXG4gICAgICB2ZWMyPGYzMj4oMC4wLCAxLjApLFxuICAgICk7XG4gIFxuICAgIHZhciB2c091dHB1dDogT3VyVmVydGV4U2hhZGVyT3V0cHV0O1xuICAgIGxldCB4eSA9IHBvc1t2ZXJ0ZXhJbmRleF07XG4gICAgdnNPdXRwdXQucG9zaXRpb24gPSB2ZWM0Zih4eSwgMC4wLCAxLjApO1xuICAgIHZzT3V0cHV0LnRleGNvb3JkID0gdmVjMmYodXZbdmVydGV4SW5kZXhdLnggLSB4T2Zmc2V0LCB1dlt2ZXJ0ZXhJbmRleF0ueSk7XG4gICAgcmV0dXJuIHZzT3V0cHV0O1xuICB9XG4gIFxuICBAZ3JvdXAoMCkgQGJpbmRpbmcoMCkgdmFyIG91clNhbXBsZXI6IHNhbXBsZXI7XG4gIEBncm91cCgwKSBAYmluZGluZygxKSB2YXIgb3VyVGV4dHVyZVk6IHRleHR1cmVfMmQ8ZjMyPjtcbiAgQGdyb3VwKDApIEBiaW5kaW5nKDIpIHZhciBvdXJUZXh0dXJlVTogdGV4dHVyZV8yZDxmMzI+O1xuICBAZ3JvdXAoMCkgQGJpbmRpbmcoMykgdmFyIG91clRleHR1cmVWOiB0ZXh0dXJlXzJkPGYzMj47XG4gIFxuICBAZnJhZ21lbnQgZm4gZnMoZnNJbnB1dDogT3VyVmVydGV4U2hhZGVyT3V0cHV0KSAtPiBAbG9jYXRpb24oMCkgdmVjNGYge1xuICAgIGxldCB4ID0gZnNJbnB1dC50ZXhjb29yZC54O1xuICAgIC8vIGxldCB1diA9IHZlYzJmKHgsIGZzSW5wdXQudGV4Y29vcmQueSk7XG4gIFxuICAgIGxldCBZID0gc2VsZWN0KDAuMCwgdGV4dHVyZVNhbXBsZShvdXJUZXh0dXJlWSwgb3VyU2FtcGxlciwgZnNJbnB1dC50ZXhjb29yZCkueCwgeCA+IDAuMCk7XG4gICAgbGV0IFUgPSBzZWxlY3QoMC4wLCB0ZXh0dXJlU2FtcGxlKG91clRleHR1cmVVLCBvdXJTYW1wbGVyLCBmc0lucHV0LnRleGNvb3JkKS54LCB4ID4gMC4wKTtcbiAgICBsZXQgViA9IHNlbGVjdCgwLjAsIHRleHR1cmVTYW1wbGUob3VyVGV4dHVyZVYsIG91clNhbXBsZXIsIGZzSW5wdXQudGV4Y29vcmQpLngsIHggPiAwLjApO1xuICBcbiAgICBsZXQgZlltdWwgPSBZICogMS4xNjQzODI4MTI1O1xuICAgIGxldCByID0gZlltdWwgKyAxLjU5NjAyNzM0Mzc1ICogViAtIDAuODcwNzg3NTk4O1xuICAgIGxldCBnID0gZlltdWwgLSAwLjM5MTc2MTcxODc1ICogVSAtIDAuODEyOTY4NzUgKiBWICsgMC41Mjk1OTM3NTtcbiAgICBsZXQgYiA9IGZZbXVsICsgMi4wMTcyMzA0Njg3NSAqIFUgLSAxLjA4MTM4OTE2MDM3NTtcbiAgXG4gICAgcmV0dXJuIHZlYzRmKHIsIGcsIGIsIDAuMCk7XG4gIH1cbiAgIjsNCgl2YXIgZGVmYXVsdF9iYWNrZ3JvdW5kX2NvbG9yID0gWzYxIC8gMjU1LCA2MSAvIDI1NSwgNjEgLyAyNTUsIDFdOw0KCS8qKg0KCSAqIHRvZG86DQoJICog6ICD6JmR55u05o6l5ZyoIOWIneWni+WMlueUu+W4g+eahOaXtuWAmeWwseWwhumrmOW6puWkhOeQhuWlvQ0KCSAqIOmcgOimgeWkhOeQhiBjYW52YXMg55qE55m+5YiG5q+UDQoJICoNCgkgKiAgKi8NCgl2YXIgV2ViR1BVUmVuZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkgew0KCSAgICBmdW5jdGlvbiBXZWJHUFVSZW5kZXIoY2FudmFzLCBvcHRpb24pIHsNCgkgICAgICAgIHRoaXMub3B0aW9uID0gb3B0aW9uOw0KCSAgICAgICAgdGhpcy5zdGF0ZSA9IHsNCgkgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkZWZhdWx0X2JhY2tncm91bmRfY29sb3IsDQoJICAgICAgICB9Ow0KCSAgICAgICAgdGhpcy5zdGF0ZS5jYW52YXMgPSBjYW52YXM7DQoJICAgICAgICB0aGlzLmluaXQoKTsNCgkgICAgfQ0KCSAgICBXZWJHUFVSZW5kZXIuaXNTdXBwb3J0ID0gZnVuY3Rpb24gKCkgew0KCSAgICAgICAgcmV0dXJuICEhbmF2aWdhdG9yLmdwdTsNCgkgICAgfTsNCgkgICAgV2ViR1BVUmVuZGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkgew0KCSAgICAgICAgdmFyIF9hLCBfYiwgX2M7DQoJICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7DQoJICAgICAgICAgICAgdmFyIGFkYXB0ZXIsIGRldmljZSwgY3R4LCBmb3JtYXQ7DQoJICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZCkgew0KCSAgICAgICAgICAgICAgICBzd2l0Y2ggKF9kLmxhYmVsKSB7DQoJICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sICgoX2EgPSBuYXZpZ2F0b3IuZ3B1KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVxdWVzdEFkYXB0ZXIoKSldOw0KCSAgICAgICAgICAgICAgICAgICAgY2FzZSAxOg0KCSAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0ZXIgPSBfZC5zZW50KCk7DQoJICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgKGFkYXB0ZXIgPT09IG51bGwgfHwgYWRhcHRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCkpXTsNCgkgICAgICAgICAgICAgICAgICAgIGNhc2UgMjoNCgkgICAgICAgICAgICAgICAgICAgICAgICBkZXZpY2UgPSBfZC5zZW50KCk7DQoJICAgICAgICAgICAgICAgICAgICAgICAgY3R4ID0gKF9iID0gdGhpcy5zdGF0ZS5jYW52YXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZXRDb250ZXh0KCd3ZWJncHUnKTsNCgkgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQgPSAoX2MgPSBuYXZpZ2F0b3IuZ3B1KSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7DQoJICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkZXZpY2UgfHwgIWFkYXB0ZXIgfHwgIWN0eCB8fCAhZm9ybWF0KSB7DQoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignd2ViZ3B1IHJlbmRlciBpbml0IGVycm9yJyk7DQoJICAgICAgICAgICAgICAgICAgICAgICAgfQ0KCSAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGV2aWNlID0gZGV2aWNlOw0KCSAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGV4dHVyZUZvcm1hdCA9IGZvcm1hdDsNCgkgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN0eCA9IGN0eDsNCgkgICAgICAgICAgICAgICAgICAgICAgICBjdHguY29uZmlndXJlKHsNCgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV2aWNlOiBkZXZpY2UsDQoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0LA0KCSAgICAgICAgICAgICAgICAgICAgICAgIH0pOw0KCSAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTsNCgkgICAgICAgICAgICAgICAgfQ0KCSAgICAgICAgICAgIH0pOw0KCSAgICAgICAgfSk7DQoJICAgIH07DQoJICAgIC8vIOWPquiAg+iZkSB5dXY0MjANCgkgICAgV2ViR1BVUmVuZGVyLnByb3RvdHlwZS5kcmF3RnJhbWUgPSBmdW5jdGlvbiAodmlkZW9GcmFtZSkgew0KCSAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkgew0KCSAgICAgICAgICAgIHZhciBmcmFtZSwgX2EsIGxhc3RGb3JtYXQsIHJlbmRlckJ1bmRsZSwgdGV4dHVyZXMsIHZlcnRleEJ1ZiwgX2IsIGRldmljZSwgY3R4LCBuZWVkVXBkYXRlLCBjb21tYW5kZXIsIHBhc3M7DQoJICAgICAgICAgICAgdmFyIF9jOw0KCSAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2QpIHsNCgkgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmRldmljZSB8fCAhdGhpcy5zdGF0ZS5jdHgpIHsNCgkgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTsNCgkgICAgICAgICAgICAgICAgfQ0KCSAgICAgICAgICAgICAgICBmcmFtZSA9IHsNCgkgICAgICAgICAgICAgICAgICAgIGJ1Zl95OiB2aWRlb0ZyYW1lLnlCdWZmZXIsDQoJICAgICAgICAgICAgICAgICAgICBidWZfdTogdmlkZW9GcmFtZS51QnVmZmVyLA0KCSAgICAgICAgICAgICAgICAgICAgYnVmX3Y6IHZpZGVvRnJhbWUudkJ1ZmZlciwNCgkgICAgICAgICAgICAgICAgICAgIHN0cmlkZV95OiB2aWRlb0ZyYW1lLnlTdHJpZGUsDQoJICAgICAgICAgICAgICAgICAgICBzdHJpZGVfdTogdmlkZW9GcmFtZS51U3RyaWRlLA0KCSAgICAgICAgICAgICAgICAgICAgc3RyaWRlX3Y6IHZpZGVvRnJhbWUudlN0cmlkZSwNCgkgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB2aWRlb0ZyYW1lLndpZHRoLA0KCSAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB2aWRlb0ZyYW1lLmhlaWdodCwNCgkgICAgICAgICAgICAgICAgICAgIHJlbmRlclRpbWU6IDAsDQoJICAgICAgICAgICAgICAgIH07DQoJICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmNhbnZhcykgew0KCSAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYW52YXMud2lkdGggPSBmcmFtZS5zdHJpZGVfeTsNCgkgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2FudmFzLmhlaWdodCA9IGZyYW1lLmhlaWdodDsNCgkgICAgICAgICAgICAgICAgfQ0KCSAgICAgICAgICAgICAgICBfYSA9IHRoaXMuc3RhdGUsIGxhc3RGb3JtYXQgPSBfYS5sYXN0Rm9ybWF0LCByZW5kZXJCdW5kbGUgPSBfYS5yZW5kZXJCdW5kbGUsIHRleHR1cmVzID0gX2EudGV4dHVyZXMsIHZlcnRleEJ1ZiA9IF9hLnZlcnRleEJ1ZjsNCgkgICAgICAgICAgICAgICAgX2IgPSB0aGlzLnN0YXRlLCBkZXZpY2UgPSBfYi5kZXZpY2UsIGN0eCA9IF9iLmN0eDsNCgkgICAgICAgICAgICAgICAgaWYgKCFjdHggfHwgIWRldmljZSkgew0KCSAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkZXZpY2Ugb3IgY3R4IHVuZGVmaW5lZCwgbmVlZCBjYWxsIGluaXQgZmlyc3QnKTsNCgkgICAgICAgICAgICAgICAgfQ0KCSAgICAgICAgICAgICAgICBuZWVkVXBkYXRlID0gZmFsc2U7DQoJICAgICAgICAgICAgICAgIC8vIOWIpOaWreaYr+WQpumcgOimgemHjee9rnNvdXJjZQ0KCSAgICAgICAgICAgICAgICBpZiAoKGxhc3RGb3JtYXQgPT09IG51bGwgfHwgbGFzdEZvcm1hdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGFzdEZvcm1hdC50ZXh0dXJlV2lkdGgpICE9PSBmcmFtZS5zdHJpZGVfeSB8fA0KCSAgICAgICAgICAgICAgICAgICAgKGxhc3RGb3JtYXQgPT09IG51bGwgfHwgbGFzdEZvcm1hdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGFzdEZvcm1hdC50ZXh0dXJlSGVpZ2h0KSAhPT0gZnJhbWUuaGVpZ2h0IHx8DQoJICAgICAgICAgICAgICAgICAgICAobGFzdEZvcm1hdCA9PT0gbnVsbCB8fCBsYXN0Rm9ybWF0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXN0Rm9ybWF0LnZpZXdXaWR0aCkgIT09IGZyYW1lLndpZHRoKSB7DQoJICAgICAgICAgICAgICAgICAgICBsYXN0Rm9ybWF0ID0gdGhpcy5mb3JtYXQoZnJhbWUpOw0KCSAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5sYXN0Rm9ybWF0ID0gbGFzdEZvcm1hdDsNCgkgICAgICAgICAgICAgICAgICAgIG5lZWRVcGRhdGUgPSB0cnVlOw0KCSAgICAgICAgICAgICAgICB9DQoJICAgICAgICAgICAgICAgIGlmICghcmVuZGVyQnVuZGxlIHx8IG5lZWRVcGRhdGUpIHsNCgkgICAgICAgICAgICAgICAgICAgIF9jID0gdGhpcy5jcmVhdGVUZXh0dXJlc0FuZFJlbmRlckJ1bmRsZShsYXN0Rm9ybWF0KSwgcmVuZGVyQnVuZGxlID0gX2NbMF0sIHRleHR1cmVzID0gX2NbMV0sIHZlcnRleEJ1ZiA9IF9jWzJdOw0KCSAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZW5kZXJCdW5kbGUgPSByZW5kZXJCdW5kbGU7DQoJICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnZlcnRleEJ1ZiA9IHZlcnRleEJ1ZjsNCgkgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGV4dHVyZXMgPSB0ZXh0dXJlczsNCgkgICAgICAgICAgICAgICAgfQ0KCSAgICAgICAgICAgICAgICBpZiAoIXRleHR1cmVzKSB7DQoJICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyZWF0ZSB0ZXh0dXJlIGVycm9yJyk7DQoJICAgICAgICAgICAgICAgIH0NCgkgICAgICAgICAgICAgICAgdGhpcy53cml0ZVRleHR1cmVzKGZyYW1lLCBkZXZpY2UsIGxhc3RGb3JtYXQsIHRleHR1cmVzKTsNCgkgICAgICAgICAgICAgICAgY29tbWFuZGVyID0gZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7DQoJICAgICAgICAgICAgICAgIHBhc3MgPSBjb21tYW5kZXIuYmVnaW5SZW5kZXJQYXNzKHsNCgkgICAgICAgICAgICAgICAgICAgIGNvbG9yQXR0YWNobWVudHM6IFsNCgkgICAgICAgICAgICAgICAgICAgICAgICB7DQoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXc6IGN0eC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKSwNCgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJWYWx1ZTogdGhpcy5zdGF0ZS5iYWNrZ3JvdW5kLA0KCSAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkT3A6ICdjbGVhcicsDQoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlT3A6ICdzdG9yZScsDQoJICAgICAgICAgICAgICAgICAgICAgICAgfSwNCgkgICAgICAgICAgICAgICAgICAgIF0sDQoJICAgICAgICAgICAgICAgIH0pOw0KCSAgICAgICAgICAgICAgICBwYXNzLnNldFNjaXNzb3JSZWN0KGxhc3RGb3JtYXQuY3JvcFdpZHRoLCAwLCBsYXN0Rm9ybWF0LnZpZXdXaWR0aCwgbGFzdEZvcm1hdC50ZXh0dXJlSGVpZ2h0KTsNCgkgICAgICAgICAgICAgICAgcGFzcy5leGVjdXRlQnVuZGxlcyhbcmVuZGVyQnVuZGxlXSk7DQoJICAgICAgICAgICAgICAgIHBhc3MuZW5kKCk7DQoJICAgICAgICAgICAgICAgIGRldmljZS5xdWV1ZS5zdWJtaXQoW2NvbW1hbmRlci5maW5pc2goKV0pOw0KCSAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107DQoJICAgICAgICAgICAgfSk7DQoJICAgICAgICB9KTsNCgkgICAgfTsNCgkgICAgV2ViR1BVUmVuZGVyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHsNCgkgICAgICAgIHZhciBfYSA9IHRoaXMuc3RhdGUsIGRldmljZSA9IF9hLmRldmljZSwgY3R4ID0gX2EuY3R4Ow0KCSAgICAgICAgaWYgKGRldmljZSAmJiBjdHgpIHsNCgkgICAgICAgICAgICB2YXIgY29tbWFuZGVyID0gZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7DQoJICAgICAgICAgICAgY29tbWFuZGVyLmJlZ2luUmVuZGVyUGFzcyh7DQoJICAgICAgICAgICAgICAgIGNvbG9yQXR0YWNobWVudHM6IFsNCgkgICAgICAgICAgICAgICAgICAgIHsNCgkgICAgICAgICAgICAgICAgICAgICAgICB2aWV3OiBjdHguZ2V0Q3VycmVudFRleHR1cmUoKS5jcmVhdGVWaWV3KCksDQoJICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJWYWx1ZTogdGhpcy5zdGF0ZS5iYWNrZ3JvdW5kLA0KCSAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRPcDogJ2NsZWFyJywNCgkgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZU9wOiAnc3RvcmUnLA0KCSAgICAgICAgICAgICAgICAgICAgfSwNCgkgICAgICAgICAgICAgICAgXSwNCgkgICAgICAgICAgICB9KTsNCgkgICAgICAgIH0NCgkgICAgfTsNCgkgICAgV2ViR1BVUmVuZGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkgew0KCSAgICAgICAgLy8g5riF55CGIOe6ueeQhg0KCSAgICAgICAgaWYgKHRoaXMuc3RhdGUudGV4dHVyZXMpIHsNCgkgICAgICAgICAgICB0aGlzLnN0YXRlLnRleHR1cmVzLnkuZGVzdHJveSgpOw0KCSAgICAgICAgICAgIHRoaXMuc3RhdGUudGV4dHVyZXMudS5kZXN0cm95KCk7DQoJICAgICAgICAgICAgdGhpcy5zdGF0ZS50ZXh0dXJlcy52LmRlc3Ryb3koKTsNCgkgICAgICAgICAgICB0aGlzLnN0YXRlLnRleHR1cmVzID0gdW5kZWZpbmVkOw0KCSAgICAgICAgfQ0KCSAgICAgICAgLy8g5riF55CG6aG254K557yT5Yay5Yy6DQoJICAgICAgICBpZiAodGhpcy5zdGF0ZS52ZXJ0ZXhCdWYpIHsNCgkgICAgICAgICAgICB0aGlzLnN0YXRlLnZlcnRleEJ1Zi5kZXN0cm95KCk7DQoJICAgICAgICAgICAgdGhpcy5zdGF0ZS52ZXJ0ZXhCdWYgPSB1bmRlZmluZWQ7DQoJICAgICAgICB9DQoJICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdHgpIHsNCgkgICAgICAgICAgICB0aGlzLnN0YXRlLmN0eC51bmNvbmZpZ3VyZSgpOw0KCSAgICAgICAgICAgIHRoaXMuc3RhdGUuY3R4ID0gdW5kZWZpbmVkOw0KCSAgICAgICAgfQ0KCSAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGV2aWNlKSB7DQoJICAgICAgICAgICAgdGhpcy5zdGF0ZS5kZXZpY2UuZGVzdHJveSgpOw0KCSAgICAgICAgICAgIHRoaXMuc3RhdGUuZGV2aWNlID0gdW5kZWZpbmVkOw0KCSAgICAgICAgfQ0KCSAgICAgICAgdGhpcy5zdGF0ZSA9IHsNCgkgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkZWZhdWx0X2JhY2tncm91bmRfY29sb3IsDQoJICAgICAgICB9Ow0KCSAgICB9Ow0KCSAgICAvLyDluKcgZGF0YSDlrr3luqblkowgZnJhbWUg5a695bqm5LiN5LiA6Ie077yM5omA5Lul6ZyA6KaB5aSE55CGDQoJICAgIFdlYkdQVVJlbmRlci5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gKGZyYW1lKSB7DQoJICAgICAgICByZXR1cm4gew0KCSAgICAgICAgICAgIHRleHR1cmVXaWR0aDogZnJhbWUuc3RyaWRlX3ksDQoJICAgICAgICAgICAgdGV4dHVyZUhlaWdodDogZnJhbWUuaGVpZ2h0LA0KCSAgICAgICAgICAgIHZpZXdXaWR0aDogZnJhbWUud2lkdGgsDQoJICAgICAgICAgICAgY3JvcFdpZHRoOiAoZnJhbWUuc3RyaWRlX3kgLSBmcmFtZS53aWR0aCkgLyAyLA0KCSAgICAgICAgICAgIHhPZmZzZXRSYXRlOiAoZnJhbWUuc3RyaWRlX3kgLSBmcmFtZS53aWR0aCkgLyAyIC8gZnJhbWUuc3RyaWRlX3ksDQoJICAgICAgICB9Ow0KCSAgICB9Ow0KCSAgICBXZWJHUFVSZW5kZXIucHJvdG90eXBlLndyaXRlVGV4dHVyZXMgPSBmdW5jdGlvbiAoZnJhbWUsIGRldmljZSwgZm9ybWF0LCB0ZXh0dXJlcykgew0KCSAgICAgICAgZGV2aWNlLnF1ZXVlLndyaXRlVGV4dHVyZSh7IHRleHR1cmU6IHRleHR1cmVzLnkgfSwgZnJhbWUuYnVmX3ksIHsgYnl0ZXNQZXJSb3c6IGZvcm1hdC50ZXh0dXJlV2lkdGggfSwgeyB3aWR0aDogZm9ybWF0LnRleHR1cmVXaWR0aCwgaGVpZ2h0OiBmb3JtYXQudGV4dHVyZUhlaWdodCB9KTsNCgkgICAgICAgIGRldmljZS5xdWV1ZS53cml0ZVRleHR1cmUoeyB0ZXh0dXJlOiB0ZXh0dXJlcy51IH0sIGZyYW1lLmJ1Zl91LCB7IGJ5dGVzUGVyUm93OiBmb3JtYXQudGV4dHVyZVdpZHRoIC8gMiB9LCB7IHdpZHRoOiBmb3JtYXQudGV4dHVyZVdpZHRoIC8gMiwgaGVpZ2h0OiBmb3JtYXQudGV4dHVyZUhlaWdodCAvIDIgfSk7DQoJICAgICAgICBkZXZpY2UucXVldWUud3JpdGVUZXh0dXJlKHsgdGV4dHVyZTogdGV4dHVyZXMudiB9LCBmcmFtZS5idWZfdiwgeyBieXRlc1BlclJvdzogZm9ybWF0LnRleHR1cmVXaWR0aCAvIDIgfSwgeyB3aWR0aDogZm9ybWF0LnRleHR1cmVXaWR0aCAvIDIsIGhlaWdodDogZm9ybWF0LnRleHR1cmVIZWlnaHQgLyAyIH0pOw0KCSAgICB9Ow0KCSAgICBXZWJHUFVSZW5kZXIucHJvdG90eXBlLmNyZWF0ZVRleHR1cmVzQW5kUmVuZGVyQnVuZGxlID0gZnVuY3Rpb24gKGZvcm1hdCkgew0KCSAgICAgICAgdmFyIF9hID0gdGhpcy5zdGF0ZSwgZGV2aWNlID0gX2EuZGV2aWNlLCB0ZXh0dXJlRm9ybWF0ID0gX2EudGV4dHVyZUZvcm1hdDsNCgkgICAgICAgIGlmICghZGV2aWNlIHx8ICF0ZXh0dXJlRm9ybWF0KSB7DQoJICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkZXZpY2Ugb3IgdGV4dHVyZUZvcm1hdCB1bmRlZmluZWQsIG5lZWQgY2FsbCBpbml0IGZpcnN0Jyk7DQoJICAgICAgICB9DQoJICAgICAgICB2YXIgdGV4dHVyZXMgPSB7DQoJICAgICAgICAgICAgeTogZGV2aWNlLmNyZWF0ZVRleHR1cmUoew0KCSAgICAgICAgICAgICAgICBmb3JtYXQ6ICdyOHVub3JtJywNCgkgICAgICAgICAgICAgICAgc2l6ZTogW2Zvcm1hdC50ZXh0dXJlV2lkdGgsIGZvcm1hdC50ZXh0dXJlSGVpZ2h0XSwNCgkgICAgICAgICAgICAgICAgdXNhZ2U6IEdQVVRleHR1cmVVc2FnZS5DT1BZX0RTVCB8DQoJICAgICAgICAgICAgICAgICAgICBHUFVUZXh0dXJlVXNhZ2UuUkVOREVSX0FUVEFDSE1FTlQgfA0KCSAgICAgICAgICAgICAgICAgICAgR1BVVGV4dHVyZVVzYWdlLlRFWFRVUkVfQklORElORywNCgkgICAgICAgICAgICB9KSwNCgkgICAgICAgICAgICB1OiBkZXZpY2UuY3JlYXRlVGV4dHVyZSh7DQoJICAgICAgICAgICAgICAgIGZvcm1hdDogJ3I4dW5vcm0nLA0KCSAgICAgICAgICAgICAgICBzaXplOiBbZm9ybWF0LnRleHR1cmVXaWR0aCAvIDIsIGZvcm1hdC50ZXh0dXJlSGVpZ2h0IC8gMl0sDQoJICAgICAgICAgICAgICAgIHVzYWdlOiBHUFVUZXh0dXJlVXNhZ2UuQ09QWV9EU1QgfA0KCSAgICAgICAgICAgICAgICAgICAgR1BVVGV4dHVyZVVzYWdlLlJFTkRFUl9BVFRBQ0hNRU5UIHwNCgkgICAgICAgICAgICAgICAgICAgIEdQVVRleHR1cmVVc2FnZS5URVhUVVJFX0JJTkRJTkcsDQoJICAgICAgICAgICAgfSksDQoJICAgICAgICAgICAgdjogZGV2aWNlLmNyZWF0ZVRleHR1cmUoew0KCSAgICAgICAgICAgICAgICBmb3JtYXQ6ICdyOHVub3JtJywNCgkgICAgICAgICAgICAgICAgc2l6ZTogW2Zvcm1hdC50ZXh0dXJlV2lkdGggLyAyLCBmb3JtYXQudGV4dHVyZUhlaWdodCAvIDJdLA0KCSAgICAgICAgICAgICAgICB1c2FnZTogR1BVVGV4dHVyZVVzYWdlLkNPUFlfRFNUIHwNCgkgICAgICAgICAgICAgICAgICAgIEdQVVRleHR1cmVVc2FnZS5SRU5ERVJfQVRUQUNITUVOVCB8DQoJICAgICAgICAgICAgICAgICAgICBHUFVUZXh0dXJlVXNhZ2UuVEVYVFVSRV9CSU5ESU5HLA0KCSAgICAgICAgICAgIH0pLA0KCSAgICAgICAgfTsNCgkgICAgICAgIHZhciB2ZXJ0ZXhYT2Zmc2V0ID0gbmV3IEZsb2F0MzJBcnJheShbDQoJICAgICAgICAgICAgZm9ybWF0LnhPZmZzZXRSYXRlLA0KCSAgICAgICAgICAgIGZvcm1hdC54T2Zmc2V0UmF0ZSwNCgkgICAgICAgICAgICBmb3JtYXQueE9mZnNldFJhdGUsDQoJICAgICAgICAgICAgZm9ybWF0LnhPZmZzZXRSYXRlLA0KCSAgICAgICAgICAgIGZvcm1hdC54T2Zmc2V0UmF0ZSwNCgkgICAgICAgICAgICBmb3JtYXQueE9mZnNldFJhdGUsDQoJICAgICAgICBdKTsNCgkgICAgICAgIHZhciB2ZXJ0ZXhCdWYgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHsNCgkgICAgICAgICAgICBzaXplOiB2ZXJ0ZXhYT2Zmc2V0LmJ5dGVMZW5ndGgsDQoJICAgICAgICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlZFUlRFWCB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNULA0KCSAgICAgICAgfSk7DQoJICAgICAgICBkZXZpY2UucXVldWUud3JpdGVCdWZmZXIodmVydGV4QnVmLCAwLCB2ZXJ0ZXhYT2Zmc2V0KTsNCgkgICAgICAgIHZhciBncm91cExheW91dCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXBMYXlvdXQoew0KCSAgICAgICAgICAgIGVudHJpZXM6IFsNCgkgICAgICAgICAgICAgICAgew0KCSAgICAgICAgICAgICAgICAgICAgYmluZGluZzogMCwNCgkgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IEdQVVNoYWRlclN0YWdlLkZSQUdNRU5ULA0KCSAgICAgICAgICAgICAgICAgICAgc2FtcGxlcjogeyB0eXBlOiAnZmlsdGVyaW5nJyB9LA0KCSAgICAgICAgICAgICAgICB9LA0KCSAgICAgICAgICAgICAgICB7DQoJICAgICAgICAgICAgICAgICAgICBiaW5kaW5nOiAxLA0KCSAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogR1BVU2hhZGVyU3RhZ2UuRlJBR01FTlQsDQoJICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiB7DQoJICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlVHlwZTogJ2Zsb2F0JywNCgkgICAgICAgICAgICAgICAgICAgICAgICB2aWV3RGltZW5zaW9uOiAnMmQnLA0KCSAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpc2FtcGxlZDogZmFsc2UsDQoJICAgICAgICAgICAgICAgICAgICB9LA0KCSAgICAgICAgICAgICAgICB9LA0KCSAgICAgICAgICAgICAgICB7DQoJICAgICAgICAgICAgICAgICAgICBiaW5kaW5nOiAyLA0KCSAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogR1BVU2hhZGVyU3RhZ2UuRlJBR01FTlQsDQoJICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiB7DQoJICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlVHlwZTogJ2Zsb2F0JywNCgkgICAgICAgICAgICAgICAgICAgICAgICB2aWV3RGltZW5zaW9uOiAnMmQnLA0KCSAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpc2FtcGxlZDogZmFsc2UsDQoJICAgICAgICAgICAgICAgICAgICB9LA0KCSAgICAgICAgICAgICAgICB9LA0KCSAgICAgICAgICAgICAgICB7DQoJICAgICAgICAgICAgICAgICAgICBiaW5kaW5nOiAzLA0KCSAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogR1BVU2hhZGVyU3RhZ2UuRlJBR01FTlQsDQoJICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiB7DQoJICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlVHlwZTogJ2Zsb2F0JywNCgkgICAgICAgICAgICAgICAgICAgICAgICB2aWV3RGltZW5zaW9uOiAnMmQnLA0KCSAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpc2FtcGxlZDogZmFsc2UsDQoJICAgICAgICAgICAgICAgICAgICB9LA0KCSAgICAgICAgICAgICAgICB9LA0KCSAgICAgICAgICAgIF0sDQoJICAgICAgICB9KTsNCgkgICAgICAgIHZhciBncm91cCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXAoew0KCSAgICAgICAgICAgIGxheW91dDogZ3JvdXBMYXlvdXQsDQoJICAgICAgICAgICAgZW50cmllczogWw0KCSAgICAgICAgICAgICAgICB7DQoJICAgICAgICAgICAgICAgICAgICBiaW5kaW5nOiAwLA0KCSAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U6IGRldmljZS5jcmVhdGVTYW1wbGVyKHt9KSwNCgkgICAgICAgICAgICAgICAgfSwNCgkgICAgICAgICAgICAgICAgew0KCSAgICAgICAgICAgICAgICAgICAgYmluZGluZzogMSwNCgkgICAgICAgICAgICAgICAgICAgIHJlc291cmNlOiB0ZXh0dXJlcy55LmNyZWF0ZVZpZXcoKSwNCgkgICAgICAgICAgICAgICAgfSwNCgkgICAgICAgICAgICAgICAgew0KCSAgICAgICAgICAgICAgICAgICAgYmluZGluZzogMiwNCgkgICAgICAgICAgICAgICAgICAgIHJlc291cmNlOiB0ZXh0dXJlcy51LmNyZWF0ZVZpZXcoKSwNCgkgICAgICAgICAgICAgICAgfSwNCgkgICAgICAgICAgICAgICAgew0KCSAgICAgICAgICAgICAgICAgICAgYmluZGluZzogMywNCgkgICAgICAgICAgICAgICAgICAgIHJlc291cmNlOiB0ZXh0dXJlcy52LmNyZWF0ZVZpZXcoKSwNCgkgICAgICAgICAgICAgICAgfSwNCgkgICAgICAgICAgICBdLA0KCSAgICAgICAgfSk7DQoJICAgICAgICB2YXIgdG90YWxNb2R1bGUgPSBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsNCgkgICAgICAgICAgICBsYWJlbDogJ3ZzJywNCgkgICAgICAgICAgICBjb2RlOiBjb2RlLA0KCSAgICAgICAgfSk7DQoJICAgICAgICB2YXIgcGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoew0KCSAgICAgICAgICAgIGxhYmVsOiAncmVuZGVyIHBpcGVsaW5lJywNCgkgICAgICAgICAgICBsYXlvdXQ6IGRldmljZS5jcmVhdGVQaXBlbGluZUxheW91dCh7DQoJICAgICAgICAgICAgICAgIGJpbmRHcm91cExheW91dHM6IFtncm91cExheW91dF0sDQoJICAgICAgICAgICAgfSksDQoJICAgICAgICAgICAgdmVydGV4OiB7DQoJICAgICAgICAgICAgICAgIG1vZHVsZTogdG90YWxNb2R1bGUsDQoJICAgICAgICAgICAgICAgIGVudHJ5UG9pbnQ6ICd2cycsDQoJICAgICAgICAgICAgICAgIGJ1ZmZlcnM6IFsNCgkgICAgICAgICAgICAgICAgICAgIHsNCgkgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVN0cmlkZTogNCwNCgkgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbDQoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsNCgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlckxvY2F0aW9uOiAwLA0KCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAwLA0KCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAnZmxvYXQzMicsDQoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sDQoJICAgICAgICAgICAgICAgICAgICAgICAgXSwNCgkgICAgICAgICAgICAgICAgICAgIH0sDQoJICAgICAgICAgICAgICAgIF0sDQoJICAgICAgICAgICAgfSwNCgkgICAgICAgICAgICBmcmFnbWVudDogew0KCSAgICAgICAgICAgICAgICBtb2R1bGU6IHRvdGFsTW9kdWxlLA0KCSAgICAgICAgICAgICAgICBlbnRyeVBvaW50OiAnZnMnLA0KCSAgICAgICAgICAgICAgICB0YXJnZXRzOiBbeyBmb3JtYXQ6IHRleHR1cmVGb3JtYXQgfV0sDQoJICAgICAgICAgICAgfSwNCgkgICAgICAgICAgICBwcmltaXRpdmU6IHsNCgkgICAgICAgICAgICAgICAgdG9wb2xvZ3k6ICd0cmlhbmdsZS1zdHJpcCcsDQoJICAgICAgICAgICAgfSwNCgkgICAgICAgIH0pOw0KCSAgICAgICAgdmFyIGJ1bmRsZUVuY29kZXIgPSBkZXZpY2UuY3JlYXRlUmVuZGVyQnVuZGxlRW5jb2Rlcih7DQoJICAgICAgICAgICAgY29sb3JGb3JtYXRzOiBbdGV4dHVyZUZvcm1hdF0sDQoJICAgICAgICB9KTsNCgkgICAgICAgIGJ1bmRsZUVuY29kZXIuc2V0UGlwZWxpbmUocGlwZWxpbmUpOw0KCSAgICAgICAgYnVuZGxlRW5jb2Rlci5zZXRCaW5kR3JvdXAoMCwgZ3JvdXApOw0KCSAgICAgICAgYnVuZGxlRW5jb2Rlci5zZXRWZXJ0ZXhCdWZmZXIoMCwgdmVydGV4QnVmKTsNCgkgICAgICAgIGJ1bmRsZUVuY29kZXIuZHJhdyg2KTsNCgkgICAgICAgIHZhciByZW5kZXJCdW5kbGUgPSBidW5kbGVFbmNvZGVyLmZpbmlzaCgpOw0KCSAgICAgICAgcmV0dXJuIFtyZW5kZXJCdW5kbGUsIHRleHR1cmVzLCB2ZXJ0ZXhCdWZdOw0KCSAgICB9Ow0KCSAgICByZXR1cm4gV2ViR1BVUmVuZGVyOw0KCX0oKSk7DQoJdmFyIF9kZWZhdWx0JDMgPSByZW5kZXJlcl93ZWJncHVfeXV2LmRlZmF1bHQgPSBXZWJHUFVSZW5kZXI7CgoJdmFyIHJlbmRlcmVyX3NvZnR3YXJlX3JnYmEgPSB7fTsKCglPYmplY3QuZGVmaW5lUHJvcGVydHkocmVuZGVyZXJfc29mdHdhcmVfcmdiYSwgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pOw0KDQoJY29uc3QgUmVuZGVyZXIkMiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsNCgkgIGZ1bmN0aW9uIFJlbmRlcmVyKGNhbnZhcykgew0KCSAgICB0aGlzLmNhbnZhcyA9IGNhbnZhczsNCgkgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTsNCgkgIH0NCg0KCSAgUmVuZGVyZXIucHJvdG90eXBlLmRyYXdGcmFtZSA9IGZ1bmN0aW9uICh2aWRlb0ZyYW1lKSB7DQoJICAgIGlmICghdGhpcy5jdHgpIHsNCgkgICAgICByZXR1cm4NCgkgICAgfQ0KDQoJICAgIGlmICgNCgkgICAgICAhdGhpcy5pbWFnZURhdGEgfHwNCgkgICAgICB0aGlzLndpZHRoICE9PSB2aWRlb0ZyYW1lLndpZHRoIHx8DQoJICAgICAgdGhpcy5oZWlnaHQgIT09IHZpZGVvRnJhbWUuaGVpZ2h0DQoJICAgICkgew0KCSAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdmlkZW9GcmFtZS53aWR0aDsNCgkgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB2aWRlb0ZyYW1lLmhlaWdodDsNCgkgICAgICB0aGlzLndpZHRoID0gdmlkZW9GcmFtZS53aWR0aDsNCgkgICAgICB0aGlzLmhlaWdodCA9IHZpZGVvRnJhbWUuaGVpZ2h0Ow0KCSAgICAgIHRoaXMuaW1hZ2VEYXRhID0gdGhpcy5jdHguY3JlYXRlSW1hZ2VEYXRhKA0KCSAgICAgICAgdmlkZW9GcmFtZS53aWR0aCwNCgkgICAgICAgIHZpZGVvRnJhbWUuaGVpZ2h0DQoJICAgICAgKTsNCgkgICAgfQ0KDQoJICAgIHRoaXMuaW1hZ2VEYXRhLmRhdGEuc2V0KA0KCSAgICAgIHZpZGVvRnJhbWUuZGF0YS5zdWJhcnJheSgwLCB2aWRlb0ZyYW1lLndpZHRoICogdmlkZW9GcmFtZS5oZWlnaHQgKiA0KQ0KCSAgICApOw0KCSAgICB0aGlzLmN0eC5wdXRJbWFnZURhdGEodGhpcy5pbWFnZURhdGEsIDAsIDApOw0KCSAgfTsNCg0KCSAgUmVuZGVyZXIucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkgew0KCSAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7DQoJICB9Ow0KDQoJICBSZW5kZXJlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHsNCgkgICAgdGhpcy5jdHggPSBudWxsOw0KCSAgfTsNCg0KCSAgcmV0dXJuIFJlbmRlcmVyDQoJfSkoKTsNCg0KCXZhciBfZGVmYXVsdCQyID0gcmVuZGVyZXJfc29mdHdhcmVfcmdiYS5kZWZhdWx0ID0gUmVuZGVyZXIkMjsKCgl2YXIgcmVuZGVyZXJfd2ViZ2xfcmdiYSA9IHt9OwoKCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZW5kZXJlcl93ZWJnbF9yZ2JhLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7DQoNCgljb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBgDQphdHRyaWJ1dGUgdmVjMiBhX3Bvc2l0aW9uOw0KYXR0cmlidXRlIHZlYzIgYV90ZXhDb29yZDsNCg0KdmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7DQoNCnZvaWQgbWFpbigpIHsNCiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoYV9wb3NpdGlvbiwgMCwgMSk7DQogICAgdl90ZXhDb29yZCA9IGFfdGV4Q29vcmQ7DQp9DQpgOw0KDQoJLy8g54mH5q61552A6Imy5Zmo5Luj56CBDQoJY29uc3QgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBgDQpwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDsNCg0KdW5pZm9ybSBzYW1wbGVyMkQgdV9pbWFnZTsNCnZhcnlpbmcgdmVjMiB2X3RleENvb3JkOw0KDQp2b2lkIG1haW4oKSB7DQogICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVfaW1hZ2UsIHZfdGV4Q29vcmQpOw0KfQ0KYDsNCg0KCS8vIOWIm+W7uuedgOiJsuWZqOWHveaVsA0KCWZ1bmN0aW9uIGNyZWF0ZVNoYWRlcihnbCwgdHlwZSwgc291cmNlKSB7DQoJICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7DQoNCgkgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7DQoJICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7DQoJICBjb25zdCBzdWNjZXNzID0gZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpOw0KDQoJICBpZiAoc3VjY2Vzcykgew0KCSAgICByZXR1cm4gc2hhZGVyDQoJICB9DQoNCgkgIGNvbnNvbGUubG9nKGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSk7DQoJICBnbC5kZWxldGVTaGFkZXIoc2hhZGVyKTsNCgl9DQoNCgkvLyDliJvlu7rnnYDoibLlmajnqIvluo/lh73mlbANCglmdW5jdGlvbiBjcmVhdGVQcm9ncmFtKGdsLCB2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKSB7DQoJICBjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpOw0KDQoJICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTsNCgkgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7DQoJICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTsNCgkgIGNvbnN0IHN1Y2Nlc3MgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKTsNCg0KCSAgaWYgKHN1Y2Nlc3MpIHsNCgkgICAgcmV0dXJuIHByb2dyYW0NCgkgIH0NCg0KCSAgY29uc29sZS5sb2coZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkpOw0KCSAgZ2wuZGVsZXRlUHJvZ3JhbShwcm9ncmFtKTsNCgl9DQoNCgljb25zdCBSZW5kZXJlciQxID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkgew0KCSAgZnVuY3Rpb24gUmVuZGVyZXIoY2FudmFzLCBvbkNvbnRleHRMb3N0KSB7DQoJICAgIHRoaXMuY2FudmFzID0gY2FudmFzOw0KCSAgICBjb25zdCBvcHRpb25zID0gew0KCSAgICAgIGRlcHRoOiBmYWxzZSwNCgkgICAgICBzdGVuY2lsOiBmYWxzZSwNCgkgICAgICBhbHBoYTogZmFsc2UsDQoJICAgICAgYW50aWFsaWFzOiBmYWxzZSwNCgkgICAgICBwcmVtdWx0aXBsaWVkQWxwaGE6IHRydWUsDQoJICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiBmYWxzZSwNCgkgICAgICBwb3dlclByZWZlcmVuY2U6ICdoaWdoLXBlcmZvcm1hbmNlJywNCgkgICAgICBmYWlsSWZNYWpvclBlcmZvcm1hbmNlQ2F2ZWF0OiBmYWxzZSwNCgkgICAgfTsNCg0KCSAgICB0aGlzLmdsID0NCgkgICAgICBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wyJywgb3B0aW9ucykgPz8NCgkgICAgICBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnLCBvcHRpb25zKTsNCg0KCSAgICBpZiAodGhpcy5nbCkgew0KCSAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd3ZWJnbGNvbnRleHRsb3N0JywgKGV2ZW50KSA9PiB7DQoJICAgICAgICBjb25zb2xlLmxvZygnd2ViZ2xjb250ZXh0bG9zdCcsIGV2ZW50KTsNCgkgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7DQoJICAgICAgICB0aGlzLmdsID0gbnVsbDsNCgkgICAgICAgIG9uQ29udGV4dExvc3Q/LigpOw0KCSAgICAgIH0pOw0KCSAgICAgIGNvbnN0IGdsID0gdGhpcy5nbDsNCgkgICAgICAvLyDliJvlu7rpobbngrnnnYDoibLlmajlkozniYfmrrXnnYDoibLlmagNCgkgICAgICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIoDQoJICAgICAgICBnbCwNCgkgICAgICAgIGdsLlZFUlRFWF9TSEFERVIsDQoJICAgICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UNCgkgICAgICApOw0KCSAgICAgIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gY3JlYXRlU2hhZGVyKA0KCSAgICAgICAgZ2wsDQoJICAgICAgICBnbC5GUkFHTUVOVF9TSEFERVIsDQoJICAgICAgICBmcmFnbWVudFNoYWRlclNvdXJjZQ0KCSAgICAgICk7DQoNCgkgICAgICAvLyDliJvlu7rnnYDoibLlmajnqIvluo8NCgkgICAgICBjb25zdCBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbShnbCwgdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7DQoNCgkgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtOw0KDQoJICAgICAgLy8g6I635Y+W5bGe5oCn5ZKM5Yi25pyN55qE5L2N572uDQoJICAgICAgY29uc3QgcG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKA0KCSAgICAgICAgcHJvZ3JhbSwNCgkgICAgICAgICdhX3Bvc2l0aW9uJw0KCSAgICAgICk7DQoNCgkgICAgICBjb25zdCB0ZXhDb29yZEF0dHJpYnV0ZUxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oDQoJICAgICAgICBwcm9ncmFtLA0KCSAgICAgICAgJ2FfdGV4Q29vcmQnDQoJICAgICAgKTsNCg0KCSAgICAgIC8vIOWIm+W7uuS9jee9rue8k+WGsuWMug0KCSAgICAgIGNvbnN0IHBvc2l0aW9uQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7DQoNCgkgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgcG9zaXRpb25CdWZmZXIpOw0KCSAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IFstMSwgLTEsIDEsIC0xLCAtMSwgMSwgLTEsIDEsIDEsIC0xLCAxLCAxXTsNCg0KCSAgICAgIGdsLmJ1ZmZlckRhdGEoDQoJICAgICAgICBnbC5BUlJBWV9CVUZGRVIsDQoJICAgICAgICBuZXcgRmxvYXQzMkFycmF5KHBvc2l0aW9ucyksDQoJICAgICAgICBnbC5TVEFUSUNfRFJBVw0KCSAgICAgICk7DQoNCgkgICAgICAvLyDliJvlu7rnurnnkIblnZDmoIfnvJPlhrLljLoNCgkgICAgICBjb25zdCB0ZXhDb29yZEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpOw0KDQoJICAgICAgdGhpcy50ZXhDb29yZEJ1ZmZlciA9IHRleENvb3JkQnVmZmVyOw0KDQoJICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRleENvb3JkQnVmZmVyKTsNCgkgICAgICBjb25zdCB0ZXhDb29yZHMgPSBbMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMF07DQoNCgkgICAgICBnbC5idWZmZXJEYXRhKA0KCSAgICAgICAgZ2wuQVJSQVlfQlVGRkVSLA0KCSAgICAgICAgbmV3IEZsb2F0MzJBcnJheSh0ZXhDb29yZHMpLA0KCSAgICAgICAgZ2wuU1RBVElDX0RSQVcNCgkgICAgICApOw0KDQoJICAgICAgLy8g5Yib5bu657q555CGDQoJICAgICAgY29uc3QgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTsNCg0KCSAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7DQoNCgkgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTsNCg0KCSAgICAgIC8vIOiuvue9rue6ueeQhuWPguaVsA0KCSAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpOw0KCSAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpOw0KCSAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTsNCgkgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7DQoNCgkgICAgICAvLyDkvb/nlKjnnYDoibLlmajnqIvluo8NCgkgICAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pOw0KDQoJICAgICAgLy8g5ZCv55So5bGe5oCnDQoJICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbik7DQoJICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHBvc2l0aW9uQnVmZmVyKTsNCgkgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKA0KCSAgICAgICAgcG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwNCgkgICAgICAgIDIsDQoJICAgICAgICBnbC5GTE9BVCwNCgkgICAgICAgIGZhbHNlLA0KCSAgICAgICAgMCwNCgkgICAgICAgIDANCgkgICAgICApOw0KDQoJICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGV4Q29vcmRBdHRyaWJ1dGVMb2NhdGlvbik7DQoJICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRleENvb3JkQnVmZmVyKTsNCgkgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKA0KCSAgICAgICAgdGV4Q29vcmRBdHRyaWJ1dGVMb2NhdGlvbiwNCgkgICAgICAgIDIsDQoJICAgICAgICBnbC5GTE9BVCwNCgkgICAgICAgIGZhbHNlLA0KCSAgICAgICAgMCwNCgkgICAgICAgIDANCgkgICAgICApOw0KCSAgICB9DQoJICB9DQoNCgkgIFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3RnJhbWUgPSBmdW5jdGlvbiAodmlkZW9GcmFtZSkgew0KCSAgICBpZiAoIXRoaXMuZ2wpIHsNCgkgICAgICByZXR1cm4NCgkgICAgfQ0KDQoJICAgIGlmICh0aGlzLmdsKSB7DQoJICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsOw0KCSAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzOw0KCSAgICAgIGNvbnN0IHRleHR1cmUgPSB0aGlzLnRleHR1cmU7DQoJICAgICAgY29uc3QgZnJhbWUgPSB2aWRlb0ZyYW1lOw0KDQoJICAgICAgLy8g6K6+572u6KeG5Y+jDQoJICAgICAgZ2wudmlld3BvcnQoMCwgMCwgZnJhbWUud2lkdGgsIGZyYW1lLmhlaWdodCk7DQoJICAgICAgY2FudmFzLndpZHRoID0gZnJhbWUud2lkdGg7DQoJICAgICAgY2FudmFzLmhlaWdodCA9IGZyYW1lLmhlaWdodDsNCg0KCSAgICAgIC8vIOabtOaWsOe6ueeQhuaVsOaNrg0KCSAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpOw0KCSAgICAgIGdsLnRleEltYWdlMkQoDQoJICAgICAgICBnbC5URVhUVVJFXzJELA0KCSAgICAgICAgMCwNCgkgICAgICAgIGdsLlJHQkEsDQoJICAgICAgICBmcmFtZS53aWR0aCwNCgkgICAgICAgIGZyYW1lLmhlaWdodCwNCgkgICAgICAgIDAsDQoJICAgICAgICBnbC5SR0JBLA0KCSAgICAgICAgZ2wuVU5TSUdORURfQllURSwNCgkgICAgICAgIGZyYW1lLmRhdGENCgkgICAgICApOw0KDQoJICAgICAgLy8g57uY5Yi25LiJ6KeS5b2iDQoJICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIDYpOw0KCSAgICB9DQoJICB9Ow0KDQoJICBSZW5kZXJlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7DQoJICAgIGlmICghdGhpcy5nbCkgew0KCSAgICAgIHJldHVybg0KCSAgICB9DQoNCgkgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQpOw0KCSAgfTsNCg0KCSAgUmVuZGVyZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7DQoJICAgIHRoaXMuZ2wgPSBudWxsOw0KCSAgfTsNCg0KCSAgcmV0dXJuIFJlbmRlcmVyDQoJfSkoKTsNCg0KCXZhciBfZGVmYXVsdCQxID0gcmVuZGVyZXJfd2ViZ2xfcmdiYS5kZWZhdWx0ID0gUmVuZGVyZXIkMTsKCgl2YXIgcmVuZGVyZXJfd2ViZ3B1X3JnYmEgPSB7fTsKCglPYmplY3QuZGVmaW5lUHJvcGVydHkocmVuZGVyZXJfd2ViZ3B1X3JnYmEsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTsNCg0KCWNvbnN0IFJlbmRlcmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkgew0KCSAgUmVuZGVyZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBhc3luYyBmdW5jdGlvbiAoKSB7DQoJICAgIGlmICghbmF2aWdhdG9yLmdwdSkgew0KCSAgICAgIHRocm93IG5ldyBFcnJvcignV2ViR1BVIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyLicpDQoJICAgIH0NCg0KCSAgICAvLyDojrflj5YgR1BVIOmAgumFjeWZqOWSjOiuvuWkhw0KCSAgICBjb25zdCBhZGFwdGVyID0gYXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcigpOw0KDQoJICAgIGlmICghYWRhcHRlcikgew0KCSAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYXBwcm9wcmlhdGUgR1BVIGFkYXB0ZXIgZm91bmQuJykNCgkgICAgfQ0KDQoJICAgIHRoaXMuZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7DQoNCgkgICAgLy8g6K6+572uIENhbnZhcyDkuIrkuIvmlocNCgkgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnd2ViZ3B1Jyk7DQoJICAgIGNvbnN0IGNhbnZhc0Zvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7DQoNCgkgICAgdGhpcy5jb250ZXh0LmNvbmZpZ3VyZSh7DQoJICAgICAgZGV2aWNlOiB0aGlzLmRldmljZSwNCgkgICAgICBmb3JtYXQ6IGNhbnZhc0Zvcm1hdCwNCgkgICAgICBhbHBoYU1vZGU6ICdwcmVtdWx0aXBsaWVkJywNCgkgICAgfSk7DQoNCgkgICAgLy8g5Yib5bu6552A6Imy5ZmoDQoJICAgIGNvbnN0IHNoYWRlck1vZHVsZSA9IHRoaXMuZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7DQoJICAgICAgY29kZTogYA0KICAgICAgICBzdHJ1Y3QgVmVydGV4T3V0cHV0IHsNCiAgICAgICAgICBAYnVpbHRpbihwb3NpdGlvbikgcG9zaXRpb246IHZlYzRmLA0KICAgICAgICAgIEBsb2NhdGlvbigwKSB0ZXhDb29yZDogdmVjMmYsDQogICAgICAgIH07DQoNCiAgICAgICAgQHZlcnRleA0KICAgICAgICBmbiB2ZXJ0ZXhNYWluKEBsb2NhdGlvbigwKSBwb3NpdGlvbjogdmVjMmYsDQogICAgICAgICAgICAgICAgICAgICAgQGxvY2F0aW9uKDEpIHRleENvb3JkOiB2ZWMyZikgLT4gVmVydGV4T3V0cHV0IHsNCiAgICAgICAgICB2YXIgb3V0cHV0OiBWZXJ0ZXhPdXRwdXQ7DQogICAgICAgICAgb3V0cHV0LnBvc2l0aW9uID0gdmVjNGYocG9zaXRpb24sIDAuMCwgMS4wKTsNCiAgICAgICAgICBvdXRwdXQudGV4Q29vcmQgPSB0ZXhDb29yZDsNCiAgICAgICAgICByZXR1cm4gb3V0cHV0Ow0KICAgICAgICB9DQoNCiAgICAgICAgQGdyb3VwKDApIEBiaW5kaW5nKDApIHZhciB0ZXh0dXJlU2FtcGxlcjogc2FtcGxlcjsNCiAgICAgICAgQGdyb3VwKDApIEBiaW5kaW5nKDEpIHZhciB0ZXh0dXJlRGF0YTogdGV4dHVyZV8yZDxmMzI+Ow0KDQogICAgICAgIEBmcmFnbWVudA0KICAgICAgICBmbiBmcmFnbWVudE1haW4oQGxvY2F0aW9uKDApIHRleENvb3JkOiB2ZWMyZikgLT4gQGxvY2F0aW9uKDApIHZlYzRmIHsNCiAgICAgICAgICByZXR1cm4gdGV4dHVyZVNhbXBsZSh0ZXh0dXJlRGF0YSwgdGV4dHVyZVNhbXBsZXIsIHRleENvb3JkKTsNCiAgICAgICAgfQ0KICAgICAgYCwNCgkgICAgfSk7DQoNCgkgICAgLy8g5Yib5bu65riy5p+T566h57q/DQoJICAgIHRoaXMucGlwZWxpbmUgPSB0aGlzLmRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7DQoJICAgICAgbGF5b3V0OiAnYXV0bycsDQoJICAgICAgdmVydGV4OiB7DQoJICAgICAgICBtb2R1bGU6IHNoYWRlck1vZHVsZSwNCgkgICAgICAgIGVudHJ5UG9pbnQ6ICd2ZXJ0ZXhNYWluJywNCgkgICAgICAgIGJ1ZmZlcnM6IFsNCgkgICAgICAgICAgew0KCSAgICAgICAgICAgIGFycmF5U3RyaWRlOiAxNiwNCgkgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbDQoJICAgICAgICAgICAgICB7DQoJICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uDQoJICAgICAgICAgICAgICAgIHNoYWRlckxvY2F0aW9uOiAwLA0KCSAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsDQoJICAgICAgICAgICAgICAgIGZvcm1hdDogJ2Zsb2F0MzJ4MicsDQoJICAgICAgICAgICAgICB9LA0KCSAgICAgICAgICAgICAgew0KCSAgICAgICAgICAgICAgICAvLyB0ZXhDb29yZA0KCSAgICAgICAgICAgICAgICBzaGFkZXJMb2NhdGlvbjogMSwNCgkgICAgICAgICAgICAgICAgb2Zmc2V0OiA4LA0KCSAgICAgICAgICAgICAgICBmb3JtYXQ6ICdmbG9hdDMyeDInLA0KCSAgICAgICAgICAgICAgfSwNCgkgICAgICAgICAgICBdLA0KCSAgICAgICAgICB9LA0KCSAgICAgICAgXSwNCgkgICAgICB9LA0KCSAgICAgIGZyYWdtZW50OiB7DQoJICAgICAgICBtb2R1bGU6IHNoYWRlck1vZHVsZSwNCgkgICAgICAgIGVudHJ5UG9pbnQ6ICdmcmFnbWVudE1haW4nLA0KCSAgICAgICAgdGFyZ2V0czogWw0KCSAgICAgICAgICB7DQoJICAgICAgICAgICAgZm9ybWF0OiBjYW52YXNGb3JtYXQsDQoJICAgICAgICAgIH0sDQoJICAgICAgICBdLA0KCSAgICAgIH0sDQoJICAgICAgcHJpbWl0aXZlOiB7DQoJICAgICAgICB0b3BvbG9neTogJ3RyaWFuZ2xlLWxpc3QnLA0KCSAgICAgIH0sDQoJICAgIH0pOw0KDQoJICAgIC8vIOWIm+W7uumHh+agt+WZqA0KCSAgICB0aGlzLnNhbXBsZXIgPSB0aGlzLmRldmljZS5jcmVhdGVTYW1wbGVyKHsNCgkgICAgICBtYWdGaWx0ZXI6ICdsaW5lYXInLA0KCSAgICAgIG1pbkZpbHRlcjogJ2xpbmVhcicsDQoJICAgIH0pOw0KDQoJICAgIC8vIOWIm+W7uumhtueCuee8k+WGsuWMug0KCSAgICBjb25zdCB2ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoWw0KCSAgICAgIC8vIHBvc2l0aW9uKHgseSksIHRleENvb3JkKHUsdikNCgkgICAgICAtMS4wLA0KCSAgICAgIC0xLjAsDQoJICAgICAgMC4wLA0KCSAgICAgIDEuMCwgLy8g5bem5LiLDQoJICAgICAgMS4wLA0KCSAgICAgIC0xLjAsDQoJICAgICAgMS4wLA0KCSAgICAgIDEuMCwgLy8g5Y+z5LiLDQoJICAgICAgLTEuMCwNCgkgICAgICAxLjAsDQoJICAgICAgMC4wLA0KCSAgICAgIDAuMCwgLy8g5bem5LiKDQoJICAgICAgLTEuMCwNCgkgICAgICAxLjAsDQoJICAgICAgMC4wLA0KCSAgICAgIDAuMCwgLy8g5bem5LiKDQoJICAgICAgMS4wLA0KCSAgICAgIC0xLjAsDQoJICAgICAgMS4wLA0KCSAgICAgIDEuMCwgLy8g5Y+z5LiLDQoJICAgICAgMS4wLA0KCSAgICAgIDEuMCwNCgkgICAgICAxLjAsDQoJICAgICAgMC4wLCAvLyDlj7PkuIoNCgkgICAgXSk7DQoNCgkgICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSB0aGlzLmRldmljZS5jcmVhdGVCdWZmZXIoew0KCSAgICAgIHNpemU6IHZlcnRpY2VzLmJ5dGVMZW5ndGgsDQoJICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlZFUlRFWCwNCgkgICAgICBtYXBwZWRBdENyZWF0aW9uOiB0cnVlLA0KCSAgICB9KTsNCgkgICAgbmV3IEZsb2F0MzJBcnJheSh0aGlzLnZlcnRleEJ1ZmZlci5nZXRNYXBwZWRSYW5nZSgpKS5zZXQodmVydGljZXMpOw0KCSAgICB0aGlzLnZlcnRleEJ1ZmZlci51bm1hcCgpOw0KDQoJICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlOw0KCSAgfTsNCg0KCSAgZnVuY3Rpb24gUmVuZGVyZXIoY2FudmFzKSB7DQoJICAgIHRoaXMuY2FudmFzID0gY2FudmFzOw0KCSAgICB0aGlzLmRldmljZSA9IG51bGw7DQoJICAgIHRoaXMuY29udGV4dCA9IG51bGw7DQoJICAgIHRoaXMucGlwZWxpbmUgPSBudWxsOw0KCSAgICB0aGlzLnNhbXBsZXIgPSBudWxsOw0KCSAgICB0aGlzLmJpbmRHcm91cCA9IG51bGw7DQoJICAgIHRoaXMudmVydGV4QnVmZmVyID0gbnVsbDsNCgkgICAgdGhpcy50ZXh0dXJlID0gbnVsbDsNCgkgICAgdGhpcy50ZXh0dXJlV2lkdGggPSAwOw0KCSAgICB0aGlzLnRleHR1cmVIZWlnaHQgPSAwOw0KCSAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7DQoJICAgIHRoaXMuaW5pdGlhbGl6ZSgpOw0KCSAgfQ0KDQoJICBSZW5kZXJlci5wcm90b3R5cGUuZHJhd0ZyYW1lID0gZnVuY3Rpb24gKHZpZGVvRnJhbWUpIHsNCgkgICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7DQoJICAgICAgcmV0dXJuDQoJICAgIH0NCg0KCSAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGRhdGEgfSA9IHZpZGVvRnJhbWU7DQoNCgkgICAgLy8g5aaC5p6c5bC65a+45Y+Y5YyW5oiW57q555CG5pyq5Yib5bu677yM5YiZ5Yib5bu65paw57q555CGDQoJICAgIGlmICgNCgkgICAgICB0aGlzLnRleHR1cmVXaWR0aCAhPT0gd2lkdGggfHwNCgkgICAgICB0aGlzLnRleHR1cmVIZWlnaHQgIT09IGhlaWdodCB8fA0KCSAgICAgICF0aGlzLnRleHR1cmUNCgkgICAgKSB7DQoJICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDsNCgkgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7DQoJICAgICAgdGhpcy50ZXh0dXJlV2lkdGggPSB3aWR0aDsNCgkgICAgICB0aGlzLnRleHR1cmVIZWlnaHQgPSBoZWlnaHQ7DQoNCgkgICAgICB0aGlzLnRleHR1cmUgPSB0aGlzLmRldmljZS5jcmVhdGVUZXh0dXJlKHsNCgkgICAgICAgIHNpemU6IFt3aWR0aCwgaGVpZ2h0XSwNCgkgICAgICAgIGZvcm1hdDogJ3JnYmE4dW5vcm0nLA0KCSAgICAgICAgdXNhZ2U6IEdQVVRleHR1cmVVc2FnZS5URVhUVVJFX0JJTkRJTkcgfCBHUFVUZXh0dXJlVXNhZ2UuQ09QWV9EU1QsDQoJICAgICAgfSk7DQoNCgkgICAgICAvLyDmm7TmlrDnu5Hlrprnu4QNCgkgICAgICB0aGlzLmJpbmRHcm91cCA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7DQoJICAgICAgICBsYXlvdXQ6IHRoaXMucGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLA0KCSAgICAgICAgZW50cmllczogWw0KCSAgICAgICAgICB7DQoJICAgICAgICAgICAgYmluZGluZzogMCwNCgkgICAgICAgICAgICByZXNvdXJjZTogdGhpcy5zYW1wbGVyLA0KCSAgICAgICAgICB9LA0KCSAgICAgICAgICB7DQoJICAgICAgICAgICAgYmluZGluZzogMSwNCgkgICAgICAgICAgICByZXNvdXJjZTogdGhpcy50ZXh0dXJlLmNyZWF0ZVZpZXcoKSwNCgkgICAgICAgICAgfSwNCgkgICAgICAgIF0sDQoJICAgICAgfSk7DQoJICAgIH0NCg0KCSAgICAvLyDmm7TmlrDnurnnkIbmlbDmja4NCgkgICAgdGhpcy5kZXZpY2UucXVldWUud3JpdGVUZXh0dXJlKA0KCSAgICAgIHsgdGV4dHVyZTogdGhpcy50ZXh0dXJlIH0sDQoJICAgICAgZGF0YSwNCgkgICAgICB7IGJ5dGVzUGVyUm93OiB3aWR0aCAqIDQgfSwNCgkgICAgICB7IHdpZHRoLCBoZWlnaHQgfQ0KCSAgICApOw0KDQoJICAgIC8vIOiuvue9rua4suafk+mAmumBkw0KCSAgICBjb25zdCBjb21tYW5kRW5jb2RlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7DQoJICAgIGNvbnN0IHBhc3NFbmNvZGVyID0gY29tbWFuZEVuY29kZXIuYmVnaW5SZW5kZXJQYXNzKHsNCgkgICAgICBjb2xvckF0dGFjaG1lbnRzOiBbDQoJICAgICAgICB7DQoJICAgICAgICAgIHZpZXc6IHRoaXMuY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKSwNCgkgICAgICAgICAgbG9hZE9wOiAnY2xlYXInLA0KCSAgICAgICAgICBzdG9yZU9wOiAnc3RvcmUnLA0KCSAgICAgICAgICBjbGVhclZhbHVlOiBbMC4wLCAwLjAsIDAuMCwgMS4wXSwNCgkgICAgICAgIH0sDQoJICAgICAgXSwNCgkgICAgfSk7DQoNCgkgICAgLy8g5riy5p+TDQoJICAgIHBhc3NFbmNvZGVyLnNldFBpcGVsaW5lKHRoaXMucGlwZWxpbmUpOw0KCSAgICBwYXNzRW5jb2Rlci5zZXRCaW5kR3JvdXAoMCwgdGhpcy5iaW5kR3JvdXApOw0KCSAgICBwYXNzRW5jb2Rlci5zZXRWZXJ0ZXhCdWZmZXIoMCwgdGhpcy52ZXJ0ZXhCdWZmZXIpOw0KCSAgICBwYXNzRW5jb2Rlci5kcmF3KDYpOw0KCSAgICBwYXNzRW5jb2Rlci5lbmQoKTsNCg0KCSAgICAvLyDmj5DkuqTlkb3ku6QNCgkgICAgdGhpcy5kZXZpY2UucXVldWUuc3VibWl0KFtjb21tYW5kRW5jb2Rlci5maW5pc2goKV0pOw0KCSAgfTsNCg0KCSAgUmVuZGVyZXIucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkgew0KCSAgICAvLyBkbyBub3RoaW5nDQoJICB9Ow0KDQoJICBSZW5kZXJlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHsNCgkgICAgdGhpcy5pc0luaXQgPSBmYWxzZTsNCgkgIH07DQoNCgkgIHJldHVybiBSZW5kZXJlcg0KCX0pKCk7DQoNCgl2YXIgX2RlZmF1bHQgPSByZW5kZXJlcl93ZWJncHVfcmdiYS5kZWZhdWx0ID0gUmVuZGVyZXI7CgoJY29uc3QgZ2xvYmFsVGhpcyQxID0NCgkgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnDQoJICAgID8gd2luZG93DQoJICAgIDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcNCgkgICAgPyBnbG9iYWwNCgkgICAgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcNCgkgICAgPyBzZWxmDQoJICAgIDoge307DQoNCglsZXQgcmVuZGVyZXI7DQoNCglmdW5jdGlvbiBjcmVhdGVSZW5kZXJlcihkYXRhKSB7DQoJICBpZiAoIWRhdGEuY2FudmFzKSByZXR1cm4NCgkgIGNvbnN0IHsgcmVuZGVyZXJUeXBlLCBjYW52YXMsIHJlbmRlcmVyRm9ybWF0IH0gPSBkYXRhOw0KDQoJICBzd2l0Y2ggKHJlbmRlcmVyVHlwZSkgew0KCSAgICBjYXNlICdzb2Z0d2FyZSc6DQoJICAgICAgcmVuZGVyZXIgPQ0KCSAgICAgICAgcmVuZGVyZXJGb3JtYXQgPT09ICd5dXYnDQoJICAgICAgICAgID8gbmV3IF9kZWZhdWx0JDUoY2FudmFzKQ0KCSAgICAgICAgICA6IG5ldyBfZGVmYXVsdCQyKGNhbnZhcyk7DQoJICAgICAgYnJlYWsNCgkgICAgY2FzZSAnd2ViZ2wnOg0KCSAgICAgIHJlbmRlcmVyID0NCgkgICAgICAgIHJlbmRlcmVyRm9ybWF0ID09PSAneXV2Jw0KCSAgICAgICAgICA/IG5ldyBfZGVmYXVsdCQ0KGNhbnZhcywgKCkgPT4gew0KCSAgICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7DQoJICAgICAgICAgICAgICAgIGV2ZW50OiAnd2ViZ2xDb250ZXh0TG9zdCcsDQoJICAgICAgICAgICAgICB9KTsNCgkgICAgICAgICAgICB9KQ0KCSAgICAgICAgICA6IG5ldyBfZGVmYXVsdCQxKGNhbnZhcywgKCkgPT4gew0KCSAgICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7DQoJICAgICAgICAgICAgICAgIGV2ZW50OiAnd2ViZ2xDb250ZXh0TG9zdCcsDQoJICAgICAgICAgICAgICB9KTsNCgkgICAgICAgICAgICB9KTsNCgkgICAgICBicmVhaw0KCSAgICBjYXNlICd3ZWJncHUnOg0KCSAgICAgIHJlbmRlcmVyID0NCgkgICAgICAgIHJlbmRlcmVyRm9ybWF0ID09PSAneXV2Jw0KCSAgICAgICAgICA/IG5ldyBfZGVmYXVsdCQzKGNhbnZhcykNCgkgICAgICAgICAgOiBuZXcgX2RlZmF1bHQoY2FudmFzKTsNCgkgICAgICBicmVhaw0KCSAgfQ0KCX0NCg0KCWFzeW5jIGZ1bmN0aW9uIGRyYXdGcmFtZShkYXRhKSB7DQoJICBpZiAocmVuZGVyZXIpIHsNCgkgICAgY29uc3QgeyB2aWRlb0ZyYW1lIH0gPSBkYXRhOw0KDQoJICAgIHJlbmRlcmVyLmRyYXdGcmFtZSh2aWRlb0ZyYW1lKTsNCgkgIH0NCg0KCSAgc2VsZi5wb3N0TWVzc2FnZSh7DQoJICAgIGV2ZW50OiAncmVuZGVyRG9uZScsDQoJICB9KTsNCgl9DQoNCglmdW5jdGlvbiBjbGVhcigpIHsNCgkgIGlmICghcmVuZGVyZXIpIHJldHVybg0KCSAgcmVuZGVyZXIuY2xlYXI/LigpOw0KCX0NCg0KCWlmIChnbG9iYWxUaGlzJDEpIHsNCgkgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcigNCgkgICAgJ21lc3NhZ2UnLA0KCSAgICBhc3luYyAoeyBkYXRhIH0pID0+IHsNCgkgICAgICBjb25zdCB7IGV2ZW50LCBwYXlsb2FkIH0gPSBkYXRhOw0KDQoJICAgICAgc3dpdGNoIChldmVudCkgew0KCSAgICAgICAgY2FzZSAnY3JlYXRlJzoNCgkgICAgICAgICAgY3JlYXRlUmVuZGVyZXIocGF5bG9hZCk7DQoJICAgICAgICAgIGJyZWFrDQoJICAgICAgICBjYXNlICdkcmF3RnJhbWUnOg0KCSAgICAgICAgICBhd2FpdCBkcmF3RnJhbWUocGF5bG9hZCk7DQoJICAgICAgICAgIGJyZWFrDQoJICAgICAgICBjYXNlICdjbGVhcic6DQoJICAgICAgICAgIGNsZWFyKCk7DQoJICAgICAgICAgIGJyZWFrDQoJICAgICAgfQ0KCSAgICB9LA0KCSAgICBmYWxzZQ0KCSAgKTsNCgl9Cgp9KSgpOwoK', null, false);
/* eslint-enable */

var NERenderer = /** @class */ (function () {
    function NERenderer(element, cacheKey, rendererType, rendererFormat) {
        var _this = this;
        var _a;
        this.active = true;
        this.inPool = false;
        this.isMainRenderer = true;
        this.cacheKey = '';
        this.uuid = getUUID();
        this._width = 0;
        this._height = 0;
        this._rendererType = rendererType;
        this._rendererFormat = rendererFormat;
        this.bind(element);
        this.cacheKey = cacheKey;
        this.worker = new WorkerFactory();
        if (this.worker) {
            var offscreenCanvas = (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.transferControlToOffscreen();
            if (offscreenCanvas) {
                this.worker.postMessage({
                    event: 'create',
                    payload: {
                        rendererType: rendererType,
                        canvas: offscreenCanvas,
                        rendererFormat: rendererFormat,
                    },
                }, [offscreenCanvas]);
            }
            this.worker.onmessage = function (e) {
                var _a;
                var event = e.data.event;
                if (event === 'renderDone') {
                    (_a = _this.onRenderDone) === null || _a === void 0 ? void 0 : _a.call(_this);
                }
                // 如果 webgl 上下文丢失，则切换到软件渲染
                if (event === 'webglContextLost') {
                    _this.handleWebGLContextLost();
                }
            };
        }
    }
    NERenderer.prototype.reuse = function (element, cacheKey) {
        this.container = element;
        this.active = true;
        this.cacheKey = cacheKey;
        this.bind(element);
    };
    NERenderer.prototype.destroy = function () {
        var _this = this;
        var _a, _b;
        this.active = false;
        this.unbind();
        this.container = undefined;
        (_a = this.onRenderDone) === null || _a === void 0 ? void 0 : _a.call(this);
        if (!this.inPool) {
            (_b = this.worker) === null || _b === void 0 ? void 0 : _b.terminate();
            this.worker = null;
        }
        else {
            // 下个时间循环，进行 clear，否则 display:none 会晚于 clear
            setTimeout(function () {
                var _a;
                (_a = _this.worker) === null || _a === void 0 ? void 0 : _a.postMessage({
                    event: 'clear',
                });
            });
        }
    };
    NERenderer.prototype.handleWebGLContextLost = function () {
        var _a;
        console.warn('webgl context lost, switch to software renderer');
        this.unbind();
        if (this.container && this.worker) {
            this.bind(this.container);
            var offscreenCanvas = (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.transferControlToOffscreen();
            if (offscreenCanvas) {
                this.worker.postMessage({
                    event: 'create',
                    payload: {
                        rendererType: 'software',
                        canvas: offscreenCanvas,
                        rendererFormat: this._rendererFormat,
                    },
                }, [offscreenCanvas]);
            }
        }
    };
    NERenderer.prototype.bind = function (element) {
        var _this = this;
        this.container = element;
        if (!this.canvas) {
            this.canvas = document.createElement('canvas');
            Object.assign(this.canvas.style, {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            });
        }
        this.canvas.style.display = 'none';
        if (this.container.firstChild) {
            this.container.insertBefore(this.canvas, this.container.firstChild);
        }
        else {
            this.container.appendChild(this.canvas);
        }
        this._observer = new ResizeObserver(function () {
            _this.resizeCanvas();
        });
        this._observer.observe(this.container);
    };
    NERenderer.prototype.unbind = function () {
        var _a, _b, _c;
        if (this.canvas) {
            this.canvas.style.display = 'none';
        }
        this.container && ((_a = this._observer) === null || _a === void 0 ? void 0 : _a.unobserve(this.container));
        (_b = this._observer) === null || _b === void 0 ? void 0 : _b.disconnect();
        if (this.container && ((_c = this.canvas) === null || _c === void 0 ? void 0 : _c.parentNode) === this.container) {
            this.container.removeChild(this.canvas);
            this.canvas = undefined;
        }
    };
    NERenderer.prototype.drawFrame = function (videoFrame) {
        var _a;
        if (!this.canvas)
            return;
        if (!this.isMainRenderer) {
            this.resizeCanvas();
        }
        var width = videoFrame.width, height = videoFrame.height;
        if (this.canvas.style.display != '') {
            this.canvas.style.display = '';
        }
        if (this._width != width || this._height != height) {
            this._width = width;
            this._height = height;
            this.resizeCanvas();
            console.warn(new Date().toLocaleString(), this.cacheKey, 'first frame available', 'width', width, 'height', height, 'rendererFormat', this._rendererFormat, 'rendererType', this._rendererType);
        }
        (_a = this.worker) === null || _a === void 0 ? void 0 : _a.postMessage({
            event: 'drawFrame',
            payload: {
                videoFrame: videoFrame,
            },
        });
    };
    NERenderer.prototype.rotateCanvas = function (videoFrame) {
        if (!this.canvas)
            return;
        var width = videoFrame.width, height = videoFrame.height, rotation = videoFrame.rotation;
        if (rotation === 0 || rotation === 180) {
            this.canvas.width = width;
            this.canvas.height = height;
        }
        else if (rotation === 90 || rotation === 270) {
            this.canvas.height = width;
            this.canvas.width = height;
        }
        else {
            throw new Error("Invalid rotation: ".concat(rotation, ", only 0, 90, 180, 270 are supported"));
        }
    };
    NERenderer.prototype.resizeCanvas = function () {
        if (!this.canvas)
            return;
        var width = this._width;
        var height = this._height;
        // 性能优化
        var canvas = this.canvas;
        var view = this.container;
        if (canvas && view) {
            var viewWidth = view.clientWidth;
            var viewHeight = view.clientHeight;
            if (viewWidth / (width / height) > viewHeight) {
                canvas.style.height = "".concat(viewHeight, "px");
                canvas.style.width = "auto";
            }
            else {
                canvas.style.width = "".concat(viewWidth, "px");
                canvas.style.height = "auto";
            }
        }
    };
    return NERenderer;
}());

function generateRendererCacheKey(_a) {
    var userUuid = _a.userUuid, sourceType = _a.sourceType;
    return "".concat(userUuid, "_").concat(sourceType);
}
var RendererCache = /** @class */ (function () {
    function RendererCache(context, rendererFormat) {
        this._renderers = [];
        this._context = context;
        this._rtcRTCFrame = {
            code: -1,
            total: 0,
            drop: 0,
            delay: 0,
            frame: {
                buffer: {
                    bytes: new Uint8Array(new SharedArrayBuffer(0)),
                    yStride: 0,
                    uStride: 0,
                    vStride: 0,
                    yOffset: 0,
                    uOffset: 0,
                    vOffset: 0,
                },
                userUuid: context.userUuid,
                bSubVideo: context.sourceType === 'video' ? false : true,
                type: 0,
                width: 0,
                height: 0,
                rendererFormat: rendererFormat,
            },
        };
    }
    Object.defineProperty(RendererCache.prototype, "rtcFrame", {
        get: function () {
            return this._rtcRTCFrame;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RendererCache.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RendererCache.prototype, "renderers", {
        get: function () {
            return this._renderers;
        },
        enumerable: false,
        configurable: true
    });
    RendererCache.prototype.addRenderer = function (renderer) {
        this._renderers.push(renderer);
    };
    /**
     * Remove the specified renderer if it is specified, otherwise remove all renderers
     */
    RendererCache.prototype.removeRenderer = function (renderer) {
        var _a;
        var start = 0;
        var deleteCount = this._renderers.length;
        if (renderer) {
            start = this._renderers.indexOf(renderer);
            if (start < 0)
                return;
            deleteCount = 1;
        }
        this._renderers.splice(start, deleteCount).forEach(function (it) { return it.destroy(); });
        // 如果没有任何渲染器，则调用 onRenderDone
        if (this._renderers.length === 0) {
            (_a = this.onRenderDone) === null || _a === void 0 ? void 0 : _a.call(this);
        }
    };
    RendererCache.prototype.draw = function () {
        var _this = this;
        var _a;
        if (this._rtcRTCFrame.code !== 0 ||
            this._rtcRTCFrame.frame.buffer.bytes.byteLength === 0) {
            // 不处理数据，直接返回
            (_a = this.onRenderDone) === null || _a === void 0 ? void 0 : _a.call(this);
            return;
        }
        var videoFrame = getVideoFrame({
            data: this._rtcRTCFrame.frame.buffer,
            width: this._rtcRTCFrame.frame.width,
            height: this._rtcRTCFrame.frame.height,
        });
        var rendererCount = this._renderers.length;
        this._renderers.forEach(function (renderer) {
            renderer.onRenderDone = function () {
                var _a;
                rendererCount--;
                if (rendererCount <= 0) {
                    (_a = _this.onRenderDone) === null || _a === void 0 ? void 0 : _a.call(_this);
                }
            };
            renderer.drawFrame(videoFrame);
        });
    };
    return RendererCache;
}());

var AVAILABLE_FPS_VALUES = [15, 20, 25, 30];
var _detectLagFrameSize = 3;
var _lagCountToReduceFps = 3;
var _unLagCountToRiseFps = 40;
var _lagDelta = 0.8;
var _nowLocalVideoFps = 30;
var _availableFpsValues = AVAILABLE_FPS_VALUES;
var NERendererManager = /** @class */ (function () {
    function NERendererManager() {
        this._rendererFormat = 'yuv';
        this._rendererType = 'webgl';
        this._rendererCaches = [];
        this._renderersPool = [];
        this._renderersPoolMaxLength = 0;
        this._currentFrameCountOfWindow = 0;
        this._firstFrameTimeOfWindow = 0;
        this._renderingFps = 30;
        // 渲染卡顿计数
        this._lagCount = 0;
        this._unLagCount = 0;
        this._firstFrameTimeOfLagWindow = 0;
        this._frameCountOfLagWindow = 0;
        // 上一帧率渲染结束时间
        this._previousFrameEndTime = 0;
        // 下一帧率渲染延迟时间
        this._nextFrameDeltaTime = 0;
        //
    }
    NERendererManager.getInstance = function () {
        if (!NERendererManager._instance) {
            NERendererManager._instance = new NERendererManager();
        }
        return NERendererManager._instance;
    };
    Object.defineProperty(NERendererManager.prototype, "roomKit", {
        set: function (roomKit) {
            this._roomKit = roomKit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERendererManager.prototype, "rtcController", {
        set: function (controller) {
            this._rtcController = controller;
        },
        enumerable: false,
        configurable: true
    });
    NERendererManager.prototype.createRenderer = function (context, rendererType) {
        this._rendererType = isSupportRendererType();
        this._rendererFormat = isSupportRendererFormat();
        if (rendererType === undefined) {
            rendererType = this._rendererType;
        }
        // 是否是主窗口添加
        var isMainRenderer = document.contains(context.view);
        var rendererCacheKey = generateRendererCacheKey(context);
        var rendererCache = this._rendererCaches.find(function (item) { return generateRendererCacheKey(item.context) === rendererCacheKey; });
        var renderer = this._renderersPool.find(function (item) { return item.active === false && item.cacheKey === rendererCacheKey; });
        if (!renderer) {
            renderer = this._renderersPool.find(function (item) { return item.active === false; });
        }
        if (!rendererCache) {
            rendererCache = new RendererCache(context, this._rendererFormat);
            this._rendererCaches.push(rendererCache);
        }
        if (renderer && isMainRenderer) {
            renderer.reuse(context.view, rendererCacheKey);
        }
        else {
            renderer = new NERenderer(context.view, rendererCacheKey, this._rendererType, this._rendererFormat);
            renderer.isMainRenderer = isMainRenderer;
            if (this._renderersPool.length < this._renderersPoolMaxLength &&
                isMainRenderer) {
                renderer.inPool = true;
                this._renderersPool.push(renderer);
            }
        }
        rendererCache.addRenderer(renderer);
        // 根据 设置的本地采集帧率调整本地视频帧率
        this.adjustMaxVideoFPS();
        this.startRendering();
        return renderer;
    };
    NERendererManager.prototype.removeRenderer = function (context, renderer) {
        var rendererCache = this._rendererCaches.find(function (item) {
            return generateRendererCacheKey(item.context) ===
                generateRendererCacheKey(context);
        });
        if (rendererCache) {
            rendererCache.removeRenderer(renderer);
            if (rendererCache.renderers.length === 0) {
                this._rendererCaches.splice(this._rendererCaches.indexOf(rendererCache), 1);
                if (this._rendererCaches.length === 0) {
                    this.stopRendering();
                    return;
                }
            }
        }
    };
    NERendererManager.prototype.clearRendererCaches = function () {
        this._rendererCaches.forEach(function (rendererCache) {
            rendererCache.removeRenderer();
        });
        this._rendererCaches = [];
    };
    NERendererManager.prototype.resetRendering = function () {
        _nowLocalVideoFps = 30;
        this.clearRendererCaches();
    };
    NERendererManager.prototype.startRendering = function () {
        var _this = this;
        var _a, _b;
        var notSupportRenderer = localStorage.getItem('NE_MEETING_NOT_SUPPORT_RENDERER');
        if (notSupportRenderer === 'true') {
            console.warn('NERendererManager not support renderer');
            return;
        }
        console.log('NERendererManager startRendering', this._renderingTimer);
        if (this._renderingTimer)
            return;
        (_b = (_a = this._roomKit) === null || _a === void 0 ? void 0 : _a.startListenVideoFrame) === null || _b === void 0 ? void 0 : _b.call(_a);
        var renderingLooper = function () {
            var now = performance.now();
            _this.detectFrameLag();
            if (_this._firstFrameTimeOfLagWindow === 0) {
                _this._firstFrameTimeOfLagWindow = now;
                _this._frameCountOfLagWindow = 0;
            }
            ++_this._frameCountOfLagWindow;
            if (_this._firstFrameTimeOfWindow === 0) {
                _this._firstFrameTimeOfWindow = now;
                _this._currentFrameCountOfWindow = 0;
            }
            ++_this._currentFrameCountOfWindow;
            _this.getRenderFrame();
            _this.getRenderFrame(true);
            var needRenderCount = _this._rendererCaches.length;
            if (needRenderCount === 0) {
                _this.stopRendering();
                return;
            }
            _this._rendererCaches.forEach(function (rendererCache) {
                rendererCache.onRenderDone = function () {
                    needRenderCount--;
                    if (needRenderCount === 0) {
                        var deltaTime = performance.now() - _this._firstFrameTimeOfWindow;
                        var expectedTime = (_this._currentFrameCountOfWindow * 1000) / _this._renderingFps;
                        if (_this._currentFrameCountOfWindow >= _this._renderingFps) {
                            _this._firstFrameTimeOfWindow = 0;
                        }
                        if (deltaTime < expectedTime) {
                            _this._nextFrameDeltaTime = expectedTime - deltaTime;
                            _this._renderingTimer = setTimeout(renderingLooper, _this._nextFrameDeltaTime);
                        }
                        else {
                            _this._nextFrameDeltaTime = 0;
                            renderingLooper();
                        }
                    }
                };
                _this.doRendering(rendererCache);
            });
        };
        renderingLooper();
    };
    NERendererManager.prototype.stopRendering = function () {
        var _a, _b;
        console.log('NERendererManager stopRendering');
        (_b = (_a = this._roomKit) === null || _a === void 0 ? void 0 : _a.stopListenVideoFrame) === null || _b === void 0 ? void 0 : _b.call(_a);
        if (this._renderingTimer) {
            clearTimeout(this._renderingTimer);
            this._renderingTimer = undefined;
        }
        this._previousFrameEndTime = 0;
        this._firstFrameTimeOfWindow = 0;
        this._firstFrameTimeOfLagWindow = 0;
        this._lagCount = 0;
        this._unLagCount = 0;
    };
    NERendererManager.prototype.getRenderFrame = function (secondTime) {
        var _a, _b;
        if (secondTime === void 0) { secondTime = false; }
        var rtcFrames = [];
        this._rendererCaches.forEach(function (rendererCache) {
            if (secondTime && rendererCache.rtcFrame.code !== 1) {
                return;
            }
            if (rendererCache.rtcFrame.code === 1) {
                if (rendererCache.rtcFrame.frame.rendererFormat === 'rgba') {
                    var _a = rendererCache.rtcFrame.frame, width = _a.width, height = _a.height;
                    rendererCache.rtcFrame.frame.buffer.bytes = new Uint8Array(new SharedArrayBuffer(width * height * 4));
                }
                else {
                    rendererCache.rtcFrame.frame.buffer.bytes = new Uint8Array(new SharedArrayBuffer(rendererCache.rtcFrame.frame.buffer.vOffset));
                }
            }
            rtcFrames.push(rendererCache.rtcFrame);
        });
        if (rtcFrames.length !== 0) {
            (_b = (_a = this._roomKit) === null || _a === void 0 ? void 0 : _a.getVideoFrame) === null || _b === void 0 ? void 0 : _b.call(_a, rtcFrames);
        }
    };
    NERendererManager.prototype.doRendering = function (rendererCache) {
        if (rendererCache) {
            rendererCache.draw();
        }
    };
    // 根据 设置的本地采集帧率调整本地视频帧率
    NERendererManager.prototype.adjustMaxVideoFPS = function () {
        var _a, _b;
        var maxVideoFps = supportMaxVideoFPS();
        this._renderingFps = maxVideoFps;
        _availableFpsValues = AVAILABLE_FPS_VALUES.filter(function (item) { return item <= maxVideoFps; });
        // 如果最大帧率不在可用帧率列表中，则添加到列表中
        if (_availableFpsValues[_availableFpsValues.length - 1] !== maxVideoFps) {
            _availableFpsValues.push(maxVideoFps);
        }
        if (maxVideoFps && _nowLocalVideoFps !== maxVideoFps) {
            _nowLocalVideoFps = maxVideoFps;
            (_b = (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.setLocalVideoFramerate) === null || _b === void 0 ? void 0 : _b.call(_a, maxVideoFps);
        }
    };
    NERendererManager.prototype.detectFrameLag = function () {
        // 仅支持 Windows，其他平台不检查延迟
        if (window.platform !== 'win32')
            return;
        if (this._frameCountOfLagWindow >= _detectLagFrameSize) {
            var deltaTime = performance.now() - this._firstFrameTimeOfLagWindow;
            var expectedTime = (this._frameCountOfLagWindow * 1000) / this._renderingFps;
            var isLag = deltaTime - _lagDelta > expectedTime;
            this.markFrameLag(isLag);
            this._firstFrameTimeOfLagWindow = 0;
        }
    };
    NERendererManager.prototype.markFrameLag = function (isLag) {
        var _a, _b;
        var nowFps = this._renderingFps;
        if (isLag) {
            this._unLagCount = Math.max(0, this._unLagCount - 3);
            this._lagCount++;
            if (this._lagCount === _lagCountToReduceFps) {
                this._renderingFps = 15;
                this._lagCount = 0;
                this._unLagCount = 0;
                this._firstFrameTimeOfLagWindow = 0;
                this._firstFrameTimeOfWindow = 0;
            }
        }
        else {
            this._lagCount = 0;
            this._unLagCount++;
            if (this._unLagCount === _unLagCountToRiseFps) {
                var fps = this._renderingFps;
                for (var index = 0; index < _availableFpsValues.length; index++) {
                    var value = _availableFpsValues[index];
                    if (value > fps || index == _availableFpsValues.length - 1) {
                        fps = value;
                        break;
                    }
                }
                this._renderingFps = fps;
                this._lagCount = 0;
                this._unLagCount = 0;
                this._firstFrameTimeOfLagWindow = 0;
                this._firstFrameTimeOfWindow = 0;
            }
        }
        if (nowFps !== this._renderingFps) {
            (_b = (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.setLocalVideoFramerate) === null || _b === void 0 ? void 0 : _b.call(_a, this._renderingFps);
            console.warn(new Date().toLocaleString(), 'RendererManager', "rendering fps changed ".concat(nowFps, " -> ").concat(this._renderingFps));
        }
    };
    return NERendererManager;
}());

var NERoomRtcController = /** @class */ (function () {
    function NERoomRtcController(initOptions) {
        this.muteMyAudioTimer = null;
        this.muteMyVideoTimer = null;
        this._renderMap = new Map();
        console.log('NERoomRtcController constructor');
        this._rtcController = initOptions.rtcController;
        this._myUuid = initOptions.myUuid;
        this._rendererType = initOptions.rendererType;
        this._rendererManager = NERendererManager.getInstance();
        this._rendererManager.rtcController = this;
    }
    Object.defineProperty(NERoomRtcController.prototype, "isSupported", {
        get: function () {
            var _a;
            return ((_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.isSupported()) || false;
        },
        enumerable: false,
        configurable: true
    });
    NERoomRtcController.prototype.enableCaption = function (enable) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                return [2 /*return*/, (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.enableCaption(enable)];
            });
        });
    };
    NERoomRtcController.prototype.switchDevice = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var code;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                code = -1;
                switch (params.type) {
                    case 'camera':
                        code = (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.selectCameraDevice(params.deviceId);
                        break;
                    case 'microphone':
                        code = (_b = this._rtcController) === null || _b === void 0 ? void 0 : _b.selectRecordDevice(params.deviceId);
                        break;
                    case 'speaker':
                        code = (_c = this._rtcController) === null || _c === void 0 ? void 0 : _c.selectPlayoutDevice(params.deviceId);
                        break;
                }
                if (code === 0) {
                    return [2 /*return*/, b({
                            type: params.type,
                            deviceId: params.deviceId,
                        })];
                }
                else {
                    return [2 /*return*/, v(null, undefined, code)];
                }
            });
        });
    };
    NERoomRtcController.prototype.getSelectedRecordDevice = function () {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.getSelectedRecordDevice();
    };
    NERoomRtcController.prototype.getSelectedCameraDevice = function () {
        var _a;
        // todo
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.getSelectedCameraDevice();
    };
    NERoomRtcController.prototype.getSelectedPlayoutDevice = function () {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.getSelectedPlayoutDevice();
    };
    NERoomRtcController.prototype.enumRecordDevices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deviceList;
            var _a;
            return __generator(this, function (_b) {
                deviceList = (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.enumRecordDevices();
                return [2 /*return*/, b(deviceList)];
            });
        });
    };
    NERoomRtcController.prototype.enumCameraDevices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deviceList;
            var _a;
            return __generator(this, function (_b) {
                console.log('_preRtcController>>>', this._rtcController);
                deviceList = (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.enumCameraDevices();
                console.log('deviceList>>', deviceList);
                return [2 /*return*/, b(deviceList)];
            });
        });
    };
    NERoomRtcController.prototype.enumPlayoutDevices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deviceList;
            var _a;
            return __generator(this, function (_b) {
                deviceList = (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.enumPlayoutDevices();
                return [2 /*return*/, b(deviceList)];
            });
        });
    };
    NERoomRtcController.prototype.joinRtcChannel = function (channelName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a, _b;
            var callback = function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            };
            if (channelName) {
                return (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.joinRtcChannel(channelName, callback);
            }
            else {
                return (_b = _this._rtcController) === null || _b === void 0 ? void 0 : _b.joinRtcChannel(callback);
            }
        });
    };
    NERoomRtcController.prototype.setCaptionTranslationLanguage = function (language) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                return [2 /*return*/, (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.setCaptionTranslationLanguage(language)];
            });
        });
    };
    NERoomRtcController.prototype.setCaptionTranslationConfig = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                return [2 /*return*/, (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.setCaptionTranslationConfig(config)];
            });
        });
    };
    NERoomRtcController.prototype.leaveRtcChannel = function (channelName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a, _b;
            var cb = function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            };
            if (channelName) {
                return (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.leaveRtcChannel(channelName, cb);
            }
            else {
                return (_b = _this._rtcController) === null || _b === void 0 ? void 0 : _b.leaveRtcChannel(cb);
            }
        });
    };
    NERoomRtcController.prototype.enableMediaPub = function (channelName, mediaType, enable) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            var code = (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.enableMediaPub(channelName, mediaType, enable);
            return code === 0
                ? resolve(b(null))
                : reject(J(null));
        });
    };
    NERoomRtcController.prototype.adjustChannelPlaybackSignalVolume = function (channelName, volume) {
        var _a;
        (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.adjustChannelPlaybackSignalVolume(channelName, volume);
    };
    NERoomRtcController.prototype.enableLocalAudio = function (channelName, enable) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            var code = (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.enableLocalAudio(channelName, enable);
            return code === 0
                ? resolve(b(null))
                : reject(J(null));
        });
    };
    NERoomRtcController.prototype.muteMyAudio = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.muteMyAudio(function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomRtcController.prototype.muteMyVideo = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.muteMyVideo(function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomRtcController.prototype.setupLocalVideoCanvas = function (videoView) {
        var _a;
        var isBuffer = videoView instanceof Buffer;
        if (videoView &&
            typeof videoView !== 'string' &&
            !isBuffer &&
            typeof document !== 'undefined') {
            var context = {
                view: videoView,
                userUuid: this._myUuid,
                sourceType: 'video',
            };
            var render = this._rendererManager.createRenderer(context);
            this._renderMap.set(videoView, render);
        }
        var viewBuffer = Buffer.from([]);
        if (isBuffer) {
            viewBuffer = videoView;
        }
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.setupLocalVideoCanvas(viewBuffer, true);
    };
    NERoomRtcController.prototype.removeLocalVideoCanvas = function (videoView) {
        var render;
        if (videoView) {
            render = this._renderMap.get(videoView);
            this._renderMap.delete(videoView);
            // videoView 不为空，则不移除
            if (!render) {
                return;
            }
        }
        this._rendererManager.removeRenderer({
            userUuid: this._myUuid,
            sourceType: 'video',
        }, render);
    };
    NERoomRtcController.prototype.setRemoteMemberMap = function () {
        return b(null);
    };
    NERoomRtcController.prototype.setLocalMember = function () {
        return b(null);
    };
    NERoomRtcController.prototype.setupRemoteVideoSubStreamCanvas = function (videoView, userUuid) {
        var _a;
        var isBuffer = videoView instanceof Buffer;
        if (videoView &&
            typeof videoView !== 'string' &&
            !isBuffer &&
            typeof document !== 'undefined') {
            var context = {
                view: videoView,
                userUuid: userUuid,
                sourceType: 'screen',
            };
            var render = this._rendererManager.createRenderer(context);
            this._renderMap.set(videoView, render);
        }
        var viewBuffer = Buffer.from([]);
        if (isBuffer) {
            viewBuffer = videoView;
        }
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.setupRemoteVideoSubStreamCanvas(userUuid, viewBuffer);
    };
    NERoomRtcController.prototype.removeRemoteVideoSubStreamCanvas = function (userUuid, videoView) {
        var render;
        if (videoView) {
            render = this._renderMap.get(videoView);
            this._renderMap.delete(videoView);
            // videoView 不为空，则不移除
            if (!render) {
                return;
            }
        }
        this._rendererManager.removeRenderer({
            userUuid: userUuid,
            sourceType: 'screen',
        }, render);
    };
    NERoomRtcController.prototype.setupRemoteVideoCanvas = function (videoView, userUuid) {
        var _a;
        var isBuffer = videoView instanceof Buffer;
        if (videoView &&
            typeof videoView !== 'string' &&
            !isBuffer &&
            typeof document !== 'undefined') {
            var context = {
                view: videoView,
                userUuid: userUuid,
                sourceType: 'video',
            };
            var render = this._rendererManager.createRenderer(context);
            this._renderMap.set(videoView, render);
        }
        var viewBuffer = Buffer.from([]);
        if (isBuffer) {
            viewBuffer = videoView;
        }
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.setupRemoteVideoCanvas(userUuid, viewBuffer);
    };
    NERoomRtcController.prototype.removeRemoteVideoCanvas = function (userUuid, videoView) {
        var render;
        if (videoView) {
            render = this._renderMap.get(videoView);
            this._renderMap.delete(videoView);
            // videoView 不为空，则不移除
            if (!render) {
                return;
            }
        }
        this._rendererManager.removeRenderer({
            userUuid: userUuid,
            sourceType: 'video',
        }, render);
    };
    NERoomRtcController.prototype.getScreenSharingUserUuid = function () {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.getScreenSharingUserUuid();
    };
    NERoomRtcController.prototype.setScreenSharingUserUuid = function (userUuid) {
        console.log('setScreenSharingUserUuid', userUuid);
    };
    NERoomRtcController.prototype._getRtcUidByUuid = function () {
        return 0;
    };
    NERoomRtcController.prototype._getUuidByRtcUid = function () {
        return '';
    };
    NERoomRtcController.prototype.startRectShare = function (screenConfig) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.startRectShare(screenConfig.sourceRectangle, screenConfig.regionRectangle, !!screenConfig.preferMotion, function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomRtcController.prototype.startScreenShare = function (screenConfig) {
        var _this = this;
        if (screenConfig === null || screenConfig === void 0 ? void 0 : screenConfig.isApp) {
            return this.startAppShare(Number(screenConfig === null || screenConfig === void 0 ? void 0 : screenConfig.sourceId) || 0, screenConfig);
        }
        else {
            return new Promise(function (resolve, reject) {
                var _a;
                (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.startScreenShare(Number(screenConfig === null || screenConfig === void 0 ? void 0 : screenConfig.sourceId), screenConfig, function (code, message) {
                    if (code === 0) {
                        return resolve(b(null));
                    }
                    else {
                        return reject(J(null, message, code));
                    }
                });
            });
        }
    };
    NERoomRtcController.prototype.stopScreenShare = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.stopShare(function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomRtcController.prototype.stopMemberScreenShare = function (userUuid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.stopMemberShare(userUuid, function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomRtcController.prototype.stopMemberSystemAudioShare = function (userUuid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.stopMemberSystemAudioShare(userUuid, function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomRtcController.prototype.muteMemberAudio = function (userUuid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.muteMemberAudio(userUuid, function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomRtcController.prototype.muteMemberVideo = function (userUuid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.muteMemberVideo(userUuid, function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomRtcController.prototype.unmuteMemberAudio = function (userUuid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.unmuteMemberAudio(userUuid, function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomRtcController.prototype.unmuteMemberVideo = function (userUuid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.unmuteMemberVideo(userUuid, function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomRtcController.prototype.subscribeRemoteVideoSubStream = function (userUuid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            var result = (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.subscribeRemoteVideoSubStream(userUuid);
            if (result === 0) {
                return resolve(b(null));
            }
            else {
                return reject(J(null));
            }
        });
    };
    NERoomRtcController.prototype.unsubscribeRemoteVideoSubStream = function (userUuid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            var result = (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.unsubscribeRemoteVideoSubStream(userUuid);
            if (result === 0) {
                return resolve(b(null));
            }
            else {
                return reject(J(null));
            }
        });
    };
    NERoomRtcController.prototype.subscribeRemoteVideoStream = function (userUuid, streamType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            var result = (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.subscribeRemoteVideoStream(userUuid, streamType);
            if (result === 0) {
                return resolve(b(null));
            }
            else {
                return reject(J(null));
            }
        });
    };
    NERoomRtcController.prototype.unsubscribeRemoteVideoStream = function (userUuid, streamType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            var result = (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.unsubscribeRemoteVideoStream(userUuid, streamType);
            if (result === 0) {
                return resolve(b(null));
            }
            else {
                return reject(J(null));
            }
        });
    };
    NERoomRtcController.prototype.setLocalVideoConfig = function (profile) {
        var _a;
        // toto
        if (profile.resolution || profile.resolution === 0) {
            var resolutionMap = {
                1080: c.kNEVideoProfileHD1080P,
                720: c.kNEVideoProfileHD720P,
                480: c.kNEVideoProfileStandard,
                180: c.kNEVideoProfileLow,
            };
            (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.setLocalVideoResolution(resolutionMap[profile.resolution] || profile.resolution);
        }
    };
    NERoomRtcController.prototype.setLocalVideoFramerate = function (framerate) {
        return this._rtcController.setLocalVideoFramerate(framerate);
    };
    NERoomRtcController.prototype.setLocalAudioProfile = function (profile) {
        var _a, _b;
        (_b = (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.setLocalAudioProfile) === null || _b === void 0 ? void 0 : _b.call(_a, profile);
    };
    NERoomRtcController.prototype.setAudioProfile = function (profile) {
        var _a;
        (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.setAudioProfile(profile);
    };
    NERoomRtcController.prototype.setAudioProfileInEle = function (profile, scenario) {
        var _a;
        (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.setAudioProfile(profile, scenario);
    };
    NERoomRtcController.prototype.setLocalScreenProfile = function () {
        // todo
    };
    // web 内部接口无须实现
    NERoomRtcController.prototype.operateStream = function (type, isOpen) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('operateStream', type, isOpen);
                return [2 /*return*/];
            });
        });
    };
    // web 内部接口无须实现
    NERoomRtcController.prototype.playLocalStream = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, b(null)];
            });
        });
    };
    // switchDevice(params: {
    //   type: DeviceType
    //   deviceId: string
    // }): Promise<NEResult<NEDeviceSwitchInfo>> {
    //   // todo
    //   throw new Error('Method not implemented.')
    // }
    NERoomRtcController.prototype.disconnectMyAudio = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.disconnectMyAudio(function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomRtcController.prototype.reconnectMyAudio = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.reconnectMyAudio(function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomRtcController.prototype.unmuteMyAudio = function (enableMediaPub) {
        var _this = this;
        if (enableMediaPub === void 0) { enableMediaPub = true; }
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.unmuteMyAudio(enableMediaPub, function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomRtcController.prototype.unmuteMyVideo = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.unmuteMyVideo(function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomRtcController.prototype.selectedRecordDevice = function (deviceId) {
        return this.switchDevice({ type: 'microphone', deviceId: deviceId });
    };
    NERoomRtcController.prototype.selectedCameraDevice = function (deviceId) {
        return this.switchDevice({ type: 'camera', deviceId: deviceId });
    };
    NERoomRtcController.prototype.selectedPlayoutDevice = function (deviceId) {
        return this.switchDevice({ type: 'speaker', deviceId: deviceId });
    };
    // web内部使用无需实现
    NERoomRtcController.prototype.addLiveStreamTask = function () {
        return Promise.resolve(b(null));
    };
    // web内部使用无需实现
    NERoomRtcController.prototype.updateLiveStreamTask = function () {
        return Promise.resolve(b(null));
    };
    NERoomRtcController.prototype.removeLiveStreamTask = function () {
        return Promise.resolve(b(null));
    };
    NERoomRtcController.prototype.enableAudioVolumeIndication = function (enable, interval, enableVad, channelName) {
        var _a, _b;
        if (channelName) {
            return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.enableAudioVolumeIndication(channelName, enable, interval, enableVad);
        }
        else {
            return (_b = this._rtcController) === null || _b === void 0 ? void 0 : _b.enableAudioVolumeIndication(enable, interval);
        }
    };
    NERoomRtcController.prototype.pushExternalVideoFrame = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.setExternalVideoSource = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.setEnableExternalScreenVideo = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.pushExternalScreenVideoFrame = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.setExternalScreenVideoSource = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.enableEarBack = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error('Method not implemented.');
            });
        });
    };
    NERoomRtcController.prototype.disableEarBack = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.startAudioMixing = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.playEffect = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.stopAudioMixing = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.stopEffect = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.setAudioMixingPlaybackVolume = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.setEffectSendVolume = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.stopAllEffects = function () {
        throw new Error('Method not implemented.');
    };
    // 不需要实现
    NERoomRtcController.prototype.replayRemoteStream = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.adjustRecordingSignalVolume = function (volume) {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.adjustRecordingSignalVolume(Number(volume * 4));
    };
    NERoomRtcController.prototype.pauseEffect = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.pauseAllEffects = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.resumeEffect = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.setSelectedRecordDevice = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.setSelectedCameraDevice = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.setSelectedPlayoutDevice = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.getRemoteScreenStats = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.disableEncryption = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.resumeAllEffects = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.getEffectDuration = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.setChannelProfile = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.enableCustomEncryption = function (libPath) {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.enableCustomEncryption(libPath);
    };
    NERoomRtcController.prototype.enableEncryption = function (key) {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.enableEncryption(key, 0);
    };
    NERoomRtcController.prototype.enableLocalSubStreamAudio = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.disableLocalSubStreamAudio = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.pauseLocalAudioRecording = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.resumeLocalAudioRecording = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.pauseLocalVideoCapture = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            var code = (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.pauseLocalVideoCapture();
            if (code === 0) {
                return resolve(b(null));
            }
            else {
                return reject(J(null, 'pauseLocalVideoCapture failed', code));
            }
        });
    };
    NERoomRtcController.prototype.resumeLocalVideoCapture = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            var code = (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.resumeLocalVideoCapture();
            if (code === 0) {
                return resolve(b(null));
            }
            else {
                return reject(J(null, 'resumeLocalVideoCapture failed', code));
            }
        });
    };
    NERoomRtcController.prototype.adjustPlaybackSignalVolume = function (volume) {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.adjustPlaybackSignalVolume(Number(volume * 4));
    };
    // 不需要实现
    NERoomRtcController.prototype.getLocalAudioStats = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.getLocalAudioLevel = function () {
        throw new Error('Method not implemented.');
    };
    // 不需要实现
    NERoomRtcController.prototype.getTransportStats = function () {
        throw new Error('Method not implemented.');
    };
    // 不需要实现
    NERoomRtcController.prototype.getLocalVideoStats = function () {
        throw new Error('Method not implemented.');
    };
    // 不需要实现
    NERoomRtcController.prototype.getRemoteAudioStats = function () {
        throw new Error('Method not implemented.');
    };
    // 不需要实现
    NERoomRtcController.prototype.getRemoteVideoStats = function () {
        throw new Error('Method not implemented.');
    };
    // 不需要实现
    NERoomRtcController.prototype.getSessionStats = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.setCloudProxy = function (transportType) {
        return this._rtcController.setCloudProxy(transportType);
    };
    NERoomRtcController.prototype.setVideoStreamLayerCount = function (layerCount) {
        return this._rtcController.setVideoStreamLayerCount(layerCount);
    };
    NERoomRtcController.prototype.getScreenCaptureSourceList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.getScreenCaptureSourceList(function (code, message, data) {
                if (code === 0) {
                    return resolve(b(data));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomRtcController.prototype.startAppShare = function (index, screenConfig) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.startAppShare(index, screenConfig, function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomRtcController.prototype.setExcludeWindowList = function (windowList, isWin32) {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.setExcludeWindowList(windowList, isWin32);
    };
    NERoomRtcController.prototype.startSystemAudioLoopbackCapture = function () {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.startSystemAudioLoopbackCapture();
    };
    NERoomRtcController.prototype.stopSystemAudioLoopbackCapture = function () {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.stopSystemAudioLoopbackCapture();
    };
    NERoomRtcController.prototype.getPlayoutDeviceVolume = function () {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.getPlayoutDeviceVolume();
    };
    NERoomRtcController.prototype.getRecordDeviceVolume = function () {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.getRecordDeviceVolume();
    };
    NERoomRtcController.prototype.destroy = function () {
        throw new Error('Method not implemented.');
    };
    NERoomRtcController.prototype.enableAudioAINS = function (enable) {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.enableAudioAINS(enable);
    };
    NERoomRtcController.prototype.enableAudioAINSMode = function (mode) {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.enableAudioAINSMode(mode);
    };
    NERoomRtcController.prototype.enableAudioEchoCancellation = function (enable) {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.enableAudioEchoCancellation(enable);
    };
    NERoomRtcController.prototype.enableAudioVolumeAutoAdjust = function (enable) {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.enableAudioVolumeAutoAdjust(enable);
    };
    NERoomRtcController.prototype.startAudioDump = function (type) {
        var _a;
        if (!type) {
            type = i.kNEAudioDumpTypePCM;
        }
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.startAudioDump(type);
    };
    NERoomRtcController.prototype.stopAudioDump = function () {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.stopAudioDump();
    };
    NERoomRtcController.prototype.getPlayoutDeviceMute = function () {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.getPlayoutDeviceMute();
    };
    NERoomRtcController.prototype.takeRemoteSnapshot = function (userUuid, streamType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.takeRemoteSnapshot(userUuid, streamType, function (code, message, data) {
                if (code === 0) {
                    return resolve(b(data));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomRtcController.prototype.takeLocalSnapshot = function (streamType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.takeLocalSnapshot(streamType, function (code, message, data) {
                if (code === 0) {
                    return resolve(b(data));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomRtcController.prototype.startShareSystemAudio = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.startShareSystemAudio(function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomRtcController.prototype.stopShareSystemAudio = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._rtcController) === null || _a === void 0 ? void 0 : _a.stopShareSystemAudio(function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomRtcController.prototype.getVirtualBackgroundSupportedType = function () {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.getVirtualBackgroundSupportedType();
    };
    NERoomRtcController.prototype.enableLocalVideo = function (enable) {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.enableLocalVideo(enable);
    };
    NERoomRtcController.prototype.startLocalRecord = function (options) {
        var _a;
        console.log('[rtcController] startLocalRecord() options: ', options);
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.startLocalRecord(options);
    };
    NERoomRtcController.prototype.stopLocalRecord = function () {
        var _a;
        console.log('[rtcController] stopLocalRecord() start');
        (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.stopLocalRecord();
        console.log('[rtcController] stopLocalRecord() over');
        return 0;
    };
    NERoomRtcController.prototype.updateLocalRecordLayouts = function (options) {
        var _a;
        console.log('[rtcController] updateLocalRecordLayouts() options: ', options);
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.updateLocalRecordLayouts(options);
    };
    NERoomRtcController.prototype.pushLocalRecorderVideoFrame = function (uid, streamLayer, frame) {
        var _a;
        console.log('[rtcController] pushLocalRecorderVideoFrame() uid: ', uid, 'streamLayer: ', streamLayer);
        var int = (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.pushLocalRecorderVideoFrame(uid, streamLayer, frame);
        frame.buffer = null;
        return int;
    };
    NERoomRtcController.prototype.stopLocalRecorderRemux = function () {
        var _a;
        console.log('[rtcController] stopLocalRecorderRemux()');
        (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.stopLocalRecorderRemux();
        return 0;
    };
    NERoomRtcController.prototype.setParameters = function (param) {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.setParameters(param);
    };
    NERoomRtcController.prototype.setAudioScenario = function (scenario) {
        var _a;
        return (_a = this._rtcController) === null || _a === void 0 ? void 0 : _a.setAudioScenario(scenario);
    };
    return NERoomRtcController;
}());

var NERoomChatController = /** @class */ (function () {
    function NERoomChatController(initOptions) {
        console$1.log('NERoomChatController constructor');
        this._roomChatController = initOptions.roomChatController;
        this._waitingRoomChatController = initOptions.waitingRoomChatController;
    }
    Object.defineProperty(NERoomChatController.prototype, "isSupported", {
        get: function () {
            var _a, _b;
            return ((_b = (_a = this._roomChatController) === null || _a === void 0 ? void 0 : _a.isSupported) === null || _b === void 0 ? void 0 : _b.call(_a)) || false;
        },
        enumerable: false,
        configurable: true
    });
    NERoomChatController.prototype.joinChatroom = function (chatroomType) {
        var _this = this;
        if (chatroomType === void 0) { chatroomType = p.COMMON; }
        return new Promise(function (resolve, reject) {
            var controller = chatroomType === p.COMMON
                ? _this._roomChatController
                : _this._waitingRoomChatController;
            controller.joinChatroom(function (code, message) {
                if (code === 0) {
                    resolve({ code: 0, message: null, data: null });
                }
                else {
                    reject({ code: code, message: message });
                }
            });
        });
    };
    NERoomChatController.prototype.leaveChatroom = function (chatroomType) {
        var _this = this;
        if (chatroomType === void 0) { chatroomType = p.COMMON; }
        return new Promise(function (resolve, reject) {
            var controller = chatroomType === p.COMMON
                ? _this._roomChatController
                : _this._waitingRoomChatController;
            controller.leaveChatroom(function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    NERoomChatController.prototype.updateMyChatroomMemberInfo = function () {
        throw new Error('Method not implemented.');
    };
    NERoomChatController.prototype.fetchChatRoomMembers = function () {
        throw new Error('Method not implemented.');
    };
    NERoomChatController.prototype.sendBroadcastTextMessage = function (message, chatroomType) {
        var _this = this;
        if (chatroomType === void 0) { chatroomType = p.COMMON; }
        return new Promise(function (resolve, reject) {
            var controller = chatroomType === p.COMMON
                ? _this._roomChatController
                : _this._waitingRoomChatController;
            controller.sendBroadcastTextMessage(message, function (code, message, data) {
                if (code === 0) {
                    resolve(b(data));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    NERoomChatController.prototype.sendDirectTextMessage = function (userUuid, message, chatroomType) {
        var _this = this;
        if (chatroomType === void 0) { chatroomType = p.COMMON; }
        return new Promise(function (resolve, reject) {
            var controller = chatroomType === p.COMMON
                ? _this._roomChatController
                : _this._waitingRoomChatController;
            controller.sendDirectTextMessage(userUuid, message, function (code, message, data) {
                if (code === 0) {
                    resolve(b(data));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    NERoomChatController.prototype.sendGroupTextMessage = function (userUuids, message, chatroomType) {
        var _this = this;
        if (chatroomType === void 0) { chatroomType = p.COMMON; }
        return new Promise(function (resolve, reject) {
            var controller = chatroomType === p.COMMON
                ? _this._roomChatController
                : _this._waitingRoomChatController;
            controller.sendGroupTextMessage(userUuids, message, function (code, message, data) {
                if (code === 0) {
                    resolve(b(data));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    NERoomChatController.prototype.sendBroadcastCustomMessage = function (message, chatroomType) {
        var _this = this;
        if (chatroomType === void 0) { chatroomType = p.COMMON; }
        return new Promise(function (resolve, reject) {
            var controller = chatroomType === p.COMMON
                ? _this._roomChatController
                : _this._waitingRoomChatController;
            console$1.log('sendBroadcastCustomMessage', chatroomType);
            controller.sendBroadcastCustomMessage(message, function (code, message, data) {
                if (code === 0) {
                    resolve(b(data));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    NERoomChatController.prototype.sendTextMessage = function (messageUuid, message, userUuids, chatroomType) {
        var _this = this;
        if (chatroomType === void 0) { chatroomType = p.COMMON; }
        return new Promise(function (resolve, reject) {
            var controller = chatroomType === p.COMMON
                ? _this._roomChatController
                : _this._waitingRoomChatController;
            console$1.log('sendTextMessage', chatroomType);
            controller.sendTextMessage(messageUuid, message, userUuids || [], function (code, message, data) {
                console$1.log('sendTextMessage', code, message, data);
                if (code === 0) {
                    resolve(b(data));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    NERoomChatController.prototype.sendFileMessage = function (messageUuid, file, userUuids, chatroomType) {
        var _this = this;
        if (chatroomType === void 0) { chatroomType = p.COMMON; }
        return new Promise(function (resolve, reject) {
            var controller = chatroomType === p.COMMON
                ? _this._roomChatController
                : _this._waitingRoomChatController;
            controller.sendFileMessage(messageUuid, file, userUuids || [], function (code, message, data) {
                if (code === 0) {
                    resolve(b(data));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    NERoomChatController.prototype.sendImageMessage = function (messageUuid, image, width, height, userUuids, chatroomType) {
        var _this = this;
        if (chatroomType === void 0) { chatroomType = p.COMMON; }
        return new Promise(function (resolve, reject) {
            var controller = chatroomType === p.COMMON
                ? _this._roomChatController
                : _this._waitingRoomChatController;
            controller.sendImageMessage(messageUuid, image, width, height, userUuids || [], function (code, message, data) {
                if (code === 0) {
                    resolve(b(data));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    NERoomChatController.prototype.cancelSendFileMessage = function (messageUuid, chatroomType) {
        var _this = this;
        if (chatroomType === void 0) { chatroomType = p.COMMON; }
        return new Promise(function (resolve, reject) {
            var controller = chatroomType === p.COMMON
                ? _this._roomChatController
                : _this._waitingRoomChatController;
            controller.cancelSendFileMessage(messageUuid, function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    NERoomChatController.prototype.downloadAttachment = function (messageUuid, fileUrl, filePath, chatroomType) {
        var _this = this;
        if (chatroomType === void 0) { chatroomType = p.COMMON; }
        return new Promise(function (resolve, reject) {
            var controller = chatroomType === p.COMMON
                ? _this._roomChatController
                : _this._waitingRoomChatController;
            controller.downloadAttachment(messageUuid, fileUrl, filePath, function (code, message) {
                if (code === 0) {
                    resolve(b(void 0));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    NERoomChatController.prototype.cancelDownloadAttachment = function (messageUuid, chatroomType) {
        var _this = this;
        if (chatroomType === void 0) { chatroomType = p.COMMON; }
        return new Promise(function (resolve, reject) {
            var controller = chatroomType === p.COMMON
                ? _this._roomChatController
                : _this._waitingRoomChatController;
            controller.cancelDownloadAttachment(messageUuid, function (code, message) {
                if (code === 0) {
                    resolve(b(void 0));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    NERoomChatController.prototype.fetchChatroomHistoryMessages = function (option, chatroomType) {
        var _this = this;
        if (chatroomType === void 0) { chatroomType = p.COMMON; }
        return new Promise(function (resolve, reject) {
            var controller = chatroomType === p.COMMON
                ? _this._roomChatController
                : _this._waitingRoomChatController;
            controller.fetchChatroomHistoryMessages(option, function (code, message, data) {
                if (code === 0) {
                    resolve(b(data.filter(Boolean)));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    NERoomChatController.prototype.banMemberChat = function (userUuid, duration, notifyExt) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._roomChatController.banMemberChat(userUuid, duration || 0, notifyExt || '', function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    NERoomChatController.prototype.unbanMemberChat = function (userUuid, notifyExt) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._roomChatController.unbanMemberChat(userUuid, notifyExt || '', function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    NERoomChatController.prototype.recallChatroomMessage = function (messageUUID, messageTime, chatroomType) {
        var _this = this;
        if (chatroomType === void 0) { chatroomType = p.COMMON; }
        return new Promise(function (resolve, reject) {
            var controller = chatroomType === p.COMMON
                ? _this._roomChatController
                : _this._waitingRoomChatController;
            controller.recallChatroomMessage(messageUUID, messageTime, function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    NERoomChatController.prototype.destroy = function () {
        return Promise.resolve(b(null));
    };
    return NERoomChatController;
}());

var NERoomWhiteboardController = /** @class */ (function () {
    function NERoomWhiteboardController(initOptions) {
        console.log('NERoomWhiteboardController constructor');
        this.isSupported = true;
        this.isJoinedWhiteboard = true;
        this._roomWhiteboardController = initOptions.roomWhiteboardController;
    }
    NERoomWhiteboardController.prototype.setWhiteboardNeedInfo = function () {
        throw new Error('Method not implemented.');
    };
    NERoomWhiteboardController.prototype.initWhiteboard = function () {
        return Promise.resolve(b(null));
    };
    NERoomWhiteboardController.prototype.getWhiteboardUrl = function () {
        return this._roomWhiteboardController.getWhiteboardUrl();
    };
    NERoomWhiteboardController.prototype.login = function () {
        return this._roomWhiteboardController.login();
    };
    NERoomWhiteboardController.prototype.logout = function () {
        return this._roomWhiteboardController.logout();
    };
    NERoomWhiteboardController.prototype.auth = function () {
        return this._roomWhiteboardController.auth();
    };
    NERoomWhiteboardController.prototype.setupWhiteboardCanvas = function (view) {
        function _viewCallBack(key) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (view[key]) {
                view[key].apply(view, __spreadArray([], __read(args), false));
            }
        }
        this._roomWhiteboardController.setupWhiteboardCanvas(_viewCallBack);
        return Promise.resolve(b(null));
    };
    NERoomWhiteboardController.prototype.resetWhiteboardCanvas = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, b(null)];
            });
        });
    };
    NERoomWhiteboardController.prototype.startWhiteboardShare = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._roomWhiteboardController.startWhiteboardShare(function (code, message) {
                console.log('startWhiteboardShare', code, message);
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    NERoomWhiteboardController.prototype.stopWhiteboardShare = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._roomWhiteboardController.stopWhiteboardShare(function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    NERoomWhiteboardController.prototype.getWhiteboardSharingUserUuid = function () {
        return this._roomWhiteboardController.getWhiteboardSharingUserUuid();
    };
    NERoomWhiteboardController.prototype.stopMemberWhiteboardShare = function (userUuid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._roomWhiteboardController.stopMemberWhiteboardShare(userUuid, function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    NERoomWhiteboardController.prototype.setEnableDraw = function (enable) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var res = _this._roomWhiteboardController.setEnableDraw(enable);
            if (res === 0) {
                resolve(b(null));
            }
            else {
                reject(J({ code: res, message: 'setEnableDraw failed' }));
            }
        });
    };
    NERoomWhiteboardController.prototype.setCanvasBackgroundColor = function () {
        throw new Error('Method not implemented.');
    };
    NERoomWhiteboardController.prototype.unlockCameraWithContent = function () {
        throw new Error('Method not implemented.');
    };
    NERoomWhiteboardController.prototype.lockCameraWithContent = function () {
        throw new Error('Method not implemented.');
    };
    NERoomWhiteboardController.prototype.destroy = function () {
        console.warn('销毁 白板 logout');
        this._roomWhiteboardController.logout();
        return Promise.resolve(b(null));
    };
    return NERoomWhiteboardController;
}());

var NEWaitingRoomController = /** @class */ (function () {
    function NEWaitingRoomController(inintOptions) {
        this._roomListenerMap = new Map();
        console.log('NEWaitingRoomController constructor');
        this._waitingRoomController = inintOptions.waitingRoomController;
    }
    Object.defineProperty(NEWaitingRoomController.prototype, "isSupported", {
        get: function () {
            var _a;
            return ((_a = this._waitingRoomController) === null || _a === void 0 ? void 0 : _a.isSupported()) || false;
        },
        enumerable: false,
        configurable: true
    });
    NEWaitingRoomController.prototype.getWaitingRoomInfo = function () {
        var _a;
        return ((_a = this._waitingRoomController) === null || _a === void 0 ? void 0 : _a.getWaitingRoomInfo()) || {};
    };
    NEWaitingRoomController.prototype.enableWaitingRoomOnEntry = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._waitingRoomController) === null || _a === void 0 ? void 0 : _a.enableWaitingRoomOnEntry(function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NEWaitingRoomController.prototype.disableWaitingRoomOnEntry = function (admitAll) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._waitingRoomController) === null || _a === void 0 ? void 0 : _a.disableWaitingRoomOnEntry(!!admitAll, function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NEWaitingRoomController.prototype.isWaitingRoomEnabledOnEntry = function () {
        var _a;
        return (_a = this._waitingRoomController) === null || _a === void 0 ? void 0 : _a.isWaitingRoomEnabledOnEntry();
    };
    NEWaitingRoomController.prototype.getMemberList = function (joinTime, size, asc) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._waitingRoomController) === null || _a === void 0 ? void 0 : _a.getMemberList(joinTime, size, asc ? 1 : 0, function (code, message, data) {
                if (code === 0) {
                    return resolve(b(data));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NEWaitingRoomController.prototype.admitMember = function (userUuid, autoAdmit) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._waitingRoomController) === null || _a === void 0 ? void 0 : _a.admitMember(String(userUuid), !!autoAdmit, function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NEWaitingRoomController.prototype.admitAllMembers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._waitingRoomController) === null || _a === void 0 ? void 0 : _a.admitAllMembers(function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NEWaitingRoomController.prototype.expelMember = function (userUuid, disallowRejoin) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._waitingRoomController) === null || _a === void 0 ? void 0 : _a.expelMember(String(userUuid), !!disallowRejoin, function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NEWaitingRoomController.prototype.expelAllMembers = function (disallowRejoin) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._waitingRoomController) === null || _a === void 0 ? void 0 : _a.expelAllMembers(!!disallowRejoin, function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NEWaitingRoomController.prototype.putInWaitingRoom = function (userUuid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._waitingRoomController) === null || _a === void 0 ? void 0 : _a.putInWaitingRoom(String(userUuid), function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NEWaitingRoomController.prototype.addListener = function (listener) {
        function _roomListenerCallback(key) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (listener[key]) {
                listener[key].apply(listener, __spreadArray([], __read(args), false));
            }
        }
        var index = this._waitingRoomController.addListener(_roomListenerCallback);
        this._roomListenerMap.set(listener, index);
    };
    NEWaitingRoomController.prototype.removeListener = function (listener) {
        var index = this._roomListenerMap.get(listener);
        if (index !== undefined) {
            this._waitingRoomController.removeListener(index);
        }
    };
    NEWaitingRoomController.prototype.changeMemberName = function (userUuid, name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._waitingRoomController) === null || _a === void 0 ? void 0 : _a.changeMemberName(String(userUuid), String(name), function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NEWaitingRoomController.prototype.getWaitingRoomManagerList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._waitingRoomController) === null || _a === void 0 ? void 0 : _a.getWaitingRoomManagerList(function (code, message, data) {
                if (code === 0) {
                    return resolve(b(data));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NEWaitingRoomController.prototype.updateWaitingInfo = function () {
        throw new Error('Method not implemented.');
    };
    /**
     * @ignore 不对外暴露
     */
    NEWaitingRoomController.prototype.on = function () {
        throw new Error('Method not implemented.');
    };
    /**
     * @ignore 不对外暴露
     */
    NEWaitingRoomController.prototype.off = function () {
        throw new Error('Method not implemented.');
    };
    return NEWaitingRoomController;
}());

var NERoomSipController = /** @class */ (function () {
    function NERoomSipController(initOptions) {
        console.log('NERoomSipController constructor');
        this._sipController = initOptions.sipController;
    }
    Object.defineProperty(NERoomSipController.prototype, "isSupported", {
        get: function () {
            var _a, _b;
            return ((_b = (_a = this._sipController) === null || _a === void 0 ? void 0 : _a.isSupported) === null || _b === void 0 ? void 0 : _b.call(_a)) || false;
        },
        enumerable: false,
        configurable: true
    });
    // 根据手机号码进行呼叫
    NERoomSipController.prototype.callByNumber = function (number, countryCode, name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._sipController.callByNumber(number, countryCode, name, function (code, message, data) {
                if (code === 0) {
                    resolve(b(data));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    /**
     * 根据用户uuid进行呼叫(可多个同时呼叫)
     * @param userUuids
     */
    NERoomSipController.prototype.callByUserUuids = function (userUuids) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._sipController.callByUserUuids(userUuids, function (code, message, data) {
                if (code === 0) {
                    resolve(b(data));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    /**
     * 根据用户id进行呼叫
     * @param userUuid
     */
    NERoomSipController.prototype.callByUserUuid = function (userUuid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._sipController.callByUserUuid(userUuid, function (code, message, data) {
                            if (code === 0) {
                                resolve(b(data));
                            }
                            else {
                                reject(J(null, message, code));
                            }
                        });
                    })];
            });
        });
    };
    /**
     * 移除呼叫
     * @param userUuid
     */
    NERoomSipController.prototype.removeCall = function (userUuid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._sipController.removeCall(userUuid, function (code, message, data) {
                            if (code === 0) {
                                resolve(b(data));
                            }
                            else {
                                reject(J(null, message, code));
                            }
                        });
                    })];
            });
        });
    };
    /**
     * 取消正在进行的呼叫，无论是正在响铃还是等待响铃都可以使用
     * @param userUuid
     */
    NERoomSipController.prototype.cancelCall = function (userUuid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._sipController.cancelCall(userUuid, function (code, message, data) {
                            if (code === 0) {
                                resolve(b(data));
                            }
                            else {
                                reject(J(null, message, code));
                            }
                        });
                    })];
            });
        });
    };
    /**
     * 挂断通话，挂断后成员将被踢出会议并移除列表
     * @param userUuid
     */
    NERoomSipController.prototype.hangUpCall = function (userUuid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._sipController.hangUpCall(userUuid, function (code, message, data) {
                            if (code === 0) {
                                resolve(b(data));
                            }
                            else {
                                reject(J(null, message, code));
                            }
                        });
                    })];
            });
        });
    };
    /**
     * 呼叫指定房间设备
     * @param device 设备
     */
    NERoomSipController.prototype.callOutRoomSystem = function (device) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._sipController.callOutRoomSystem(device, function (code, message, data) {
                if (code === 0) {
                    resolve(b(data));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    return NERoomSipController;
}());

var NERoomAppInviteController = /** @class */ (function () {
    function NERoomAppInviteController(initOptions) {
        console.log('NERoomAppInviteController constructor');
        this._appInviteController = initOptions.appInviteController;
    }
    Object.defineProperty(NERoomAppInviteController.prototype, "isSupported", {
        get: function () {
            var _a, _b;
            return ((_b = (_a = this._appInviteController) === null || _a === void 0 ? void 0 : _a.isSupported) === null || _b === void 0 ? void 0 : _b.call(_a)) || false;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 根据用户uuid进行呼叫(可多个同时呼叫)
     * @param userUuids
     */
    NERoomAppInviteController.prototype.callByUserUuids = function (userUuids) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._appInviteController.callByUserUuids(userUuids, function (code, message, data) {
                if (code === 0) {
                    resolve(b(data));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    /**
     * 根据用户id进行呼叫
     * @param userUuid
     */
    NERoomAppInviteController.prototype.callByUserUuid = function (userUuid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._appInviteController.callByUserUuid(userUuid, function (code, message, data) {
                            if (code === 0) {
                                resolve(b(data));
                            }
                            else {
                                reject(J(null, message, code));
                            }
                        });
                    })];
            });
        });
    };
    /**
     * 移除呼叫
     * @param userUuid
     */
    NERoomAppInviteController.prototype.removeCall = function (userUuid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._appInviteController.removeCall(userUuid, function (code, message, data) {
                            if (code === 0) {
                                resolve(b(data));
                            }
                            else {
                                reject(J(null, message, code));
                            }
                        });
                    })];
            });
        });
    };
    /**
     * 取消正在进行的呼叫，无论是正在响铃还是等待响铃都可以使用
     * @param userUuid
     */
    NERoomAppInviteController.prototype.cancelCall = function (userUuid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._appInviteController.cancelCall(userUuid, function (code, message, data) {
                            if (code === 0) {
                                resolve(b(data));
                            }
                            else {
                                reject(J(null, message, code));
                            }
                        });
                    })];
            });
        });
    };
    return NERoomAppInviteController;
}());

var NERoomAnnotationController = /** @class */ (function () {
    function NERoomAnnotationController(initOptions) {
        console.log('NERoomAnnotationController constructor');
        this.isSupported = true;
        this._roomAnnotationController = initOptions.roomAnnotationController;
    }
    NERoomAnnotationController.prototype.getWhiteboardUrl = function () {
        return this._roomAnnotationController.getAnnotationUrl();
    };
    NERoomAnnotationController.prototype.isAnnotationEnabled = function () {
        return this._roomAnnotationController.getIsAnnotationEnabled();
    };
    NERoomAnnotationController.prototype.login = function () {
        return this._roomAnnotationController.login();
    };
    NERoomAnnotationController.prototype.logout = function () {
        return this._roomAnnotationController.logout();
    };
    NERoomAnnotationController.prototype.auth = function () {
        return this._roomAnnotationController.auth();
    };
    NERoomAnnotationController.prototype.setupCanvas = function (view) {
        function _viewCallBack(key) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (key === 'onLogin' || key === 'onLogout' || key === 'onAuth') {
                view[key].apply(view, __spreadArray([], __read(args), false));
            }
        }
        this._annotationView = view;
        this._roomAnnotationController.setupAnnotationCanvas(_viewCallBack);
    };
    NERoomAnnotationController.prototype.resetCanvas = function (view) {
        function _viewCallBack(key) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (key === 'onLogin' || key === 'onLogout' || key === 'onAuth') {
                view === null || view === void 0 ? void 0 : view[key].apply(view, __spreadArray([], __read(args), false));
            }
        }
        this._annotationView = view;
        this._roomAnnotationController.resetAnnotationCanvas(_viewCallBack);
    };
    NERoomAnnotationController.prototype.startAnnotation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._roomAnnotationController.startAnnotationShare(function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    NERoomAnnotationController.prototype.stopAnnotation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._roomAnnotationController.stopAnnotationShare(function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    NERoomAnnotationController.prototype.setEnableDraw = function (enable) {
        var _a, _b, _c, _d;
        var opt = {
            action: 'jsDirectCall',
            param: {
                action: 'enableDraw',
                params: [enable],
                target: 'drawPlugin',
            },
        };
        (_a = this._annotationView) === null || _a === void 0 ? void 0 : _a.onDrawEnableChanged("WebJSBridge(".concat(JSON.stringify(opt), ");"));
        if (enable) {
            (_b = this._annotationView) === null || _b === void 0 ? void 0 : _b.onToolConfigChanged("WebJSBridge({\"action\":\"jsDirectCall\",\"param\":{\"action\":\"show\",\"params\":[],\"target\":\"toolCollection\"}});");
            var tool = {
                action: 'jsDirectCall',
                param: {
                    action: 'setVisibility',
                    target: 'toolCollection',
                    params: [
                        {
                            bottomRight: {
                                visible: false,
                            },
                            bottomLeft: {
                                visible: false,
                            },
                            topRight: {
                                visible: false,
                            },
                            left: {
                                visible: true,
                                exclude: [
                                    'pan',
                                    'image',
                                    'exportImage',
                                    'uploadLog',
                                    'uploadCenter',
                                ],
                            },
                        },
                    ],
                },
            };
            (_c = this._annotationView) === null || _c === void 0 ? void 0 : _c.onToolConfigChanged("WebJSBridge(".concat(JSON.stringify(tool), ");"));
        }
        else {
            (_d = this._annotationView) === null || _d === void 0 ? void 0 : _d.onToolConfigChanged("WebJSBridge({\"action\":\"jsDirectCall\",\"param\":{\"action\":\"hide\",\"params\":[],\"target\":\"toolCollection\"}});");
        }
    };
    NERoomAnnotationController.prototype.destroy = function () {
        return Promise.resolve(b(null));
    };
    NERoomAnnotationController.prototype.setAnnotationState = function (state) {
        throw new Error("Method not implemented. setAnnotationState : ".concat(state));
    };
    return NERoomAnnotationController;
}());

var NERoomContext = /** @class */ (function () {
    // private _eventEmitter: EventEmitter
    function NERoomContext(initOptions) {
        this._roomListenerMap = new Map();
        this._rtcStatsListenerMap = new Map();
        console.log('NERoomContext constructor, roomUuid: ', initOptions.roomUuid);
        this._roomContext = initOptions.roomService.getRoomContext(initOptions.roomUuid);
        this._rendererType = initOptions.rendererType;
    }
    NERoomContext.prototype.initialize = function () {
        return Promise.resolve();
    };
    Object.defineProperty(NERoomContext.prototype, "isInitialize", {
        get: function () {
            return !!this._roomContext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "localMember", {
        get: function () {
            var _a;
            var member = (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getLocalMember();
            if (member.properties) {
                Object.keys(member.properties).forEach(function (key) {
                    member.properties[key] = {
                        value: member.properties[key],
                    };
                });
            }
            return member;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "remoteMembers", {
        get: function () {
            var _a;
            var members = (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getRemoteMembers();
            members.forEach(function (member) {
                if (member.properties) {
                    Object.keys(member.properties).forEach(function (key) {
                        member.properties[key] = {
                            value: member.properties[key],
                        };
                    });
                }
            });
            return members;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "inSIPInvitingMembers", {
        get: function () {
            var _a;
            var members = (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getInSIPInvitingMembers();
            return members;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "isInSIPInviting", {
        get: function () {
            var _a;
            // TODO 未实现
            return (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.isInSIPInviting();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "inAppInvitingMembers", {
        get: function () {
            var _a;
            var members = (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getInAppInvitingMembers();
            return members;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "roomProperties", {
        get: function () {
            var _a;
            var obj = (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getRoomProperties();
            Object.keys(obj).forEach(function (key) {
                obj[key] = {
                    value: obj[key],
                };
            });
            return obj;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "roomName", {
        get: function () {
            var _a;
            return (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getRoomName();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "roomUuid", {
        get: function () {
            var _a;
            return (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getRoomUuid();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "session", {
        get: function () {
            var _a;
            return (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getSession();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "roomArchiveId", {
        get: function () {
            var _a;
            return (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getRoomArchiveId();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "password", {
        get: function () {
            var _a;
            return (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getPassword();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "maxMembers", {
        get: function () {
            var _a;
            return (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getMaxMembers();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "remainingSeconds", {
        get: function () {
            var _a;
            return (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getRemainingSeconds();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "rtcStartTime", {
        get: function () {
            var _a;
            return (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getRtcStartTime();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "sipCid", {
        get: function () {
            var _a;
            return (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getSipCid();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "isRoomLocked", {
        get: function () {
            var _a;
            return (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.isRoomLocked();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "isCloudRecording", {
        get: function () {
            var _a;
            return (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.isCloudRecording();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "chatController", {
        get: function () {
            var _a, _b;
            if (!this._roomChatController) {
                this._roomChatController = new NERoomChatController({
                    roomChatController: (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getChatController(),
                    waitingRoomChatController: (_b = this._roomContext) === null || _b === void 0 ? void 0 : _b.getWaitingRoomChatController(),
                });
            }
            return this._roomChatController;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "rtcController", {
        get: function () {
            var _a;
            if (!this._rtcController) {
                this._rtcController = new NERoomRtcController({
                    rtcController: (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getRtcController(),
                    myUuid: this.localMember.uuid,
                    rendererType: this._rendererType,
                });
            }
            return this._rtcController;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "SIPController", {
        get: function () {
            var _a;
            if (!this._sipController) {
                this._sipController = new NERoomSipController({
                    sipController: (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getSIPController(),
                });
            }
            return this._sipController;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "appInviteController", {
        get: function () {
            var _a;
            if (!this._appInviteController) {
                this._appInviteController = new NERoomAppInviteController({
                    appInviteController: (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getAppInviteController(),
                });
            }
            return this._appInviteController;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "liveController", {
        get: function () {
            var _a;
            if (!this._liveController) {
                this._liveController = new NERoomLiveController({
                    liveController: (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getLiveController(),
                });
            }
            return this._liveController;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "whiteboardController", {
        get: function () {
            var _a;
            if (!this._roomWhiteboardController) {
                this._roomWhiteboardController = new NERoomWhiteboardController({
                    roomWhiteboardController: (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getWhiteboardController(),
                });
            }
            return this._roomWhiteboardController;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "annotationController", {
        get: function () {
            var _a;
            if (!this._roomAnnotationController) {
                this._roomAnnotationController = new NERoomAnnotationController({
                    roomAnnotationController: (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getAnnotationController(),
                });
            }
            return this._roomAnnotationController;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "waitingRoomController", {
        get: function () {
            var _a;
            if (!this._waitingRoomController) {
                this._waitingRoomController = new NEWaitingRoomController({
                    waitingRoomController: (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.getWaitingRoomController(),
                });
            }
            return this._waitingRoomController;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NERoomContext.prototype, "isRoomBlacklistEnabled", {
        get: function () {
            var _a;
            return (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.isRoomBlacklistEnabled();
        },
        enumerable: false,
        configurable: true
    });
    NERoomContext.prototype.isInWaitingRoom = function () {
        var _a;
        return (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.isInWaitingRoom();
    };
    NERoomContext.prototype.lockRoom = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._roomContext) === null || _a === void 0 ? void 0 : _a.lockRoom(function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomContext.prototype.unlockRoom = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._roomContext) === null || _a === void 0 ? void 0 : _a.unlockRoom(function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomContext.prototype.addRoomListener = function (listener) {
        var _this = this;
        var _a;
        var _onMemberRoleChanged = listener.onMemberRoleChanged;
        var _onMemberPropertiesChanged = listener.onMemberPropertiesChanged;
        var _onRoomEnded = listener.onRoomEnded;
        if (_onMemberRoleChanged) {
            // @ts-expect-error 成员角色变更
            listener.onMemberRoleChanged = function (userUuid, beforeRole, afterRole) {
                var member = _this.getMember(userUuid);
                _onMemberRoleChanged(member || userUuid, beforeRole, afterRole);
            };
        }
        if (_onMemberPropertiesChanged) {
            // @ts-expect-error 成员属性变更
            listener.onMemberPropertiesChanged = function (userUuid, properties) {
                var member = _this.getMember(userUuid);
                Object.keys(properties).forEach(function (key) {
                    properties[key] = {
                        value: properties[key],
                    };
                });
                _onMemberPropertiesChanged(member || userUuid, properties);
            };
        }
        if (_onRoomEnded) {
            // @ts-expect-error 房间结束
            listener.onRoomEnded = function (reason, extra) {
                _this.destroy();
                var reasonMap = {
                    0: 'LEAVE_BY_SELF',
                    1: 'SYNC_DATA_ERROR',
                    2: 'kICK_BY_SELF',
                    3: 'CLOSE_BY_MEMBER',
                    4: 'END_OF_LIFE',
                    5: 'ALL_MEMBERS_OUT',
                    6: 'CLOSE_BY_BACKEND',
                    7: 'KICK_OUT',
                    8: 'LOGIN_STATE_ERROR',
                    9: 'RTC_CHANNEL_ERROR',
                    10: 'UNKNOWN',
                };
                _onRoomEnded(reasonMap[reason], extra);
            };
        }
        function _roomListenerCallback(key) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (listener[key]) {
                listener[key].apply(listener, __spreadArray([], __read(args), false));
            }
        }
        var index = (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.addRoomListener(_roomListenerCallback);
        this._roomListenerMap.set(listener, index);
    };
    NERoomContext.prototype.removeRoomListener = function (listener) {
        var _a;
        var index = this._roomListenerMap.get(listener);
        if (index !== undefined) {
            (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.removeRoomListener(index);
        }
    };
    NERoomContext.prototype.changeMemberRole = function (userUuid, role) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._roomContext) === null || _a === void 0 ? void 0 : _a.changeMemberRole(userUuid, role, function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomContext.prototype.changeMembersRole = function (userRoleMap) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._roomContext) === null || _a === void 0 ? void 0 : _a.changeMembersRole(userRoleMap, function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomContext.prototype.endRoom = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._roomContext) === null || _a === void 0 ? void 0 : _a.endRoom(function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomContext.prototype.kickMemberOut = function (userUuid, toBlacklist) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._roomContext) === null || _a === void 0 ? void 0 : _a.kickMemberOut(userUuid, !!toBlacklist, function (code, message) {
                console.log('kickMemberOut', code, message);
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomContext.prototype.changeMyName = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._roomContext) === null || _a === void 0 ? void 0 : _a.changeMyName(name, function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomContext.prototype.changeMemberName = function (userUuid, name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._roomContext) === null || _a === void 0 ? void 0 : _a.changeMemberName(userUuid, name, function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomContext.prototype.handOverMyRole = function (name, resign) {
        var _this = this;
        if (resign === void 0) { resign = false; }
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._roomContext) === null || _a === void 0 ? void 0 : _a.handOverMyRole(name, resign, function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomContext.prototype.leaveRoom = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            console.log('leaveRoom>>>>>>>>2', _this._roomContext);
            (_a = _this._roomContext) === null || _a === void 0 ? void 0 : _a.leaveRoom(function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomContext.prototype.updateRoomProperty = function (key, value, associatedUserUuid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._roomContext) === null || _a === void 0 ? void 0 : _a.updateRoomProperty(key, value, associatedUserUuid || '', function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomContext.prototype.deleteRoomProperty = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._roomContext) === null || _a === void 0 ? void 0 : _a.deleteRoomProperty(key, function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomContext.prototype.updateMemberProperty = function (userUuid, key, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a, _b;
            var _value = value;
            if (Object.prototype.toString.call(value) === '[object String]') {
                _value = (_a = JSON.parse(_value)) === null || _a === void 0 ? void 0 : _a.value;
            }
            (_b = _this._roomContext) === null || _b === void 0 ? void 0 : _b.updateMemberProperty(userUuid, key, _value, function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomContext.prototype.deleteMemberProperty = function (userUuid, key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._roomContext) === null || _a === void 0 ? void 0 : _a.deleteMemberProperty(userUuid, key, function (code, message) {
                if (code === 0) {
                    resolve(b(null));
                }
                else {
                    reject(J(null, message, code));
                }
            });
        });
    };
    NERoomContext.prototype.getMember = function (uuid) {
        var _a;
        return this.localMember.uuid === uuid
            ? this.localMember
            : (_a = this.remoteMembers.find(function (member) { return member.uuid === uuid; })) !== null && _a !== void 0 ? _a : null;
    };
    NERoomContext.prototype.addRtcStatsListener = function (listener) {
        var _a;
        function _rtcStatsListenerCallback(key) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (listener[key]) {
                listener[key].apply(listener, __spreadArray([], __read(args), false));
            }
        }
        var index = (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.addRtcStatsListener(_rtcStatsListenerCallback);
        this._rtcStatsListenerMap.set(listener, index);
    };
    NERoomContext.prototype.removeRtcStatsListener = function (listener) {
        var _a;
        var index = this._rtcStatsListenerMap.get(listener);
        if (index !== undefined) {
            (_a = this._roomContext) === null || _a === void 0 ? void 0 : _a.removeRtcStatsListener(index);
        }
    };
    NERoomContext.prototype.startCloudRecord = function (config) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._roomContext) === null || _a === void 0 ? void 0 : _a.startCloudRecord(__assign({ rtcRecordType: 100, modeList: [
                    {
                        mode: 2,
                    },
                ] }, config), function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomContext.prototype.stopCloudRecord = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._roomContext) === null || _a === void 0 ? void 0 : _a.stopCloudRecord(function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomContext.prototype.rejoinAfterAdmittedToRoom = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._roomContext) === null || _a === void 0 ? void 0 : _a.rejoinAfterAdmittedToRoom(function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NERoomContext.prototype.enableRoomBlacklist = function (enable) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._roomContext) === null || _a === void 0 ? void 0 : _a.enableRoomBlacklist(!!enable, function (code, message) {
                if (code === 0) {
                    return resolve(b(null));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    /**
     * @ignore 不对外暴露
     */
    NERoomContext.prototype.on = function () {
        throw new Error('Method not implemented.');
    };
    /**
     * @ignore 不对外暴露
     */
    NERoomContext.prototype.off = function () {
        throw new Error('Method not implemented.');
    };
    NERoomContext.prototype.destroy = function () {
        this._liveController = undefined;
        this._rtcController = undefined;
        this._sipController = undefined;
        this._appInviteController = undefined;
        this._roomWhiteboardController = undefined;
        this._roomAnnotationController = undefined;
        this._roomChatController = undefined;
        this._waitingRoomController = undefined;
        this._roomListenerMap = new Map();
        this._rtcStatsListenerMap = new Map();
        this._roomContext = undefined;
        var rendererManager = NERendererManager.getInstance();
        rendererManager.rtcController = undefined;
        rendererManager.resetRendering();
        return Promise.resolve(b(null));
    };
    return NERoomContext;
}());

var NEPreviewController = /** @class */ (function () {
    function NEPreviewController(initOptions) {
        this._renderMap = new Map();
        this._rendererType = initOptions.rendererType;
        console.log('NEPreviewController constructor');
        this._preRtcController = initOptions.preRtcController;
        this._rendererManager = NERendererManager.getInstance();
    }
    NEPreviewController.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('NEPreviewController init');
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(NEPreviewController.prototype, "isSupported", {
        get: function () {
            var _a;
            return ((_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.isSupported()) || false;
        },
        enumerable: false,
        configurable: true
    });
    // addDeviceChangeListener: (listener: NEPreviewListener) => void
    /**
     * 设置本地视图
     * @param videoView 视频画布
     */
    NEPreviewController.prototype.setupLocalVideoCanvas = function (videoView) {
        var _a;
        var isBuffer = videoView instanceof Buffer;
        if (videoView &&
            typeof videoView !== 'string' &&
            !isBuffer &&
            typeof document !== 'undefined') {
            var context = {
                view: videoView,
                userUuid: '',
                sourceType: 'video',
            };
            var render = this._rendererManager.createRenderer(context);
            this._renderMap.set(videoView, render);
        }
        var viewBuffer = Buffer.from([]);
        if (isBuffer) {
            viewBuffer = videoView;
        }
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.setupLocalVideoCanvas(viewBuffer, false);
    };
    NEPreviewController.prototype.removeLocalVideoCanvas = function (videoView) {
        var render;
        if (videoView) {
            render = this._renderMap.get(videoView);
            this._renderMap.delete(videoView);
            // videoView 不为空，则不移除
            if (!render) {
                return;
            }
        }
        this._rendererManager.removeRenderer({
            userUuid: '',
            sourceType: 'video',
        }, render);
    };
    /**
     * 开始测试麦克风
     */
    NEPreviewController.prototype.startRecordDeviceTest = function () {
        var _this = this;
        // todo 需要处理回调
        return new Promise(function (resolve, reject) {
            var _a;
            var code = (_a = _this._preRtcController) === null || _a === void 0 ? void 0 : _a.startRecordDeviceTest(500);
            return code === 0
                ? resolve(b(null))
                : reject(J(null));
        });
    };
    /**
     * 停止测试麦克风
     */
    NEPreviewController.prototype.stopRecordDeviceTest = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            var code = (_a = _this._preRtcController) === null || _a === void 0 ? void 0 : _a.stopRecordDeviceTest();
            return code === 0
                ? resolve(b(null))
                : reject(J(null));
        });
    };
    /**
     * 开始测试扬声器设备
     * @param audioResource 音频源
     */
    NEPreviewController.prototype.startPlayoutDeviceTest = function (audioResource) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            var code = (_a = _this._preRtcController) === null || _a === void 0 ? void 0 : _a.startPlayoutDeviceTest(audioResource);
            return code === 0
                ? resolve(b(null))
                : reject(J(null));
        });
    };
    /**
     * 停止测试扬声器设备
     */
    NEPreviewController.prototype.stopPlayoutDeviceTest = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            var code = (_a = _this._preRtcController) === null || _a === void 0 ? void 0 : _a.stopPlayoutDeviceTest();
            return code === 0
                ? resolve(b(null))
                : reject(J(null));
        });
    };
    /**
     * 开启预览
     */
    NEPreviewController.prototype.startPreview = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            var code = (_a = _this._preRtcController) === null || _a === void 0 ? void 0 : _a.startVideoPreview();
            return code === 0
                ? resolve(b(null))
                : reject(J(null));
        });
    };
    /**
     * 关闭预览
     */
    NEPreviewController.prototype.stopPreview = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            var code = (_a = _this._preRtcController) === null || _a === void 0 ? void 0 : _a.stopVideoPreview();
            return code === 0
                ? resolve(b(null))
                : reject(J(null));
        });
    };
    NEPreviewController.prototype.getScreenCaptureSourceList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._preRtcController) === null || _a === void 0 ? void 0 : _a.getScreenCaptureSourceList(function (code, message, data) {
                if (code === 0) {
                    return resolve(b(data));
                }
                else {
                    return reject(J(null, message, code));
                }
            });
        });
    };
    NEPreviewController.prototype.checkSystemRequirements = function () {
        return true;
    };
    // getDeviceListData: () => Promise<DeviceCompilations>
    /**
     * 切换设备
     * @param DeviceType 切换设备类型 'camera' | 'microphone' | 'speaker'
     * @param string
     */
    NEPreviewController.prototype.switchDevice = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var code;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                code = -1;
                switch (params.type) {
                    case 'camera':
                        code = (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.selectCameraDevice(params.deviceId);
                        break;
                    case 'microphone':
                        code = (_b = this._preRtcController) === null || _b === void 0 ? void 0 : _b.selectRecordDevice(params.deviceId);
                        break;
                    case 'speaker':
                        code = (_c = this._preRtcController) === null || _c === void 0 ? void 0 : _c.selectPlayoutDevice(params.deviceId);
                        break;
                }
                if (code === 0) {
                    return [2 /*return*/, b({
                            type: params.type,
                            deviceId: params.deviceId,
                        })];
                }
                else {
                    return [2 /*return*/, v(null, undefined, code)];
                }
            });
        });
    };
    NEPreviewController.prototype.getSelectedRecordDevice = function () {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.getSelectedRecordDevice();
    };
    NEPreviewController.prototype.getSelectedCameraDevice = function () {
        var _a;
        // todo
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.getSelectedCameraDevice();
    };
    NEPreviewController.prototype.getSelectedPlayoutDevice = function () {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.getSelectedPlayoutDevice();
    };
    NEPreviewController.prototype.enumRecordDevices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deviceList;
            var _a;
            return __generator(this, function (_b) {
                deviceList = (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.enumRecordDevices();
                return [2 /*return*/, b(deviceList)];
            });
        });
    };
    NEPreviewController.prototype.enumCameraDevices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deviceList;
            var _a;
            return __generator(this, function (_b) {
                deviceList = (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.enumCameraDevices();
                return [2 /*return*/, b(deviceList)];
            });
        });
    };
    NEPreviewController.prototype.enumPlayoutDevices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deviceList;
            var _a;
            return __generator(this, function (_b) {
                deviceList = (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.enumPlayoutDevices();
                return [2 /*return*/, b(deviceList)];
            });
        });
    };
    NEPreviewController.prototype.setPlayoutDeviceVolume = function (volume) {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.setPlayoutDeviceVolume(Number(volume * 2.55));
    };
    NEPreviewController.prototype.setRecordDeviceVolume = function (volume) {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.setRecordDeviceVolume(Number(volume * 2.55));
    };
    NEPreviewController.prototype.adjustPlaybackSignalVolume = function (volume) {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.adjustPlaybackSignalVolume(Number(volume * 4));
    };
    NEPreviewController.prototype.adjustRecordingSignalVolume = function (volume) {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.adjustRecordingSignalVolume(Number(volume * 4));
    };
    NEPreviewController.prototype.selectedRecordDevice = function (deviceId) {
        return this.switchDevice({ type: 'microphone', deviceId: deviceId });
    };
    NEPreviewController.prototype.selectedCameraDevice = function (deviceId) {
        return this.switchDevice({ type: 'camera', deviceId: deviceId });
    };
    NEPreviewController.prototype.selectedPlayoutDevice = function (deviceId) {
        return this.switchDevice({ type: 'speaker', deviceId: deviceId });
    };
    NEPreviewController.prototype.startBeauty = function () {
        var _a;
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        var path = require('path');
        var beautyPath = process.platform === 'win32'
            ? path.join(__dirname, '../assets/')
            : path.join(__dirname, '../assets/beauty/');
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.startBeauty(beautyPath.replace('app.asar', 'app.asar.unpacked'));
    };
    NEPreviewController.prototype.stopBeauty = function () {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.stopBeauty();
    };
    NEPreviewController.prototype.enableBeauty = function (isOpenBeauty) {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.enableBeauty(isOpenBeauty);
    };
    NEPreviewController.prototype.setBeautyEffect = function (beautyType, level) {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.setBeautyEffect(beautyType, level);
    };
    NEPreviewController.prototype.enableVirtualBackground = function (enable, path, force, type) {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.enableVirtualBackground(enable, path, force, type);
    };
    NEPreviewController.prototype.setParameters = function (param) {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.setParameters(param);
    };
    NEPreviewController.prototype.enableAudioVolumeAutoAdjust = function (enable) {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.enableAudioVolumeAutoAdjust(enable);
    };
    NEPreviewController.prototype.enableAudioVolumeIndication = function (enable, interval) {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.enableAudioVolumeIndication(enable, interval);
    };
    NEPreviewController.prototype.enableAudioAINS = function (enable) {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.enableAudioAINS(enable);
    };
    NEPreviewController.prototype.enableAudioAINSMode = function (mode) {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.enableAudioAINSMode(mode);
    };
    NEPreviewController.prototype.getPlayoutDeviceVolume = function () {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.getPlayoutDeviceVolume();
    };
    NEPreviewController.prototype.getRecordDeviceVolume = function () {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.getRecordDeviceVolume();
    };
    NEPreviewController.prototype.setPlayoutDeviceMute = function (mute) {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.setPlayoutDeviceMute(mute);
    };
    NEPreviewController.prototype.setRecordDeviceMute = function (mute) {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.setRecordDeviceMute(mute);
    };
    NEPreviewController.prototype.installAudioCaptureDriver = function () {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.installAudioCaptureDriver();
    };
    NEPreviewController.prototype.startAudioDump = function (type) {
        var _a;
        if (!type) {
            type = i.kNEAudioDumpTypePCM;
        }
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.startAudioDump(type);
    };
    NEPreviewController.prototype.stopAudioDump = function () {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.stopAudioDump();
    };
    NEPreviewController.prototype.getVirtualBackgroundSupportedType = function () {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.getVirtualBackgroundSupportedType();
    };
    NEPreviewController.prototype.startLocalRecord = function (options) {
        var _a;
        console.log('[PreviewRoomRtcController] startLocalRecord() options: ', options);
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.startLocalRecord(options);
    };
    NEPreviewController.prototype.stopLocalRecord = function () {
        var _a;
        console.log('[PreviewRoomRtcController] stopLocalRecord()');
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.stopLocalRecord();
    };
    NEPreviewController.prototype.updateLocalRecordLayouts = function (options) {
        var _a;
        console.log('[PreviewRoomRtcController] updateLocalRecordLayouts() options: ', options);
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.updateLocalRecordLayouts(options);
    };
    NEPreviewController.prototype.pushLocalRecorderVideoFrame = function (uid, streamLayer, frame) {
        var _a;
        console.log('[PreviewRoomRtcController] pushLocalRecorderVideoFrame() uid: ', uid, 'streamLayer: ', streamLayer);
        var int = (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.pushLocalRecorderVideoFrame(uid, streamLayer, frame);
        frame.buffer = null;
        return int;
    };
    NEPreviewController.prototype.stopLocalRecorderRemux = function () {
        var _a;
        console.log('[PreviewRoomRtcController] stopLocalRecorderRemux()');
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.stopLocalRecorderRemux();
    };
    NEPreviewController.prototype.setAudioEffectPreset = function (type) {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.setAudioEffectPreset(type);
    };
    NEPreviewController.prototype.setVoiceBeautifierPreset = function (type) {
        var _a;
        return (_a = this._preRtcController) === null || _a === void 0 ? void 0 : _a.setVoiceBeautifierPreset(type);
    };
    /**
     * @ignore 不对外暴露
     */
    NEPreviewController.prototype.destroy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('destroy');
                return [2 /*return*/];
            });
        });
    };
    return NEPreviewController;
}());

var NEPreviewRoomContextService = /** @class */ (function () {
    function NEPreviewRoomContextService(initOptions) {
        this._roomListenerMap = new Map();
        console.log('NEPreviewRoomContextService constructor');
        this._previewRoomContext = initOptions.previewRoomContext;
        this.previewController = new NEPreviewController({
            preRtcController: this._previewRoomContext.getPreviewRoomRtcController(),
            rendererType: initOptions.rendererType,
        });
    }
    NEPreviewRoomContextService.prototype.addPreviewRoomListener = function (listener) {
        function _previewRoomListenerCallback(key) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (listener[key]) {
                listener[key].apply(listener, __spreadArray([], __read(args), false));
            }
        }
        var index = this._previewRoomContext.addPreviewRoomListener(_previewRoomListenerCallback);
        this._roomListenerMap.set(listener, index);
    };
    NEPreviewRoomContextService.prototype.removePreviewRoomListener = function (listener) {
        var index = this._roomListenerMap.get(listener);
        if (index !== undefined) {
            try {
                this._previewRoomContext.removePreviewRoomListener(index);
            }
            catch (e) {
                console.log('removePreviewRoomListener', index);
            }
        }
    };
    return NEPreviewRoomContextService;
}());

var NERoomService = /** @class */ (function () {
    function NERoomService(initOptions) {
        this._roomContext = null;
        this._preRoomContext = null;
        console.log('NERoomService constructor');
        this._roomService = initOptions.roomKit.getRoomService();
        this._rendererType = initOptions.rendererType;
    }
    NERoomService.prototype.createRoom = function (params, options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._roomService) === null || _a === void 0 ? void 0 : _a.createRoom(params, options, function (code, message) {
                if (code === 0) {
                    resolve({ code: code, message: null, data: null });
                }
                else {
                    reject({ code: code, message: message, data: null });
                }
            });
        });
    };
    NERoomService.prototype.getRoomContext = function (roomUuid) {
        // if (!this._roomContext) {
        this._roomContext = new NERoomContext({
            roomService: this._roomService,
            roomUuid: roomUuid,
            rendererType: this._rendererType,
        });
        // }
        return this._roomContext;
    };
    NERoomService.prototype.joinRoom = function (params, options) {
        return this._joinRoomHandler(params, options, 'joinRoom');
    };
    NERoomService.prototype.joinRoomByInvite = function (params, options) {
        return this._joinRoomHandler(params, options, 'joinRoomByInvite');
    };
    NERoomService.prototype.previewRoom = function (params, options) {
        var _this = this;
        return new Promise(function (resolve) {
            var _a;
            (_a = _this._roomService) === null || _a === void 0 ? void 0 : _a.previewRoom(params, options, function (code, message, previewRoomContext) {
                if (code === 0) {
                    resolve({ code: code, message: null, data: previewRoomContext });
                }
                else {
                    resolve({ code: code, message: message, data: previewRoomContext });
                }
            });
        });
    };
    NERoomService.prototype.getPreviewRoomContext = function () {
        var _a;
        if (!this._preRoomContext) {
            var previewRoomContext = (_a = this._roomService) === null || _a === void 0 ? void 0 : _a.getPreviewRoomContext();
            this._preRoomContext = new NEPreviewRoomContextService({
                previewRoomContext: previewRoomContext,
                rendererType: this._rendererType,
            });
        }
        return this._preRoomContext;
    };
    NERoomService.prototype.getRoomCloudRecordList = function (roomArchiveId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            roomArchiveId = String(roomArchiveId);
            (_a = _this._roomService) === null || _a === void 0 ? void 0 : _a.getRoomCloudRecordList(roomArchiveId, function (code, message, data) {
                if (code === 0) {
                    resolve({ code: code, message: null, data: data });
                }
                else {
                    reject({ code: code, message: message, data: null });
                }
            });
        });
    };
    NERoomService.prototype.fetchChatroomHistoryMessages = function (roomArchiveId, option) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._roomService) === null || _a === void 0 ? void 0 : _a.fetchChatroomHistoryMessages(String(roomArchiveId), option, function (code, message, data) {
                if (code === 0) {
                    resolve({ code: code, message: null, data: data });
                }
                else {
                    reject({ code: code, message: message, data: null });
                }
            });
        });
    };
    NERoomService.prototype.exportChatroomHistoryMessages = function (roomArchiveId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            roomArchiveId = String(roomArchiveId);
            (_a = _this._roomService) === null || _a === void 0 ? void 0 : _a.exportChatroomHistoryMessages(roomArchiveId, function (code, message, data) {
                if (code === 0) {
                    resolve({ code: code, message: null, data: data });
                }
                else {
                    reject({ code: code, message: message, data: null });
                }
            });
        });
    };
    NERoomService.prototype.rejectInvite = function (roomUuid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            roomUuid = String(roomUuid);
            (_a = _this._roomService) === null || _a === void 0 ? void 0 : _a.rejectInvite(roomUuid, function (code, message, data) {
                if (code === 0) {
                    resolve({ code: code, message: null, data: data });
                }
                else {
                    reject({ code: code, message: message, data: null });
                }
            });
        });
    };
    NERoomService.prototype.destroy = function () {
        var _a;
        return (_a = this._roomService) === null || _a === void 0 ? void 0 : _a.destroy();
    };
    NERoomService.prototype._joinRoomHandler = function (params, options, type) {
        var _a, _b;
        if (params.initialProperties) {
            // initialProperties: Record<string,string>
            Object.keys(params.initialProperties).forEach(function (key) {
                if (typeof params.initialProperties[key] === 'object') {
                    params.initialProperties[key] = JSON.stringify(params.initialProperties[key]);
                }
            });
        }
        Object.keys(params).forEach(function (key) {
            if (typeof params[key] === 'undefined') {
                delete params[key];
            }
        });
        var func = type === 'joinRoom'
            ? (_a = this._roomService) === null || _a === void 0 ? void 0 : _a.joinRoom.bind(this._roomService)
            : (_b = this._roomService) === null || _b === void 0 ? void 0 : _b.joinRoomByInvite.bind(this._roomService);
        return new Promise(function (resolve, reject) {
            func(params, __assign(__assign({}, options), { enableMyAudioDeviceOnJoinRtc: true }), function (code, message, roomContext) {
                if (code === 0) {
                    resolve({ code: code, message: null, data: roomContext });
                }
                else {
                    reject({ code: code, message: message, data: null });
                }
            });
        });
    };
    return NERoomService;
}());

// eslint-disable-next-line @typescript-eslint/no-var-requires
var neroom = require('../build/Release/neroom.node');
if (process.platform === 'win32') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    var path = require('path');
    var asarPath = path.join(__dirname, '../build/Release/');
    var unpackedPath = asarPath.replace('app.asar', 'app.asar.unpacked');
    process.env.PATH = "".concat(unpackedPath, ";").concat(process.env.PATH);
}
var Roomkit = /** @class */ (function () {
    function Roomkit() {
        this._rendererType = 'software';
        console.log('Roomkit constructor');
        this._roomkit = new neroom.INERoomKitWrap();
    }
    Object.defineProperty(Roomkit.prototype, "isInitialized", {
        get: function () {
            var _a;
            return !!((_a = this._roomkit) === null || _a === void 0 ? void 0 : _a.isInitialized());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Roomkit.prototype, "sdkVersions", {
        get: function () {
            return this._roomkit.getSdkVersions();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Roomkit.prototype, "authService", {
        get: function () {
            return new NEAuthService({
                roomKit: this._roomkit,
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Roomkit.prototype, "roomService", {
        get: function () {
            return new NERoomService({
                roomKit: this._roomkit,
                rendererType: this._rendererType,
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Roomkit.prototype, "nosService", {
        get: function () {
            return new NENosService({
                roomKit: this._roomkit,
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Roomkit.prototype, "extensionService", {
        get: function () {
            return new NEExtensionService({
                roomKit: this._roomkit,
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Roomkit.prototype, "messageChannelService", {
        get: function () {
            return new NEMessageChannelService({
                messageChannelService: this._roomkit.getMessageChannelService(),
            });
        },
        enumerable: false,
        configurable: true
    });
    Roomkit.prototype.getService = function (type) {
        if (type === 'roomService') {
            return this.roomService;
        }
        else if (type === 'authService') {
            return this.authService;
        }
        else if (type === 'messageService') {
            return this.messageChannelService;
        }
        else if (type === 'nosService') {
            return this.nosService;
        }
    };
    Object.defineProperty(Roomkit.prototype, "deviceId", {
        get: function () {
            var _a;
            return (_a = this._roomkit) === null || _a === void 0 ? void 0 : _a.getDeviceId();
        },
        enumerable: false,
        configurable: true
    });
    Roomkit.prototype.getNetworkType = function () {
        var _a;
        var numberValue = (_a = this._roomkit) === null || _a === void 0 ? void 0 : _a.getNetworkType();
        // 将数字转换为NENetworkType枚举
        return numberValue;
    };
    Roomkit.prototype.getCurrentLogPath = function () {
        var _a;
        return (_a = this._roomkit) === null || _a === void 0 ? void 0 : _a.getCurrentLogPath();
    };
    Roomkit.prototype.getVideoFrame = function (frames) {
        var _a;
        return (_a = this._roomkit) === null || _a === void 0 ? void 0 : _a.getVideoFrame(frames);
    };
    Roomkit.prototype.startListenVideoFrame = function () {
        var _a;
        return (_a = this._roomkit) === null || _a === void 0 ? void 0 : _a.startListenVideoFrame();
    };
    Roomkit.prototype.stopListenVideoFrame = function () {
        var _a;
        return (_a = this._roomkit) === null || _a === void 0 ? void 0 : _a.stopListenVideoFrame();
    };
    Roomkit.prototype.getAvailableDomain = function (config) {
        var _a;
        return (_a = this._roomkit) === null || _a === void 0 ? void 0 : _a.getAvailableDomain(config);
    };
    Roomkit.prototype.writeLog = function (moduleName, level, content) {
        var _a;
        return (_a = this._roomkit) === null || _a === void 0 ? void 0 : _a.writeLog(moduleName, level, content);
    };
    Roomkit.prototype.switchDomain = function (domain, callback) {
        var _a;
        return (_a = this._roomkit) === null || _a === void 0 ? void 0 : _a.switchDomain(domain, callback);
    };
    Roomkit.prototype.switchLanguage = function (language) {
        var _a;
        var roomLanguageMap = {
            default: 0,
            CHINESE: 1,
            ENGLISH: 2,
            JAPANESE: 3,
        };
        return (_a = this._roomkit) === null || _a === void 0 ? void 0 : _a.switchLanguage(roomLanguageMap[language || 'default']);
    };
    Roomkit.prototype.initialize = function (options) {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var self = this;
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this._roomkit) === null || _a === void 0 ? void 0 : _a.initialize(options, function (code, message) { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            _a = this;
                            return [4 /*yield*/, isSupportRendererType()];
                        case 1:
                            _a._rendererType = _b.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            _b.sent();
                            console.warn('Your browser may not support webGPU');
                            return [3 /*break*/, 3];
                        case 3:
                            if (code === 0) {
                                NERendererManager.getInstance().roomKit = self;
                                resolve(b(null));
                            }
                            else {
                                reject(J({ code: code, message: message }));
                            }
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    Roomkit.prototype.release = function () {
        var _a;
        try {
            this._rendererType = 'software';
            (_a = this._roomkit) === null || _a === void 0 ? void 0 : _a.release();
            return b(null);
        }
        catch (error) {
            return J(error, E.FAILURE);
        }
    };
    Roomkit.prototype.addGlobalEventListener = function (listener) {
        function _globalEventListenerCallback(key) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (listener[key]) {
                listener[key].apply(listener, __spreadArray([], __read(args), false));
            }
        }
        this._roomkit.addGlobalEventListener(_globalEventListenerCallback);
    };
    Roomkit.prototype.removeGlobalEventListener = function (listener) {
        this._roomkit.removeGlobalEventListener(listener);
    };
    Roomkit.prototype.reuseIM = function () {
        // todo
    };
    Roomkit.prototype.emit = function () {
        // todo
    };
    Roomkit.prototype.uploadLog = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._roomkit.uploadLog(function (code, message, url) {
                if (code === 0) {
                    resolve(b(url));
                }
                else {
                    reject(J({ code: code, message: message }));
                }
            });
        });
    };
    return Roomkit;
}());

export { Roomkit as default };
//# sourceMappingURL=index.esm.js.map
