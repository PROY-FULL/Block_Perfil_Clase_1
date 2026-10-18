namespace ApiSistemaClinico.DTOs
{
    public class PacientesDTOs
    {
        public int IdPaciente { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }

       public string NombreCompleto { get; set;  }
        public DateTime FechaNacimiento { get; set; }
        public string Telefono { get; set; }
        public string Genero { get; set; }
        public string Direccion { get; set; }
        public string TipoSangre { get; set; }
        public string ContactoEmergenciaNombre { get; set; }
        public string ContactoEmergenciaTelefono { get; set; }
        public DateTime? FechaRegistro { get; set; }
    }
}
