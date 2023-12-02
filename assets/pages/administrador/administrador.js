import { service } from '../../server/server.js';
let formulario = document.querySelector('[data-form]');

const  categoria = document.querySelector('[data-categoria]');
const url_img = document.querySelector('[data-url-img]');
const nombre_producto = document.querySelector('[data-nombre-producto]');
const precio = document.querySelector('[data-precio]');
const descripcion = document.querySelector('[data-descripcion]');
const img = document.querySelector('#img');
const btn_admin = document.querySelector('[data-btn-admin]');



url_img.addEventListener('change', (e)=>{
    img.src = e.target.value
})
    



// btn de administrado vuelve papaera ver los productos
function ingresar(){
    window.location.href = './admin_productos.html'
}
btn_admin.addEventListener('click',ingresar);
function clearInputs (){
    
    categoria.value = '';
    url_img.value = '';
    nombre_producto.value = '';
    precio.value = '';
    descripcion.value = '';
}

let url = new URL(window.location);
let id = url.searchParams.get('id');
if(id == null){
    
    const verificaYDerivaProducto =  ()=>{
        
        let category = categoria.value;
        let url_imgen = url_img.value;
        let nombre_product = nombre_producto.value;
        let price = precio.value;
        let description = descripcion.value;
        
        console.log(category)
        
        switch(category){
            case 'Star Wars':
                // console.log('elegiste star wars')
                service.agregarProductos(url_imgen,nombre_product,price,description,category) 
                clearInputs();
                break;
            case 'Consola':
                // console.log('elegiste consola')
                service.agregarProductos(url_imgen,nombre_product,price,description,category); 
                clearInputs();  
                break;
            case 'Diversos':
                // console.log('elegiste diversos')
                service.agregarProductos(url_imgen,nombre_product,price,description,category);
                clearInputs();   
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
        }
