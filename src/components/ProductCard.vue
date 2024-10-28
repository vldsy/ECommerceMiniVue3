<template>
    <div class="border p-4">
        <h2 class="font-semibold">{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ formatCurrency(product.price) }}</p>
        <button class="mt-2 bg-blue-500 text-white px-3 py-1" @click="addToCart(product)">
            Add to Cart
        </button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    product: Object
});

const emit = defineEmits(['addToCart']);

const addToCart = (product) => {
    emit('addToCart', product);
};

const formatCurrency = (value) => {
    if (typeof value !== "number") {
        return value;
    }
    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'EUR'
    }).format(value);
};
</script>