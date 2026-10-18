using ApiSistemaClinico.DTOs;

namespace ApiSistemaClinico.Interfaz
{
    public interface IPacientes
    {
        Task<List<PacientesDTOs>> getPacientes();
    }
}
