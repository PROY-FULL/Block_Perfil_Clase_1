using ApiSistemaClinico.Data;
using ApiSistemaClinico.DTOs;
using ApiSistemaClinico.Interfaz;

namespace ApiSistemaClinico.Servicios
{
    public class ServicesEspecialidades : IEspecialidades
    {
        private readonly ApplicationDbContext _contex;
        public ServicesEspecialidades(ApplicationDbContext contex)
        {
            _contex = contex;
        }
        public List<EspecialidadesDTOs> getEspecialidades()
        {
            var especialidades = _contex.Especialidades.ToList();

            var result = especialidades.Select(x => new EspecialidadesDTOs
            {
                IdEspecialidad = x.IdEspecialidad,
                NombreEspecialidad = x.NombreEspecialidad
            }).ToList();

            return result;
        }
    }
}
