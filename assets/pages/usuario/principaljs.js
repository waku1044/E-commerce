import { service } from '/assets/server/server.js';
import { mostrar } from '../../js/mostrar.productos.js';

const star_wars = document.querySelector('[data-articulo-star]');
const consola = document.querySelector('[data-articulo-consola]');
const varios = document.querySelector('[data-articulo-varios]');
console.log('Pagina de productos de Cliente')

//Muestra producto en page usuario
service.mostrarProductos(star_wars.id).then(data => data.forEach(ele => star_wars.appendChild(mostrar.crearUnaCard(ele.img,ele.titulo,ele.precio))));
service.mostrarProductos(consola.id).then(data => data.forEach(ele => consola.appendChild(mostrar.crearUnaCard(ele.img,ele.titulo,ele.precio))));
service.mostrarProductos(varios.id).then(data => data.forEach(ele => varios.appendChild(mostrar.crearUnaCard(ele.img,ele.titulo,ele.precio))));


