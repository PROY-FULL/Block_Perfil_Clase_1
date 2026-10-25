using ApiSistemaClinico.DTOs;
using ApiSistemaClinico.Models;

namespace ApiSistemaClinico.Interfaz
{
    public interface IPacientes
    {
        Task<List<PacientesDTOs>> getPacientes();
        Task<int> RegistrarPaciente(Pacientes pacientes);
    }
}
