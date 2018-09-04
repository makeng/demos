<template>
  <section class="container">
    <div>
      <app-logo />
      <h1>{{city}}</h1>
      <p>{{desc}}</p>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue';
  import { getWeather } from "../api";

  export default {
    components: {
      AppLogo
    },
    data() {
      return {
        city: "1",
        desc: ""
      }
    },
    async asyncData(context) {
      const res = await getWeather();
      console.log(res);
      if (res.status === 1000) {
        return {
          city: res.data.city,
          desc: res.data.ganmao
        };
      }
    },
    async created() {
    },
    methods: {}
  }
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

</style>

