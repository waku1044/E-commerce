
//GET
//Mostrar los productos en categoria 

const mostrarProductos = (destino)=>{    
return fetch(`http://localhost:3000/${destino}`)
.then(response=> response.json())
};



//POST
//AGREGAR PRODUCTOOS AL SERVIDOR
// Se agregar los productos al back
function agregarProductos(img, titulo, precio, descripcion,categoria) {
    return fetch(`http://localhost:3000/${categoria}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ img, titulo, precio, descripcion, id: uuid.v4() })
    })
        .catch(err => alert(err));
};


//DELETE
//ELIMINA PRODUCTO DEL SERVIDOR
const eliminarProducto = (categoria,id)=>{
    return fetch(`http://localhost:3000/${categoria}/${id}`,{
        method:"DELETE"
    })
}

export const service =  {
    mostrarProductos,
    agregarProductos,
    eliminarProducto
};
