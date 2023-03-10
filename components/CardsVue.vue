<template>
  <div class="flex flex-col items-center div">
    <div class="flex justify-around w-3xl div1">
      <div class=" w-40 h-14 flex items-center">
        <img src="/instacart.png" class="mx-auto w-28">
      </div>
      <div class="w-40 h-14 flex items-center">
        <img src="/salesfore.png" class="mx-auto w-16">
      </div>
      <div class="w-40 h-14 flex items-center">
        <img src="/amazon.png" class="mx-auto w-28">
      </div>
      <div class="w-40 h-14 flex items-center">
        <img src="/slack.png" class="mx-auto w-24">
      </div>
    </div>
    <div class="mt-8 flex justify-around w-3xl div2">
      <div class="w-40 h-14 flex items-center">
        <img src="/shopify.png" class="mx-auto w-28">
      </div>
      <div class="w-40 h-14 flex items-center">
        <img src="/google.png" class="mx-auto w-24">
      </div>
      <div class="w-40 h-14 flex items-center">
        <img src="/lyft.png" class="mx-auto w-12">
      </div>
      <div class="w-40 h-14 flex items-center">
        <img src="/zoom.png" class="mx-auto w-24">
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
 .div{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px auto !important;
 }
 .div1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
 }
 .div1 div{
  margin-top: 50px;
 }
 .div2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
 }
 .div2 div{
  margin-top: 50px;
 }
}
</style>
