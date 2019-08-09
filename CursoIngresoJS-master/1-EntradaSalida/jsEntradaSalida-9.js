/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo
    var aumento
    var nuevoSueldo 
// deberia haber usado parseFloat porque se pueden poner numeros con decimales
    sueldo = document.getElementById("sueldo").value;
    sueldo = parseFloat(sueldo);

//calculo el 10% del sueldoq ue es igual a multiplicarlo * 0.1
    aumento = sueldo * 0.1;

//calculo el nuevo sueldo sumandole el sueldo original el aumento
    nuevoSueldo = sueldo + aumento;

//pongo el resultado en la caja de texto que corresponde
    document.getElementById("resultado").value = nuevoSueldo


    alert("el aumento es del " + aumento );




	
}
