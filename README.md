### Validador de Tarjeta de Crédito

Este es un proyecto básico de validación de tarjeta de crédito. El usuario ingresará el número de la tarjeta y el sistema realizará una validación utilizando el algoritmo de Luhn. Si la tarjeta es válida, se mostrará un mensaje en una ventana modal que indicará "Tarjeta 'numero' aprobada" donde 'numero' será el número de tarjeta ingresado enmascarado con # todos los números, excepto los últimos 4 dígitos. Si la tarjeta es inválida, se mostrará un mensaje en una ventana modal que indicará "Tarjeta 'numero' rechazada" donde 'numero' será el número de tarjeta ingresado enmascarado con # todos los números, excepto los últimos 4 dígitos. Si el campo del número de tarjeta está vacío, se mostrará un mensaje en una ventana modal que indicará "Por favor ingrese número de tarjeta".

Este proyecto es útil para los clientes de una empresa que quieran acceder a crédito a plazo de 30 días, ya que este es uno de los requisitos que deben cumplir. La validación de la tarjeta de crédito es importante para garantizar la seguridad de los pagos y evitar fraudes.

Para utilizar esta aplicación, simplemente ingrese el número de tarjeta de crédito en el campo de entrada y haga clic en el botón "Validar". El sistema procesará la información y mostrará un mensaje en una ventana modal indicando si la tarjeta es válida o no.

### Algoritmo de Luhn

El algoritmo de Luhn es un método de validación de números de tarjetas de crédito. Se utiliza para verificar la integridad de los números de tarjeta de crédito y evitar fraudes. El algoritmo funciona de la siguiente manera:

A partir del segundo dígito de la derecha, se multiplica por dos cada número que ocupa una posición par.
Si el resultado de la duplicación es mayor que 9, se suman los dígitos del resultado para que de un número de un solo dígito.
Se suman todos los dígitos, incluyendo los que no fueron duplicados.
Si el resultado de la suma es un número múltiplo de 10, entonces el número de tarjeta de crédito es válido.

### Tecnologías Utilizadas
Este proyecto utiliza HTML, CSS y JavaScript. El formulario de entrada y la ventana modal están construidos con HTML y CSS. La validación de la tarjeta de crédito se realiza con JavaScript utilizando el algoritmo de Luhn.
