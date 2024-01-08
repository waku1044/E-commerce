import { service } from "../server/server.js";
import modal from "../modal/modal.js";
 
const usuario = document.querySelector('[data-usuario]');
const contraseña = document.querySelector('[data-contraseña]');
const btn = document.querySelector('[data-btn]');
const btnVer = document.querySelector('#ver'); 


btnVer.src = './assets/img/eyeOpen.svg'
// let url = window.location.host
// console.log(window.location.host)

console.log(btnVer.src)
function verPass(){  
    btnVer.src == './assets/img/eyeOpen.svg'? btnVer.src = `./assets/img/eyeClose.svg`: btnVer.src = './assets/img/eyeOpen.svg';
    contraseña.type == 'password'?contraseña.type = 'text':contraseña.type = 'password';
    // console.log(btnVer.src)
}
btnVer.addEventListener('click',verPass)

usuario.focus()
function ingreso(){

    const data = {
        usuario: usuario.value,
        contraseña: contraseña.value
    }
    if(usuario.value != '' && contraseña.value != ''){
        
            if(data.usuario == localStorage.getItem('usuario') && data.contraseña == localStorage.getItem('contraseña')){
                modal('Ingresado ...');
                setTimeout(() => {
                    window.location.href = './assets/pages/usuario/principal.html'
                    
                }, 2000);
                
             }else if(data.usuario == 'admin' && data.contraseña == 'admin'){
                modal('Ingresado ...');
                localStorage.setItem('usuario','admin')
                setTimeout(() => { 
                    window.location.href = './assets/pages/administrador/administrador.html'
                }, 2000);

             }else{
                modal('Usuario o contraseña incorrectos');  
                
             }
         
         
    }else{
        modal('Por favor rellene todos los campos')
    }
  
}



btn.addEventListener('click',ingreso)
