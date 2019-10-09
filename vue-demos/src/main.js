import Vue from 'vue'
import VueRouter from 'vue-router'
import { useVant } from './plugins/vant'
import { useFastClick } from './plugins/fastclick'

import App from './App.vue'
import { routes } from './plugins/router'

// 配置
Vue.config.productionTip = false

// 插件：UI组件
useVant(Vue)

// 插件：fastclick
useFastClick()

// 插件：路由
Vue.use(VueRouter)
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 事件传播中心，参考 https://medium.com/vuejobs/create-a-global-event-bus-in-vue-js-838a5d9ab03a
Vue.prototype.$eventHub = new Vue() // Global event bus

// 创建Vue
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

export {
  router
}
