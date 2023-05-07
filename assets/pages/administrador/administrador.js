import { service } from '../../server/server.js'
const formulario = document.querySelector('[data-form]');
const categoria = document.querySelector('[data-categoria]');



const verificaYDerivaProducto =  (categoria)=>{
    
    const url_img = document.querySelector('[data-url-img]').value;
    const nombre_producto = document.querySelector('[data-nombre-producto]').value;
    const precio = document.querySelector('[data-precio]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;
    console.log('esto dice en categoria ' + categoria.value)
    switch(categoria){
        case 'Star Wars':
            // console.log('elegiste star wars')
            service.agregarProductos(url_img,nombre_producto,precio,descripcion,'star') 
            break;
        case 'Consola':
            // console.log('elegiste consola')
            service.agregarProductos(url_img,nombre_producto,precio,descripcion,'consolas');   
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
