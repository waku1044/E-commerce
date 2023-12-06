import { service} from "../server/server.js";

const usuario = document.querySelector('[data-usuario]');
const contraseña = document.querySelector('[data-contraseña]');
const btn = document.querySelector('[data-btn]');


usuario.focus()

 function ingreso(){
    if(usuario.value && contraseña.value){
        if(usuario.value == localStorage.getItem('usuario') && contraseña.value == localStorage.getItem('contraseña')){
            return window.location.href = './assets/pages/usuario/principal.html';
        }
            // service.extraerUsuarios()
            // .then((res)=>{
            //     res.forEach(user => {
            //         if(user.user === usuario.value && user.pass === contraseña.value){
            //             console.log(user.user,user.pass);
            //             localStorage.setItem('usuario',user.user);
            //             return window.location.href = './assets/pages/usuario/principal.html';
            //         }
            //     });
            // })
            if(usuario.value === 'admin' && contraseña.value === 'admin'){
                localStorage.setItem('usuario','admin');
                localStorage.setItem('contraseña','admin');
                return window.location.href = './assets/pages/administrador/administrador.html';   
            }else{  
                alert('Usuario o contraseña incorrectos');
            }
        }else{
            alert('Debe ingresar usuario y contraseña');
        }
    }


  


btn.addEventListener('click',ingreso)
