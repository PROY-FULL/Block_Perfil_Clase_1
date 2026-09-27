using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MetodosFunciones
{
    internal class Program
    {
        //METODOS Y FUNCIONES
        //METODOS SON ACCCIONES O COMPORTAMIENTOS, LA DIFERENCIA ENTRE UN  METODO Y UNA FUNCION ES QUE EL
        //METODO NO DEVUELVE NADA Y SE USA LA PALABRA RESERVADA void  Y LA FUNCION SI NOS RETOR INFORMACION 
        // Y PARA ESTE CASO USAMOS LA PALABRA RESERVADA return
        static void Main(string[] args)
        {
            EstoEsUnMetodo();
          
            bool existe = ValorExiste();

            Console.WriteLine(existe);

            Persona persona = new Persona();
            //var persona = new Persona();
            persona.Nombre = "Raul";
            persona.Edad = 10;
            persona.Sexo = "M";

            string consulta = "Select * from Productos > 1000";

            List<Persona> listpersona = new List<Persona>();
            //var listpersona = new List<Persona>();
            //Esta es una opcion
            var persona1 = new Persona();

            persona1.Nombre = "Raul";
            persona1.Edad = 10;
            persona1.Sexo = "M";
            //Opcion 2
            var obcionpersona1 = new Persona()
            {
                Nombre = "Damian",
                Edad = 10,
                Sexo = "M"
            };

            listpersona.Add(obcionpersona1);



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
