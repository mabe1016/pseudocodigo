//Escribe aquí tú código
var estaturas = [];

function agregarEstatura()
{
	var valor = document.getElementById("dato").value;
		if (!isNaN(valor))
		{
			if(valor > 0 && valor <3)
			{
				document.getElementById("dato").value =" ";
								// estaturas[]=valor;-
				estaturas.push(valor);
				updateList();
			} else {
				alert("Ingresa un número entre 0 y 3");
			}
		} else{
			alert("Ingrese un número valido");
		}

}

function updateList(){
	var lista = document.getElementById("lista");
	lista.innerHTML = " ";
	for (var i = 0; i < estaturas.length; i++) {
		lista.innerHTML +="<li>"+ estaturas[i]+"</li>";
	}

}