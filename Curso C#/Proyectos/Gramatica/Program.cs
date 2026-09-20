using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Gramatica
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Comentarios de una sola linea
            /*GRAMATICA*/
            //PALABRAS RESERVADAS
            /*
             * 
             */
            int edad = 0;
            string telefono = "";

            string numero = "";//se captura el numero de serie

            string direccion = "";


            //Datos De una Persona
            //Para Agrupar C# nos proporciona agrupaciones que son #region y termina con #endregion
            //Datos Personales
            #region
            string nombre = "";
            string apellidos = "";
            #endregion
            //Datos Bancarios
            #region
            string cuentaBancaria = "";
            string banco = "";
            #endregion
            //Datos Familiares
            #region
            int cantidadHermanos = 0;
            #endregion

            //Tipos 
            //https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/keywords/
            //@ es un prefijo
            int @if = 0;

            //Palabras contextuales
            //https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/keywords/


            //VARIABLES
            int nogagonada = 0;
            string cadena="";
            string curp = "";

            //null

            //INFERIR EN LAS VARIABLES
            var teclado = "";

            //var persona = "aqui podemos consultar a nuestra base de datos";

            //NOMENCLATURAS
            //Calme Case
            //Enpieza en minusculas y casa palabra en mayuscula, la usamos
            //en variables locales y en miembros privados

            //Pascal 
            //Se utilizan en metodos y clases


            //Camel Case
            var estoEsUnaVariable = "camel";

            //TEMA: CONSTANTES
            //Son datos que no cambiaran en el transcurso de nuestro codigo
            //se escriben en mayusculas

            const string NOMBRE = "Pedro";
            const int NUMERO_MAXIMO_PEDIDOS = 10;

            for (int i = 0; i < 12; i++)
            {
                if (i < NUMERO_MAXIMO_PEDIDOS)
                {
                    Console.WriteLine(i);
                }
            }

        }

        public void SumaDosNumeros()
        {

        }
    }

    class Persona
    {
        public string nombre;
        public int? edad;//valor 0
    }
}
