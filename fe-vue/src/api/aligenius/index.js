/* ---------------------------------------------------------------------------------------
* about:
* author:马兆铿（13790371603 810768333@qq.com）
* date:2019-
* ---------------------------------------------------------------------------------------- */

import { service } from './config'

/**
 * @name 查询设备列表
 * @param {token} token
 * @param {m} queryDevice
 * 一个设备信息:
 String uid;
 String deviceId;
 String irDeviceId;
 String deviceName;
 int deviceType;
 String model;
 String picUrl;
 String roomId;
 String roomName;
 */
const ali_queryDeviceList = params =>
  service.get(`/device?m=queryDevice`, { params }).then(res => res.data)

/**
 * @name 控制设备
 * @param {m}  sendCmd
 * token
 cmd
 uid
 deviceId
 order
 value1
 value2
 value3
 value4
 freq
 pluseNum
 pluseData
 */
const ali_sendCmd = params =>
  service.get(`/cmd?m=sendCmd`,
    {
      params: {
        cmd: 15,
        value1: 0,
        value2: 0,
        value3: 0,
        value4: 0,
        order: 'ir control',
        ...params
      }
    })
    .then(res => res.data)

/**
 * @name 添加子设备
 * @param {m}  addSubDevice
 * @param {token}  token
 * @param {uid} 设备UID
 * @param {deviceType}  设备类型
 * @param {deviceName}  deviceName设备名称
 * @param {roomId}  房间Id(没有或为空时, 服务器自动选择默认房间)
 * @param {rid} 红外Id
 */
const ali_addSubDevice = params =>
  service.get(`/device?m=addSubDevice`, { params }).then(res => res.data)


export {
  ali_queryDeviceList,
  ali_sendCmd,
  ali_addSubDevice
}
