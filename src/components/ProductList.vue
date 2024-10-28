<script setup>
import ProductCard from './ProductCard.vue';
import NewProduct from './NewProduct.vue';

import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const products = computed(() => store.state.products);

const addToCart = (product) => {
    store.commit('addToCart', product);
};

</script>

<template>
    <div>
        <div class="flex flex-col md:flex-row items-start mb-4">
            <NewProduct class="mr-4 md:mb-0 mb-4" />
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
                <ProductCard v-for="product in products" :key="product.id" :product="product" @addToCart="addToCart" />
            </div>
        </div>
    </div>
</template>