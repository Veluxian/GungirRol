using Backend.Interfaces;
using Backend.Models.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HistoriasController: ControllerBase
    {
        private readonly IHistoriaService _historiaService;

        public HistoriasController (IHistoriaService historiaService)
        {
            _historiaService = historiaService;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var historias = await _historiaService.GetAllStories();
            return Ok(historias);
        }
    }
}
