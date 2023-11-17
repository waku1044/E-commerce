const usuario = document.querySelector('[data-usuario]');
const contraseña = document.querySelector('[data-contraseña]');
const btn = document.querySelector('[data-btn]');


usuario.focus()
function ingreso(){
    let user = localStorage.getItem('usuario');
    let pass = localStorage.getItem('contraseña');
    if(usuario.value === user && contraseña.value === pass){
        window.location.href = './assets/pages/usuario/principal.html';
    }else if(usuario.value === 'admin' && contraseña.value === 'admin'){
        window.location.href = './assets/pages/administrador/administrador.html';
    }else{
        alert('Usuario o contraseña incorrecto.')

    }
}

btn.addEventListener('click',ingreso)
