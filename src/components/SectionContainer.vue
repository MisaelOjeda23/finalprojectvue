<template>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
    <SideBar :is-open="isOpen" />
    <div class="flex flex-col flex-1">
      <HeaderComponent @abrir-side="toggleSidebar" />
      <main class="h-full overflow-y-auto p-4 lg:p-11">
        <slot>
        
      </slot>
      </main>
      
    </div>
  </div>
</template>
<script lang="ts" setup>
import SideBar from '@/components/SideBar.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import { ref } from 'vue';

const isOpen = ref(true);

const toggleSidebar = () => {
    isOpen.value = !isOpen.value;
}

</script>
<style scoped></style>