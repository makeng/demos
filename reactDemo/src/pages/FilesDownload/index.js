/*----------------------------------------------------------------------------------
* about:页面
* author:马兆铿
* date:2019-3-22
* ----------------------------------------------------------------------------------*/

/* ----------------------------------------- 开始运行 ----------------------------------------- */
import React, {PureComponent, PropTypes} from "react";
import "../../style/pages/FilesDownload.less";
import {List} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

//
class FilesDownload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [1, 2, 3]
    };
  }

  /* ----------------------------------------- 生命周期 ----------------------------------------- */
  componentDidMount() {
    setTimeout(() => {
      const iframeHtml = document.getElementsByClassName("files-iframe");
      console.log("iframe内容", iframeHtml);
    }, 300);
  }

  /* ----------------------------------------- 自定义方法 ----------------------------------------- */


  /* ----------------------------------------- 绑定方法 ----------------------------------------- */

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render() {
    const {list} = this.state;
    return (
      <div className="page-files">
        <List renderHeader={() => "文件列表"} className="my-list">
          <Item>
            <Brief>快应用最新rpk：com开头：正式，test开头：测试</Brief>
            <iframe className="files-iframe" src="http://makeng.xyz:8005/oppo/new"/>
          </Item>
          <Item>
            <Brief>快应用历史rpk</Brief>
            <iframe className="files-iframe" src="http://makeng.xyz:8005/oppo/history"/>
          </Item>
        </List>
      </div>
    );
  }
}

export default FilesDownload;
