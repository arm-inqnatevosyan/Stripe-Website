<template>
  <div id="main" class="w-full z-10 h-33xl bg-blue-900 flex justify-center mx-auto mb-40">
    <div class="flex flex-col w-33xl mt-40 text-white">
      <div id="main1" class="z-10">
        <h1 class="text-purple-500 font-bold">
          Global scale
        </h1>
        <p class="font-3xl font-bold mt-4 text-3xl">
          The backbone for
        </p>
        <p class="font-3xl font-bold text-3xl">
          global commerce
        </p>
        <div class="mt-4 text-slate-400">
          <p>
            Stripe makes moving money as easy and/p>
          </p>
          <p>programmable as moving data. Our teams are</p>
          <p>based in offices around the world and we process</p>
          <p>hundreds of billions of dollars each year for</p>
          <p>ambitious businesses of all sizes.</p>
        </div>
      </div>
      <div id="main2" class="z-10 mt-28 text-white grid grid-cols-4 tall1:grid-cols-2">
        <div class="text-slate-400">
          <h1 class="font-bold text-2xl text-white">
            250M+
          </h1>
          <p class="mt-3">
            Api requests per day,peaking at
          </p>
          <p>3,000 requests a second.</p>
        </div>
        <div class="text-slate-400">
          <h1 class="font-bold text-2xl text-white">
            99.999%
          </h1>
          <p class="mt-3">
            historical uptime for Stripe
          </p>
          <p>services.</p>
        </div>
        <div class="text-slate-400">
          <h1 class="font-bold text-2xl text-white">
            90%
          </h1>
          <p class="mt-3">
            of U.S adults have bought from
          </p>
          <p>businesses using Stripe.</p>
        </div>
        <div class="text-slate-400">
          <h1 class="font-bold text-2xl text-white">
            135+
          </h1>
          <p class="mt-3">
            currencies and payment
          </p>
          <p>methods supported.</p>
        </div>
      </div>
    </div>
    <div>
      <img id="img" src="/globe.png">
    </div>
  </div>
</template>
<script>
export default {
  name: 'GlobalVue'
}
</script>
<style scoped>
#main{
    position: relative;
}
#img{
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    z-index: 1;
}
@media (max-width:1024px){
    #main{
        height: auto !important;
    }
    #main2 div{
        margin-bottom: 30px;
        width: 100%;
    }
}
@media (max-width:576px){
    #main{
        height: auto !important;
    }
    #main2{
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
    }
    #main2 div{
        margin-top: 30px;
        width: 100%;
    }
}
</style>
