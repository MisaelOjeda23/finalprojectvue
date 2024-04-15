import Swal from 'sweetalert2'
import router from '@/router'
import { useUserStore } from '@/stores/user';
import ApiService from './ApiService';

export default class AlertService{

  private userStore: any

    constructor(){
      this.userStore = useUserStore()

    }

    async mostrarAlert(titulo: string, texto: string, icono: 'success' | 'error' | 'warning' | 'info' | 'question', botonText: string){
        await Swal.fire({
            title: titulo,
            text: texto,
            icon: icono,
            confirmButtonText: botonText
          })
    }

    async mostrarAlertYRedirigir(titulo: string, texto: string, icono: 'success' | 'error' | 'warning' | 'info' | 'question', botonText: string, routerTo: string ){
        await Swal.fire({
            title: titulo,
            text: texto,
            icon: icono,
            confirmButtonText: botonText
          }).then(() => {
            router.push({ name: `${routerTo}` })
          })
    }

    async modalCrearTarea(){
      const { value: formValues } = await Swal.fire({
        title: "Agregar Nueva Tarea",
        html: `
          <input id="swal-input1" placeholder="Nombre" class="swal2-input">
          <input id="swal-input2" placeholder="Descripcion" class="swal2-input">
          <input id="swal-input3" class="swal2-input" type="date">
          <input id="swal-input4" class="swal2-input" type="date">
        `,
        focusConfirm: false,
        preConfirm: () => {
          return {
            name: document.getElementById("swal-input1").value,
            description: document.getElementById("swal-input2").value,
            date: document.getElementById("swal-input3").value,
            date_end: document.getElementById("swal-input4").value,
            id_creator: this.userStore.idUsuario
          };
        }
      });
      if (formValues) {
        const apiService = new ApiService()
        apiService.agregarTarea(formValues)
        console.log(formValues);
        
        this.mostrarAlert('Tarea Guardada', 'La tarea se ha creado exitosamente', 'success', 'Okay')
      }
    }


}