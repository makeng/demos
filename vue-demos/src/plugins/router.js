// 页面
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Less from '../pages/Less'

const routes = [
  { chName: '首页', path: '/', component: Home, desc: '页面的列表' },
  { chName: '购物车', path: '/cart', component: Cart, desc: '状态管理、数值计算' },
  { chName: 'Less学习', path: '/less', component: Less, desc: 'Less基础用法' },
]

export {
  routes
}
