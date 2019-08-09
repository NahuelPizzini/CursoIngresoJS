function mostrar()
{
//tomo la edad  
var edad;
//no te olvides de parsear si te piden un nùmero
edad = document.getElementById("edad").value;
edad = parseInt(edad);
//falla algo y no sé por qué siempre me salta la alerta "usted es menor de edad"
//me había comido el .value 
if(edad >= 18)
{
    alert("Usted es mayor de edad")
}
//al else NO hay que ponerle una condición, va pelado
else
{
    alert("Usted es menor de edad")
}

}//FIN DE LA FUNCIÓN