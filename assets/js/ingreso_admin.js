const btn_admin = document.querySelector('[data-btn-admin]');

function ingresar(){
    window.location.href = './admin_productos.html'
}

btn_admin.addEventListener('click',ingresar);