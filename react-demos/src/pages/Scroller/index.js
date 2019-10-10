/* -----------------------------------------
about：此文件是登录页面
author：苏昱霖
date：2017年12月18日
-----------------------------------------*/
/* ----------------------------------------- 开始运行 ----------------------------------------- */
import React, {PureComponent, PropTypes} from "react";
import "../../style/pages/Scroller.less";
import Screen from "./components/Screen"

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
      <div className="page">
        <header>无限滚动</header>
          <Screen/>
      </div>
    );
  }
}

export default Scroller;
