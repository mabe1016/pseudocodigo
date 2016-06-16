//Escribe aquí tu código
var numero1;
var numero2;
var numero3;
var resultado;

numero1 = prompt("Por favor, ingrese nota 1");
numero2 = prompt("Por favor, ingrese nota 2");
numero3 = prompt("Por favor, ingrese nota 3");
// resultado = parseInt(numero1) + parseInt(numero2); numerosenteros parseFloat
resultado = (parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3))/3;

alert(resultado);