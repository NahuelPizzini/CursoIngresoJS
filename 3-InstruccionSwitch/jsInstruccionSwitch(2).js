function mostrar()
{
//  
var mesDelAnio = document.getElementById('mes').value;

switch(mesDelAnio)
{
    case"Enero":
    case"Febrero":
    case"Marzo":
    case"Aabril":
    case"Mayo":
    alert("Falta para el invierno");
    break;
    case"Junio":
    case"Julio":
    alert("Abrigate, esta fresco pa chomba");
    break;
    case"Agosto":
    case"Septiembre":
    case"Octubre":
    case"Noviembre":
    case"Diciembre":
    alert("Ya paso en invierno, se viene la calor")
    break;

}




}//FIN DE LA FUNCIÓN