import { service } from "../../server/server.js";
import{ mostrar } from '../../js/mostrar.productos.js';


const star_wars = document.querySelector('[data-articulo-star]');
const consola = document.querySelector('[data-articulo-consola]');
const varios = document.querySelector('[data-articulo-varios]');

const derivaProducto = (prod,categoria)=>{
    let card;
    if(categoria == 'star'){
            card = mostrar.crearUnaCard(prod.img,prod.titulo,prod.precio,true,prod.id);
            star_wars.appendChild(card);
        }else if(categoria == 'consola'){
            card = mostrar.crearUnaCard(prod.img,prod.titulo,prod.precio,true,prod.id);
            consola.appendChild(card)
        }else{
            card = mostrar.crearUnaCard(prod.img,prod.titulo,prod.precio,true,prod.id);
            varios.appendChild(card)
        }
}
console.log('Estamos en la pagina de productos del administrador')
//Muestra producto en page administrador
service.mostrarProductos().then(data => data.forEach(ele => derivaProducto(ele,ele.categoria)));

 




