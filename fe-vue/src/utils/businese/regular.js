/* ---------------------------------------------------------------------------------------
* about:正则表达式
* author:马兆铿（13790371603 810768333@qq.com）
* date:2019-8-06
* ---------------------------------------------------------------------------------------- */
import { isNumber, isString } from '../lib/type-check'

function isStrOrNum (val) {
  return isString(val) || isNumber(val)
}

// 合法的名字
const checkLegalName = function (str) {
  return isStrOrNum(str) && !!(str + '').match(/^[\u4e00-\u9fa5A-Za-z0-9_]+$/)
}

export {
  checkLegalName
}
