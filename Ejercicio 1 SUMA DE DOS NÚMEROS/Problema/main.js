//Escribe aquí tu código
// document.getElementById("nombre").innerHTML = "Gamarra";

// var nombre = document.getElementById("nombre")
// // .innerHTML;
// // alert(nombre);

// var boton = document.createElement("button");
// 	boton.innerHTML = "More";
// // document.body.appendChild(boton);
// nombre.appendChild(boton);

var numero1;
var numero2;
var resultado;

numero1 = prompt("Por favor, ingrese un valor numerico");
numero2 = prompt("Por favor, ingrese otro valor numerico");
// resultado = parseInt(numero1) + parseInt(numero2); numerosenteros
resultado = parseFloat(numero1) + parseFloat(numero2);

alert(resultado);