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
      margin-left: 80px;
      color: #313131;
      font-size: 15px;


      appearance: none;
      border: none;
      outline: none;
      background: none;

      box-shadow: 0px  0px 9px rgba(0, 0, 0, .25);
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 0px 16px 0px 16px;
      transition: 0.4s;
    }
.search-box .search-bar:focus{
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}
}
</style>