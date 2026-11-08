using ApiSistemaClinico.Data;
using ApiSistemaClinico.DTOs;
using ApiSistemaClinico.Interfaz;
using Microsoft.EntityFrameworkCore;

namespace ApiSistemaClinico.Servicios
{
    public class CitasServices : ICitas
    {
        private readonly ApplicationDbContext _context;
        public CitasServices(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<List<CitasDTOs>> getCitas()
        {
            try
            {
                var citas = await _context.Citas
                    .Include(d => d.Doctores)
                    .Include(p => p.Pacientes)
                    .Select(s => new CitasDTOs
                    {
                        IdCita = s.IdCita,
                        Paciente = s.Pacientes.Nombre + " " + s.Pacientes.ApellidoPaterno + " " + s.Pacientes.ApellidoMaterno,
                        Medico = s.Doctores.Nombre + " " + s.Doctores.ApellidoPaterno + " " + s.Doctores.ApellidoMaterno,
                        FechaCita = s.FechaHoraCita.ToString("yyyy-MM-dd HH:mm"),
                        Estado = s.Estado,
                        MotivoConsulta = s.MotivoConsulta

                    }).ToListAsync();

                return citas;
            }catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<List<CitasPendientesDTOs>> getTotalCitas()
        {
            try
            {
                var resultado = await _context.Citas
                    .Where(c => c.FechaHoraCita != null)//filtro opcional para validar si hay datos nullos
                    .GroupBy(c => c.FechaHoraCita.Date) // Agrupamos ignorando la hora solo por la fecha (YYYY-MM-DD)
                    .Select(grupo => new CitasPendientesDTOs
                    {
                        FechaCita = grupo.Key, // la fecha del grupo
                        totalCita = grupo.Count() // El conteop total de registros en esa fecha
                    })
                    .OrderBy(x => x.FechaCita)
                    .ToListAsync();

                return resultado;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }
    }
}
