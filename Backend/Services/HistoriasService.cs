using Backend.Interfaces;
using Backend.Models.DTOs;

namespace Backend.Services
{
    public class HistoriasService: IHistoriaService
    {
        public List<HistoriaDTO> GetAllStories()
        {
            return new List<HistoriaDTO>
            {
                new HistoriaDTO
                {
                    id_historia = 1,
                    Categoria_historia = "personaje",
                    Nombre_historia = "Rey Fergal",
                    Descripcion_historia = "Orgulloso y benevolente rey de fergalia",
                    Datos_Extras = "hijo de un bardo y una condesa"
                },
                new HistoriaDTO
                {
                    id_historia = 2,
                    Categoria_historia = "Lugares",
                    Nombre_historia = "Bosque SenoAmante",
                    Descripcion_historia = "el bosque mas cercano a la taberna el desafio",
                    Datos_Extras = "se dice que una driade vive ahi"
                }
            };
        }
    }
}
