import React from 'react'
import './index.less'
import Item from './item'

// 沙盒
class Sandbox extends React.PureComponent {
  constructor(props) {
    super(props)

    function createItem(key, value) {
      return { key, value }
    }

    this.state = {
      list: [
        createItem(0, createItem(0, 'Cat')),
        createItem(1, createItem(0, 'Boy')),
        createItem(2, createItem(0, 'Girl'))
      ]
    }
  }

  /* ----------------------------------------- 生命周期 ----------------------------------------- */
  componentDidMount() {
    setTimeout(() => {

      const { list } = this.state
      const nextList = JSON.parse(JSON.stringify(list)) // can update
      //  const nextList = [...list] // can't update
      nextList[0].value.value = 'Dog'
      this.setState({ list: nextList })

    }, 1000)
  }

  /* ----------------------------------------- 自定义方法 ----------------------------------------- */


  /* ----------------------------------------- 绑定方法 ----------------------------------------- */

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render() {
    const { list } = this.state
    return (
      <div className="page-files">
        {list.map((item) => {
          return (
            <Item value={item.value} />
          )
        })}
      </div>
    )
  }
}

export default Sandbox
