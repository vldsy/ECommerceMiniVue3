<script setup>
import ProductCard from './ProductCard.vue';
import NewProduct from './NewProduct.vue';

import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const products = computed(() => store.state.products);

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        Product Card
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
        New Product
        <NewProduct />
    </div>
</template>