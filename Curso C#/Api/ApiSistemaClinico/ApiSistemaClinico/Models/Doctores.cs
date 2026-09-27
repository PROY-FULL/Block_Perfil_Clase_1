using System.ComponentModel.DataAnnotations;

namespace ApiSistemaClinico.Models
{
    public class Doctores
    {
        [Key]
        public int IdDoctor { get; set; }
        public int IdUsuario { get; set; }
        public int IdEspecialidad { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string CedulaProfesional { get; set; }
        public string Telefono { get; set; }

    }
}
