/*----------------------------------------------------------------------------------
* about:状态管理
* author:马兆铿（13790371603 810768333@qq.com）
* date:2019-10-10
* ----------------------------------------------------------------------------------*/
import Vuex from 'vuex'
import Vue from 'vue'
import cart from './modules/cart'

// 状态管理
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cart
  },
  strict: debug
})
