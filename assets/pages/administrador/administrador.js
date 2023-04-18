const url_img = document.querySelector('[data-url-img]');
const categoria = document.querySelector('[data-categoria]');
const nombre_producto = document.querySelector('[data-nombre-producto]');
const precio = document.querySelector('[data-precio]');
const descripcion = document.querySelector('[data-descripcion]');
const formulario = document.querySelector('[data-form]');

// Se agregar los productos al back
const agregar_producto_star = (img,titulo,precio,descripcion)=>{
        return fetch('http://localhost:3000/star',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({img,titulo,precio,descripcion,id: uuid.v4()})
        })
        .catch(err => alert(err));
};
const agregar_producto_consola = (img,titulo,precio,descripcion)=>{
        return fetch('http://localhost:3000/consolas',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({img,titulo,precio,descripcion,id: uuid.v4()})
        })
};
const agregar_producto_varios = (img,titulo,precio,descripcion)=>{
        return fetch('http://localhost:3000/varios',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({img,titulo,precio,descripcion,id: uuid.v4()})
        })
};

formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    // console.log(categoria.value);
    verificaYDerivaProducto(categoria.value);
    
    
    // console.log(url_img.value,categoria.value,nombre_producto.value,precio.value,descripcion.value)
    
})

const verificaYDerivaProducto =  (categoria)=>{
    switch(categoria){
        case 'Star Wars':
            // console.log('elegiste star wars')
        agregar_producto_star(url_img.value,nombre_producto.value,precio.value,descripcion.value) 
        break;
        case 'Consola':
        // console.log('elegiste consola')
        agregar_producto_consola(url_img.value,nombre_producto.value,precio.value,descripcion.value);   
        break;
        case 'Diversos':
        // console.log('elegiste diversos')
        agregar_producto_varios(url_img.value,nombre_producto.value,precio.value,descripcion.value);   
        break;
        default:
        alert('Ocurrio un error interplanetario');
        break;
    };

}
