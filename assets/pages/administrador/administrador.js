import { service } from '../../server/server.js'
const formulario = document.querySelector('[data-form]');

let categoria = document.querySelector('[data-categoria]');
let url_img = document.querySelector('[data-url-img]');
let nombre_producto = document.querySelector('[data-nombre-producto]');
let precio = document.querySelector('[data-precio]');
let descripcion = document.querySelector('[data-descripcion]');

let url = new URL(window.location);
let id = url.searchParams.get('id');
if(id == null){
    const verificaYDerivaProducto =  (categoria)=>{
        url_img = url_img.value;
        nombre_producto = nombre_producto.value;
        precio = precio.value;
        descripcion = descripcion.value;
        
        console.log('esto dice en categoria ' + categoria.value)
        switch(categoria){
            case 'Star Wars':
                // console.log('elegiste star wars')
                service.agregarProductos(url_img,nombre_producto,precio,descripcion,'star') 
                break;
            case 'Consola':
                // console.log('elegiste consola')
                service.agregarProductos(url_img,nombre_producto,precio,descripcion,'consola');   
                break;
            case 'Diversos':
                // console.log('elegiste diversos')
                service.agregarProductos(url_img,nombre_producto,precio,descripcion,'varios');   
                break;
            default:
                alert('Ocurrio un error interplanetario');
                break;
            };
            
        };  
        
    formulario.addEventListener('submit',(evento)=>{
        evento.preventDefault();
        verificaYDerivaProducto(categoria.value);    
    })
}
