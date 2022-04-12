import React from 'react'
import './index.less'
import { List } from 'antd-mobile'

const { Item } = List
const { Brief } = Item

// 沙盒
class Sandbox extends React.PureComponent {
  render() {
    const { key, value } = this.props
    return (
      <Item key={key}>
        <Brief>{key}</Brief>
        <Brief>{JSON.stringify(value)}</Brief>
      </Item>
    )
  }
}

export default Sandbox
