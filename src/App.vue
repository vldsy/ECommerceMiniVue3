<script setup>
import ProductList from './components/ProductList.vue'
import Cart from './components/Cart.vue'
</script>

<template>
  <div>
    <h1 class="text-3xl mb-6">eCommerce using Vue 3 Composition API, Vuex and Tailwind</h1>
    <div class="flex flex-col-reverse md:flex-row">
      <Cart
        class="w-full md:w-1/4 md:flex md:flex-col md:fixed md:right--2 md:top-0 md:h-full md:bg-white md:shadow-lg md:p-4" />
      <ProductList class="flex-grow p-4 md:mr-16" />
    </div>
  </div>
</template>
