import Swal from 'sweetalert2'
import router from '@/router'

export default class AlertService{

    constructor(){}

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


}