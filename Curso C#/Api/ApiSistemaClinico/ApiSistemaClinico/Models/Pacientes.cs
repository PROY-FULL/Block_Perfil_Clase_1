using System.ComponentModel.DataAnnotations;

namespace ApiSistemaClinico.Models
{
    public class Pacientes
    {
        [Key]
        public int IdPaciente { get; set; }
        public string Nombre { get;set;  }
    }
}
