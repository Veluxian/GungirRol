using Backend.Interfaces;
using Backend.Models.DTOs;
using Backend.Data;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services
{
    public class HistoriasService: IHistoriaService
    {
        private readonly ApplicationDbContext _context;

        public HistoriasService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<HistoriaDTO>> GetAllStories()
        {
            var historiasDB = await _context.Historias.ToListAsync();

            var historiasDTO = historiasDB.Select(h => new HistoriaDTO {
                id_historia = h.Id,
                Categoria_historia = h.Categoria,
                Nombre_historia = h.Nombre,
                Descripcion_historia = h.Descripcion,
                Datos_Extras = h.DatoExtra
            });

            return historiasDTO;
        }
    }
}