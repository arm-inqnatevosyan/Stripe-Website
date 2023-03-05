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
import NavBar from '~/components/NavBarVue.vue'
import Cards from '~/components/CardsVue.vue'
import Payments from '~/components/PaymentsVue.vue'
import Designed from '~/components/DesignedVue.vue'
import Technology from '~/components/TechnologyVue.vue'
import Global from '~/components/GlobalVue.vue'
import Stripe from '~/components/StripeVue.vue'
import Footers from '~/components/FootersVue.vue'
export default {
  name: 'IndexPage',
  components: { NavBar, Home, Cards, Payments, Designed, Technology, Global, Stripe, Footers }
}
</script>
