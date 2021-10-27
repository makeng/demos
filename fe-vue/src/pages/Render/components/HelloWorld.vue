<template>
  <div class="hello">
    <div>number: {{ num }}</div>
    <div>object: {{ l1.l2.l3.l4 }}</div>
    <ul>
      <li>array:</li>
      <li v-for="item in arr" :key="item.id">
        {{ item }}
      </li>
    </ul>
    <ul>
      <li>array from props:</li>
      <li v-for="item in arrOuter" :key="item.id">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    arrOuter: Array
  },
  data() {
    return {
      num: 0,
      l1: { l2: { l3: { l4: 0 } } },
      arr: [
        { item: { id: 0, value: 1 } },
        { item: { id: 1, value: 2 } }
      ],
    }
  },
  mounted() {
    const addAllData = () => {
      this.num += 1
      this.l1.l2.l3.l4 += 1
      this.arr[0].item.value += 1
      this.arr[1].item.value += 1
    }

    addAllData()
    setInterval(() => {
      //  addAllData()
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
