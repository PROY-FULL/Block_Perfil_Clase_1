namespace ApiSistemaClinico.DTOs
{
    public class CitasDTOs
    {
        public int IdCita { get; set; }
        public  string Paciente { get; set; }
        public string Medico { get; set; }
        public string Estado { get; set; }
        public string MotivoConsulta { get; set; }
        public string FechaCita { get; set; }
    }
}
