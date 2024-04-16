import { ref, type Ref } from "vue";
import AlertService from "./AlertService";
import { useRouter } from "vue-router";
import router from "@/router";
import UserService from "./UserService";
import { useTaskStore } from "@/stores/task";
import { useUserStore } from "@/stores/user";
import type { ITarea } from "@/interfaces/ITarea";

export default class ApiService{
    
    private url = 'https://nest-tareas-production.up.railway.app/api'
    private tareas: any;
    private tarea: any;
    private alertService: AlertService
    private userService: UserService

    constructor(){
        this.tareas = ref([])
        this.tarea = ref({})
        this.alertService = new AlertService()
        this.userService = new UserService()
    }

    /**
     * Funcion que retorna el array de tareas
     * @returns tareas
     */
    getTareas(){
        return this.tareas
    }

    /**
     * Funcion que retorna una tarea
     * @returns tarea
     */
    getTarea(){
        return this.tarea
    }

    /**
     * Peticion GET para obtener todas las tareas del usuario
     */
    async obtenerTareas(id: string){
        try {
            const respuesta = await fetch(this.url + `/tarea/user/${id}`)
            const resultado = await respuesta.json()

            console.log(`Tareas del usuario ${id}:`, resultado);

            const tasKStore = useTaskStore()
            tasKStore.tareas = resultado

            return resultado

        } catch (error) {
            console.log(error);
            
        }
    }

    async agregarTarea(tarea: any){
        try {
            const respuesta = await fetch(this.url + `/tarea`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },   
                body: JSON.stringify(tarea)
            })
            const resultado = await respuesta.json()

            console.log(`Tarea agregada`, resultado);

            if (resultado.error) {
                this.alertService.mostrarAlert('Error', 'Ocurrio un error al agregar la tarea. Porfavor vuelva a intentarlo', "warning", 'Volver a intertar')
                return
            }

            const userStore = useUserStore()
            this.obtenerTareas(userStore.idUsuario)

            
        } catch (error) {
            console.log(error);
        }
    }

    async eliminarTarea(id: string){
        try{

            const respuesta = await fetch(this.url + `/tarea/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },   
            })
            const resultado = await respuesta.json()

            if (resultado.error) {
                this.alertService.mostrarAlert('Error', 'Ocurrio un error al eliminar la tarea. Porfavor vuelva a intentarlo', "warning", 'Volver a intertar')
                return
            }

            const userStore = useUserStore()
            await this.obtenerTareas(userStore.idUsuario)
        }
        catch(error){
            console.error('Error:', error);
        }
    }

    async actualizarTarea(id: string, tarea: ITarea){
        try {

            const respuesta = await fetch(this.url + `/tarea/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(tarea)   
            })
            const resultado = await respuesta.json()

            if (resultado.error) {
                this.alertService.mostrarAlert('Error', 'Ocurrio un error al actualizar la tarea. Porfavor vuelva a intentarlo', "warning", 'Volver a intertar')
                return
            }

            const userStore = useUserStore()
            this.obtenerTareas(userStore.idUsuario)
            
        } catch (error) {
            console.error(error)
        }
    }

    async Login(usuario: any){
        try {

            const respuesta = await fetch(this.url + `/user/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },   
                body: JSON.stringify(usuario)
            })
            const resultado = await respuesta.json()

            /* Si devuelve un error, las cxredenciales son incorrectas */
            if (resultado.error) {
                this.alertService.mostrarAlert('Credenciales incorrectas', 'Por favor, valida que el correo electronico y/o la contraseña sean correctas', 'warning', 'Volver a intentar')
                return
            }

            this.alertService.mostrarAlert('Tarea Guardada', 'La tarea se ha creado exitosamente', 'success', 'Okay')

            /* Se guarda la informacion del usuario en el LocalStorage */
            this.userService.guardarUsuarioLS(resultado)
            /* Y se redirige a la vista de Dashboard */
            router.push({ name: 'Dashboard' })
            
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async Registrar(usuario: any){
        try {

            const respuesta = await fetch(this.url + `/user/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify(usuario)
            })
            const resultado = await respuesta.json()

            this.alertService.mostrarAlertYRedirigir(
                'Registrado', 
                'Has sido registrado exitiosamente. Ahora inicia sesion para poder empezar...', 
                "success", 
                'Vale',
                'Login'
            )

            console.log(`Usuario registrado:`, resultado);
            
        } catch (error) {
            console.log(error);
        }
    }





}