/*import validator from './validator.js';

console.log(validator);
*/

//Se trae el valor desde el placeholder, queda en variable "numeroTarjeta"
const numeroTarjeta = document.getElementById("nTarjeta");
const placeholderValor = numeroTarjeta.value;
console.log(placeholderValor);

/*funcion para el boton verificar que alerta si el valor es un numero
retorna el numero en un alert, si no es numero arroja en un alert 
"Ingresa un número válido", si la celda esta vacia entonces arroja en 
un alert "por favor ingresa el numero de tu tarjeta"


Ver si se puede bloquear los caracteres que no sean numericos
*/
function verificar(e) {
    e.preventDefault();
  const numeroTarjetaValor = parseInt(document.getElementById("numeroTarjeta").value);
  if (Number.isNaN(numeroTarjetaValor)) {
    alert("Ingrese solo números");
    document.getElementById("numeroTarjeta").value = "";
    alert("Por favor ingrese solo números");
  } else {
    var correctNumber = document.getElementsByClassName("contenedor")[0];
    correctNumber.innerHTML = "El número de tarjeta es " + " " + numeroTarjetaValor;
  }
}

/*function validar() {
    var numeroTarjeta = document.getElementById("numeroTarjeta").value;
    alert("numeroTarjeta");
  }*/