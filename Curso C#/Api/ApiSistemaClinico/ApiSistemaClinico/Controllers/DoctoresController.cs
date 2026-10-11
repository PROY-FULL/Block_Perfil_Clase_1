using ApiSistemaClinico.Data;
using ApiSistemaClinico.DTOs;
using ApiSistemaClinico.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiSistemaClinico.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DoctoresController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DoctoresController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> getDoctores()
        {
            try
            {
                var doctores = _context.Doctores.ToList();

                var doctorDTO = doctores.Select(x=> new DoctoresDTOs
                {
                    IdDoctor = x.IdDoctor,
                    Nombre = x.Nombre,
                    ApellidoPaterno=x.ApellidoPaterno,
                    ApellidoMaterno = x.ApellidoMaterno,
                    CedulaProfesional = x.CedulaProfesional,
                    Telefono = x.Telefono
                }).ToList();

                return Ok(doctorDTO);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{IdDoctor}")]
        public async Task<IActionResult> getDoctorId(int IdDoctor)
        {
            try
            {
                var doctor = await _context.Doctores.FindAsync(IdDoctor);//.Where(x=>x.IdDoctor == IdDoctor).FirstOrDefaultAsync();

                return Ok(doctor);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> insertDoctores(Doctores dataDoctor)
        {
            try
            {

                var doctor = _context.Doctores.Where(
                    x => x.Nombre == dataDoctor.Nombre
                    && x.ApellidoPaterno == dataDoctor.ApellidoPaterno
                    && x.ApellidoMaterno == dataDoctor.ApellidoMaterno)
                    .ToList();

                if (doctor.Count == 0)
                {
                    _context.Doctores.Add(dataDoctor);
                    await _context.SaveChangesAsync();

                    return Ok(doctor);
                }
                else
                {
                    return Ok("El doctor ya esta registrado");
                }



            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{IdDoctor}")]
        public async Task<IActionResult> updateDoctores(int IdDoctor ,Doctores dataDoctor)
        {
            try
            {
                var doctor_existe = await _context.Doctores.Where(x => x.IdDoctor == IdDoctor)
                    .FirstOrDefaultAsync();

                if(doctor_existe != null)
                {
                    doctor_existe.Nombre = dataDoctor.Nombre;
                    doctor_existe.ApellidoPaterno = dataDoctor.ApellidoPaterno;
                    doctor_existe.ApellidoMaterno = dataDoctor.ApellidoMaterno;
                    doctor_existe.CedulaProfesional = dataDoctor.CedulaProfesional;
                    doctor_existe.Telefono = dataDoctor.Telefono;
                    doctor_existe.IdEspecialidad = dataDoctor.IdEspecialidad;

                    _context.Entry(doctor_existe).State = EntityState.Modified;

                    _context.SaveChangesAsync();

                    return Ok(doctor_existe);

                }
                else
                {
                    return NoContent();
                }


            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{IdDoctor}")]
        public async Task<IActionResult>  deleteDoctores(int IdDoctor)
        {
            try
            {
                var doctor_existe = await _context.Doctores.FindAsync(IdDoctor);

                if (doctor_existe == null)
                    return NotFound();

                _context.Doctores.Remove(doctor_existe);
                await _context.SaveChangesAsync();

                return Ok("El Doctor No." + IdDoctor + " Fue eliminado Exitosamente..!!");

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
