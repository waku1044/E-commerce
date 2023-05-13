import { service } from '../server/server.js';

const form = document.querySelector('[data-form]');


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
        nombre.value = perfil.titulo;
        precio.value = perfil.precio;
        descripcion.value = perfil.descripcion;
    });
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const id = url.searchParams.get('id');
        const img = document.querySelector('[data-url]').value;
        const categoria = document.querySelector('[data-categoria]').value
        const nombre = document.querySelector('[data-producto]').value;
        const precio = document.querySelector('[data-precio]').value;
        const descripcion = document.querySelector('[data-descripcion]').value;
        let cate;
        switch(categoria){
            case 'Star Wars':
                cate = 'star';
                service.actualizar(img,nombre,precio,descripcion,cate,id);
                window.location.href = '../administrador/admin_productos.html';
                break;
            case 'Consola':
                cate = 'consola';
                service.actualizar(img,nombre,precio,descripcion,cate,id);
                window.location.href = '../administrador/admin_productos.html';

                break;
            case 'Diversos':
                cate = 'varios';
                service.actualizar(img,nombre,precio,descripcion,cate,id)
                window.location.href = '../administrador/admin_productos.html';

                 break;
            default:
                alert('Seleccione una Categoria')
        }
        
    })
}
obtenerInfo();
