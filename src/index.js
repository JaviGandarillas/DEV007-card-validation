import validator from './validator.js';

const modal = document.querySelector("#myModal");
const botonValidar = document.querySelector('#btn1');
const span = document.querySelector(".close");

botonValidar.addEventListener('click', (event) => {
  event.preventDefault();
  validar();
});

function validar() {
  const inputTarjeta = document.querySelector("#nTarjeta").value;

  if (inputTarjeta === "") {
    const msgVoid = "Por favor ingrese un número válido";
    document.querySelector("#aprobada").textContent = msgVoid;

    document.querySelector("#aprobada").style.display = "block";
    document.querySelector("#invalida").style.display = "none";
    modal.style.display = "block";
    span.onclick = function () {
      modal.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
    return false;
  }

  const esValida = validator.isValid(inputTarjeta);

  if (esValida) {
    const tarjetaEnmascarada = validator.maskify(inputTarjeta);
    const msgAprobada = "Tarjeta " + tarjetaEnmascarada + " aprobada";

    document.querySelector("#invalida").style.display = "none";
    document.querySelector("#aprobada").textContent = msgAprobada;
    document.querySelector("#aprobada").style.display = "block";


    /*document.querySelector("#invalida").style.display = "none";
        document.querySelector("#aprobada").style.display = "block";*/
  } else {
    const tarjetaEnmascarada = validator.maskify(inputTarjeta);
    const msgAprobada = "Tarjeta " + tarjetaEnmascarada + "  rechazada";

    document.querySelector("#invalida").style.display = "block";
    document.querySelector("#invalida").textContent = msgAprobada;
    document.querySelector("#aprobada").style.display = "none";
  }

  modal.style.display = "block";
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  validator.maskify(inputTarjeta);
}