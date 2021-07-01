<template>
  <div id="app">
    <router-view/>
    <debug-block position="bottom" />
  </div>
</template>

<script>
  import { DebugBlock } from './components'

  export default {
    name: 'app',
    components: { DebugBlock }
  }
</script>

<style lang="less">
  @import "./assets/style/common.less";
  @import "assets/style/var.less";
  @import "assets/style/vant.reset.less";

  #app {
    flex: 1;
    background-color: @color-bg;
  }
</style>
