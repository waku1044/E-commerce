import {service} from "../server/server.js";
import { buscador } from "../js/buscador.js";

const $user = document.querySelector('[data-user]');
const $categoria = document.querySelector('[data-categoria]');
const $article = document.querySelector('[data-articulo]');
const $inputBuscar = document.querySelector('[data-input-buscar]');

$inputBuscar.addEventListener('change', ()=>{   
   buscador($inputBuscar.value);
})



const url = new URL(window.location);
const categoria = url.searchParams.get('categoria'); 
$categoria.innerHTML = categoria;


$user.innerText = localStorage.getItem('usuario') + ' / Salir';

service.mostrarProductos().then(productos =>{
    
        productos.forEach(producto =>{
            if(producto.categoria == categoria){
                $article.innerHTML += `<div class="card my-2 col-2 col-md-4 col-lg-4" style="min-width:267px;max-width:320px">
                <img src='${producto.img}' alt="producto" style='height:300px'  class="producto card-img-top">
                <div class="card-body text-center bg-light" >
                    <h5 class="card-title buscar text-capitalize">${producto.nombre}</h5>
                    <p class="card-text"><i>${categoria}</i></p>   
                    <p class="card-text">$<strong>${producto.precio}</strong></p>
                </div>
                </div>`
            }
        })
    
})