<template>
    <!-- Desktop sidebar -->
    <aside class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
        <div class="py-4 text-gray-500 dark:text-gray-400">
            <a class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
                TASKY
            </a>
            <ul class="mt-6">
                <li class="relative px-6 py-3">
                    <RouterLink to="/dashboard"
                        class="inline-flex items-center w-full text-base font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                        <IconDashboard class="w-5 h-5" />
                        <span class="ml-4">Home</span>
                    </RouterLink>
                </li>
                <li class="relative px-6 py-3">
                    <RouterLink to="/tasks"
                        class="inline-flex items-center w-full text-base font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                        <IconTasks class="w-5 h-5" />
                        <span class="ml-4">Tareas</span>
                    </RouterLink>
                </li>
                <li class="relative px-6 py-3">
                    <RouterLink to="/projects"
                        class="inline-flex items-center w-full text-base font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                        <IconProjects class="w-5 h-5" />
                        <span class="ml-4">Proyectos</span>
                    </RouterLink>
                </li>
                <li class="relative px-6 py-3">
                    <RouterLink to="/members"
                        class="inline-flex items-center w-full text-base font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                        <IconMembers class="w-5 h-5" />
                        <span class="ml-4">Miembros</span>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </aside>
    <!-- Mobile sidebar -->
    <aside class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden">
        <div class="py-4 text-gray-500 dark:text-gray-400">
            <a class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
                TASKY
            </a>
            <ul class="mt-6">
                <li class="relative px-6 py-3">
                    <RouterLink to="/dashboard"
                        class="inline-flex items-center w-full text-base font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                        <IconDashboard class="w-5 h-5" />
                        <span class="ml-4">Home</span>
                    </RouterLink>
                </li>
                <li class="relative px-6 py-3">
                    <RouterLink to="/tasks"
                        class="inline-flex items-center w-full text-base font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                        <IconTasks class="w-5 h-5" />
                        <span class="ml-4">Tareas</span>
                    </RouterLink>
                </li>
                <li class="relative px-6 py-3">
                    <RouterLink to="/projects"
                        class="inline-flex items-center w-full text-base font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                        <IconProjects class="w-5 h-5" />
                        <span class="ml-4">Proyectos</span>
                    </RouterLink>
                </li>
                <li class="relative px-6 py-3">
                    <RouterLink to="/members"
                        class="inline-flex items-center w-full text-base font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                        <IconMembers class="w-5 h-5" />
                        <span class="ml-4">Miembros</span>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </aside>
</template>
<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import IconMembers from './icons/IconMembers.vue';
import IconProjects from './icons/IconProjects.vue';
import IconTasks from './icons/IconTaks.vue';
import IconDashboard from './icons/IconDashboard.vue';

</script>
<style scoped></style>