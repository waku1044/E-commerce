import { service } from "../server/server.js";

const usuario = document.querySelector('[data-usuario]');
const contraseña = document.querySelector('[data-contraseña]');
const btn = document.querySelector('[data-btn]');
const btnVer = document.querySelector('[data-btn-ver]');

function verPass() {
    contraseña.type == 'password'?contraseña.type = 'text':contraseña.type = 'password';
}
btnVer.addEventListener('click',verPass)


usuario.focus()
 function ingreso(){

    const data = {
        usuario: usuario.value,
        contraseña: contraseña.value
    }
    if(usuario.value != '' && contraseña.value != ''){
        // console.log(data)
         service.login(data.usuario,data.contraseña)
         .then(res=>{
             if(res.success){
                localStorage.setItem('usuario',res.user)
                 window.location.href = './assets/pages/usuario/principal.html'

             }else if(data.usuario == 'admin' && data.contraseña == 'admin'){
                localStorage.setItem('usuario','admin')
                 window.location.href = './assets/pages/administrador/administrador.html'

             }else{
                 alert(res.message)
             }
         })
         
    }else{
        alert('Por favor rellene todos los campos')
    }
  
}



btn.addEventListener('click',ingreso)
