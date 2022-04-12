import asyncRoute from "../utils/asyncRoute";
//样式
import "../style/reset.less";
/*-------------------------------------------- 路由对象 --------------------------------------------*/
//组件
const HomePage = asyncRoute(() => import("./HomePage"));
const ScrollerEqualHeightDemo = asyncRoute(() => import("./ScrollerEqualHeightDemo"));
const ScrollerAutoHeightDemo = asyncRoute(() => import("./ScrollerAutoHeightDemo"));
const ScrollerAutoHeightCombineDemo = asyncRoute(() => import("./ScrollerAutoHeightCombineDemo"));
const Sandbox = asyncRoute(() => import("./Sandbox"));
const ChartHandle = asyncRoute(() => import("./ChartHandle"));
//route
export const route = [
  {
    name: "首页",
    path: "/",
    component: HomePage
  },
  {
    name: "无限滚动-等高item",
    path: "/ScrollerEqualHeightDemo",
    component: ScrollerEqualHeightDemo
  },
  {
    name: "无限滚动-高度不限定item",
    path: "/ScrollerAutoHeightDemo",
    component: ScrollerAutoHeightDemo
  },
  {
    name: "无限滚动-高度自动合并",
    path: "/ScrollerAutoHeightCombineDemo",
    component: ScrollerAutoHeightCombineDemo
  },
  {
    name: "沙盒",
    path: "/Sandbox",
    component: Sandbox
  },
  {
    name: "图表",
    path: "/ChartHandle",
    component: ChartHandle
  }
];

/*-------------------------------------------- 热加载设置 --------------------------------------------*/
// 为了消除 react-hot-loader code split 没有更新的BUG，作用是热加载。
if (process.env.NODE_ENV !== "production") {
  // ... 有多少异步模块就 require 多少，不可以使用变量或者对象来require
  require("./ScrollerEqualHeightDemo");
  require("./HomePage");
  require("./Sandbox");
  require("./ChartHandle");
}
