import { service } from "../server/server.js";



const usuario = document.querySelector('[data-usuario]');
const contraseña = document.querySelector('[data-contraseña]');
const btn = document.querySelector('[data-btn]');
const btnVer = document.querySelector('[data-btn-ver]'); 


function verPass() {
    contraseña.type == 'password'?contraseña.type = 'text':contraseña.type = 'password';
    // console.log(btnVer.src)
btnVer.src === 'http://127.0.0.1:5500/Frontend/assets/img/eyeClose.svg'?btnVer.src = './assets/img/eyeOpen.svg':btnVer.src = './assets/img/eyeClose.svg';
}
btnVer.addEventListener('click',verPass)



function modal(text) {
    const dialog = document.querySelector("[data-modal]");
    const context = `<h3>${text}.</h3>`;
    dialog.innerHTML = context
    dialog.showModal();
    setTimeout(() => {
        dialog.close();
    }, 3000);
    
}
function ingreso(){
usuario.focus()

    const data = {
        usuario: usuario.value,
        contraseña: contraseña.value
    }
    if(usuario.value != '' && contraseña.value != ''){
        // console.log(data)
         service.login(data.usuario,data.contraseña)
         .then(res=>{
            console.log(res)
             if(res.success){
             
                 localStorage.setItem('usuario',res.user)
                 modal(res.message);
                 setTimeout(() => {
                     window.location.href = './assets/pages/usuario/principal.html'
                     
                 }, 2000);

             }else if(data.usuario == 'admin' && data.contraseña == 'admin'){
                localStorage.setItem('usuario','admin')
                 window.location.href = './assets/pages/administrador/administrador.html'

             }else{
                modal(res.message)  
                
             }
         })
         
    }else{
        modal('Por favor rellene todos los campos')
    }
  
}



btn.addEventListener('click',ingreso)
