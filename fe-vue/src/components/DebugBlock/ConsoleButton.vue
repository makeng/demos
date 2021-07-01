<!-------------------------------------------------------------------------------------------
about：此文件是调试组件，通过点击屏幕某处触发调试链接的出现。
author：马兆铿
date：2017-11-24
-------------------------------------------------------------------------------------------->
<template>
  <button @click="createVConsole">
    打开vConsole
  </button>
</template>

<script>
  import VConsole from 'vconsole'
  //
  export default {
    name: 'ConsoleButton',
    /*----------------------------------------- 生命周期 -----------------------------------------*/
    created () {
      // 根据环境，加载vConsole
      if (process.env.NODE_ENV !== 'production') {
        this.createVConsole()
      }
      console.log('当前环境是', process.env.NODE_ENV)
    },
    methods: {
      /*----------------------------------------- 自定义方法 -----------------------------------------*/


      /*----------------------------------------- 绑定方法 -----------------------------------------*/
      /**
       * 打开vConsole点击
       */
      createVConsole () {
        window.vConsole = new VConsole()
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
