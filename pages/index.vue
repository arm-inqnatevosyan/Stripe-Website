<template>
  <div>
    <NavBar />
    <Home />
    <Cards />
    <Payments />
    <Designed />
    <Technology />
    <Global />
    <Stripe />
    <Footers />
  </div>
</template>

<script>
import Home from './home.vue'
import NavBar from '~/components/NavBar.vue'
import Cards from '~/components/Cards.vue'
import Payments from '~/components/Payments.vue'
import Designed from '~/components/Designed.vue'
import Technology from '~/components/Technology.vue'
import Global from '~/components/Global.vue'
import Stripe from '~/components/Stripe.vue'
import Footers from '~/components/Footers.vue'
export default {
  name: 'IndexPage',
  components: { NavBar, Home, Cards, Payments, Designed, Technology, Global, Stripe, Footers }
}
</script>
