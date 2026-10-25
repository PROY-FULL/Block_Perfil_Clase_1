using ApiSistemaClinico.Data;
using ApiSistemaClinico.DTOs;
using ApiSistemaClinico.Interfaz;
using ApiSistemaClinico.Models;
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

        public async Task<int> RegistrarPaciente(Pacientes pacientes)
        {
            var paciente_existe = _context.Pacientes.Where(
                                    x => x.Nombre == pacientes.Nombre
                                    && x.ApellidoPaterno == pacientes.ApellidoPaterno
                                    && x.ApellidoMaterno == pacientes.ApellidoMaterno)
                                    .FirstOrDefault();
            if(paciente_existe == null)
            {
                pacientes.FechaRegistro = DateTime.Now;
                _context.Pacientes.Add(pacientes);
                await _context.SaveChangesAsync();

                return pacientes.IdPaciente;
            }

            return 0;
        }
    }
}
