import { service } from '/assets/server/server.js';
import { mostrar } from '../../js/mostrar.productos.js';

console.log('Pagina de productos de Cliente')
const star_wars = document.querySelector('[data-articulo-star]');
const consola = document.querySelector('[data-articulo-consola]');
const varios = document.querySelector('[data-articulo-varios]');

const derivaProducto = (prod,categoria)=>{
    let card;
    if(categoria == 'star'){
            card = mostrar.crearUnaCard(prod.img,prod.titulo,prod.precio);
            star_wars.appendChild(card);
        }else if(categoria == 'consola'){
            card = mostrar.crearUnaCard(prod.img,prod.titulo,prod.precio);
            consola.appendChild(card)
        }else{
            card = mostrar.crearUnaCard(prod.img,prod.titulo,prod.precio);
            varios.appendChild(card)
        }
}


//Muestra producto en page usuario
service.mostrarProductos().then(datas=> datas.forEach(prod=> derivaProducto(prod,prod.categoria)));




