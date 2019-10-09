/*----------------------------------------------------------------------------------
* about:DOM功能的插入文件
* author:马兆铿（13790371603 810768333@qq.com）
* date:2019-09-18
* ----------------------------------------------------------------------------------*/
import FastClick from 'fastclick'

/**
 * 修复FastClick 问题，并绑定到DOM
 */
function useFastClick () {
  /** 修复fastclick在ios系统下，对某些输入元素类型需要长按才有反应的错误。
   * @param {EventTarget|Element} targetElement
   */
  FastClick.prototype.focus = function (targetElement) {
    // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague
    // TypeError on setSelectionRange.
    // These elements don't have an integer value for the selectionStart and selectionEnd properties,
    // but unfortunately that can't be used for detection because accessing the properties also
    // throws a TypeError.
    // Just check the type instead. Filed as Apple bug #15122724.
    if (targetElement.setSelectionRange &&
      targetElement.type.indexOf('date') !== 0 &&
      targetElement.type !== 'time' &&
      targetElement.type !== 'text' &&
      targetElement.type !== 'password' &&
      targetElement.type !== 'search' &&
      targetElement.type !== 'month') {
      const { length } = targetElement.value
      targetElement.setSelectionRange(length, length)
    } else {
      targetElement.focus()
    }
  }

  // 绑定
  FastClick.attach(document.body)
}

export {
  useFastClick
}
