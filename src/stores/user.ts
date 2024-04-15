import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import UserService from '@/services/UserService'

export const useUserStore = defineStore('user', () => {

    const userService = new UserService()

    const fecha = new Date()
    let fechaDelDia 
    const usuario = ref(userService.getUsuario())
    const idUsuario = ref(userService.getIdUsuario())

  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  function diaSemana() {
    let date = new Date(fecha.toDateString().replace(/-+/g, '/'));

    fechaDelDia = date.toLocaleDateString('es-MX', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).toUpperCase()

    return fechaDelDia
  
  }

  return { usuario, idUsuario, diaSemana }
})
