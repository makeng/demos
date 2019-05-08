/*----------------------------------------------------------------------------------
* about:页面
* author:马兆铿
* date:2019-5-8
* ----------------------------------------------------------------------------------*/

/* ----------------------------------------- 开始运行 ----------------------------------------- */
import React, { PureComponent, PropTypes } from "react";
import { List } from "antd-mobile";
import ChartTime from "./components/ChartTime";

const Item = List.Item;
const Brief = Item.Brief;

//
class ChartHandle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* ----------------------------------------- 生命周期 ----------------------------------------- */
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  /* ----------------------------------------- 自定义方法 ----------------------------------------- */

  /* ----------------------------------------- 绑定方法 ----------------------------------------- */

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render() {
    return (
      <div className="page-chart">
        <List renderHeader={() => "大数组"} className="my-list">
          <Item>
            <Brief>分时处理</Brief>
            <ChartTime/>
          </Item>
        </List>
      </div>
    );
  }
}

export default ChartHandle;
