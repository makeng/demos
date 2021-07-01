<!----------------------------------------------------------------------------------
about：首页
author：马兆铿
date：2020-05-19
----------------------------------------------------------------------------------->

<template>
  <div class="less">
    <div class="less__basic">Hello world!</div>
  </div>
</template>

<script>
  export default {
    name: 'Less',
    components: {},
    data () {
      return {}
    },
    methods: {
      /* ----------------------------------------- 绑定方法 ----------------------------------------- */
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .less {
    &__basic { // 嵌套
      #bundle() {
        dark: black;
        light: #ccc;
        .dark-theme {
          color: #fff;
        }
        .light-theme {
          color: #000;
        }
      }

      .bordered {
        border: 2px solid blue;
      }

      @min768: ~"(min-width: 320px)";

      margin: 30/37rem;
      width: 100/37rem;
      height: 100/37rem;
      .bordered(); // 混合
      background: #bundle[dark]; // 映射
      #bundle.dark-theme(); // 命名空间
      @media @min768 {
        // 转义
        font-size: 30/37rem;
      }
    }
  }
</style>
