<template>
  <div class="w-33xl items-center justify-center mx-auto mt-40 pb-40">
    <div>
      <h1 class="text-purple-500 font-bold text-xl">
        Why Stripe
      </h1>
      <p class="mt-4 font-bold text-3xl">
        A technology-first approach to payments
      </p>
      <p class="mt-2 font-bold text-3xl">
        and finance
      </p>
    </div>
    <div class="mt-12 grid grid-rows-1 grid-cols-4 tall1:grid-cols-2 ml-0 main">
      <div class="text-slate-700">
        <h1 class="text-black font-bold pl-3 div">
          Close to the metal
        </h1>
        <div class="pl-3">
          <p class="mt-4">
            From <b class="text-purple-500">direct integrations</b> with
          </p>
          <p>card networks and banks to</p>
          <p>checkout flows in the browser,</p>
          <p>we operate on and optimize at</p>
          <p>every level of the financial stack.</p>
        </div>
      </div>
      <div class="text-slate-700 divp ml-8">
        <h1 class="text-black font-bold pl-3 div">
          Fastest-improving platform
        </h1>
        <div class="p-3">
          <p class="mt-4">
            We release <b class="text-purple-500">hundreds of features</b>
          </p>
          <p>and improvements each year to</p>
          <p>help you stay ahead of industry</p>
          <p>shifts. (On average, we deploy</p>
          <p>our production API 16x per day.)</p>
        </div>
      </div>
      <div class="text-slate-700 ml-8">
        <h1 class="text-black font-bold pl-3 div">
          Battle-tested reliability
        </h1>
        <div class="p-3">
          <p class="mt-4">
            Our systems operate with
          </p>
          <p><b class="text-purple-500">99.99%+</b> uptime and are highly</p>
          <p>scalable and redundant. Stripe</p>
          <p>is certified to the highest</p>
          <p>compliance standards.</p>
        </div>
      </div>
      <div class="text-slate-700">
        <h1 class="text-black font-bold pl-3 div">
          Intelligent optimizations
        </h1>
        <div class="p-3">
          <p class="mt-4">
            Our machine learning models
          </p>
          <p>train on <b class="text-purple-500">billions</b> of data points</p>
          <p>and help increase revenue</p>
          <p>across conversion, fraud,</p>
          <p>revenue recovery, and more.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TechnologyVue'
}
</script>
<style scoped>
.div{
    border-left: 2px solid purple;
}
@media (max-width:768px){
  .main{
  display: flex;
  flex-direction: column;
 }
 .main div{
  margin-left: 0px;
 }
}
@media (max-width:1024px){
 .main div{
  margin-left: 0px;
 }
}

</style>
