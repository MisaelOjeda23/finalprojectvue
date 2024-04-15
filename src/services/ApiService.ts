import { ref, type Ref } from "vue";
import AlertService from "./AlertService";
import { useRouter } from "vue-router";
import router from "@/router";
import UserService from "./UserService";

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
            
        } catch (error) {
            console.log(error);
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





}