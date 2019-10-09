/* ---------------------------------------------------------------------------------------
* about:酷控的接口
* author:马兆铿（13790371603 810768333@qq.com）
* date:2019-08-13
* ---------------------------------------------------------------------------------------- */

import { service } from './config'

// 获取所有省份，如果已经获取过了，就不需要再从服务器获取
let provinceCache = {}
const kookong_fetchAllProvince = params => (
  provinceCache.data
    ? Promise.resolve(provinceCache)
    : service.post(`/service?m=getProvinceData`, params).then(res => {
      provinceCache = res.data
      return res.data
    })
)

// 获取城市
const kookong_fetchCity = params =>
  service.post(`/service?m=getCityData`, params).then(res => res.data)

// 获取品牌
const kookong_fetchBrand = params =>
  service.post(`/service?m=getBrands`, params).then(res => res.data)

// 获取运营商
const kookong_fetchSupplier = params =>
  service.post(`/service?m=getServiceProviderData`, params).then(res => res.data)

/**
 *获取红外列表
 *@param rids 红外码ID
 *@param m 请求分类
 *@example m=getIr&rid=147,152,157
 */
const kookong_fetchIrs = params =>
  service.get(`/service?m=getMKeys`, { params }).then(res => res.data)

/**
 *  获取红外Id列表(红外Id列表1/3-非机顶盒)
 * @param deviceType 设备类型
 * 1:机顶盒,2:电视,3:网络盒子,4:DVD,5:空调,6:投影仪,7:功放,8:风扇,9:单反相机,10:开关灯泡,11:空气净化器,12:热水器
 * @param brandId 品牌id
 * @param m 请求分类
 * @param countryCode 国家代码
 */
const kookong_fetchRemoteIdList = params =>
  service.get(`/service?m=getRemoteIds`, { params }).then(res => res.data)

export {
  kookong_fetchAllProvince,
  kookong_fetchCity,
  kookong_fetchBrand,
  kookong_fetchSupplier,
  kookong_fetchIrs,
  kookong_fetchRemoteIdList
}
