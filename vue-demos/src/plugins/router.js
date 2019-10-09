// 页面
import Home from '../pages/Home'
import Cart from '../pages/Cart'

const routes = [
  { chName: '首页', path: '/', component: Home, desc: '页面的列表' },
  { chName: '购物车', path: '/cart', component: Cart, desc: '状态管理、数值计算' },
]

export {
  routes
}
