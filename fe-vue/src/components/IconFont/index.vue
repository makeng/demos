<!----------------------------------------------------------------------------------
about：遥控按键的 icon，传入 type 即可，从 iconfont 上选择 class
author：马兆铿
date：2019-08-01
----------------------------------------------------------------------------------->

<template>
  <i
      class="iconfont"
      :class="`icon-${type}`"
      :style="{
        fontSize: `${size / 37}rem`,
        color
      }"
  ></i>
</template>

<script>
  export default {
    name: 'IconFont',
    props: {
      type: { default: 'tick' },
      size: { default: 36 },
      color: { default: '#2a2a2a' }
    },
  }
</script>
