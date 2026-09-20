using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace Ciclos
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //INSTRUCCIONES DE ITERACION DO WHILE
            /*do
            {
                //Instrucciones  se ejecuta por lo menos una
                //vez se cumpla o no la condicion primero entra
                //y luego evalua
            } while (true);*/

            int numero =20;

            do
            {
                Console.WriteLine(numero);
                numero++;
                
            } while (numero < 10);

            //LA INSTRUCCION WHILE SE EVALUA ANTES DE LA INSTRUCCION
            numero = 10;

            while (numero == 10)
            {
                Console.WriteLine(numero);
                numero = 15;
            }

            //INSTRUCCION DE ITERACION FOR

            //ITERA N VECES MIENTRAS SE CUMPLA LA CONDICION  SE 
            //UTILIZA BREAK PARA ROMPER O RETURN;

            numero = 10;
            /* nomenclatura
            for (int i = 0; i < numero; i++)
            {
            }*/
            for (int i = 0; i < numero; i++)
            {
                Console.WriteLine(i);
            }

            int numero2 = 0;            
           
            for (int i = 10; i > numero2; i--)
            {
                Console.WriteLine(i);
            }

            //INSTRUCCION FOREACH
            //RECORRE UNA LISTA PRIMITIVA  O UNA CLASE

            var listaNumero = new List<int> { 0,1,2,3,4,5};

            foreach(var lista in listaNumero)
            {
                Console.WriteLine(lista);
            }

            var listPersona = new List<Persona>();

            var persona1 = new Persona()
            {
                apellido = "sanchez",
                Edad=22,
                nombre="Pedro"
            };

            var persona2 = new Persona()
            {
                apellido = "Gomez",
                Edad = 27,
                nombre = "Alejandro"
            };

            listPersona.Add(persona1);
            listPersona.Add(persona2);

            foreach(var persona in listPersona)
            {
                Console.WriteLine(persona.nombre + " " + persona.apellido);
            }


            //OPERADORES
           /* 
            * MULTIPLICAICON
            +  SUMA
            -  RESTA
            /  DIVISION
            % MODULO O RESIDUO
           */

            int numero1 = 5;
            int numero3 = 3;

            int division = numero1 / numero3;  //1
            division = numero1 % numero3;  //1 


            //OPERADORES LOGICOS

            //&&   and
            // || or
            // == igual
            // != diferente
            // > mayor
            //<  menor
            //>= mayor o igual
            //<=  menor o igual

            //https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/operators/
           // if (numero1 != 0 && numero1 >10)


        }

        public class Persona
        {
            public string nombre {  get; set; }
            public string apellido { get; set; }
            public int Edad { get;set;  }
        }
    }
}
