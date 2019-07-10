/*----------------------------------------------------------------------------------
* about:页面
* author:马兆铿
* date:2019-3-22
* ----------------------------------------------------------------------------------*/

/* ----------------------------------------- 开始运行 ----------------------------------------- */
import React, { PropTypes } from "react"
import "../../style/pages/FilesDownload.less"
import { List } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

//
class FilesDownload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [1, 2, 3]
    }
  }

  /* ----------------------------------------- 生命周期 ----------------------------------------- */
  componentDidMount() {
    setTimeout(() => {
      const iframeHtml = document.getElementsByClassName("files-iframe")
      console.log("iframe内容", iframeHtml)
    }, 300)
  }

  /* ----------------------------------------- 自定义方法 ----------------------------------------- */


  /* ----------------------------------------- 绑定方法 ----------------------------------------- */

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render() {
    const { list } = this.state
    return (
      <div className="page-files">
        <List renderHeader={() => "文件列表"} className="my-list">
          <Item>
            <Brief>OPPO/VIVO-IoT 快应用最新rpk</Brief>
            <Brief>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;一共2个文件</span>
              <ul className="page-files-tips">
                <li>com开头：正式版本，正式网络环境运行</li>
                <li>test开头：测试版本，测试网络环境运行</li>
              </ul>
            </Brief>
            <iframe className="files-iframe" src="http://203.195.160.236:8005/oppo/new" />
          </Item>
          <Item>
            <Brief>快应用历史rpk</Brief>
            <iframe className="files-iframe" src="http://203.195.160.236:8005/oppo/history" />
          </Item>
        </List>
      </div>
    )
  }
}

export default FilesDownload
