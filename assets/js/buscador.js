

export const buscador = (buscando)=>{
    // console.log('buscador' , buscando);
    let productos = document.querySelectorAll('.buscar');
    if(!buscando == ''){
        // console.log(productos[0].innerText);
        productos.forEach(elem => {
            if(elem.innerText.toLowerCase().includes(buscando.toLowerCase())){
                // console.log('Coincidencias' , elem.innerText);
                elem.parentElement.parentElement.style.display = 'block';
            }else{
                // console.log('No hay coincidencias' , elem.innerText);
                elem.parentElement.parentElement.style.display = 'none';
            }
        })
    }
   
} 

