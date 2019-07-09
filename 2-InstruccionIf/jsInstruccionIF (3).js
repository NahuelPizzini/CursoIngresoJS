function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;
//falla algo y no sé por qué siempre me salta la alerta "usted es menor de edad"
//me había comido el .value 
if(edad >= 18)
{
    alert("Usted es mayor de edad")
}

if(edad < 18)
{
    alert("Usted es menor de edad")
}

}//FIN DE LA FUNCIÓN