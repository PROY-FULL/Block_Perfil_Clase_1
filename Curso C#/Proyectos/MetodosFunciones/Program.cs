using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MetodosFunciones
{
    internal class Program
    {
        static void Main(string[] args)
        {
            EstoEsUnMetodo();
            bool existe = ValorExiste();

            Console.WriteLine(existe);
        }

        public static void EstoEsUnMetodo()
        {
            Console.WriteLine("Bienvenido a este metodo");
        }

        public static bool ValorExiste() { 
            return true;
        }
    }
}
