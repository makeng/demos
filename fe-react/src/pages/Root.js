/*-------------------------------------------------------------------------------------------------------------------
* about:页面的根组件，需要把路由的内容放置到此处，来进行调试的热加载和路由加载。
* -------------------------------------------------------------------------------------------------------------------*/
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { route } from './route'

/*-------------------------------------------- 页面的根组件 --------------------------------------------*/
//页面的根组件
const Root = () => (
  <div>
    <Router key={Math.random()}>
      <div>
        {route.map((item, index) => {
          //路由加载
          return (
            <Route
              key={index}
              exact
              path={item.path}
              component={item.component}
            />
          )
        })}
      </div>
    </Router>
  </div>
)
export default Root
