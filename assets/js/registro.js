const  btn_registro = document.querySelector('[data-btn-registro]');

    
function handleSubmit (){
        let msj = '---Corrija los siguientes campos---\n';
        let esCorrecto = true;
        if(!validaTexto()){
            msj += '- Nombre\n';
            esCorrecto = false;
        }
        if(!validarPassword()){
            msj += '- Password\n';
            esCorrecto = false; 
        }
        if(!repeat()){
            msj += '- RepeatPassword\n';
            esCorrecto = false;
        }
        if(!esCorrecto){
            alert(msj);
        }else{
            alert('Registro Existoso.');
            let user = document.querySelector('[data-usuario]').value;
            let pass = document.querySelector('[data-contraseña]').value;
            localStorage.setItem('usuario',user);
            localStorage.setItem('contraseña',pass);
            window.location.href = '../../../../index.html'
        }
}  
function repeat(){
    let pass = document.querySelector('[data-contraseña]').value;
    let repeat = document.querySelector('[data-repeat-contraseña]').value;
    if(pass == repeat){
        return true
    }else{
        return false
    }
}
function validaTexto (){
    const user = document.querySelector('[data-usuario]').value;
    if(isNaN(user) && user.length >= 4){
        return true
    }else{
        return false
    }
} 
function validarPassword(){
    let pass = document.querySelector('[data-contraseña]');
    if(pass.value.length >= 6){
        return true
    }else{
        return false
    }
}
        
    
btn_registro.addEventListener('click',handleSubmit)
