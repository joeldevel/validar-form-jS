const btnIngresar = document.querySelector('#btn-ingresar');

const MSJ_ERROR = {
  faltaArroba: ' Falta arroba en nombre ',
  campoClaveVacio: ' El campo clave no puede estar vacio '
}

btnIngresar.addEventListener('click', function(e) {
  // obtener valores
  const valorCampoUsuario = document.querySelector('#usuario').value;
  const valorClaveUsuario = document.querySelector('#clave').value;

  // verificarlos
  let erroresAlEnviar = [];
  let ok = true;
  if (!valorCampoUsuario.includes('@')) {
    erroresAlEnviar.push(MSJ_ERROR.faltaArroba);
    ok = false;
  }
  if (!valorClaveUsuario) {
    erroresAlEnviar.push(MSJ_ERROR.campoClaveVacio);
    ok = false;
  }
  // hubo errores
  if (!ok) {
    let alertErrores ='';
    for( let i = 0; i < erroresAlEnviar.length; i++) {
      alertErrores += erroresAlEnviar[i];
    }
    alert(alertErrores);
    // no enviar el form
    e.preventDefault();
  }

})
