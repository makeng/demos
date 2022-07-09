/* ---------------------------------------------------------------------------------------
* about:有关DOM的方法
* author:马兆铿
* date:2018-09-27
* ---------------------------------------------------------------------------------------- */

/**
 * 事件绑定，这是高阶函数
 */
export const on = (function () {
  // 支持addEventListener方法
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  }
  // 不支持
  return function (element, event, handler) {
    if (element && event && handler) {
      element.attachEvent('on' + event, handler)
    }
  }
})()
