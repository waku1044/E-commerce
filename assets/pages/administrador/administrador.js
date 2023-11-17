import { service } from '../../server/server.js';
const formulario = document.querySelector('[data-form]');

let categoria = document.querySelector('[data-categoria]');
let url_img = document.querySelector('[data-url-img]');
let nombre_producto = document.querySelector('[data-nombre-producto]');
let precio = document.querySelector('[data-precio]');
let descripcion = document.querySelector('[data-descripcion]');




let url = new URL(window.location);
let id = url.searchParams.get('id');
console.log(id);
// if(id == null){
    const verificaYDerivaProducto =  ()=>{
        categoria = categoria.value;
        url_img = url_img.value;
        nombre_producto = nombre_producto.value;
        precio = precio.value;
        descripcion = descripcion.value;
        
        
        switch(categoria){
            case 'Star Wars':
                // console.log('elegiste star wars')
                service.agregarProductos(url_img,nombre_producto,precio,descripcion,categoria) 
                url_img.value = "";

                break;
            case 'Consola':
                // console.log('elegiste consola')
                service.agregarProductos(url_img,nombre_producto,precio,descripcion,categoria);   
                break;
            case 'Diversos':
                // console.log('elegiste diversos')
                service.agregarProductos(url_img,nombre_producto,precio,descripcion,categoria);   
                break;
            default:
                alert('Ocurrio un error interplanetario');
                break;
            };
            
    };  
    
    
        formulario.addEventListener('submit',(evento)=>{
            evento.preventDefault();
            verificaYDerivaProducto();
            

        })
        // }
