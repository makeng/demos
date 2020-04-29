/*----------------------------------------------------------------------------------
* about:列表 item 的影子，用于提取内容高度
* author:马兆铿
* date:
* ----------------------------------------------------------------------------------*/
/* ----------------------------------------- 开始运行 ----------------------------------------- */
import React from 'react'
import ReactDOM from 'react-dom'

//
class ScrollerItemShadow extends React.Component {
  constructor (props) {
    super(props)
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
    this.props.onComponentDidMount(rect)
  }

  /* ----------------------------------------- 绑定方法 ----------------------------------------- */

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render () {
    const { children } = this.props

    return (
      <div className="scroll-list__item-shadow">
        {children}
      </div>
    )
  }
}

export default ScrollerItemShadow
