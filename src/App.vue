<script setup>
import ProductList from './components/ProductList.vue'
import Cart from './components/Cart.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <h1 class="text-3xl mb-6">eCommerce using Vue 3 Composition API, Vuex and Tailwind</h1>
    <Cart />
    <ProductList />
  </div>
</template>
