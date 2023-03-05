<template>
  <div id="main" class="bg-blue-900 h-screen">
    <div id="div" class="flex mt-40 w-33xl justify-between mx-auto">
      <div class="mt-40">
        <div class="text-purple-500 font-bold">
          <h1>Designed for developers</h1>
        </div>
        <div class="text-white text-3xl">
          <p>Ship more quickly with</p>
          <p>powerful and easy-to-use</p>
          <p>APIs</p>
        </div>
        <div class="text-white font-light mt-8">
          <p>Save engineering time with unified payments</p>
          <p>functionality. We obsess over the maze of gateways,</p>
          <p>payments rails, and financial institutions that make up</p>
          <p>the global economic landscape so that your teams can</p>
          <p>build what you need on one platform.</p>
        </div>
        <div class="mt-6">
          <button class="bg-purple-500 w-36 h-8 rounded-3xl">
            Read the docs
          </button>
        </div>
      </div>
      <div id="code" class="mt-40">
        <img src="/code.png">
      </div>
    </div>
    <div id="aside" class="grid grid-cols-4 mt-20 w-33xl  mx-auto pb-8 tall:grid-cols-2 grid-rows-2">
      <div class="text-slate-400 ml-8 tall1:ml-0">
        <h1 class="text-white">
          Use Stripe with your stack
        </h1>
        <p class="mt-3">
          We offer client and server
        </p>
        <p>libraries in everything from</p>
        <p>React and PHP to .NET and iOS.</p>
        <p class="text-purple-500 mt-3">
          See libraries
        </p>
      </div>
      <div id="div1" class="text-slate-400 ml-8">
        <h1 class="text-white">
          Try no-code options
        </h1>
        <p class="mt-3">
          Customize and deploy
        </p>
        <p>payments interfaces directly</p>
        <p>from the Stripe Dashboard.</p>
        <p class="text-purple-500 mt-3">
          Explore no-code
        </p>
      </div>
      <div class="text-slate-400 ml-8 tall:ml-0">
        <h1 class="text-white">
          Explore prebuilt integrations
        </h1>
        <p class="mt-3">
          Integrate with systems including
        </p>
        <p>Adobe, Salesforce, and</p>
        <p>NetSuite, or sync Stripe data to</p>
        <p>your warehouse.</p>
        <p class="text-purple-500 mt-3">
          View connectors
        </p>
      </div>
      <div id="div1" class="text-slate-400 ml-8">
        <h1 class="text-white">
          Build an app on Stripe
        </h1>
        <p class="mt-3">
          Create a custom backend
        </p>
        <p>integration or interface within</p>
        <p>Stripe—make it just for your</p>
        <p>team or list it on the Stripe App</p>
        <p>Marketplace.</p>
        <p class="text-purple-500 mt-3">
          Learn about apps
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DesignedVue'
}
</script>
<style scoped>
#main{
  height: auto;
}
@media (max-width:576px){
  #aside{
  display: flex;
  flex-direction: column;
 }
 #aside div{
  margin-left: 0px !important;
 }
}
@media (max-width:768px){
 #main{
  height: auto !important;
  margin-top: 40px;
 }
}
@media (max-width:992px){
  #div{
  display: flex;
  flex-direction: column !important;
  align-items: center;
 }
 #code{
    margin-top: 20px;
 }
 #div1{
  margin-left: 20px !important;
 }
}
</style>
