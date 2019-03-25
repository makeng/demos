/*----------------------------------------------------------------------------------
* about:页面
* author:马兆铿
* date:2019-1-15
* ----------------------------------------------------------------------------------*/

/* ----------------------------------------- 开始运行 ----------------------------------------- */
import React, {PureComponent, PropTypes} from "react";
import {Link} from "react-router-dom";
import "../../style/pages/HomePage.less";
import {List} from 'antd-mobile';
import {route} from "../route";

const Item = List.Item;
const Brief = Item.Brief;

//
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* ----------------------------------------- 生命周期 ----------------------------------------- */
  componentDidMount() {

  }

  /* ----------------------------------------- 自定义方法 ----------------------------------------- */


  /* ----------------------------------------- 绑定方法 ----------------------------------------- */

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render() {
    return (
      <List renderHeader={() => "页面列表"} className="my-list">
        {
          route.map(item =>
            <Link
              to={item.path}
              key={item.path}
            >
              <Item>{item.name}</Item>
            </Link>
          )
        }
      </List>
    );
  }
}

export default HomePage;
