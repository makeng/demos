import asyncRoute from '../utils/asyncRoute'
//样式
import '../style/reset.less'
/*-------------------------------------------- 路由对象 --------------------------------------------*/
//组件
const HomePage = asyncRoute(() => import('./HomePage'))
const ScrollerEqualHeightDemo = asyncRoute(() => import('./ScrollerEqualHeightDemo'))
const ScrollerAutoHeightDemo = asyncRoute(() => import('./ScrollerAutoHeightDemo'))
const ScrollerAutoHeightCombineDemo = asyncRoute(() => import('./ScrollerAutoHeightCombineDemo'))
const ListItemUpdate = asyncRoute(() => import('./ListItemUpdate'))
const ChartHandle = asyncRoute(() => import('./ChartHandle'))
const Leakage = asyncRoute(() => import('./Leakage'))

//route
export const route = [
  {
    name: '首页',
    path: '/',
    component: HomePage
  },
  {
    name: '无限滚动-等高item',
    path: '/ScrollerEqualHeightDemo',
    component: ScrollerEqualHeightDemo
  },
  {
    name: '无限滚动-高度不限定item',
    path: '/ScrollerAutoHeightDemo',
    component: ScrollerAutoHeightDemo
  },
  {
    name: '无限滚动-高度自动合并',
    path: '/ScrollerAutoHeightCombineDemo',
    component: ScrollerAutoHeightCombineDemo
  },
  {
    name: '列表项更新',
    path: '/ListItemUpdate',
    component: ListItemUpdate
  },
  {
    name: '图表性能',
    path: '/ChartHandle',
    component: ChartHandle
  },
  {
    name: '内存泄漏',
    path: '/Leakage',
    component: Leakage
  }
]

/*-------------------------------------------- 热加载设置 --------------------------------------------*/
// 为了消除 react-hot-loader code split 没有更新的BUG，作用是热加载。
if (process.env.NODE_ENV !== 'production') {
  // ... 有多少异步模块就 require 多少，不可以使用变量或者对象来require
  require('./ScrollerEqualHeightDemo')
  require('./HomePage')
  require('./ListItemUpdate')
  require('./ChartHandle')
  require('./Leakage')
}
