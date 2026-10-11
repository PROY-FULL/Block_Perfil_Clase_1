using System.ComponentModel.DataAnnotations;

namespace ApiSistemaClinico.Models
{
    public class Especialidades
    {
        [Key]
        public int IdEspecialidad { get; set; }
        public string NombreEspecialidad { get; set; }
        public string Descripcion { get; set; }
        public bool Activo { get; set; }
    }
}
