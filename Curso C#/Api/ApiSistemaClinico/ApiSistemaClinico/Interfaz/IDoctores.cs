using ApiSistemaClinico.DTOs;
using ApiSistemaClinico.Models;

namespace ApiSistemaClinico.Interfaz
{
    public interface IDoctores
    {
        Task<List<DoctoresDTOs>> getDoctores();
        Task<DoctoresDTOs> getDoctorId(int IdDoctor);
        Task<int> insertDoctores(Doctores dataDoctor);

        Task<int> updateDoctores(int IdDoctor, Doctores dataDoctor);

        Task<int> deleteDoctores(int IdDoctor);
    }
}
