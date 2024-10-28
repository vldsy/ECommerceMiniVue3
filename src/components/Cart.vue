<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const cart = computed(() => store.state.cart);

const updateQuantity = (product, quantity) => {
    store.commit('updateQuantity', { product, quantity });
};

const removeItem = (product) => {
    store.commit('updateQuantity', { product, quantity: 0 });
};
</script>

<template>
    <div class="fixed top-0 right-0 w-1/4 h-full bg-white shadow-lg p-4 overflow-y-auto">
        <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>
        <div v-if="cart.length > 0">
            <table class="w-full text-left">
                <thead>
                    <tr>
                        <th class="p-2">Product</th>
                        <th class="p-2 text-right">Quantity</th>
                        <th class="p-2 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in cart" :key="item.product.id">
                        <td>{{ item.product.name }}</td>
                        <td class="text-right">{{ item.quantity }}</td>
                        <td class="text-right">
                            <button @click="updateQuantity(item.product, item.quantity + 1)"
                                class="bg-green-500 text-white px-2 py-1">+</button>
                            <button @click="updateQuantity(item.product, item.quantity - 1)"
                                class="bg-red-500 text-white px-2 py-1">-</button>
                            <button @click="removeItem(item.product)"
                                class="bg-gray-500 text-white px-2 py-1">Remove</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <p>Your cart is empty.</p>
        </div>
    </div>
</template>

<style>
@media (max-width: 768px) {
    .cart-sidebar {
        transform: translateX(100%);
    }
}
</style>