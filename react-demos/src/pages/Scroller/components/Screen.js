/*----------------------------------------------------------------------------------
* about:屏幕组件
* author:马兆铿
* date:
* ----------------------------------------------------------------------------------*/
/* ----------------------------------------- 开始运行 ----------------------------------------- */
import React from 'react'
import { DataList } from '../js/DataList'
import { List } from 'antd-mobile'
import { on } from '../../../utils/lib/dom'
import '../../../style/pages/Scroller.less'

const Item = List.Item
const Brief = Item.Brief

const ITEM_HEIGHT = 40
const APPEND_ITEM_CNT = 50 // 每次增加的数量

//
class Screen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dataList: new DataList(),
      screen: { start: 0, end: 999 }
    }
  }

  /* ----------------------------------------- 生命周期 ----------------------------------------- */
  componentDidMount () {
    this.dataListAppendMoreItems()
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
    this.setState({ screen })
  }

  /**
   * 加载更多数据
   */
  dataListAppendMoreItems () {
    const { dataList } = this.state
    dataList.appendDataItem(APPEND_ITEM_CNT)
    console.log(dataList)
    this.setState({ dataList })
  }

  /* ----------------------------------------- 绑定方法 ----------------------------------------- */
  onScroll (e) {
    const target = e.target
    const scrollHeight = target.scrollHeight // 真正高度
    const offsetHeight = target.offsetHeight // CSS 高度
    const scrollTop = target.scrollTop // 滚动了多少

    // 设置屏幕
    const startIndex = target.scrollTop / ITEM_HEIGHT
    const endIndex = (target.scrollTop + target.offsetHeight) / ITEM_HEIGHT
    this.setVisibleItemIndex(startIndex, endIndex)

    // 触底
    if (offsetHeight + scrollTop + 100 >= scrollHeight) {
      this.dataListAppendMoreItems()
    }
  }

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render () {
    const { dataList, screen } = this.state
    return (
      <div className="scroller">
        <List id="scroll-list" onScroll={this.onScroll}>
          {
            dataList.content.map(item =>
              <div
                style={{ height: `${ITEM_HEIGHT}px` }}
                key={item.id}
                className="item-wrap"
              >
                {
                  /* 可视窗口的数据才能显示 */
                  (item.id <= screen.end && item.id >= screen.start) &&
                  <Item extra={'数据'}>
                    {item.desc}
                  </Item>
                }
              </div>
            )
          }
        </List>
      </div>
    )
  }
}

export default Screen
