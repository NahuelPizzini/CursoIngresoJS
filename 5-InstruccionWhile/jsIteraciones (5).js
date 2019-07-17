function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo != "f" && sexo != "m")
{
    alert("sexo incorrecto");

    sexo = prompt("reingrese sexo f o m .");
    


}

document.getElementById("Sexo").value = sexo;

}//FIN DE LA FUNCIÓN