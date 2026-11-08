using ApiSistemaClinico.Interfaz;
using Microsoft.AspNetCore.Mvc;

namespace ApiSistemaClinico.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class CitasController:ControllerBase
    {
        private readonly ICitas _citas;

        public CitasController(ICitas citas)
        {
            _citas = citas;
        }

        [HttpGet]
        public async Task<IActionResult> getCitas()
        {
            var result = await _citas.getCitas();
            return Ok(result);
        }

        [HttpGet("totalcitas")]
        public async Task<IActionResult> getTotalCitas()
        {
            var result = await _citas.getTotalCitas();
            return Ok(result);
        }
    }
}
