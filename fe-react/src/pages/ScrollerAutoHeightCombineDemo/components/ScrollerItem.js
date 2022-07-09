import React from 'react'
import ReactDOM from 'react-dom'

//
class ScrollerItem extends React.Component {
  constructor(props) {
    super(props)
  }

  /* ----------------------------------------- 生命周期 ----------------------------------------- */
  componentDidMount() {
    this.updateDOMInfo()
  }

  /* ----------------------------------------- 自定义方法 ----------------------------------------- */
  /**
   * 更新 DOM 信息，用于判断是否应该显示
   */
  updateDOMInfo() {
    const rect = ReactDOM.findDOMNode(this)
    const { offsetTop, offsetHeight } = rect
    this.props.onComponentDidMount({ offsetTop, offsetHeight })
  }

  /* ----------------------------------------- 绑定方法 ----------------------------------------- */

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render() {
    const { children } = this.props

    return (
      <div className="scroll-list__item">
        {children}
      </div>
    )
  }
}

export default ScrollerItem
