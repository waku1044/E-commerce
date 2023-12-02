import {saludo, service} from "../server/server.js";
const $section = document.querySelector('[data-section]');
const $categoria = document.querySelector('[data-categoria]');
const $user = document.querySelector('[data-user]');

const url = new URL(window.location);
const id = url.searchParams.get('id');

$user.innerText = localStorage.getItem('usuario') + ' / Salir';

console.log('ID de ver Producto', id);
service.detalleProducto(id).then(productos =>{
    $categoria.innerText = productos.categoria
    let template = `<div class=" my-2 p-4 row" style="background-color: rgba(230, 230, 250, 0.2);" >
    <img src='${productos.img}' alt="producto"  class="bg-dark rounded col-12 col-md-6" style="box-shadow: 20px 20px 5px 0px rgba(0,0,0,0.75);">
        <div class=" text-center col-12 col-md-6 d-flex flex-column justify-content-center ">
            <h3 class="card-title my-4 fs-1 text-warning text-capitalize">${productos.nombre}</h3>
            <p class="card-text">Precio: <strong>${productos.precio}</strong></p>
            <p>Descripción: <i>${productos.descripcion}</i></p>
        </div>
</div>`
    $section.innerHTML =(template);    
    
})
