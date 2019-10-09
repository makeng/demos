<!-------------------------------------------------------------------------------------------
about：此文件是调试组件，通过点击屏幕某处触发调试链接的出现。
author：马兆铿
date：2017-11-24
-------------------------------------------------------------------------------------------->
<template>
  <div class="debug-block">
    <!--触发入口出现的按键-->
    <button
        class="debug-block__trigger"
        :class="`debug-block__trigger--${position}`"
        @click="btnClick"
    ></button>
    <!--入口-->
    <div
        class="debug-block__entry absolute-y-middle"
        v-show="isShowEntry"
    >
      <!-- 关闭按钮 -->
      <button class="debug-block__close" @click="isShowEntry = false">
        <span>X</span>
      </button>
      <!-- 地址跳转 -->
      <url-input test-server="http://192.168.2.201:8080"/>
      <!-- console框 -->
      <console-button />
    </div>
  </div>
</template>

<script>
  import UrlInput from './UrlInput'
  import ConsoleButton from './ConsoleButton'
  //
  export default {
    name: 'DebugBlock',
    props: {
      position: {
        type: String,
        required: true,
        validator: function (value) {
          // 这个值必须匹配下列字符串中的一个
          return ['top', 'bottom'].indexOf(value) !== -1
        }
      },
      testServer: { default: '' } // 测试服务器地址
    },
    components: { UrlInput, ConsoleButton },
    data () {
      return {
        isShowEntry: false, // 是否显示
        entryClickCnt: 0,
        entryClickTimer: null
      }
    },
    methods: {
      /*----------------------------------------- 自定义方法 -----------------------------------------*/

      /*----------------------------------------- 绑定方法 -----------------------------------------*/
      /*  隐藏按钮点击
        * */
      btnClick () {
        this.entryClickCnt++
        clearTimeout(this.entryClickTimer)
        this.entryClickTimer = setTimeout(() => {
          //要求2s内点击多次，否则不能进入调试
          this.entryClickCnt = 0
        }, 2000)
        if (this.entryClickCnt >= 5) {
          this.entryClickCnt = 0
          this.isShowEntry = true
        }
      },
    }
  }
</script>

<style lang="less" scoped>
  .debug-block__trigger {
    position: fixed;
    z-index: 100;
    width: 1rem;
    height: 0.5rem;
    background: transparent;
    &--bottom {
      bottom: 0;
      left: 0;
    }

    &--top {
      top: 0;
      left: 0;
    }
  }

  .debug-block__entry {
    position: fixed;
    left: 0;
    line-height: 1rem;
    width: 100%;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-size: 14/37rem;
    padding: 30/37rem 10/37rem 20/37rem;

    button {
      padding: 0 20/37rem;
      height: 0.6rem;
      line-height: 0.6rem;
      background: #ccc;
      display: inline-block;
      margin-left: 0.2rem;
      border-radius: 0.1rem;
      vertical-align: middle;

      &:active {
        background: #aaaaaa;
      }
    }
  }

  .debug-block__close {
    padding: 2/37rem 0 0 !important;
    @height: 20/37rem;
    height: @height;
    line-height: @height;
    width: @height !important;
    position: absolute;
    right: 5/37rem;
    top: 5/37rem;
  }
</style>
