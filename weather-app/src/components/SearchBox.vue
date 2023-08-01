<template>
  <div class="search-box">
    <input type="text" class="search-bar" placeholder="Enter City"> 
  </div>
</template>

<script>
export default {

}
</script>

<style>
@media screen and (max-width: 480px){
.search-box{
  width: 100%;
  margin-bottom: 30px;
  margin-top: 30px;
}
.search-box .search-bar{
  display: block;
  width: 50%;
  padding: 5px;

  color: #313131;
  font-size: 15px;


  
}

}
</style>