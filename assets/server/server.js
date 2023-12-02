
//GET
//Mostrar los productos en categoria 
export const saludo = 'Hola, estas en la ruta correcta';

const mostrarProductos = async ()=>{    
    const response = await fetch(`http://localhost:3000/api/mostrarproductos`);
    return await response.json();
};

// Detalle de producto solo se aplica cuando el administrador entras en editar
const detalleProducto = async (id)=>{
    const response = await fetch(`http://localhost:3000/api/mostrarproducto/${id}`);
    return await response.json();
    
};


//POST
const agregarusuario = async (user,pass)=>{
    try {
        return await fetch(`http://localhost:3000/api/agregarusuario`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user, pass, fecha: new Date().toLocaleDateString(), hora: new Date().toLocaleTimeString(),idusuario: uuid.v4() })
        });
    } catch (err) {
        return alert(err);
    }
}
//AGREGAR PRODUCTOOS AL SERVIDOR
// Se agregar los productos al back
async function agregarProductos(img, nombre, precio, descripcion,categoria) {
    try {
        return await fetch(`http://localhost:3000/api/agregarproducto`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ img, nombre, precio, descripcion, categoria, idproducto: uuid.v4(), hora: new Date().toLocaleTimeString(), fecha: new Date().toLocaleDateString() })
        });
    } catch (err) {
        return alert(err);
    }
};
const actualizar = async (img,nombre,precio,descripcion,categoria,id)=>{
    try {
        const response = await fetch(`http://localhost:3000/api/actualizarproducto/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ img, nombre, precio, descripcion, categoria })
        });
        return response;
    } catch (err) {
        return alert(err);
    }
}


//DELETE
//ELIMINA PRODUCTO DEL SERVIDOR
const eliminarProducto = (id)=>{
    
    return fetch(`http://localhost:3000/api/eliminarproducto/${id}`,{
        method:"DELETE"
    })
}


export const service =  {
    detalleProducto,
    mostrarProductos,
    agregarProductos,
    eliminarProducto,
    actualizar,
    agregarusuario,
    saludo
    
};
