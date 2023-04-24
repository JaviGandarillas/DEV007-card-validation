



//Reemplazar este resultado en la posicion que le corrsponda al array
//Sumar todo el array nuevo
//Dividir array por 10, obtener resultado residual. Debe dar 0 para retornar true, de lo contrario devuelve false


const validator = {

  isValid: function (myInput) {

    // Toma el valor del input placeholder de id "nTarjeta"
    //TRANSFORMAR STRING nTarjeta en array, separar con split, revertir el string
    const nArray = myInput.split("");
    const nInvertido = nArray.reverse();

    //la suma comienza en 0
    let suma = 0;
    //Recorrer el array desde indice 0
    for (let i = 0; i < nInvertido.length; i++) {

      let num = parseInt(nInvertido[i]);
      //identificar índice par

      if (i % 2 === 1) {
        //Multiplicar dígitos en indice par x2

        num *= 2;
        //si uno de los digitos es >9 sumar los digitos parseados 

        if (num > 9) {
          num = parseInt(num.toString().charAt(0)) + parseInt(num.toString().charAt(1));
        }
      }

      //Sumar todo el array nuevo asignarlo a "suma"

      suma += num;

    }
    //Dividir array por 10, obtener resultado residual. Debe dar 0 para retornar true, de lo contrario devuelve false

    if (suma % 10 === 0) {
      //si es divisible por 10 entonces...

      return true;
    } else {
      //si no es divisible por 10 entonces...

      return false;
    }
  },
  /* // Condicional si el texto es distinto de numero entonces
   if (Number.isNaN(parseInt(numeroTarjetaValor))) {
     //Cambiar esto a ventana modal
 
     let incorrectNumber = document.getElementsByClassName("alerta1")[0];
     incorrectNumber.innerHTML = "Ingrese número de tarjeta válido";
   } else {
     // Llama a la función maskify para enmascarar el número de tarjeta y mostrarlo en consola
    // let numeroSinMask = numeroTarjetaValor.toString();
 
     let numeroEnmascarado = this.maskify(numeroTarjetaValor);
     //incorrectNumber.innerHTML.style.display="none";
     console.log(numeroEnmascarado)
 
     //console.log(numeroSinMask, numeroEnmascarado)
 
   }*/

  //funcion maskify para el numeroTarjetaValor
  maskify: function (nTarjeta) {
    //Si el tipo de valor ingresado es distinto del tipo de numTV retorna mensaje "ingrese tarjeta valida"
    //pero quiero que aqui vuelva a llamar a la ventana modal
    if (!nTarjeta) {
      return "Ingrese tarjeta válida";
    }
    //Se convierte la numero a un string en numCadena
    const numCadena = nTarjeta.toString();

    //Si la cadena es menos a 4 entonces devuelve el numero completo
    if (numCadena.length <= 4) {
      return numCadena;
      //De lo contrario 
      //Declara en variable los ultimos 4 digitos del numero
    } else {
      const ultimos4Num = numCadena.slice(-4);
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
}

export default validator;



//sumar numeros positivos de un array
//Ejemplo => [1,-2,.3,5]
//recorrer el array => ciclo for
//Verificar cada indice si es positivo
//si el indice es positivo sumarlo al resultado

//var resultado = 0
///donde empiez; limite; para el siguiente
/*for(let i = 0; i < arr.length; i++){
  if(i > 0 ){
//
    resultado = resultado + arr[i]
  }
}*/