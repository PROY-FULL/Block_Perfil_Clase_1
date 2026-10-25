using ApiSistemaClinico.Data;
using ApiSistemaClinico.Interfaz;
using ApiSistemaClinico.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace ApiSistemaClinico.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class PacientesController : ControllerBase
    {
        private readonly IPacientes _pacientes;
        public PacientesController(IPacientes pacientes)
        {
            _pacientes = pacientes;
        }

        [HttpGet]
        public async Task<IActionResult> getPacientes()
        {
            var result = await _pacientes.getPacientes();

            if (result != null)
                return Ok(result);

            return BadRequest("Ocurrio un error al cargar los datos del listado de doctores");

        }
        [HttpPost]
        public async Task<IActionResult> insertarPaciente(Pacientes pacientes)
        {
            int result = await _pacientes.RegistrarPaciente(pacientes);

            if(result == 0)
            {
                BadRequest("Error el pacientes ya esta registrado!!");
            }

            return Ok(result);
        }
    }
}
