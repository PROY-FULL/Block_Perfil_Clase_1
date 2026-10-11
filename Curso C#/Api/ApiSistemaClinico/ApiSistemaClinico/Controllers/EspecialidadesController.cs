using ApiSistemaClinico.Interfaz;
using Microsoft.AspNetCore.Mvc;

namespace ApiSistemaClinico.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EspecialidadesController:ControllerBase
    {
        private readonly IEspecialidades _especialidades;

        public EspecialidadesController(IEspecialidades especialidades)
        {
            _especialidades = especialidades;
        }

        [HttpGet]
        public async Task<IActionResult> getEspecialidades()
        {
            try
            {
                var result = _especialidades.getEspecialidades();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
