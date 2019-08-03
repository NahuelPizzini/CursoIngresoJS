function mostrar()
{
    var nota;
    var sexo;
    var contador;
    var promedio;
    var notabaja;
    var sexobajo;
    var acumuladordenotas = 0;
    var acumuladordev6 = 0;
    var flag = 0;

    

    for(contador =  0 ; contador <5 ; contador ++ )
    {
        nota = prompt("ingrese la nota:");

        while(nota < 0 || nota > 10)
        {
            nota = prompt("reingrese una nota valida del 0 al 10:");
            nota = parseInt(nota);
        }

        sexo = prompt("Ingrese el sexo del alumno con f o m: ")

        while(sexo != "f" && sexo != "m" )
        {
            sexo = prompt("reingrese un sexo valido, utilice f o m ");
        }

        acumuladordenotas += nota;    

        if(nota < notabaja || flag == 0) //primero el flag por comodidad                                          
        {
            notabaja = nota;
            sexobajo = sexo;

            flag =1;   
        }

        if(nota >= 6 && sexo == "m")
        {
           acumuladordev6 ++;

        }

    }

    promedio = acumuladordenotas /5; 

    alert("el promedio de las notas es: "+promedio+ " la nota mas baja es: "+notabaja + " y el sexo de esa persona es: "+sexobajo+ " y la cantidad de varones con la nota mayor o igual a 6 fue: " +acumuladordev6)



}
