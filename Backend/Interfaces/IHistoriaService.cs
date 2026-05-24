using Backend.Models.DTOs;

namespace Backend.Interfaces
{
    public interface IHistoriaService
    {
        Task<IEnumerable<HistoriaDTO>> GetAllStories();
    }
}
