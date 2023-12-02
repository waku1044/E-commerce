import { saludo, service } from '../../server/server.js';
import { mostrar } from '../../js/mostrar.productos.js';
import { buscador } from '../../js/buscador.js';
// console.log(saludo)
// console.log('Pagina de productos de Cliente')
const star_wars = document.querySelector('[data-articulo-star]');
const consola = document.querySelector('[data-articulo-consola]');
const varios = document.querySelector('[data-articulo-varios]');
const user = document.querySelector('[data-user]');
const $inputBuscar = document.querySelector('[data-input-buscar]');

$inputBuscar.addEventListener('change', ()=>{   
   buscador($inputBuscar.value);
})


let usuario = localStorage.getItem('usuario').toUpperCase();
user.innerText =`${usuario} / Salir`;

const derivaProducto = (prod,categoria) => {
    let card;
    
    if(categoria == 'Star Wars'){
            card = mostrar.crearUnaCard(prod.img,prod.nombre,prod.precio,false,prod._id);
            star_wars.appendChild(card);
        }else if(categoria == 'Consola'){
            card = mostrar.crearUnaCard(prod.img,prod.nombre,prod.precio,false,prod._id);
            consola.appendChild(card)
        }else{
            card = mostrar.crearUnaCard(prod.img,prod.nombre,prod.precio,false,prod._id);
            varios.appendChild(card)
        }
}


//Muestra producto en page usuario
service.mostrarProductos().then(productos => {
    productos.forEach(producto => {
        derivaProducto(producto,producto.categoria)
    })
})




