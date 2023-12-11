import { service } from "../server/server.js";

const btn_registro = document.querySelector("[data-btn-registro]");
const $usuario = document.querySelector("[data-usuario]");
const pass = document.querySelector("[data-contraseña]");
const $repeat = document.querySelector("[data-repeat-contraseña]");

$usuario.focus();
$usuario.addEventListener("change", validaTexto);
function validar() {
  let msjUsuario = document.querySelector(".usuario");
  let msjPass = document.querySelector(".password");
  let msjRepeat = document.querySelector(".repeatPassword");
  let msjErrors ={};
  console.log($usuario.value);
  if(!$usuario.value){
      msjErrors.usuario = "El usuario es requerido";

      }else if (!validaTexto()) {
    msjErrors.innerText = "El usuario debe ser mayor a 3 caracteres y menor a 11"; 
  }if(!pass.value){
       msjErrors.password = "La contraseña es requerida";
  }else if (!validarPassword()) {
    msjErrors.password ="La contraseña debe ser mayor a 5 caracteres y menor a 11";
  }if(!$repeat.value == ''){
    msjErrors.repeatPassword = "La contraseña es requerida";
  }else if (!repeat()) {
    msjErrors.repeatPassword = "No coincide la contraseña"; 
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
  if ($usuario.value.length < 4 || $usuario.value.length > 10) {
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
const handleSubmit = (event) => {
  event.preventDefault();
  let errors = validar();
  console.log(errors);
  console.log(Object.values(errors).length);
  if(Object.values(validar()).length === 0){
    return alert("Registro Existoso");
  }else{
    alert("Revisar los campos");
  }
  
};
btn_registro.addEventListener("click", handleSubmit);
