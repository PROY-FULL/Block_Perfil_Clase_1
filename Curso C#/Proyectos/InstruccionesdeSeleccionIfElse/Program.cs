using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InstruccionesdeSeleccionIfElse
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //INSTRUCCIONES DE SELECCIONES IF-ELSE

            //ejemplo

            bool bandera = true;

            if (bandera) // bandera == true
            {
                //si bandera es = true
            }
            else
            {
                //si bandera = false
            }


            int suma = 12 + 8;

            if(suma <= 30)
            {
                Console.WriteLine("Suma  es menor o igual a 30");
            }
            else
            {
                Console.WriteLine("Suma es mayor o igual a 30");
            }


            //TEMA 2 : INSTRUCCION DE SELECCION SWITCH
            int numero = 15;

            switch (numero)
            {
                case 1:
                    //Escribimos todo lo que se ejecutara
                    Console.WriteLine("Es un uno");
                    break;
                case 2:
                    //Escribimos todo lo que se ejecutara
                    Console.WriteLine("Es un dos");
                    break;
                case 3:
                    //Escribimos todo lo que se ejecutara
                    Console.WriteLine("Es un tres");
                    break;
                default: Console.WriteLine("No coincide con nada");
                    break;

            }


            if (numero == 1)   
            {
                Console.WriteLine("Es un uno");
            }
            else if (numero == 2) {
                Console.WriteLine("Es un dos");
            }else if (numero == 3)
            {
                Console.WriteLine("Es un tres");
            }
            else
            {
                Console.WriteLine("No coincide con nada");
            }

            /*string nombre = "raul";

            switch (nombre)
            {
                case "raul":
                    //Escribimos todo lo que se ejecutara
                    Console.WriteLine("Es un uno");
                    break;

            }*/

        }
    }
}
