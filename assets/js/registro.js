

const btn_registro = document.querySelector("[data-btn-registro]");
const $usuario = document.querySelector("[data-usuario]");
const pass = document.querySelector("[data-contraseña]");
const $repeat = document.querySelector("[data-repeat-contraseña]");





$usuario.focus();
$usuario.addEventListener("change", validaTexto);

function modal(text) {
  const dialog = document.querySelector("[data-modal]");
  let context = `<h3>${text}.</h3>`;
  dialog.innerHTML = context;
  dialog.showModal();
  setTimeout(() => {
      dialog.close();
  }, 3000);
  
}
function validar() {
  let msjUsuario = document.querySelector(".usuario");
  let msjPass = document.querySelector(".password");
  let msjRepeat = document.querySelector(".repeatpassword");
  let msjErrors ={};
  console.log($usuario.value);
  if(!$usuario.value){
      msjErrors.usuario = "El usuario es requerido";
      msjUsuario.innerText =  msjErrors.usuario;
      }else if (!validaTexto()) {
    msjErrors.usuario = "El usuario debe ser mayor a 3 caracteres y menor a 11";
    msjUsuario.innerText =  msjErrors.usuario; 
  }if(!pass.value){
       msjErrors.password = "La contraseña es requerida";
       msjPass.innerText =  msjErrors.password;
  }else if (!validarPassword()) {
    msjErrors.password ="La contraseña debe ser mayor a 5 caracteres y menor a 11";
    msjPass.innerText =  msjErrors.password;
  }if(!$repeat.value){
    msjErrors.repeatPassword = "La contraseña es requerida";
    msjRepeat.innerText =  msjErrors.repeatPassword;
  }else if (!repeat()) {
    msjErrors.repeatPassword = "No coincide la contraseña";
    msjRepeat.innerText =  msjErrors.repeatPassword; 
  }
  return msjErrors;
  // else{
  //     alert('Registro Existoso.');
  //     // let user = document.querySelector('[data-usuario]').value;
  //     // let pass = document.querySelector('[data-contraseña]').value;
  //     // let fecha = new Date().toLocaleDateString();
  //     // let hora = new Date().toLocaleTimeString();
  //     // // service.agregarusuario(user,pass,fecha,hora)
  //     // localStorage.setItem('usuario',user);
  //     // localStorage.setItem('contraseña',pass);
  //     // window.location.href = '../../../index.html';
  // }
}
function repeat() {
  if (pass.value !== $repeat.value) {
    return false;
  } else {
    return true;
  }
}
function validaTexto() {
  if ($usuario.value.length < 4 || $usuario.value.length > 12) {
    return false;
  } else {
    return true;
  }
}
function validarPassword() {
  if (pass.value.length < 6 || pass.value.length > 10) {
    return false;
  } else {
    return true;  
  }
}
const handleSubmit = (e) => {
  e.preventDefault();
  let errors = validar();
  if(Object.values(validar()).length === 0){
    localStorage.setItem('usuario',$usuario.value)
      localStorage.setItem('contraseña',pass.value);
      modal('Registro Existoso.');
      setTimeout(() => {window.location.href = '../../../index.html';
    }, 2000);
  
  }else{
    modal(Object.values(errors).join('<br>'));
  };
}
btn_registro.addEventListener("click", handleSubmit);
