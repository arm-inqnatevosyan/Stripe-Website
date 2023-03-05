<template>
  <nav class="p-5 bg-transparent w-3xl h-80 mx-auto sm:w-full lg:w-3xl">
    <div class="flex items-center justify-between">
      <img src="/bg.png" class="absolute top-0 left-0 w-full h-80 z-0">
      <div class="h-10 z-10 flex items-center">
        <h1 class="text-white font-bold text-2xl">
          stripe
        </h1>
      </div>

      <div class="lg:hidden z-10">
        <button @click="drawer">
          <svg
            class="h-8 w-8 fill-current text-black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div class="hidden z-10 lg:block">
        <ul class="flex space-x-5 text-sm text-white font-sans" style="font-family: 'Montserrat', sans-serif !important;">
          <li>
            <NuxtLink to="/">
              Products
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/product">
              Solutions
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">
              Developers
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/three">
              Resources
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/three">
              Pricing
            </NuxtLink>
          </li>
        </ul>
      </div>

      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div v-show="isOpen" class="z-10 fixed inset-0 transition-opacity" @keydown.esc="isOpen = false">
          <div class="absolute inset-0 bg-black opacity-50" tabindex="0" @click="isOpen = false" />
        </div>
      </transition>

      <aside
        class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul class="divide-y font-sans z-10">
          <li>
            <NuxtLink to="/" class="my-4 inline-block" @click="isOpen = false">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="my-4 inline-block" @click="isOpen = false">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/product" class="my-4 inline-block" @click="isOpen = false">
              Products
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/three" class="my-4 inline-block" @click="isOpen = false">
              Travel
            </NuxtLink>
          </li>
          <li><a href="#" class="my-4 inline-block" @click="isOpen = false">Contact</a></li>
        </ul>
      </aside>
      <div class="z-10 hidden md:hidden xl:block">
        <button class="text-sm rounded-3xl h-8 w-28 text-white bg-mycolor">
          Sign In
        </button>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'NavBar',
  data () {
    return {
      isOpen: false
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler (isOpen) {
        if (process.isOpen) {
          if (isOpen) {
            document.body.style.setProperty('overflow', 'hidden')
          } else {
            document.body.style.removeProperty('overflow')
          }
        }
      }
    }
  },
  methods: {
    drawer () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
