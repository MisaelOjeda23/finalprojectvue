<template>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
    <SideBar />
    <div class="flex flex-col flex-1">
      <HeaderComponent />
      <main class="h-full overflow-y-auto p-11">
        <slot>
        
      </slot>
      </main>
      
    </div>
  </div>
</template>
<script lang="ts" setup>
import SideBar from '@/components/SideBar.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';




</script>
<style scoped></style>