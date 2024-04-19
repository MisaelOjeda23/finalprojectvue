<template>
<SectionContainer>
        <main>
            <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Mis Equipos</h2>


            <section class="grid gap-6 mb-8 mt-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                <CardEquipo v-for="(equipo, index) in equipos" :key="index" :equipo="equipo"/>
            </section>
        </main>
    </SectionContainer>
</template>
<script lang="ts" setup>
import SectionContainer from '@/components/SectionContainer.vue';
import WidgetInfo from '@/components/WidgetInfo.vue';
import TableEdit from '@/components/TableEdit.vue';
import CardProject from '@/components/CardProject.vue';
import CardEquipo from '@/components/CardEquipo.vue';
import { onMounted, ref, type Ref } from 'vue';
import ApiService from '@/services/ApiService';
import UserService from '@/services/UserService';
import type { IEquipo } from '@/interfaces/IEquipo';

const apiService  = new ApiService()
const userService  = new UserService()
const idUser = userService.getIdUsuario()
const equipos: Ref<IEquipo[]> = ref([])

onMounted( async ()  => {
    equipos.value = await apiService.obtenerEquipos(idUser.value)
})

</script>
<style scoped></style>