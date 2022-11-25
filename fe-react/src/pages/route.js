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
const HooksStrange = asyncRoute(() => import('./HooksStrange'))

// facotry
const createItem = (name, path, component) => ({ name, path, component })

//route
export const route = [
  createItem('首页', '/', HomePage),
  createItem('无限滚动-等高item', '/ScrollerEqualHeightDemo', ScrollerEqualHeightDemo),
  createItem('无限滚动-高度不限定item', '/ScrollerAutoHeightDemo', ScrollerAutoHeightDemo),
  createItem('无限滚动-高度自动合并', '/ScrollerAutoHeightCombineDemo', ScrollerAutoHeightCombineDemo),
  createItem('列表项更新', '/ListItemUpdate', ListItemUpdate),
  createItem('图表性能', '/ChartHandle', ChartHandle),
  createItem('内存泄漏', '/Leakage', Leakage),
  createItem('Hooks 怪异现象', '/HooksStrange', HooksStrange),
]

/*-------------------------------------------- 热加载设置 --------------------------------------------*/
// 为了消除 react-hot-loader code split 没有更新的BUG，作用是热加载。
if (process.env.NODE_ENV !== 'production') {
  // ... 有多少异步模块就 require 多少，不可以使用变量或者对象来require
  require('./HooksStrange')
  require('./ScrollerEqualHeightDemo')
  require('./HomePage')
  require('./ListItemUpdate')
  require('./ChartHandle')
  require('./Leakage')
}
