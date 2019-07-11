function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numerorandom;

	numerorandom = Math.floor(Math.random() * 10 + 1 );

 //poner todo en un solo alert, no que salten dos separados
	if(numerorandom >= 9)
	{
		alert("Nota: " + numerorandom + " EXELENTE MAQUINOLA");
	}

	else if(numerorandom >= 4 && numerorandom <= 8)
	{
		alert("Nota: " + numerorandom + " Aprobaste");
	}

	else
	{
	alert("Nota: " + numerorandom + " No estudiaste");
	}
}//FIN DE LA FUNCIÓN