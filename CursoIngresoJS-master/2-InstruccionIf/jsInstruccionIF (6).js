function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;
edad = parseInt(edad);

if (edad >= 18)
{
    alert("es adulto");
}
else if (edad >= 13 && edad <= 17 )
 {
    alert("es adolescente");
}
else {
    alert("es niño");
}

}//FIN DE LA FUNCIÓN