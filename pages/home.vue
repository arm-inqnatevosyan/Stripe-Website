<template>
  <div class="w-full mx-auto flex justify-center full">
    <div class="w-33xl h-1/4 z-10 font-sans flex justify-between mx-auto mt-8 main">
      <div class="font-sans texts">
        <div class="text-7xl font-bold one-list">
          <h3>Financial</h3>
          <h3>infrastructure</h3>
          <h3>for the internet</h3>
        </div>
        <div class="mt-7 font-sans">
          <p>Millions of companies of all sizes—from startups to Fortune</p>
          <p>500s—use Stripe’s software and APIs to accept payments,</p>
          <p>send payouts, and manage their businesses online.</p>
        </div>
        <div class="flex mt-7">
          <button class="rounded-3xl bg-slate-800 w-28 h-8 text-white">
            Start Now
          </button>
          <button class="ml-4 rounded-3xl">
            Contact sales
          </button>
        </div>
      </div>
      <div class="w-70 h-3xl iphone">
        <img src="/technology.png" class="w-full h-96">
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'HomeVue'
}
</script>
<style scoped>
.full{
    width: 100%;
    height: 50vh;
}
.main{
    position: absolute;
    z-index: 10;
    margin-top: -130px !important;
}
@media (max-width:767px){
  .full{
    width: 100%;
    height: 40vh;
}
 .iphone{
    display: none;
 }
 .texts{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
 }
 .one-list{
    font-size: 50px;
 }
  .main{
    width: 100%;
  }
}
@media (max-width:560px){
  .texts{
    margin-left: 50px;
  }
}
</style>
