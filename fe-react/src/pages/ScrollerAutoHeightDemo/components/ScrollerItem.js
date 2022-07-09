import React from 'react'
import ReactDOM from 'react-dom'

//
class ScrollerItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      offsetTop: 0,
    }
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
    const { offsetTop } = rect
    this.setState({ offsetTop })
  }

  /* ----------------------------------------- 绑定方法 ----------------------------------------- */

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render() {
    const { offsetTop } = this.state
    const { children, viewPortStart, viewPortEnd, height } = this.props
    const isVisible = offsetTop < viewPortEnd && offsetTop > viewPortStart

    return (
      <div
        className="scroll-list__item"
        style={{ height }}
      >
        {
          isVisible && children
        }
      </div>
    )
  }
}

export default ScrollerItem
