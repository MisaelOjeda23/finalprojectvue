<template>
    <button class="rounded-md focus:outline-none focus:shadow-outline-primary" @click=toggleTheme()>
        <IconTheme class="w-5 h-5" />
    </button>
</template>
<script lang="ts" setup>
import IconTheme from '@/components/icons/IconTheme.vue';

function toggleTheme() {
    const html = document.querySelector('html')
    if (html){
        html.classList.toggle('light');
        html.classList.toggle('dark');
    }else{
        console.error('No se encontró el elemento HTML')
    }
    
}
</script>
<style scoped></style>