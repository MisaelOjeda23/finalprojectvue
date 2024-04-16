import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { ITarea } from '@/interfaces/ITarea'

export const useTaskStore = defineStore('task', () => {

    const tareas:Ref<ITarea[]>  = ref([])


  return { tareas }

})
