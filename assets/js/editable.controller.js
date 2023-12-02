import { service } from '../server/server.js';

const form = document.querySelector('[data-form]');

const btn_admin = document.querySelector('[data-btn-admin]');

// btn de administrado vuelve papaera ver los productos
function ingresar(){
    window.location.href = './admin_productos.html'
}
btn_admin.addEventListener('click',ingresar);


const obtenerInfo = ()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    if(id == null){
        console.log('Derivar a page Error')
    }
    
    const img = document.querySelector('[data-url]');
    const nombre = document.querySelector('[data-producto]');
    const precio = document.querySelector('[data-precio]');
    const descripcion = document.querySelector('[data-descripcion]');
    
    service.detalleProducto(id).then(perfil=> {
        img.value = perfil.img;
        nombre.value = perfil.nombre;
        precio.value = perfil.precio;
        descripcion.value = perfil.descripcion;
        // console.log(perfil)
    });
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const id = url.searchParams.get('id');
        const img = document.querySelector('[data-url]').value;
        const categoria = document.querySelector('[data-categoria]').value
        const nombre = document.querySelector('[data-producto]').value;
        const precio = document.querySelector('[data-precio]').value;
        const descripcion = document.querySelector('[data-descripcion]').value;
        
        switch(categoria){
            case 'Star Wars':
                
                service.actualizar(img,nombre,precio,descripcion,categoria,id);
                window.location.href = '../administrador/admin_productos.html';
                break;
            case 'Consola':
                
                service.actualizar(img,nombre,precio,descripcion,categoria,id);
                window.location.href = '../administrador/admin_productos.html';

                break;
            case 'Diversos':
                
                service.actualizar(img,nombre,precio,descripcion,categoria,id)
                window.location.href = '../administrador/admin_productos.html';

                 break;
            default:
                alert('Seleccione una Categoria')
        }
        
    })
}
obtenerInfo();
