/*----------------------------------------------------------------------------------
* about:数据对象
* author:马兆铿
* date:
* ----------------------------------------------------------------------------------*/
/* ----------------------------------------- 开始运行 ----------------------------------------- */
import React, {PureComponent, PropTypes} from "react";
import Film from "../Film";
import {List} from 'antd-mobile';
import {on} from "../../../utils/lib/dom";
import "../../../style/pages/Scroller.less";

const Item = List.Item;
const Brief = Item.Brief;

//
class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: new Film()
    };
  }

  /* ----------------------------------------- 生命周期 ----------------------------------------- */
  componentDidMount() {
    /*    const el = document.getElementById("scroll-list");
        console.log(el);
        on(el, "onscroll", e => {
          this.onScroll(e);
        });*/

    document.getElementById("scroll-list").onscroll = this.onScroll();


    //window.addEventListener('scroll', this.onScroll);
  }

  /* ----------------------------------------- 自定义方法 ----------------------------------------- */


  /* ----------------------------------------- 绑定方法 ----------------------------------------- */
  onScroll(e) {
    console.log(e);
  }

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render() {
    const {film} = this.state;
    return (
      <div className="screen">
        <List id="scroll-list" onScroll={this.onScroll}>
          {
            film.list.map(item =>
              <Item key={item.id}>{item.desc}</Item>
            )
          }
        </List>
      </div>
    );
  }
}

export default Screen;
