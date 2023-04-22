import validator from './validator.js';

//const botonValidar = document.getElementById('btn1');
//botonValidar.addEventListener('click', validator.validar());

const botonValidar = document.querySelector('#btn1');

/*function validar(event) {
    event.preventDefault();*/
//const boton= document.getElementsByClassName('div6');
//const newNumber= document.getElementById('nTarjeta');

botonValidar.addEventListener('click', () => {
    event.preventDefault();
    validar(event);
//validar(myInput);
    
});
function validar() {
    //traer los valores del input
    const inputTarjeta = document.querySelector("#nTarjeta").value;
   
    if(inputTarjeta === ""){
        alert('Ingrese número válido');
        return false
    }
    //traer isValid
    const esValida = validator.isValid(inputTarjeta);
  
    if (esValida) {
      alert("Tarjeta aprobada");
    } else {
      alert("Ingrese un número válido");
    }
  
    const tarjetaMaskificada = validator.maskify(inputTarjeta);
    
  }




/*function validar(myInput) {
    const resultado = validator.maskify(myInput);
    let num = myInput.value;
    // si cnTarjeta coincide con expreg num con length 16
    if (num.match() && num === '16' === true) {
        //devuelve true
        console.log('funcionó');
        return true;
    } else {//de lo contrario 
        //da false y arroja alerta con "ingresa un numero valido"
        ("ingresa un numero valido");
        return false;
    }*/


/*botonValidar.validator.isValid(myInput);
botonValidar.validator.maskify(myInput);
console.log(isValid(),maskify());*/

/*function tarjetaValidada(nTarjeta){
    const num = /^[0-9]+$/;
    if (nTarjeta.match(num) && nTarjeta === '16'){
        //si num es numero valido que me lo guarde en esNumero
        console.log(num);
        return true;
    }else{
        const noEsNumero = document.getElementsByClassName("alerta1")[0];
        noEsNumero.innerHTML = "Ingrese número de tarjeta válido";

        return false;

}
}
console.log(tarjetaValidada);
*/
//validator.validar(document.getElementById('nTarjeta').value);
//const numeroMasked= validator.maskify();

//console.log(numeroValidado, numeroMasked);
//console.log(numeroValidado);


/*function validar(event) {
  event.preventDefault();
  // Toma el valor del input placeholder de id "nTarjeta"
  let numeroTarjetaValor = document.getElementById("nTarjeta").value;
  // Condicional si el texto es distinto de numero entonces
  if (Number.isNaN(parseInt(numeroTarjetaValor))) {
    let incorrectNumber = document.getElementsByClassName("alerta1")[0];
    incorrectNumber.innerHTML = "Ingrese número de tarjeta válido";
  } else {
    // Llama a la función maskify para enmascarar el número de tarjeta y mostrarlo en consola
    let numeroSinMask = numeroTarjetaValor.toString;
    let numeroEnmascarado = maskify(numeroTarjetaValor);
    console.log(numeroEnmascarado, numeroSinMask);
  }
}

//funcion maskify para el numeroTarjetaValor
function maskify(numeroTarjetaValor) {
  //Si el tipo de valor ingresado es distinto del tipo de numTV retorna mensaje "ingrese tarjeta valida"
  if (!numeroTarjetaValor) {
    return "Ingrese tarjeta válida";
  }
  //Se convierte la numero a un string en numCadena
  let numCadena = numeroTarjetaValor.toString();
  
  //Si la cadena es menos a 4 entonces devuelve el numero completo
  if (numCadena.length <= 4) {
    return numCadena;
    //De lo contrario 
    //Declara en variable los ultimos 4 digitos del numero
  } else {
    let ultimos4Num = numCadena.slice(-4);
    //Declara cadena vacía para posterior uso
    let maskedNumTarjetaTotal = '';
    //Bucle para recorrer la cadena hasta ultimos -4 digitos
    for (let i = 0; i < numCadena.length - 4; i++) {
      //Enmascarar, concatenar rebanada almohadinillada y 
      maskedNumTarjetaTotal = maskedNumTarjetaTotal + '#';
    }
    //Lo retorna en consola
    return (maskedNumTarjetaTotal + ultimos4Num);
  }
}

//let edad= [54, 'klapausius', true];
//          0        1        2 = indice
//          1        2        3= cantidad => .lenght


//for (initialization, condition, comomanejoelindice)
/*for (let i = 0; i < edad.length; i++){
console.log(i);
edad[i]= i+8;
console.log(edad[i]);

}

/*let edad = {
  clave: 'valor',
  nombre: 'Cristian',
  edad: 87,
  coach: true

}

edad.nombre;*/
