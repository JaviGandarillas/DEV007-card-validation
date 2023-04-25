### Validador de Tarjeta de Crédito


El siguiente producto es una aplicación web destinada a validar la fidelidad de una tarjeta de crédito única. Esta aplicación esta pensada para los usuarios, en este caso empresas, que necesitan validar una tarjeta de crédito de un cliente para poder gestionar y otorgarles la opción de pago con crédito a plazo de 30, como la mayoría de las grandes, medianas y microempresas en la actualidad. Con esto conseguimos garantizar la seguridad de los pagos y evitar fraudes.


### Indicaciones de uso

+ 1.- Ingrese su número de tarjeta de crédito en el campo señalado.
+ 2.- Haga clic en "Validar".
+ 3.- Si el mensaje retorna "Ingrese un número válido", entonces vuelva al paso 1.

### Resultados


El usuario ingresa en el campo "número de tarjeta" los 16 dígitos correspondientes a su tarjeta de crédito, luego hacer click en el botón "Validar".

Existen 3 resultado posibles para el número de tarjeta ingresado, este se muestra en una ventana modal:

+ "Ingrese un número válido": Para cuando se haya hecho click en "Validar" y el campo se encuentre vacío.
+ "Tarjeta '####ero' aprobada": Para el caso en que la tarjeta sea valida según el algoritmo de Luhn. El número de tarjeta se muestra enmascarado, excepto los últimos 4 dígitos.
+ "Tarjeta '####ero' rechazada": Si el número de tarjeta es inválido. También arroja en el mensaje el número enmascarado, excepto los últimos 4 dígitos.

### Tecnologías Utilizadas

Para lograr este resultado se ha utilizado HTML y CSS para estructura y estilo  y Javascript para la validación.

