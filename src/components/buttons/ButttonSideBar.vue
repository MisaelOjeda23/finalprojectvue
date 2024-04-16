<template>
    <button @click="toggleSidebar"
        class="fixed top-5 left-5 z-50 bg-gray-800 text-white p-3 rounded-md focus:outline-none">
        Abrir
    </button>
</template>
<script lang="ts" setup>

const {toggleSidebar } = defineProps(['toggleSidebar']);
</script>
<style scoped></style>