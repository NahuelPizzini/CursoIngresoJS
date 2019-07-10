function mostrar()
{
//tomo la edad  
var edad

edad = document.getElementById("edad").value;
edad = parseInt(edad);

//cuando se niega !, despues que hay que encerrar la variable entre parentesis
if(!(edad >= 13 && edad <= 17))
// tambien if(edad >= 13 || edad <= 17)
{
alert("no es adolescente")
}

}//FIN DE LA FUNCIÓN