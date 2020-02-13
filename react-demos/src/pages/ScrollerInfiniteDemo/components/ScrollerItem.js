/*----------------------------------------------------------------------------------
* about:屏幕组件
* author:马兆铿
* date:
* ----------------------------------------------------------------------------------*/
/* ----------------------------------------- 开始运行 ----------------------------------------- */
import React from 'react'
import ReactDOM from 'react-dom'

//
class ScrollerItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      offsetTop: 0,
      offsetHeight: 89
    }
  }

  /* ----------------------------------------- 生命周期 ----------------------------------------- */
  componentDidMount () {
    this.updateDOMInfo()
  }

  /* ----------------------------------------- 自定义方法 ----------------------------------------- */
  /**
   * 更新 DOM 信息，用于判断是否应该显示
   */
  updateDOMInfo () {
    const rect = ReactDOM.findDOMNode(this)
    const { offsetTop, offsetHeight } = rect
    this.setState({ offsetTop, offsetHeight })
  }

  /* ----------------------------------------- 绑定方法 ----------------------------------------- */

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render () {
    const { offsetTop, offsetHeight } = this.state
    const { children, viewPortStart, viewPortEnd } = this.props
    const isVisible = offsetTop < viewPortEnd && offsetTop > viewPortStart

    return (
      <div
        className="scroll-list__item"
        style={{ height: offsetHeight }}
      >
        {
          isVisible && children
        }
      </div>
    )
  }
}

export default ScrollerItem
