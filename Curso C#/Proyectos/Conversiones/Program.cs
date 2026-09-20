using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conversiones
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //CONVERSION DE TIPOS
            //TIPOS DE CONVERSION EXPLICITO , IMPLICITO
            //EXPLICITO ES CUANDO SE PIERDE INFORMACION
            //IMPLICITO SE HACE EN AUTOMATICO

            string cadena = "hola";
            int numero = 12;

            cadena = numero.ToString();

            //Implicitos
            int numeroEntero = 34675;
            long numerolong = numeroEntero;

            //Explicitos
            double numeroDouble = 12.78;  //13
            double enteroDouble = Convert.ToInt32(numeroDouble);//;Convert.ToInt32(numeroDouble);



    
        }
    }
}
