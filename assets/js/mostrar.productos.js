import { service } from '../server/server.js';

const categoriaStar = document.querySelector('[data-articulo-star]');
const categoriaConsola = document.querySelector('[data-articulo-consola]');
const categoriaVarios = document.querySelector('[data-articulo-varios]');

//Crear una card
const crearUnaCard = (src,titulo,precio,validar,id)=>{
    let card = document.createElement('div');
    if(validar){
        card.classList.add('card','my-2','col-2','col-md-4','col-lg-4');
        card.setAttribute('style','width:165px');
        let template = `
            <img src='${src}' alt="producto" style='height:200px' class="producto card-img-top">
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text">$<strong>${precio}</strong></p>
                <a href="" class="verProducto btn btn-primary">Ver producto</a>
                <button class="btn btn-danger mt-2 col-12" id='${id}' data-btn-eliminar>Eliminar</button>
                <button class="btn btn-success mt-2 col-12"  data-btn-editar>Editar</button>
            </div>`;
            
            card.innerHTML = template;
            let btn_eliminar = card.querySelector('[data-btn-eliminar]');
            btn_eliminar.addEventListener('click', (e)=> {
                e.preventDefault;
            let categoria = e.target.parentNode.parentNode.parentNode.parentNode.classList[0];
            console.log(categoriaStar.id)
            let id = e.target.id;
                switch(categoria){
                    case 'starWars':
                        service.eliminarProducto(categoriaStar.id,id)
                    break;
                    case 'consola':
                        service.eliminarProducto(categoriaConsola.id,id)
                    break;
                    case 'diversos':
                        service.eliminarProducto(categoriaVarios.id,id)
                    break;
                }
             });
            // agregar el id para identifica el producto
            
    }else{
        card.classList.add('card','my-2');
        card.setAttribute('style','width:163.63px');
        let template = `
            <img src='${src}' alt="producto" style='width:163.63px; height:182.5px' class="producto card-img-top">
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text">$<strong>${precio}</strong></p>
                <a href="" class="verProducto btn btn-primary">Ver producto</a>
                
            </div>`;
        card.innerHTML = template;
    }
    
    return card;
};
export const mostrar = {
    crearUnaCard
}