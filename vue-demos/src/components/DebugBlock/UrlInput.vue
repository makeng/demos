<!-------------------------------------------------------------------------------------------
about:调试框的输入部分
author：马兆铿
date：2017-11-24
-------------------------------------------------------------------------------------------->
<template>
  <div class="debug-block__field">
    <p>
      访问本地192.168.
      <input class="debug-block__ip" type="text" v-model="ipInput.ip0"/>.
      <input class="debug-block__ip" type="text" v-model="ipInput.ip1"/>
      <span> : </span>
      <input class="debug-block__ip" type="text" v-model="ipInput.port"/>
      <button
        class="debug-block__button"
        @click="linkToClick"
      >前进
      </button>
    </p>
    <p>
      自定义：<input class="debug-block__custom" type="text" v-model="ipCustom"/>
      <button type="button" class="debug-block__button" @click="linkToCustomClick">前进</button>
    </p>
    <p>
      <a
        class="debug-block__link"
        @click="locationTo(testServer)"
      >访问测试服务
      </a>
    </p>
  </div>
</template>

<script>
  //
  export default {
    name: 'UrlInput',
    props: {
      testServer: {default: ''}
    },
    data() {
      return {
        ipInput: {
          ip0: '',
          ip1: '',
          port: ''
        },
        ipCustom: ''
      }
    },
    /*----------------------------------------- 生命周期 -----------------------------------------*/
    mounted() {
      this.loadHistoryText()
    },
    methods: {
      /*----------------------------------------- 绑定方法 -----------------------------------------*/
      /*  跳转点击
        * */
      linkToClick() {
        const {ip0, ip1, port} = this.ipInput

        localStorage.setItem('ipInput', JSON.stringify(this.ipInput)) // 保存
        this.locationTo(`http://192.168.${ip0}.${ip1}:${port}`)
      },

      /*  跳转到自定义点击
        * */
      linkToCustomClick() {
        localStorage.setItem('ipCustom', this.ipCustom) // 保存
        this.locationTo(this.ipCustom)
      },

      /*----------------------------------------- 自定义方法 -----------------------------------------*/
      /**
       * 加载历史文本
       */
      loadHistoryText() {
        // 自动填写资料
        const ipInputStr = localStorage.getItem('ipInput')
        if (ipInputStr) this.ipInput = JSON.parse(ipInputStr)
        const ipCustomStr = localStorage.getItem('ipCustom')
        if (ipCustomStr) this.ipCustom = ipCustomStr
      },

      /**
       * 跳转。参数带上
       */
      locationTo(link) {
        location.href = `${link}?${location.search}`
      }
    }
  }
</script>

<style lang="less" scoped>
  input {
    display: inline-block;
    border: none;
    border-bottom: 1px solid #fff;
    text-align: center;
    color: #000;
    box-sizing: content-box;
    vertical-align: middle;
    @height: 22/37rem;
    height: @height;
    line-height: @height;
    border-radius: 3/37rem;
  }

  .debug-block__ip {
    width: 1rem;
  }

  .debug-block__custom {
    width: 45%;
  }

  .debug-block__button {
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

  .debug-block__link {
    text-decoration: underline;
  }
</style>
