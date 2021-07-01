<!----------------------------------------------------------------------------------
about：首页
author：马兆铿
date：2019-08-01
----------------------------------------------------------------------------------->

<template>
  <div class="home">
    <h1>页面列表</h1>
    <van-cell
        v-for="item in list"
        :title="item.chName"
        :label="item.desc"
        :to="item.path"
        is-link
    />
  </div>
</template>

<script>
  import { routes } from '../../plugins/router'

  export default {
    name: 'Home',
    components: {},
    data () {
      return {
        list: this.getListFromRoutes()
      }
    },
    created () {
      console.log(this.list)
    },
    methods: {
      /* ----------------------------------------- 绑定方法 ----------------------------------------- */

      /* ----------------------------------------- 自定义方法 ----------------------------------------- */
      getListFromRoutes () {
        return routes.filter(item => {
          const pathSplit = item.path.split('/')
          return pathSplit.length === 2 && pathSplit[1] // 二级路由
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .home {
    h1 {
      padding: 10/37rem;
      font-size: 20/37rem;
    }
  }
</style>
