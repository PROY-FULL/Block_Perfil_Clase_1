using ApiSistemaClinico.Data;
using ApiSistemaClinico.DTOs;
using ApiSistemaClinico.Interfaz;
using ApiSistemaClinico.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiSistemaClinico.Servicios
{
    public class ServicesDoctores:IDoctores
    {
        private readonly ApplicationDbContext _context;

        public ServicesDoctores(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<DoctoresDTOs>> getDoctores()
        {
            try
            {
                var doctores =await _context.Doctores.ToListAsync();

                var doctorDTO = doctores.Select(x => new DoctoresDTOs
                {
                    IdDoctor = x.IdDoctor,
                    Nombre = x.Nombre,
                    ApellidoPaterno = x.ApellidoPaterno,
                    ApellidoMaterno = x.ApellidoMaterno,
                    CedulaProfesional = x.CedulaProfesional,
                    Telefono = x.Telefono,
                    IdEspecialidad = x.IdEspecialidad
                }).ToList();

                return doctorDTO;

            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<DoctoresDTOs> getDoctorId(int IdDoctor)
        {
            try
            {
                var doctor = await _context.Doctores.FindAsync(IdDoctor);//.Where(x=>x.IdDoctor == IdDoctor).FirstOrDefaultAsync();


                DoctoresDTOs doctorDTO = new DoctoresDTOs();

                doctorDTO.IdDoctor = doctor.IdDoctor;
                doctorDTO.IdUsuario = doctor.IdUsuario;
                doctorDTO.Nombre = doctor.Nombre;
                doctorDTO.ApellidoPaterno = doctor.ApellidoPaterno;
                doctorDTO.ApellidoMaterno = doctor.ApellidoMaterno;
                doctorDTO.IdEspecialidad = doctor.IdEspecialidad;
                doctorDTO.Telefono = doctor.Telefono;
                doctorDTO.CedulaProfesional = doctor.CedulaProfesional;

                return doctorDTO;

            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<int> insertDoctores(Doctores dataDoctor)
        {
            try
            {

                var doctor_existe = _context.Doctores.Where(
                    x => x.Nombre == dataDoctor.Nombre
                    && x.ApellidoPaterno == dataDoctor.ApellidoPaterno
                    && x.ApellidoMaterno == dataDoctor.ApellidoMaterno)
                    .FirstOrDefault();


                if (doctor_existe == null)
                {
                    _context.Doctores.Add(dataDoctor);
                    await _context.SaveChangesAsync();

                    return dataDoctor.IdDoctor;
                }
               
                return 0;
      
            }
            catch (Exception ex)
            {
                return -1;
            }
        }

        public async Task<int> updateDoctores(int IdDoctor, Doctores dataDoctor)
        {
            try
            {
                var doctor_existe = await _context.Doctores.Where(x => x.IdDoctor == IdDoctor)
                    .FirstOrDefaultAsync();

                if (doctor_existe != null)
                {
                    doctor_existe.Nombre = dataDoctor.Nombre;
                    doctor_existe.ApellidoPaterno = dataDoctor.ApellidoPaterno;
                    doctor_existe.ApellidoMaterno = dataDoctor.ApellidoMaterno;
                    doctor_existe.CedulaProfesional = dataDoctor.CedulaProfesional;
                    doctor_existe.Telefono = dataDoctor.Telefono;
                    doctor_existe.IdEspecialidad = dataDoctor.IdEspecialidad;

                    _context.Entry(doctor_existe).State = EntityState.Modified;

                    _context.SaveChangesAsync();

                    return doctor_existe.IdDoctor;

                }
                else
                {
                    return 0;
                }


            }
            catch (Exception ex)
            {
                return -1;
            }
        }

        public async Task<int> deleteDoctores(int IdDoctor)
        {
            try
            {
                var doctor_existe = await _context.Doctores.FindAsync(IdDoctor);

                if (doctor_existe == null)
                    return 0;

                _context.Doctores.Remove(doctor_existe);
                await _context.SaveChangesAsync();

                return IdDoctor;

            }
            catch (Exception ex)
            {
                return -1;
            }
        }

    }
}
