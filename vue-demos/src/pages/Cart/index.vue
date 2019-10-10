<!----------------------------------------------------------------------------------
about：首页
author：马兆铿
date：2019-08-01
----------------------------------------------------------------------------------->

<template>
  <div class="cart">
    购物车：{{count}}
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
      count () {
        return store.state.cart.count
      }
    },
    created () {
      console.log(store.state)
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .cart {
  }
</style>
