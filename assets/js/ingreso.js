const usuario = document.querySelector('[data-usuario]');
const contraseña = document.querySelector('[data-contraseña]');
const btn = document.querySelector('[data-btn]');
function ingreso(){
    if(usuario.value != 'usuario' && contraseña.value != 'usuario'){
        alert('Usuario o contraseña incorracto.')
    }else{

        window.location.href = './assets/pages/principal.html';
    }
}

btn.addEventListener('click',ingreso)