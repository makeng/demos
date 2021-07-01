<!----------------------------------------------------------------------------------
about：首页
author：马兆铿
date：2019-08-01
----------------------------------------------------------------------------------->

<template>
  <div class="cart">
    <p class="cart__price">总价：{{sum}}</p>
    <div class="cart__buttons">
      <button @click="onClickAdd">Add</button>
      <button @click="onClickSub">Sub</button>
      <button @click="onClickDelayAdd">Delay add</button>
    </div>
  </div>
</template>

<script>
  import store from '../../store'

  export default {
    name: 'cart',
    components: {},
    data () {
      return {}
    },
    computed: {
      sum () {
        return store.getters.getMoney()
      }
    },
    created () {
      console.log(store.state)
    },
    methods: {
      /* ----------------------------------------- 绑定方法 ----------------------------------------- */
      onClickAdd () {
        store.commit('add', 1)
      },

      onClickSub () {
        store.commit('sub', 1)
      },

      onClickDelayAdd () {
        store.dispatch('delayAdd',10)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .cart {
    &__buttons {
      margin: 10/37rem 0;

      button {
        margin-left: 10/37rem;
        padding: 5/37rem 0;
        width: 90/37rem;
        background: #fff;
        border-radius: 5/37rem;
      }
    }
  }
</style>
