// let  API_URL = {
//     dev: 'https://e-commerce-hhsohnme2-waku1044.vercel.app',
//     local: 'http://localhost:3000',
//     verficacion: true
//   }
//   API_URL.verficacion ? API_URL = API_URL.dev : API_URL = API_URL.local;
  let API_URL = process.env.PORT || '3000';
  console.log(API_URL);
//GET
//Mostrar los productos en categoria 
export const saludo = 'Hola, estas en la ruta correcta';

const mostrarProductos = async ()=>{    
    const response = await fetch(`${API_URL}/api/mostrarproductos`);
    return await response.json();
};
const login = async (user,pass)=>{
    const response = await fetch(`${API_URL}/api/login`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({user, pass})
    });
    return await response.json();
}

// Detalle de producto solo se aplica cuando el administrador entras en editar
const detalleProducto = async (id)=>{
    const response = await fetch(`${API_URL}/api/mostrarproducto/${id}`);
    return await response.json();
    
};


//POST
async function registro (user,pass){
    try {
        return await fetch(`${API_URL}/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user, pass,idusuario: uuid.v4(), fecha: new Date().toLocaleDateString(), hora: new Date().toLocaleTimeString() })
        });
    } catch (err) {
        return alert(err);
    }
}
//AGREGAR PRODUCTOOS AL SERVIDOR
// Se agregar los productos al back
async function agregarProductos(img, nombre, precio, descripcion,categoria) {
    try {
        return await fetch(`${API_URL}/api/agregarproducto`, {
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
        const response = await fetch(`${API_URL}/api/actualizarproducto/${id}`, {
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
    
    return fetch(`${API_URL}/api/eliminarproducto/${id}`,{
        method:"DELETE"
    })
}


export const service =  {
    detalleProducto,
    mostrarProductos,
    agregarProductos,
    eliminarProducto,
    actualizar,
    registro,
    login,
    saludo
    
};
