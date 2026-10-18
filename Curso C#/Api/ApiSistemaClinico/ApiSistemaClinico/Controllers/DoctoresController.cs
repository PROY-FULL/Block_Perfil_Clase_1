using ApiSistemaClinico.Data;
using ApiSistemaClinico.DTOs;
using ApiSistemaClinico.Interfaz;
using ApiSistemaClinico.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiSistemaClinico.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DoctoresController : ControllerBase
    {
        private readonly IDoctores _doctores;
        public DoctoresController(IDoctores doctores)
        {
            _doctores = doctores;
        }

        [HttpGet]
        public async Task<IActionResult> getDoctores()
        {
            var result = await _doctores.getDoctores();

            if(result != null)
                return Ok(result);

            return BadRequest("Ocurrio un error al cargar los datos del listado de doctores");

        }

        [HttpGet("{IdDoctor}")]
        public async Task<IActionResult> getDoctorId(int IdDoctor)
        {
            var result = _doctores.getDoctorId(IdDoctor);

            if(result != null) return Ok(result);

            return BadRequest("Ocurrio un error al obtener la informacion del doctor");
        }

        [HttpPost]
        public async Task<IActionResult> insertDoctores(Doctores dataDoctor)
        {
           int result = await _doctores.insertDoctores(dataDoctor);
                
            if (result == 0)
                return BadRequest("El Doctor ya esta registrado");
            if (result == -1)
                return BadRequest("Error al insertar el registro comunique al Administrador o intente  de nuevo");

            return Ok(result);

        }

        [HttpPut("{IdDoctor}")]
        public async Task<IActionResult> updateDoctores(int IdDoctor ,Doctores dataDoctor)
        {
            int result = await _doctores.updateDoctores(IdDoctor, dataDoctor);

            if (result == 0)
                return BadRequest("El registro no existe");
            if (result == -1)
                return BadRequest("Error al actulizar el registro comunique al Administrador o intente  de nuevo");

            return Ok(result);
        }

        [HttpDelete("{IdDoctor}")]
        public async Task<IActionResult>  deleteDoctores(int IdDoctor)
        {
            int result = await _doctores.deleteDoctores(IdDoctor);

            if (result == 0)
                return BadRequest("El registro no existe");
            if (result == -1)
                return BadRequest("Error al eliminar el registro comunique al Administrador o intente  de nuevo");


            return Ok("El Doctor No." + result + " Fue eliminado Exitosamente..!!");
        }
    }
}
