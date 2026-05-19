using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HealthController: ControllerBase
    {
        [HttpGet]
        public IActionResult CheckStatus()
        {
            return Ok(new
            {
                Status = "Healty",
                message = "Servidores Activos",
                timestamp = DateTime.UtcNow
            });
        }
    }
}
