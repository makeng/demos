import React from 'react'
import './index.less'
import { List } from 'antd-mobile'

const { Item } = List
const { Brief } = Item

// 沙盒
class ListItem extends React.PureComponent {
  render() {
    const { data } = this.props
    return (
      <Item>
        <Brief>{data.key}</Brief>
        <Brief>{JSON.stringify(data.value)}</Brief>
      </Item>
    )
  }
}

export default ListItem
