using ApiSistemaClinico.Data;
using ApiSistemaClinico.DTOs;
using ApiSistemaClinico.Interfaz;
using Microsoft.EntityFrameworkCore;

namespace ApiSistemaClinico.Servicios
{
    public class ServicesPacientes:IPacientes
    {
        private readonly ApplicationDbContext _context;

        public ServicesPacientes(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<PacientesDTOs>> getPacientes()
        {
            try
            {
                var pacientes = await _context.Pacientes.ToListAsync();

                var pacienteDTO = pacientes.Select(x => new PacientesDTOs
                {
                    IdPaciente = x.IdPaciente,
                    Nombre = x.Nombre,
                    ApellidoPaterno = x.ApellidoPaterno,
                    ApellidoMaterno = x.ApellidoMaterno,
                    NombreCompleto = x.Nombre + " " + x.ApellidoPaterno + " " + x.ApellidoMaterno,
                    Genero = x.Genero,
                    Telefono = x.Telefono,
                    Direccion = x.Direccion,
                    FechaNacimiento = x.FechaNacimiento,
                    ContactoEmergenciaNombre = x.ContactoEmergenciaNombre,
                    ContactoEmergenciaTelefono = x.ContactoEmergenciaTelefono,
                    FechaRegistro =  x.FechaRegistro == null ? DateTime.Now:x.FechaRegistro,
                   TipoSangre = x.TipoSangre
                }).ToList();

                return pacienteDTO;

            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
