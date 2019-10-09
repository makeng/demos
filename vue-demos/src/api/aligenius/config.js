/* ---------------------------------------------------------------------------------------
* about:
* author:马兆铿（13790371603 810768333@qq.com）
* date:2019-
* ---------------------------------------------------------------------------------------- */
import axios from 'axios'
import { Toast } from 'vant'

const ALIGENIUS_URL = 'https://homemate2.orvibo.com'
const TOKEN = '7abc85504149460bb9c364b132542e2a'

// 配置
const service = axios.create({
  baseURL: ALIGENIUS_URL, // node环境的不同，对应不同的baseURL
  timeout: 5000, // 请求的超时时间
  withCredentials: true, // 允许携带cookie
})

/**
 * 为网络请求增加额外的功能
 * @param service
 */
function _addPlugin (service) {
  service.isBlocked = false
  service._error = {} // 错误信息

  // 拦截请求
  service.blockNetwork = function () {
    console.warn('接口全部取消')
    service.isBlocked = true
  }

  // 允许请求
  service.allowNetwork = function () {
    console.warn('接口全部激活')
    service.isBlocked = false
  }

  // 记录错误信息
  service.setError = function (val) {
    service._error = val
  }

  // 获取错误信息
  service.getError = function () {
    return service._error
  }
}

_addPlugin(service)

// 前置拦截：进行前面参入、字符串化
service.interceptors.request.use(
  (config) => {
    const { method } = config
    // 都有的参数
    const shareParams = {
      token: TOKEN
    }

    if (method === 'get') {
      config.params = {
        ...config.params,
        ...shareParams
      }
    } else if (method === 'post') {
      config.data = {
        ...config.data,
        ...shareParams
      }
    }
    return service.isBlocked ? Promise.reject(config) : config
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
    if (!service.isBlocked) {
      Toast.fail(`网络错误`)
      console.error('网络错误', error)
    } else {
      service.setError(error)
      console.error('网络拦截')
    }
    return Promise.reject(error)
  }
)

export {
  service
}
