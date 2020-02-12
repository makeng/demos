/*----------------------------------------------------------------------------------
* about:页面对象
* author:马兆铿
* date:
* ----------------------------------------------------------------------------------*/
/* ----------------------------------------- 开始运行 ----------------------------------------- */
import React from 'react'
import '../../style/pages/Scroller.less'
import Scroller from './components/Scroller'
import { DataList } from './js/DataList'

const APPEND_ITEM_CNT = 50 // 每次增加的数量
const ITEM_HEIGHT = 40

//
class ScrollerEqualHeightDemo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dataList: new DataList(),
    }
    this.onScrollerScrollToBottom = this.onScrollerScrollToBottom.bind(this)
  }

  /* ----------------------------------------- 生命周期 ----------------------------------------- */
  componentDidMount () {
    this.dataListAppendMoreItems()
  }

  /* ----------------------------------------- 自定义方法 ----------------------------------------- */
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
  onScrollerScrollToBottom () {
    this.dataListAppendMoreItems()
  }

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render () {
    const { dataList, screen } = this.state
    return (
      <div className="page">
        <header className="page__header">无限滚动</header>
        <Scroller
          itemHeight={ITEM_HEIGHT}
          onScrollToBottom={this.onScrollerScrollToBottom}
        >
          {
            dataList.content.map(item =>
              /* 容器 */
              <div
                key={item.id}
                className="content-item"
              >
                {/* item 显示内容 */}
                <div>{item.desc}</div>
                <p>我是一个等高的 item</p>
                <p>最大高度是{ITEM_HEIGHT}</p>
              </div>
            )
          }
        </Scroller>
      </div>
    )
  }
}

export default ScrollerEqualHeightDemo
