import { ref, type Ref } from "vue"
import type { IUser } from "@/interfaces/IUser"
import AlertService from "./AlertService"

export default class UserService{

    private user: Ref<IUser>
    private idUser: any

    constructor(){
        this.user = ref({}) as Ref<IUser>
        this.idUser = ref('')
        this.obtenerUsuarioLS()
        this.obtenerIdUsuarioLS()
    }

    getUsuario(){
        return this.user
    }

    getIdUsuario(){
        return this.idUser
    }

    async guardarUsuarioLS(usuario: any){
        localStorage.setItem('user', JSON.stringify(usuario))
        localStorage.setItem('idUser', usuario.idUser)
        this.obtenerUsuarioLS()
        this.obtenerIdUsuarioLS()

        const alertService = new AlertService()
        await alertService.toastBienvenida(this.user.value.name)
    }

    obtenerUsuarioLS(){
        let usuario = localStorage.getItem('user') || ''
        
        /* Si hay un usuario en LS, se transforma a JSON */
        if (usuario) {
            this.user.value = JSON.parse(usuario)
        }
    }

    obtenerIdUsuarioLS(){
        this.idUser.value = localStorage.getItem('idUser') || ''
    }

    async borrarUsuarioLS(){
        localStorage.removeItem('user')
        localStorage.removeItem('idUser')

        const alertService = new AlertService()
        await alertService.toastSesionCerrada()
    }

}