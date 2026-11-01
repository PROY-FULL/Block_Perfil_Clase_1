using System.ComponentModel.DataAnnotations;

namespace ApiSistemaClinico.Models
{
    public class Citas
    {
        [Key]
        public int IdCita { get; set; }
        public int IdPaciente { get; set; }
        public int IdDoctor { get; set; }
        public DateTime FechaHoraCita { get; set; }
        public string Estado { get; set; }
        public string MotivoConsulta { get; set; }

        public Doctores Doctores { get; set; }
        public Pacientes Pacientes { get; set; }

    }
}
