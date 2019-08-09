function mostrar()
{

var sexo = prompt("ingrese f ó m .");
sexo = sexo.toLowerCase();
//lowercase va con un punto y con unos parentesis vacios

while (sexo != "f" && sexo != "m")
{

    alert("sexo incorrecto");

    sexo = prompt("reingrese sexo f o m .");
    sexo = sexo.toLowerCase();
    

}

document.getElementById("Sexo").value = sexo;

}//FIN DE LA FUNCIÓN