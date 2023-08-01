<template>
  
  <WeatherInfo/>
</template>

<script>
import WeatherInfo from "./components/WeatherInfo"
export default {
  name: 'App',
  components: {
    // data() {
    //   return {
    //     api_key: 'a9ff67f399b36859cce6be9611c7a086'
    //   }
    // },
    WeatherInfo
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
