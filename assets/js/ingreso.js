import { service} from "../server/server.js";

const usuario = document.querySelector('[data-usuario]');
const contraseña = document.querySelector('[data-contraseña]');
const btn = document.querySelector('[data-btn]');
const btnVer = document.querySelector('[data-btn-ver]');

function verPass() {
    contraseña.type == 'password'?contraseña.type = 'text':contraseña.type = 'password';
}
btnVer.addEventListener('click',verPass)


usuario.focus()
async function ingreso(){

    if(usuario.value && contraseña.value){
        await service.extraerUsuarios()
            .then(users => {
                users.forEach(user =>{
                    console.log(user)
                    if(user.user == usuario.value && user.pass == contraseña.value){
                        localStorage.setItem('usuario',user.user);
                        return window.location.href = './assets/pages/usuario/principal.html';
                    }if(usuario.value == 'admin'  && contraseña.value == 'admin'){
                        localStorage.setItem('usuario','admin');
                        return window.location.href = './assets/pages/administrador/administrador.html';
                    }else{
                        alert('Credenciales incorrectas')
                    }
                })
            })  
    }else{
        alert('Campos vacios')
}
}

//   function ingreso(){
//     if(usuario.value && contraseña.value){
//          service.extraerUsuarios()
//             .then  (users => {
//                 users.forEach(user =>{
//                     console.log(user)
//                     if(user.user == usuario.value && user.pass == contraseña.value){
//                         localStorage.setItem('usuario',user.user);
//                         return window.location.href = './assets/pages/usuario/principal.html';
//                     }if(usuario.value == 'admin'  && contraseña.value == 'admin'){
//                         localStorage.setItem('usuario','admin');
//                         return window.location.href = './assets/pages/administrador/administrador.html';
//                     }else{
//                         alert('Credenciales incorrectas')
//                     }
//                 })
//             })  
//     }else{
//         alert('Campos vacios')
//     }
//   }



  
    

btn.addEventListener('click',ingreso)
