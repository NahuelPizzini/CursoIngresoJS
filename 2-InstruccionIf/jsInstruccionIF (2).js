function mostrar()
{
//tomo la edad  
var edad;
//no te olvides de parsear si te piden un nùmero
edad = document.getElementById("edad").value;
edad = parseInt(edad);
if(edad >= 18) 
{
    alert("Usted es mayor de edad");

}



}//FIN DE LA FUNCIÓN