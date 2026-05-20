using Backend.Models.DTOs;

namespace Backend.Interfaces
{
    public interface IHistoriaService
    {
        List<HistoriaDTO> GetAllStories();
    }
}
