using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models.Entities
{
    [Table("Historias")]
    public class Historia
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string Categoria { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string Nombre {  get; set; } = string.Empty;
        [Required]
        [MaxLength(1000)]
        public string Descripcion { get; set; } = string.Empty;
        [MaxLength(500)]
        public string DatoExtra {  get; set; } = string.Empty;
        public DateTime FechaCreacion { get; set; } = DateTime.Now;
    }
}