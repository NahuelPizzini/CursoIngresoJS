function mostrar()
{
//tomo la edad  
var edad;
//fijarme que el .value no este ne mayuscula 
edad = document.getElementById("edad").value;
edad = parseInt(edad);
//no importa el valor que ponga, salta la alerta 
if(edad >= 13 && edad <= 17)
{
    alert("Sos un adolescente");
}



}//FIN DE LA FUNCIÓN