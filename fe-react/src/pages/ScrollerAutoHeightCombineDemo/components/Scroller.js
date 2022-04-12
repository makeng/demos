import React from 'react'
import { on } from '../../../utils/lib/dom'
import '../../../style/pages/Scroller.less'
import ScrollerItem from './ScrollerItem'

const CALL_TIME_GAP = 100 // 滚动处理间隔
const VIEW_OFFSET = 1000 // 可视范围增加，滚动过快出现白屏
const VIEW_CAL_GAP = 50 // 间隔多少计算一次区域
const VIEW_BOTTOM = 200 // 滚动到触碰底部

//
class Scroller extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      scrollCacheList: [],
      shoreHeight: 0 // 支撑高度
    }
    // 滚动用参数
    this.lastScrollY = 0
    this.viewPort = { start: 0, end: 999 }
    // 函数
    this.onItemDidMount = this.onItemDidMount.bind(this)
  }

  /* ----------------------------------------- 生命周期 ----------------------------------------- */
  componentDidMount () {
    this.attachScrollEvent()
  }

  /* ----------------------------------------- 自定义方法 ----------------------------------------- */
  /**
   * 绑定滚动事件
   */
  attachScrollEvent () {
    const el = document.getElementsByClassName('scroller')[0]
    on(el, 'scroll', e => {
      this.onScroll(e)
    })
  }

  /**
   * 判断在可视区域
   * @param offsetTop
   * @returns {boolean|boolean}
   */
  checkIfVisible (offsetTop) {
    const { viewPort } = this
    return offsetTop > viewPort.start && offsetTop < viewPort.end
  }

  /**
   * 设置可视窗口参数
   */
  setVisibleViewPort (start, end) {
    start = parseInt(start)
    end = parseInt(end)
    const { scrollCacheList, shoreHeight } = this.state

    // 更新窗口信息
    this.viewPort = { start, end }
    // 只需要更新一部分数据，否则整个缓存列表计算运算量极大
    const len = scrollCacheList.length
    for (let i = 0; i < len; i++) {
      const item = scrollCacheList[i]
      item.isVisible = this.checkIfVisible(item.offsetTop)
    }
    this.setState({
      scrollCacheList,
      shoreHeight: start > 0 ? start : 0
    })
  }

  /* ----------------------------------------- 绑定方法 ----------------------------------------- */
  onScroll (e) {
    const target = e.target
    const { scrollTop, scrollHeight, offsetHeight } = target // 滚动了多少、真正高度和CSS 高度

    // 滚动间隔过小则返回
    if (Math.abs(this.lastScrollY - scrollTop) < VIEW_CAL_GAP) {
      return
    }
    this.lastScrollY = scrollTop

    // 设置屏幕
    const startView = scrollTop - VIEW_OFFSET
    const endView = scrollTop + offsetHeight + VIEW_OFFSET
    this.setVisibleViewPort(startView, endView)

    // 触底
    if (offsetHeight + scrollTop + VIEW_BOTTOM >= scrollHeight) {
      this.props.onScrollToBottom()
    }
  }

  /**
   * 影子 item 渲染完毕
   */
  onItemDidMount (rect, index) {
    const { scrollCacheList } = this.state
    // 保存到数组
    const { offsetTop, offsetHeight } = rect
    const isVisible = this.checkIfVisible(offsetTop)
    scrollCacheList[index] = {
      isVisible,
      offsetTop,
      offsetHeight
    }
  }

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render () {
    const { scrollCacheList, shoreHeight } = this.state
    const { children } = this.props

    return (
      <div className="scroller">
        <div
          className="scroll-shore"
          style={{ height: shoreHeight }}
        />
        <div className="scroll-list" onScroll={this.onScroll}>
          {
            children.map((item, index) => {
              const { key } = item
              const cache = scrollCacheList[index]
              return (
                (cache === undefined || cache.isVisible) &&
                <ScrollerItem
                  key={'item' + key}
                  id={key}
                  onComponentDidMount={(rect) => this.onItemDidMount(rect, key)}
                >
                  {item}
                </ScrollerItem>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Scroller
