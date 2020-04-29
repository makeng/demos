/*----------------------------------------------------------------------------------
* about:屏幕组件
* author:马兆铿
* date:
* ----------------------------------------------------------------------------------*/
/* ----------------------------------------- 开始运行 ----------------------------------------- */
import React from 'react'
import { on } from '../../../utils/lib/dom'
import '../../../style/pages/Scroller.less'
import ScrollerItem from './ScrollerItem'
import ScrollerItemShadow from './ScrollerItemShadow'

const CALL_TIME_GAP = 100 // 滚动处理间隔
const VIEW_OFFSET = 600 // 可视范围增加

//
class Scroller extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      viewPort: { start: 0, end: 999 },
      itemHeightList: []
    }
    // 滚动用参数
    this.lastScrollY = 0
    // 函数
    this.onItemShadowComponentDidMount = this.onItemShadowComponentDidMount.bind(this)
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
  setVisibleViewPort (start, end) {
    const viewPort = {
      start: parseInt(start),
      end: parseInt(end)
    }
    console.log(`允许显示范围：${JSON.stringify(viewPort)}`)
    this.setState({ viewPort })
  }

  /* ----------------------------------------- 绑定方法 ----------------------------------------- */
  onScroll (e) {
    const target = e.target
    const { scrollTop, scrollHeight, offsetHeight } = target // 滚动了多少、真正高度和CSS 高度

    // 滚动间隔过小则返回
    if (Math.abs(this.lastScrollY - scrollTop) < 20) {
      return
    }
    this.lastScrollY = scrollTop

    // 设置屏幕
    const startView = scrollTop - VIEW_OFFSET
    const endView = scrollTop + offsetHeight + VIEW_OFFSET
    this.setVisibleViewPort(startView, endView)

    // 触底
    if (offsetHeight + scrollTop + 100 >= scrollHeight) {
      this.props.onScrollToBottom()
    }
  }

  /**
   * 影子 item 渲染完毕
   */
  onItemShadowComponentDidMount (rect, index) {
    const { itemHeightList } = this.state
    const { offsetHeight } = rect
    // 保存到数组
    itemHeightList[index] = offsetHeight
    this.setState(itemHeightList)
  }

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render () {
    const { viewPort, itemHeightList } = this.state
    const { children } = this.props

    return (
      <div className="scroller">
        <div key="scroll-list" onScroll={this.onScroll}>
          {
            children.map((item, index) => {
              const { key } = item
              const height = itemHeightList[index]
              /* 渲染影子item → 得到height → 渲染item → 清除影子 item */
              return height
                ?
                <ScrollerItem
                  key={'item' + key}
                  id={key}
                  viewPortStart={viewPort.start}
                  viewPortEnd={viewPort.end}
                  height={height}
                >
                  {item}
                </ScrollerItem>
                :
                <ScrollerItemShadow
                  key={key}
                  id={key}
                  onComponentDidMount={(rect) => this.onItemShadowComponentDidMount(rect, key)}
                >
                  {item}
                </ScrollerItemShadow>
            })
          }
        </div>
      </div>
    )
  }
}

export default Scroller
