import { ref, type Ref } from "vue"
import type { IUser } from "@/interfaces/IUser"

export default class UserService{

    private user: Ref<IUser>
    private idUser: any

    constructor(){
        this.user = ref({}) as Ref<IUser>
        this.idUser = ref('')
        this.obtenerUsuarioLS()
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
    }

    obtenerUsuarioLS(){
        let usuario = localStorage.getItem('user') || ''
        
        this.user.value = JSON.parse(usuario)
    }

    obtenerIdUsuarioLS(){
        this.idUser = localStorage.getItem('idUser') || ''
    }

    async borrarUsuarioLS(){
        localStorage.removeItem('user')
        localStorage.removeItem('idUser')
    }

}