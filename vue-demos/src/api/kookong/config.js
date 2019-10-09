/* ---------------------------------------------------------------------------------------
* about:酷控的接口
* author:马兆铿（13790371603 810768333@qq.com）
* date:2019-08-13
* ---------------------------------------------------------------------------------------- */
import axios from 'axios'
import dayjs from 'dayjs'
import CryptoJS from 'crypto-js'
import { Toast } from 'vant'
import { obj2QueryParamsStr } from '../../utils/businese/url'

const KOOKONG_URL = 'http://ir.orvibo.com'

// 配置
const service = axios.create({
  baseURL: KOOKONG_URL, // node环境的不同，对应不同的baseURL
  timeout: 5000, // 请求的超时时间
  withCredentials: true, // 允许携带cookie
})

// 密钥
const kookongKey = Object.freeze({
  APP_ID: 'web',
  APP_KEY: '003e6fe600144509bf79b7382a3d97e6'
})

// 固定参数
const fixedParams = Object.freeze({
  lanCode: 'zh',
  countryCode: 'CN'
})

/**
 * 根据酷控文档生成参数
 * @param params
 * @returns {*}
 */
function calSign () {
  // 序列号计算
  const timeStr = dayjs().format('YYYYMMDD-HHmm')
  const randomStr = (Math.random() * 10).toString().replace('.', '').slice(0, 8)
  const sn = `${timeStr}-${randomStr}`

  // 签名计算
  const sign = CryptoJS.HmacSHA1(sn, kookongKey.APP_KEY).toString()

  return {
    appId: kookongKey.APP_ID,
    sn,
    sign
  }
}

// 前置拦截：进行前面参入、字符串化
service.interceptors.request.use(
  (config) => {
    const { method } = config
    // 都有的参数
    const shareParams = {
      ...fixedParams,
      ...calSign()
    }

    if (method === 'get') {
      config.params = {
        ...config.params,
        ...shareParams
      }
    } else if (method === 'post') {
      const data = {
        ...config.data,
        ...shareParams
      }
      config.data = obj2QueryParamsStr(data)
    }
    return config
  },
)

// http响应拦截器
service.interceptors.response.use(
// 欧瑞博系统专用响应拦截器
  res => {
    const { data } = res
    if (data.status === 0) {
      return data
    }
    Toast.fail(`请求失败，${data.message}`)
    console.info('请求错误', res)
    return res
  },
  error => {
    Toast.fail(`网络错误`)
    console.error('网络错误', error)
    return Promise.reject(error)
  }
)

export {
  service
}
