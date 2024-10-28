<template>
    <div class="p-4 border bg-white w-full md:w-auto">
        <button @click="openModal" class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Add New Product</button>
        <Modal :isOpen="isModalOpen" @close="closeModal">
            <h2 class="text-xl font-semibold mb-2">Add New Product</h2>
            <form @submit.prevent="addProduct">
                <div class="mb-2">
                    <label class="block text-sm font-medium mb-1">Name</label>
                    <input v-model="name" type="text" class="border rounded w-full py-2 px-3" />
                </div>
                <div class="mb-2">
                    <label class="block text-sm font-medium mb-1">Description</label>
                    <input v-model="description" type="text" class="border rounded w-full py-2 px-3" />
                </div>
                <div class="mb-2">
                    <label class="block text-sm font-medium mb-1">Price</label>
                    <input v-model="price" type="number" class="border rounded w-full py-2 px-3" />
                </div>
                <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">Add Product</button>
            </form>
        </Modal>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import Modal from './Modal.vue';

const store = useStore();
const isModalOpen = ref(false);
const name = ref('');
const description = ref('');
const price = ref(0);

const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};

const addProduct = () => {
    if (name.value && description.value && price.value) {
        const newProduct = {
            id: uuidv4(),
            name: name.value,
            description: description.value,
            price: parseFloat(price.value),
        };
        store.commit('addProduct', newProduct);

        // Reset form
        name.value = '';
        description.value = '';
        price.value = 0;
        closeModal();
    } else {
        console.warn('All fields are required');
    }
};
</script>