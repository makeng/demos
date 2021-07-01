/* ---------------------------------------------------------------------------------------
* about:
* author:马兆铿（13790371603 810768333@qq.com）
* date:2019-
* ---------------------------------------------------------------------------------------- */

/**
 * 数组转换成后台识别的字符串，比如“key1,key2”
 * @param array
 * @returns {string}
 */
const arr2UrlStr = (array) => {
  // 错误数组，或者一个元素且为空
  if (!array || (array.length === 1 && !array[0])) {
    return ''
  }
  let str = ''
  array.forEach((item) => {
    str += (`${item},`)
  })
  // 去除最后一个逗号
  return str.slice(0, str.length - 1)
}

/*  把参数拼接成url参数的表单格式，当前只支持一层对象，规则是根据后台所定
* @param param要添加属性到url的对象
* */
function obj2QueryParamsStr (param) {
  //
  let str = ''
  for (const key in param) {
    if (!Object.prototype.hasOwnProperty.call(param, key)) {
      continue
    }
    const value = param[key]
    // 形成数组
    if (typeof value === 'object') { // 对象
      if (value instanceof Array) { // 数组
        str += `${key}=${arr2UrlStr(value)}&`
      } else {
        str += `${key}=${JSON.stringify(value)}&`
      }
    } else {
      str += `${key}=${value}&`
    }
  }
  return str.slice(0, -1) // 最后一个'&'不要
}

export {
  obj2QueryParamsStr
}
