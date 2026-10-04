using ApiSistemaClinico.Data;
using Microsoft.AspNetCore.Mvc;

namespace ApiSistemaClinico.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class PacientesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PacientesController(ApplicationDbContext context)
        {
            _context = context;
        }
    }
}
