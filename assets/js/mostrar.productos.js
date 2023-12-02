import { service } from '../server/server.js'
//Crear una card
const crearUnaCard = (src,titulo,precio,validar=false,id,categoria)=>{
    let card = document.createElement('div');
    
    
    if(validar){
        card.classList.add('card','my-2','col-2','col-md-4','col-lg-4');
        card.setAttribute('style','width:165px');
        let template = `
            <img src='${src}' alt="producto" style='height:200px' class="producto card-img-top">
            <div class="card-body">
                <h5 class="card-title buscar text-capitalize">${titulo}</h5>
                <p class="card-text"><i>${categoria}</i></p>   
                <p class="card-text">$<strong>${precio}</strong></p>
                <a href="../verProducto.html?id=${id}" class="verProducto btn btn-primary">Ver producto</a>
                <button type="submit" class="btn btn-danger mt-2 col-12"  id=${id} data-btn-eliminar>Eliminar</button>
                <a href='../../pages/administrador/editable.admin.html?id=${id}' class="btn btn-success mt-2 col-12" data-btn-editar>Editar</a>
            </div>`;
            
            card.innerHTML = template;
            let btn_eliminar = card.querySelector('[data-btn-eliminar]');
            btn_eliminar.addEventListener('click', (e)=> {
                // e.preventDefault;
                let id = e.target.id;
                service.eliminarProducto(id);
                location.reload();
                
                
             });
    }else{
        card.classList.add('card','my-2');
        card.setAttribute('style','width:163.63px');
        let user = 'usuario';
        let template = `
            <img src='${src}' alt="producto" style='width:163.63px; height:182.5px' class="producto card-img-top">
            <div class="card-body">
                <h5 class="card-title buscar text-capitalize">${titulo}</h5>
                <p class="card-text">$<strong>${precio}</strong></p>
                <a href='../verProducto.html?id=${id}' class="verProducto btn btn-primary">Ver producto</a>   
            </div>`;
        card.innerHTML = template;
    }
    
    return card;
};
export const mostrar = {
    crearUnaCard
}