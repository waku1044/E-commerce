const usuario = document.querySelector('[data-usuario]');
const contraseña = document.querySelector('[data-contraseña]');
const btn = document.querySelector('[data-btn]');
function ingreso(){
    if(usuario.value === 'usuario' && contraseña.value === 'usuario'){
        window.location.href = './assets/pages/usuario/principal.html';
    }else if(usuario.value === 'admin' && contraseña.value == '=admin'){
        window.location.href = './assets/pages/administrador/administrador.html';
    }else{
        alert('Usuario o contraseña incorrecto.')

    }
}

btn.addEventListener('click',ingreso)