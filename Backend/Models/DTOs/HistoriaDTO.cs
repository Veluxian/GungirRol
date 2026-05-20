namespace Backend.Models.DTOs
{
    public class HistoriaDTO
    {
        public int id_historia {  get; set; }
        public string Categoria_historia { get; set; } = string.Empty;
        public string Nombre_historia { get; set; } = string.Empty;
        public string Descripcion_historia { get; set; } = string.Empty;
        public string Datos_Extras {  get; set; } = string.Empty;
    }
}
