<template>
  <HelloWorld :arrOuter="arr" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      arr: [
        { item: { id: 0, value: 1 } },
        { item: { id: 1, value: 2 } }
      ],
    }
  },
  mounted() {
    const addAllData = () => {
      this.arr[0].item.value += 1
      this.arr[1].item.value += 1
    }

    setInterval(() => {
      addAllData()
    }, 1000)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  font-size: 20px;
}
</style>
