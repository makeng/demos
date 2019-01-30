import asyncRoute from "../utils/asyncRoute";
//样式
import "../style/reset.less";
/*-------------------------------------------- 路由对象 --------------------------------------------*/
//组件
const Scroller = asyncRoute(() => import("./Scroller"));
const HomePage = asyncRoute(() => import("./HomePage"));
//route
export const route = [
  {
    name: "首页",
    path: "/",
    component: HomePage
  },
  {
    name: "无限滚动",
    path: "/Scroller",
    component: Scroller
  }
];

/*-------------------------------------------- 热加载设置 --------------------------------------------*/
// 为了消除 react-hot-loader code split 没有更新的BUG，作用是热加载。
if (process.env.NODE_ENV !== "production") {
  // ... 有多少异步模块就 require 多少，不可以使用变量或者对象来require
  require("./Scroller");
  require("./HomePage")
}