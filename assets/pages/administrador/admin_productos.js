import { service } from "../../server/server.js";
import{ mostrar } from '../../js/mostrar.productos.js';
import { buscador } from '../../js/buscador.js';


const star_wars = document.querySelector('[data-articulo-star]');
const consola = document.querySelector('[data-articulo-consola]');
const varios = document.querySelector('[data-articulo-varios]');
const $inputBuscar = document.querySelector('[data-input-buscar]');

$inputBuscar.addEventListener('change', ()=>{   
   buscador($inputBuscar.value);
})
const derivaProducto = (prod,categoria)=>{
    let card;
    
    if(categoria == 'star'){
            card = mostrar.crearUnaCard(prod.img,prod.nombre,prod.precio,true,prod._id,prod.categoria);
            star_wars.appendChild(card);
        }else if(categoria == 'consola'){
            card = mostrar.crearUnaCard(prod.img,prod.nombre,prod.precio,true,prod._id,prod.categoria);
            consola.appendChild(card)
        }else{
            card = mostrar.crearUnaCard(prod.img,prod.nombre,prod.precio,true,prod._id,prod.categoria);
            varios.appendChild(card)
        }
}
console.log('Estamos en la pagina de productos del administrador')
//Muestra producto en page administrador
service.mostrarProductos().then(data => data.forEach(ele => derivaProducto(ele,ele.categoria)));

 




