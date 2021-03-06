const { createDescObj } = require('./utils')

/**
 * 基础
 */

module.exports = {
  canIUse: createDescObj(
    0,
    '判断小程序的 API，回调，参数，组件等是否在当前版本可用',
    'https://developers.weixin.qq.com/miniprogram/dev/api/wx.canIUse.html',
    'https://docs.alipay.com/mini/api/can-i-use',
  ),
  getSystemInfoSync: createDescObj(
    1,
    '获取系统信息同步版本',
    'https://developers.weixin.qq.com/miniprogram/dev/api/wx.getSystemInfoSync.html',
    'https://docs.alipay.com/mini/api/system-info',
    {
      msg: '返回值属性值缺失',
      returnValue: {
        props: {
          safeArea: {
            type: 0,
            desc: '安全区位置信息',
          },
          SDKVersion: {
            type: 0,
            desc: '客户端基础库版本',
          },
          benchmarkLevel: {
            type: 0,
            desc: '仅 Android 小游戏 设备性能等级取值为：-2 或 0',
          },
          albumAuthorized: {
            type: 0,
            desc: '允许微信使用相册的开关 仅 iOS 有效',
          },
          cameraAuthorized: {
            type: 0,
            desc: '允许微信使用摄像头的开关',
          },
          locationAuthorized: {
            type: 0,
            desc: '允许微信使用定位的开关',
          },
          microphoneAuthorized: {
            type: 0,
            desc: '允许微信使用麦克风的开关',
          },
          notificationAuthorized: {
            type: 0,
            desc: '允许微信通知的开关',
          },
          notificationAlertAuthorized: {
            type: 0,
            desc: '允许微信通知带有提醒的开关 仅 iOS 有效',
          },
          notificationBadgeAuthorized: {
            type: 0,
            desc: '允许微信通知带有标记的开关 仅 iOS 有效',
          },
          notificationSoundAuthorized: {
            type: 0,
            desc: '允许微信通知带有声音的开关 仅 iOS 有效',
          },
          bluetoothEnabled: {
            type: 0,
            desc: '蓝牙的系统开关',
          },
          locationEnabled: {
            type: 0,
            desc: '地理位置的系统开关',
          },
          wifiEnabled: {
            type: 0,
            desc: 'Wi-Fi 的系统开关',
          },
        },
      },
    },
  ),
  getSystemInfo: createDescObj(
    1,
    '获取系统信息',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html',
    'https://docs.alipay.com/mini/api/system-info',
    {
      msg: '返回值属性值缺失',
      returnValue: {
        props: {
          SDKVersion: {
            type: 0,
            desc: '客户端基础库版本',
          },
          benchmarkLevel: {
            type: 0,
            desc: '仅 Android 小游戏 设备性能等级取值为：-2 或 0',
          },
          albumAuthorized: {
            type: 0,
            desc: '允许微信使用相册的开关 仅 iOS 有效',
          },
          cameraAuthorized: {
            type: 0,
            desc: '允许微信使用摄像头的开关',
          },
          locationAuthorized: {
            type: 0,
            desc: '允许微信使用定位的开关',
          },
          microphoneAuthorized: {
            type: 0,
            desc: '允许微信使用麦克风的开关',
          },
          notificationAuthorized: {
            type: 0,
            desc: '允许微信通知的开关 仅 iOS 有效',
          },
          notificationAlertAuthorized: {
            type: 0,
            desc: '允许微信通知带有提醒的开关 仅 iOS 有效',
          },
          notificationBadgeAuthorized: {
            type: 0,
            desc: '允许微信通知带有标记的开关 仅 iOS 有效',
          },
          notificationSoundAuthorized: {
            type: 0,
            desc: '允许微信通知带有声音的开关 仅 iOS 有效',
          },
          bluetoothEnabled: {
            type: 0,
            desc: '蓝牙的系统开关',
          },
          locationEnabled: {
            type: 0,
            desc: '地理位置的系统开关',
          },
          wifiEnabled: {
            type: 0,
            desc: 'Wi-Fi 的系统开关',
          },
        },
      },
    },
  ),
  getUpdateManager: createDescObj(
    0,
    '获取全局唯一的版本更新管理器',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html',
    'https://opendocs.alipay.com/mini/api/zdblqg',
  ),
  getLaunchOptionsSync: createDescObj(
    2,
    '获取小程序启动时的参数',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html',
    '',
  ),
  onPageNotFound: createDescObj(
    2,
    '监听小程序要打开的页面不存在事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html',
    '',
  ),
  onError: createDescObj(
    2,
    '监听小程序错误事件。如脚本错误或 API 调用报错等。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html',
    '',
  ),
  onAudioInterruptionBegin: createDescObj(
    2,
    '监听音频因为受到系统占用而被中断开始事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAudioInterruptionBegin.html',
    '',
  ),
  onAudioInterruptionEnd: createDescObj(
    2,
    '监听音频中断结束事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAudioInterruptionEnd.html',
    '',
  ),
  onAppShow: createDescObj(
    2,
    '监听小程序切前台事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html',
    '',
  ),
  onAppHide: createDescObj(
    2,
    '监听小程序切后台事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppHide.html',
    '',
  ),
  offPageNotFound: createDescObj(
    2,
    '取消监听小程序要打开的页面不存在事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offPageNotFound.html',
    '',
  ),
  offError: createDescObj(
    2,
    '监听小程序切前台事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offError.html',
    '',
  ),
  offAudioInterruptionBegin: createDescObj(
    2,
    '取消监听音频因为受到系统占用而被中断开始事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAudioInterruptionBegin.html',
    '',
  ),
  offAudioInterruptionEnd: createDescObj(
    2,
    '取消监听音频中断结束事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAudioInterruptionEnd.html',
    '',
  ),
  offAppShow: createDescObj(
    2,
    '取消监听小程序切前台事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAppShow.html',
    '',
  ),
  offAppHide: createDescObj(
    2,
    '取消监听小程序切后台事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAppHide.html',
    '',
  ),
  setEnableDebug: createDescObj(
    2,
    '设置是否打开调试开关。此开关对正式版也能生效',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.setEnableDebug.html',
    '',
  ),
  getLogManager: createDescObj(
    2,
    '获取日志管理器对象。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getLogManager.html',
    '',
  ),
  createCameraContext: createDescObj(
    1,
    '创建 camera 上下文 CameraContext 对象',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/wx.createCameraContext.html',
    '',
    {
      msg: '返回值属性值缺失',
      returnValue: {
        props: {
                
          takePhoto: {
            type: 0,
            desc: '拍照',
          },
          startRecord: {
            type: 0,
            desc: '开始录像',
          },
          stopRecord: {
            type: 0,
            desc: '停止录像',
          },
        },
      },
    },
  ),
  base64ToArrayBuffer: createDescObj(
    2,
    '将 Base64 字符串转成 ArrayBuffer 对象',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.base64ToArrayBuffer.html',
    '',
  ),
  arrayBufferToBase64: createDescObj(
    2,
    '将 ArrayBuffer 字符串转成 Base64 对象',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.arrayBufferToBase64.html',
    '',
  ),
  updateWeChatApp: createDescObj(
    2,
    '更新客户端版本',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.updateWeChatApp.html',
    '',
  ),
  getEnterOptionsSync: createDescObj(
    2,
    '获取本次小程序启动时的参数',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getEnterOptionsSync.html',
    '',
  ),
  onUnhandledRejection: createDescObj(
    0,
    '监听未处理的 Promise 拒绝事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html',
    'https://opendocs.alipay.com/mini/00nd0f',
  ),
  onThemeChange: createDescObj(
    2,
    '监听系统主题改变事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html',
    '',
  ),
  offUnhandledRejection: createDescObj(
    0,
    '取消监听未处理的 Promise 拒绝事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offUnhandledRejection.html',
    'https://opendocs.alipay.com/mini/00nfnd',
  ),
  offThemeChange: createDescObj(
    2,
    '取消监听系统主题改变事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offThemeChange.html',
    '',
  ),
  getRealtimeLogManager: createDescObj(
    2,
    '获取实时日志管理器对象',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getRealtimeLogManager.html',
    '',
  ),
}
