using ApiSistemaClinico.Data;
using Microsoft.AspNetCore.Mvc;

namespace ApiSistemaClinico.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DoctoresController :ControllerBase
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

                return Ok(doctores);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
