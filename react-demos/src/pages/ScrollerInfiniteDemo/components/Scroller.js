/*----------------------------------------------------------------------------------
* about:屏幕组件
* author:马兆铿
* date:
* ----------------------------------------------------------------------------------*/
/* ----------------------------------------- 开始运行 ----------------------------------------- */
import React from 'react'
import { on } from '../../../utils/lib/dom'
import '../../../style/pages/Scroller.less'

const ITEM_OFFSET = -1 // 预留空间
const CALL_TIME_GAP = 100 // 滚动处理间隔

//
class Scroller extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      screen: { start: 0, end: 999 }
    }
    // 滚动用参数
    this.lastScrollY = 0
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
   * 设置可视窗口参数
   */
  setVisibleItemIndex (start, end) {
    const screen = {
      start: parseInt(start),
      end: parseInt(end)
    }
    console.log(`允许显示范围：${JSON.stringify(screen)}`)
    this.setState({ screen })
  }

  /* ----------------------------------------- 绑定方法 ----------------------------------------- */
  onScroll (e) {
    const target = e.target
    const { scrollTop, scrollHeight, offsetHeight } = target // 滚动了多少、真正高度和CSS 高度

    const { itemHeight } = this.props

    // 滚动间隔过小则返回
    if (Math.abs(this.lastScrollY - scrollTop) < itemHeight / 2) {
      return
    }
    this.lastScrollY = scrollTop

    // 设置屏幕
    const startIndex = scrollTop / itemHeight
    const endIndex = (scrollTop + offsetHeight) / itemHeight
    this.setVisibleItemIndex(startIndex, endIndex)

    // 触底
    if (offsetHeight + scrollTop + 100 >= scrollHeight) {
      this.props.onScrollToBottom()
    }
  }

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render () {
    const { screen } = this.state
    const { children, itemHeight } = this.props
    return (
      <div className="scroller">
        <div id="scroll-list" onScroll={this.onScroll}>
          {
            children.map(item =>
              <div
                className="scroll-list__item"
                style={{ height: `${itemHeight}px` }}
                key={item.key}
              >
                {
                  /* 控制内容是否显示 */
                  (item.key <= screen.end - ITEM_OFFSET && item.key >= screen.start + ITEM_OFFSET)
                  && item
                }
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Scroller
