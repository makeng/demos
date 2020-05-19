/*----------------------------------------------------------------------------------
* about:购物车的状态管理
* author:马兆铿（13790371603 810768333@qq.com）
* date:2019-10-10
* ----------------------------------------------------------------------------------*/
const module = {
  state: {
    sum: 0,
  },

  mutations: {
    add (state, n) {
      state.sum += n
      setTimeout(() => {
        state.sum += 5
      }, 1000)
    },
    sub (state, n) {
      state.sum -= n
    }
  },

  actions: {
    delayAdd ({ commit }, n) {
      let cnt = 0
      const ADD_TIMES = 10
      const ADD_TIME_GAP = 100

      const timer = setInterval(() => {
        cnt += 1
        if (cnt < ADD_TIMES) {
          commit('add', n / ADD_TIMES)
        } else {
          clearInterval(timer)
        }
      }, ADD_TIME_GAP)
    }
  },

  getters: {
    getMoney: state => () => {
      return `¥${state.sum}`
    }
  }
}

export default module
