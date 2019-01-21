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

const ITEM_HEIGHT = 40;

//
class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: new Film(),
      screen: {start: 0, end: 999}
    };
  }

  /* ----------------------------------------- 生命周期 ----------------------------------------- */
  componentDidMount() {
    const el = document.getElementsByClassName("scroller")[0];
    console.log(el);
    on(el, "scroll", e => {
      this.onScroll(e);
    });
  }

  /* ----------------------------------------- 自定义方法 ----------------------------------------- */


  /* ----------------------------------------- 绑定方法 ----------------------------------------- */
  onScroll(e) {
    const target = e.target;
    const scrollHeight = target.scrollHeight; // 真正高度
    const offsetHeight = target.offsetHeight; //窗口高度
    const scrollTop = target.scrollTop; // 滚动了多少

    const screen = {
      start: parseInt(target.scrollTop / ITEM_HEIGHT),
      end: parseInt((target.scrollTop + target.offsetHeight) / ITEM_HEIGHT)
    };

    this.setState({screen});

    // 触底
    if (offsetHeight + scrollTop + 100 >= scrollHeight) {
      const {film} = this.state;
      film.getMore();
      this.setState({film});
    }
  }

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render() {
    const {film, screen} = this.state;
    const OFFSET = 3;
    console.log(screen);
    return (
      <div className="scroller">
        <List id="scroll-list" onScroll={this.onScroll}>
          {
            film.list.map(item =>
              <div
                style={{height: `${ITEM_HEIGHT}px`}}
                key={item.id}
                className="item-wrap"
              >
                {
                  (item.id <= screen.end - OFFSET && item.id >= screen.start + OFFSET) &&
                  <Item extra={"我的顺序是：" + item.id}>{item.desc}</Item>
                }
              </div>
            )
          }
        </List>
      </div>
    );
  }
}

export default Screen;
