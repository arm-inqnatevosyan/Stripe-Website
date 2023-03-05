<template>
  <div id="main" class="w-33xl flex mx-auto justify-between mb-40">
    <div class="flex flex-col">
      <h1 class="font-bold text-black text-2xl">
        Ready to get started?
      </h1>
      <div class="mt-4">
        <p>Explore Stripe Payments, or create an account</p>
        <p>instantly and start accepting payments. You can</p>
        <p>also contact us to design a custom package for</p>
        <p>your business.</p>
      </div>
      <div class="flex mt-7">
        <button class="rounded-3xl bg-purple-500 w-28 h-8 text-white">
          Start Now
        </button>
        <button class="ml-4 rounded-3xl">
          Contact sales
        </button>
      </div>
    </div>
    <div id="main1" class="flex">
      <div id="divs" class="mr-7">
        <h1 id="div" class="text-slate-800 font-bold pl-3">
          Always know what you pay
        </h1>
        <p class="mt-2 pl-3">
          Integrated per-transaction
        </p>
        <p class="pl-3">
          pricing with no hidden fees.
        </p>
        <button class="mt-3 pl-3 text-purple-500 rounded-3xl">
          Pricing details
        </button>
      </div>
      <div id="divs" class="mr-7">
        <p id="div" class="text-slate-800 font-bold  pl-3">
          Start your integration
        </p>
        <p class="mt-2 pl-3">
          Get up and running with Stripe
        </p>
        <p class="pl-3">
          in as little as 10 minutes.
        </p>
        <button class="rounded-3xl text-purple-500 mt-3 pl-3">
          API reference
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StripeVue'
}
</script>

<style scoped>
#div{
    border-left: 2px solid purple;
}
@media (max-width:780px){
    #main{
        display: flex;
        flex-direction: column;
    }
    #main1{
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        align-items: center;
        width: 100%;
    }
    #divs{
        width: 100%;
    }
    #main1 div:nth-child(2){
        margin-top: 30px;
    }
}
</style>
