/* -----------------------------------------
about：此文件是登录页面
author：苏昱霖
date：2017年12月18日
-----------------------------------------*/
/* ----------------------------------------- 开始运行 ----------------------------------------- */
import React, {PureComponent, PropTypes} from "react";
import {film} from "./Film";
import "../../style/pages/Scroller.less";
import {List} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

//
class Scroller extends React.Component {
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
      <div className="scroller">
        <List renderHeader={() => "无限滚动"} className="my-list">
          {
            film.list.map(item =>
              <Item>{item.desc}</Item>
            )
          }
        </List>
      </div>
    );
  }
}

export default Scroller;
