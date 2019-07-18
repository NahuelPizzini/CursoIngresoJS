function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='s';
	var numero;

	while(respuesta == "s" );

	{
		numero = parseInt(prompt("ingrese un número: "));

			acumulador = acumulador + numero;
			contador++;

			respuesta = prompt("quiere ingresar otro numero?: ");


	}


	



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN