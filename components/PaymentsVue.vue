<template>
  <div class="mt-40">
    <div class="w-3xl mx-auto text-purple-500 font-bold">
      <h2>Unified platform</h2>
    </div>
    <div class="w-3xl mx-auto mt-4 text-4xl">
      <h1>A fully integrated suite of</h1>
      <h1>payments products</h1>
    </div>
    <div id="div" class="flex mx-auto justify-between mt-10 w-3xl">
      <div id="div2">
        <p>We bring together everything that’s required to build</p>
        <p>websites and apps that accept payments and send payouts</p>
        <p>globally. Stripe’s products power payments <b class="text-purple-500">for online and in-</b></p>
        <p class="text-purple-500 font-bold">
          person retailers, subscriptions businesses, software
        </p>
        <p><b class="text-purple-500">platforms and marketplaces,</b> and everything in between.</p>
      </div>
      <div id="div3">
        <p>We also help companies <b class="text-purple-500">beat fraud, send invoices,</b></p>
        <p class="text-purple-500 font-bold">
          issue virtual and physical cards, reduce friction at
        </p>
        <p class="text-purple-500 font-bold">
          checkout, get financing, manage business spend,
        </p>
        <p>and much more.</p>
      </div>
    </div>
    <div class="mt-10 w-3xl mx-auto text-white">
      <button class="bg-purple-500 w-44 h-8 rounded-3xl">
        Start with payments
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentsVue'
}
</script>

<style scoped>
@media (max-width:767px){
 #div{
  display: flex;
  flex-direction: column;
  margin: 0px auto !important;
 }
 #div2{
    margin-top: 30px;
 }
 #div3{
    margin-top: 30px;
 }
}
</style>
