import React from 'react'
import './index.less'
import ListItem from './ListItem'
import { List } from 'antd-mobile'

const { Item } = List
const { Brief } = Item

// 列表项更新
class ListItemUpdate extends React.PureComponent {
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

      const nextList = [...list] // can't update
      // const nextList = JSON.parse(JSON.stringify(list)) // can update
      nextList[0].value.value = 'Dog'
      this.setState({ list: nextList })

      /*
            list[0].value.value = 'Dog'
            this.setState({})
      */
    }, 500)
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
            /*
               <Item key={item.key}>
                   <Brief>{item.key}</Brief>
                   <Brief>{JSON.stringify(item.value)}</Brief>
               </Item>
            */
            <ListItem key={item.key} data={item} />
          )
        })}
      </div>
    )
  }
}

export default ListItemUpdate
