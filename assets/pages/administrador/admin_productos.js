import { service } from "../../server/server.js";
import{ mostrar } from '../../js/mostrar.productos.js';


const categoriaStar = document.querySelector('[data-articulo-star]');
const categoriaConsola = document.querySelector('[data-articulo-consola]');
const categoriaVarios = document.querySelector('[data-articulo-varios]');




console.log('Estamos en la pagina de productos del administrador')
//Muestra producto en page administrador
service.mostrarProductos(categoriaStar.id).then(data => data.forEach(ele => categoriaStar.appendChild(mostrar.crearUnaCard(ele.img,ele.titulo,ele.precio,true,ele.id))));
service.mostrarProductos(categoriaConsola.id).then(data => data.forEach(ele => categoriaConsola.appendChild(mostrar.crearUnaCard(ele.img,ele.titulo,ele.precio,true,ele.id))));
service.mostrarProductos(categoriaVarios.id).then(data => data.forEach(ele => categoriaVarios.appendChild(mostrar.crearUnaCard(ele.img,ele.titulo,ele.precio,true,ele.id))));





