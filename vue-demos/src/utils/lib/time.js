/*----------------------------------------------------------------------
* about:时间类的函数
* author:马兆铿
* date:2018-7-9
* ----------------------------------------------------------------------*/
/*  延时执行函数
* */
const sleep = time => new Promise((resolve => {
  setTimeout(resolve, time)
}))

/**
 * 数字转换成两位字符串
 * @param number
 * @return {string}
 */
function numberToDoubleDigit (number) {
  const num = parseInt(number)
  return num < 10 ? `0${num}` : `${num}`
}

/**
 * 数字变成时间字符串
 * @param number
 * @return {string} 字符串
 */
function numberToTime (hour, minute) {
  return `${numberToDoubleDigit(hour)}:${numberToDoubleDigit(minute)}`
}

/**
 * 24小时内的时间戳，转时间字符，格式为 "12:23:52"。用于计算时间间隔。
 */
function timestamp2TimeString (ts) {
  const hours = parseInt((ts % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = parseInt((ts % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = parseInt(ts % (1000 * 60) / 1000)
  return `${numberToDoubleDigit(hours)}:${numberToDoubleDigit(minutes)}:${numberToDoubleDigit(seconds)}`
}

/**
 * 时间转秒
 */
function timeStr2Second (str) {
  // 支持 13:24 或者 13:24:09 两种格式
  const match = str.match(/(\d{2}):(\d{2}):(\d{2})/) || str.match(/(\d{2}):(\d{2})/)
  if (!match) {
    console.error('请输入正确时间格式，比如 13:24 或者 13:24:09')
  }
  return parseInt(match[1]) * 3600 + parseInt(match[2]) * 60 + parseInt(match[3] ? match[3] : 0)
}

// 星期数组
const weekDayArr = [
  { key: '7', value: '日', en: 'Sun' },
  { key: '1', value: '一', en: 'Mon' },
  { key: '2', value: '二', en: 'Tue' },
  { key: '3', value: '三', en: 'Wed' },
  { key: '4', value: '四', en: 'Thur' },
  { key: '5', value: '五', en: 'Fri' },
  { key: '6', value: '六', en: 'Sat' }
]

/*  根据星期数组返回描述文字
* @param {arr}week，比如 [1,2] 或者 ["Mon", "Tue"]
* @return {str}描述文字
* */
function descByWeekArr (week) {
  if (typeof week !== 'object' || !(week instanceof Array)) {
    console.error('参数 week 只支持数组')
    return ''
  }
  // 非数字字符串，先转换
  if (!parseInt(week.join(''))) {
    week = week.map(item => weekDayArr.find(subItem => subItem.en === item).key)
  }
  if (!week || week.length === 0 || (week.length === 1 && !week[0])) {
    return '单次'
  }
  if (week.length === weekDayArr.length) {
    return '每天'
  }
  if (
    week.length === 2 &&
    week.find(item => item === '6') &&
    week.find(item => item === '7')
  ) {
    return '周末'
  }
  if (
    week.length === 5 &&
    week.find(item => item === '1') &&
    week.find(item => item === '2') &&
    week.find(item => item === '3') &&
    week.find(item => item === '4') &&
    week.find(item => item === '5')
  ) {
    return '工作日'
  }
  let str = ''
  week.forEach(item => {
    const foundDay = weekDayArr.find(day => day.key === item || day.key === parseInt(item))
    if (foundDay) {
      str += `周${foundDay.value}、`
    }
  })
  str = str.slice(0, str.length - 1) // 去除最后一个顿号
  return str
}

/**
 * 函数节流
 * @param fn
 * @param gapTime
 * @returns {Function}
 */
function throttle (fn, gapTime) {
  let _lastTime = 0

  return function () {
    const _nowTime = +new Date()
    if (_nowTime - _lastTime > gapTime) {
      _lastTime = _nowTime
      fn()
    }
  }
}

/**
 * 反向防抖：先执行，后面的取消
 */
function reverseDebounce (fn, wait) {
  let isBouncing = false
  return function () {
    if (isBouncing) return
    fn && fn(...arguments)
    isBouncing = true
    setTimeout(() => {
      isBouncing = false
    }, wait)
  }
}

export {
  // 变量
  weekDayArr,
  // fn
  sleep,
  numberToDoubleDigit,
  numberToTime,
  timestamp2TimeString,
  timeStr2Second,
  descByWeekArr,
  throttle,
  reverseDebounce
}
