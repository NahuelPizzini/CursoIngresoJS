function mostrar()
{
    var numero;
    var letra;
    var seguir ;
    var cantidadNumeroPares = 0;
    var cantidadNumeroImpares = 0;
    var cantidadD0 = 0;
    var promedioPos;
    var sumaPositivos;
    var SumaNegativos;
    var numeroMax;
    var numeroMin;
    var letraMax;
    var letraMin;

    numero = prompt("ingrese un numero:");
    numero = parseInt(numero);

    letra = prompt("ingrese una letra: ");

    seguir = prompt("quiere seguir ingresando valores?")

    while (seguir == "si")
    {
        numero = prompt("ingrese un numero:");
        numero = parseInt(numero);

        letra = prompt("ingrese una letra: ");

        if(numero % 2 == 0)
        {
            cantidadNumeroPares ++;

        }

        else if (numero % 2 != 0)
        {
            cantidadNumeroImpares++;
        }

        if(numero < 0)
        {
            SumaNegativos = SumaNegativos + numero;

        }

        else if (numero > 0)
        {
            sumaPositivos = sumaPositivos + numero;

        }
        else
        {
            cantidadD0++;
        }

        seguir = prompt("quiere seguir ingresando valores?");

        

    }

    document.write("")

    







}

