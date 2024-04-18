import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { ITarea } from '@/interfaces/ITarea'
import type { IEquipo } from '@/interfaces/IEquipo'
import type { IProyecto } from '@/interfaces/IProyecto'

export const useTaskStore = defineStore('task', () => {

    const tareas:Ref<ITarea[]>  = ref([])

    const numTareasPendientes = ref(tareas.value.length)

    const tareasAtrasadas:Ref<ITarea[]> = ref([])

    const numTareasAtrasadas = ref(tareasAtrasadas.value.length)

    const equipos:Ref<IEquipo[]> = ref([])

    const proyectos:Ref<IProyecto[]> = ref([])

    const numProyectos = ref(proyectos.value.length)


  return { 
    tareas, 
    numTareasPendientes, 
    tareasAtrasadas,
    numTareasAtrasadas,
    proyectos, 
    numProyectos, 
    equipos 
  }

})
