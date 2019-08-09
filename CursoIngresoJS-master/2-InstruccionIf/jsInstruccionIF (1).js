function mostrar()
{
//tomo la edad   
var edad;
//no te olvides de parsear si te piden un nùmero
edad = document.getElementById("edad").value;
edad = parseInt(edad);
//si se pone ; despues del if, se lo mata xd
if(edad == 15)
{
    alert("niña bonita");
}



}//FIN DE LA FUNCIÓN