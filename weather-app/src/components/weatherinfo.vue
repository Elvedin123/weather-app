<template>
  <div class="main-container">
    <SearchBox/>
    <div class="weather-container">
    <h2>hello world</h2>
    <p>xd</p>
    </div>
  </div>
</template>

<script >
import SearchBox from './SearchBox.vue'
export default {
  components: {
  SearchBox
}
}
</script>

<style v-if="true">
@media screen and (max-width: 480px) {
  .main-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .weather-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    background-color: #424242;
    color:white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
}
</style>