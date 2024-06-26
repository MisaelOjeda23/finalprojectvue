import { ref, type Ref } from "vue";
import AlertService from "./AlertService";
import { useRouter } from "vue-router";
import router from "@/router";
import UserService from "./UserService";
import { useTaskStore } from "@/stores/task";
import { useUserStore } from "@/stores/user";
import type { ITarea } from "@/interfaces/ITarea";
import type { IUser } from "@/interfaces/IUser";

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

            this.obtenerTareasAtrasadas(id)

            return resultado

        } catch (error) {
            console.log(error);
            
        }
    }

    async obtenerTareasAtrasadas(id: string){
        try {
            const respuesta = await fetch(this.url + `/tarea/user/atrasadas/${id}`)
            const resultado = await respuesta.json()

            console.log(`Tareas atrasadas del usuario ${id}:`, resultado);

            const tasKStore = useTaskStore()
            tasKStore.tareasAtrasadas = resultado

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

    async completarTarea(id: string, tarea: ITarea){
        try {

            const newTarea = {
                name: tarea.name,
                description: tarea.description,
                prioridad: tarea.prioridad,
                date: tarea.date,
                date_end: tarea.date_end,
                id_creator: tarea.id_creator,
                estado: 'Completo',
                name_proyecto: tarea.name_proyecto
            }

            const respuesta = await fetch(this.url + `/tarea/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTarea)   
            })
            const resultado = await respuesta.json()

            if (resultado.error) {
                this.alertService.mostrarAlert('Error', 'Ocurrio un error al actualizar la tarea. Porfavor vuelva a intentarlo', "warning", 'Volver a intertar')
                return
            }

            const userStore = useUserStore()
            await this.obtenerTareas(userStore.idUsuario)
            
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

    async obtenerEquipos(idUser: string){
        try {
            const respuesta = await fetch(this.url + `/equipo/${idUser}`)
            const resultado = await respuesta.json()

            console.log(`Equipos del usuario ${idUser}:`, resultado);

            const tasKStore = useTaskStore()
            tasKStore.equipos = await resultado

            await resultado.map( async (equipo: any) => {
                const proyecto = await this.obtenerProyectos(equipo.id_equipo)
                if (proyecto.id_equipo) {
                    tasKStore.proyectos.push(proyecto)    
                }
            })

            return resultado

        } catch (error) {
            console.log(error);
            
        }
    }

    async obtenerProyectos(idEquipo: string){
        try {
            const respuesta = await fetch(this.url + `/proyecto/team/${idEquipo}`)
            const resultado = await respuesta.json()

            console.log(`Proyectos del equipo ${idEquipo}:`, resultado);

            const tasKStore = useTaskStore()
            tasKStore.proyectos = resultado

            return resultado

        } catch (error) {
            console.log(error);
            
        }
    }

    async agregarProyecto(proyecto: any) {

        try {
            const respuesta = await fetch(this.url + `/proyecto`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },   
                body: JSON.stringify(proyecto)
            })
            const resultado = await respuesta.json()

            console.log(`Proyecto agregada`, resultado);

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

    async buscarProyecto(name: string){

        try {
            const respuesta = await fetch(this.url + `/equipo/team/${name}`)
            const resultado = await respuesta.json()

            console.log(`Equipo ${name}:`, resultado);

            return resultado

        } catch (error) {
            console.log(error);
            
        }
    }

    async actualizarUsuario(id: string, usuario: IUser){
        try {

            const respuesta = await fetch(this.url + `/user/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(usuario)   
            })
            const resultado = await respuesta.json()

            if (resultado.error) {
                this.alertService.mostrarAlert('Error', 'Ocurrio un error al actualizar el usuario. Por favor vuelva a intentarlo', "warning", 'Volver a intertar')
                return
            }            
        } catch (error) {
            console.error(error)
        }
    }



}