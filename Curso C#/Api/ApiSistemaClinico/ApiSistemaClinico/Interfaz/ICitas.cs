using ApiSistemaClinico.DTOs;

namespace ApiSistemaClinico.Interfaz
{
    public interface ICitas
    {
        Task<List<CitasDTOs>> getCitas();
    }
}
