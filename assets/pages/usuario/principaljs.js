const volverLogin = document.querySelector('[data-login]');
const categoria_star = document.querySelector('[data-articulo-star]');
const categoria_consola = document.querySelector('[data-articulo-consola]');
const categoria_varios = document.querySelector('[data-articulo-varios]');

//Volviendo al login
function volverLogini(){
   
    window.location.href = '../../../index.html';
};
volverLogin.addEventListener('click',volverLogini);


const crearUnaCard = (src,titulo,precio)=>{
        const card = document.createElement('div');
        card.classList.add('card','my-2');
        let template = `
            <img src='${src}' alt="producto" style='width:163.63px; height:182.5px' class="producto card-img-top">
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text">$<strong>${precio}</strong></p>
                <a href="" class="verProducto btn btn-primary">Ver producto</a>
            </div>`;
        card.innerHTML = template;
        return card;
    };
//Mostrar los productos de categoria Star Wars

    fetch('http://localhost:3000/star')
    .then(response=> response.json())
    .then(data=> data.forEach(elem =>{
        const nuevaLinea = crearUnaCard(elem.img,elem.titulo,elem.precio);
        categoria_star.appendChild(nuevaLinea);
    }))
    .catch(err=>alert(err));

    //Mostrar los productos de categoria consola

    fetch('http://localhost:3000/consolas')
    .then(response=> response.json())
    .then(data=> data.forEach(perfil =>{
    let lista_consola = crearUnaCard(perfil.img,perfil.titulo,perfil.precio);
    categoria_consola.appendChild(lista_consola);
    }))
    .catch(err=>alert(err));

    //Mostrar los productos de categoria varios
    
    fetch('http://localhost:3000/varios')
    .then(response=> response.json())
    .then(data=> data.forEach(perfil =>{
    let nuevaLinea = crearUnaCard(perfil.img,perfil.titulo,perfil.precio);
    categoria_varios.appendChild(nuevaLinea);
    }))
    .catch(err=>alert(err))
    