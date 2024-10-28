<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded shadow-lg relative">
            <button @click="close" class="absolute top-0 right-0 m-4">
                X
            </button>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    isOpen: Boolean
});

const emit = defineEmits(['close']);

const close = () => {
    emit('close');
};
</script>