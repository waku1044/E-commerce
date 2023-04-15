const btn_agregar = document.querySelector('[data-btn-agregar]');
const volverLogin = document.querySelector('[data-login]');

function volverPagina(){
    window.location.href = './administrador.html';
};

function volverLogini(){
    
    window.location.href = '../../../index.html';
};

btn_agregar.addEventListener('click', volverPagina);
volverLogin.onclick = volverLogini;