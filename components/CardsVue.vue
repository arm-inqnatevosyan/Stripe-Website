<template>
  <div id="div" class="flex flex-col items-center">
    <div id="div1" class="flex justify-around w-3xl">
      <div class=" w-40 h-14 flex items-center">
        <img src="/instacart.png" width="130" height="40" class="mx-auto">
      </div>
      <div class="w-40 h-14 flex items-center">
        <img src="/salesfore.png" width="70" class="mx-auto">
      </div>
      <div class="w-40 h-14 flex items-center">
        <img src="/amazon.png" width="130" class="mx-auto">
      </div>
      <div class="w-40 h-14 flex items-center">
        <img src="/slack.png" width="100" class="mx-auto">
      </div>
    </div>
    <div id="div2" class="mt-8 flex justify-around w-3xl">
      <div class="w-40 h-14 flex items-center">
        <img src="/shopify.png" width="120" class="mx-auto">
      </div>
      <div class="w-40 h-14 flex items-center">
        <img src="/google.png" width="100" class="mx-auto">
      </div>
      <div class="w-40 h-14 flex items-center">
        <img src="/lyft.png" width="50" class="mx-auto">
      </div>
      <div class="w-40 h-14 flex items-center">
        <img src="/zoom.png" width="100" class="mx-auto">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardVue'
}
</script>
<style scoped>
@media (max-width:767px){
 #div{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px auto !important;
 }
 #div1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
 }
 #div1 div{
  margin-top: 50px;
 }
 #div2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
 }
 #div2 div{
  margin-top: 50px;
 }
}
</style>
