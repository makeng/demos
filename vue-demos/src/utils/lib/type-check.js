/* ---------------------------------------------------------------------------------------
* about:类型检测
* author:马兆铿（13790371603 810768333@qq.com）
* date:2019-08-15
* ---------------------------------------------------------------------------------------- */

function isString (val) {
  return {}.toString.call(val) === '[object String]'
}

function isNumber (val) {
  return /^[\d]+$/.test(val)
}

export {
  isString,
  isNumber
}
