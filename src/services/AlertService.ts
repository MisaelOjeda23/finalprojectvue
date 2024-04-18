import Swal from 'sweetalert2'
import router from '@/router'
import { useUserStore } from '@/stores/user';
import ApiService from './ApiService';
import type { ITarea } from '@/interfaces/ITarea';
import { POSITION, useToast } from 'vue-toastification';
import UserService from './UserService';
import { ref } from 'vue';

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

    async mostrarAlertPreguntar(titulo: string, texto: string, icono: 'success' | 'error' | 'warning' | 'info' | 'question', confirmText: string, denyText: string, tarea: ITarea){
      await Swal.fire({
        title: titulo,
        text: texto,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: confirmText,
        denyButtonText: denyText
      }).then( async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          const apiService = new ApiService()

          await apiService.completarTarea(tarea._id, tarea)
          this.toastSuccess(`Tarea completada`)

        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
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

    async preguntarEliminarAlert( titulo: string, texto: string, boton1: string, id?:string ){
      await Swal.fire({
        title: titulo,
        text: texto,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: boton1
      }).then( async (result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Eliminado",
            text: "Elemento eliminado correctamente",
            icon: "success"
          });
          if (id) {
            const apiService = new ApiService()
            await apiService.eliminarTarea(id)
          }
        }
      });
    }

    async modalCrearTarea(){
      const fecha = new Date()
      const fechaActual = fecha.toISOString().split('T')[0];
      
      const { value: formValues } = await Swal.fire({
        title: "Nueva Tarea",
        html: `
          <div class="mb-5" >
            <label htmlFor="swal-input1" class=" block text-gray-700 uppercase font-bold" >Tarea: </label>
            <input id="swal-input1" placeholder="Nombre" class="swal2-input">
          </div>

          <div class="mb-5">
            <label htmlFor="swal-input2" class=" block text-gray-700 uppercase font-bold" >Descripción: </label>
            <input id="swal-input2" placeholder="Descripcion" type="textarea" class="swal2-input">
          </div>

          <div class="mb-5">
            <label htmlFor="swal-input3" class=" block text-gray-700 uppercase font-bold" >Prioridad: </label>
            <input id="swal-input3" placeholder="Prioridad" class="swal2-input">
          </div>

          <div class="mb-5">
            <label htmlFor="swal-input5" class=" block text-gray-700 uppercase font-bold" >Fecha de inicio: </label>
            <input id="swal-input5" class="swal2-input" type="date" min=${fechaActual} >
          </div>

          <div class="mb-0">
            <label htmlFor="swal-input6" class=" block text-gray-700 uppercase font-bold" >Fecha limite: </label>
            <input id="swal-input6" class="swal2-input" type="date" min=${fechaActual}>
          </div>
        `,
        confirmButtonText: "Agregar",
        focusConfirm: false,
        preConfirm: () => {
          return {
            name: document.getElementById("swal-input1").value,
            description: document.getElementById("swal-input2").value,
            prioridad: document.getElementById("swal-input3").value,
            date: document.getElementById("swal-input5").value,
            date_end: document.getElementById("swal-input6").value,
            id_creator: this.userStore.idUsuario,
            estado: 'Incompleto',
            name_proyecto: '-'

          };
        }
      });
      if (formValues) {
        const apiService = new ApiService()
        apiService.agregarTarea(formValues)
        console.log(formValues);
      }
    }

    async modalActualizarTarea(tarea: ITarea){
      const fecha = new Date()
      const fechaActual = fecha.toISOString().split('T')[0];
      
      const { value: formValues } = await Swal.fire({
        title: "Editar Tarea",
        html: `
          <div class="mb-5" >
            <label htmlFor="swal-input1" class=" block text-gray-700 uppercase font-bold" >Nombre: </label>
            <input id="swal-input1" value=${tarea.name} placeholder="Nombre" class="swal2-input">
          </div>

          <div class="mb-5">
            <label htmlFor="swal-input2" class=" block text-gray-700 uppercase font-bold" >Descripción: </label>
            <input id="swal-input2" value=${tarea.description} placeholder="Descripcion" type="textarea" class="swal2-input">
          </div>

          <div class="mb-5">
            <label htmlFor="swal-input3" class=" block text-gray-700 uppercase font-bold" >Prioridad: </label>
            <input id="swal-input3" value=${tarea.prioridad} placeholder="Prioridad" class="swal2-input">
          </div>

          <div class="mb-5">
            <label htmlFor="swal-input5" class=" block text-gray-700 uppercase font-bold" >Fecha de inicio: </label>
            <input id="swal-input5" value=${tarea.date} class="swal2-input" type="date" min=${fechaActual} >
          </div>

          <div class="mb-0">
            <label htmlFor="swal-input6" class=" block text-gray-700 uppercase font-bold" >Fecha limite: </label>
            <input id="swal-input6" class="swal2-input" value=${tarea.date_end} type="date" min=${fechaActual}>
          </div>
        `,
        confirmButtonText: "Actualizar",
        focusConfirm: false,
        preConfirm: () => {
          return {
            name: document.getElementById("swal-input1").value,
            description: document.getElementById("swal-input2").value,
            prioridad: document.getElementById("swal-input3").value,
            date: document.getElementById("swal-input5").value,
            date_end: document.getElementById("swal-input6").value,
            id_creator: tarea.id_creator,
            estado: tarea.estado,
            name_proyecto: tarea.name_proyecto

          };
        }
      });
      if (formValues) {
        const apiService = new ApiService()
        apiService.actualizarTarea(tarea._id, formValues)
        console.log(formValues);
      }
    }

    async modalCrearProyecto(){
      
      const { value: formValues } = await Swal.fire({
        title: "Nuevo Proyecto",
        html: `
        <div class="mb-5" >
          <label htmlFor="swal-input1" class=" block text-gray-700 uppercase font-bold" >Nombre del Proyecto: </label>
          <input id="swal-input1" placeholder="Nombre del Proyecto" class="swal2-input">
        </div>

        <div class="mb-5">
          <label htmlFor="swal-input2" class=" block text-gray-700 uppercase font-bold" >Equipo: </label>
          <input id="swal-input2" placeholder="Equipo" type="textarea" class="swal2-input">
        </div>

      `,
        confirmButtonText: "Agregar",
        focusConfirm: false,
        preConfirm: () => {
          return {
            name_proyecto: document.getElementById("swal-input1").value,
            id_equipo: document.getElementById("swal-input2").value,
            status: 'Activo'
          };
        }
      });
      if (formValues) {
        const apiService = new ApiService()
        apiService.agregarProyecto(formValues)
        console.log(formValues);
      }
    }

    async toastBienvenida(userName: string){
      const toast = useToast()

      toast.success(`Bienvenido, ${userName}`, {
        position: POSITION.TOP_RIGHT,
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: false,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: false,
        icon: true,
        rtl: false
      });
    }

    async toastSesionCerrada(){
      const toast = useToast()

      toast.warning(`Sesión Cerrada`, {
        position: POSITION.TOP_RIGHT,
        timeout: 4000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: false,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: false,
        icon: true,
        rtl: false
      });
    }

    async toastSuccess(texto: string){
      const toast = useToast()

      toast.success(texto, {
        position: POSITION.TOP_RIGHT,
        timeout: 4000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: false,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: false,
        icon: true,
        rtl: false
      });
    }


}