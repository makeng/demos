/*-------------------------------------------------------------------------------------------------------------------
* about:页面的初始位置。有热加载的总设置。
* author:苏昱霖
* date:2017-12-18
* -------------------------------------------------------------------------------------------------------------------*/

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './pages/Root'

// 定义要挂载的 DOM 节点
const mountNode = document.getElementById('app')

// 封装 render 函数
const render = Component => {
  ReactDOM.render(
    <Component />,
    mountNode
  )
}

// 初始化调用
render(Root)

// 配置需要热模块替换的条件
if (module.hot && process.env.NODE_ENV === 'development') {
  // 处理对特定依赖的更改
  if (module.hot) {
    module.hot.accept('./pages/Root', () => {
      render(Root)
    })
  }
}
