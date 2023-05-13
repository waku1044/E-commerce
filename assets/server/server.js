
//GET
//Mostrar los productos en categoria 

const mostrarProductos = ()=>{    
return fetch(`http://localhost:3000/productos`)
.then(response=> response.json())
};

// Detalle de producto solo se aplica cuando el administrador entras en editar
const detalleProducto = (id)=>{
    return fetch(`http://localhost:3000/productos/${id}`).then(response => response.json());
}


//POST
//AGREGAR PRODUCTOOS AL SERVIDOR
// Se agregar los productos al back
function agregarProductos(img, titulo, precio, descripcion,categoria) {
    return fetch(`http://localhost:3000/productos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ img, titulo, precio, descripcion,categoria, id: uuid.v4() })
    })
        .catch(err => alert(err));
};
 
const actualizar = (img,titulo,precio,descripcion,categoria,id)=>{
    return fetch(`http://localhost:3000/productos/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({img, titulo, precio, descripcion,categoria})
    })
    .then(response=> response)
    .catch(err => alert(err))
}


//DELETE
//ELIMINA PRODUCTO DEL SERVIDOR
const eliminarProducto = (id)=>{
    return fetch(`http://localhost:3000/productos/${id}`,{
        method:"DELETE"
    })
}



export const service =  {
    detalleProducto,
    mostrarProductos,
    agregarProductos,
    eliminarProducto,
    actualizar
    
};
