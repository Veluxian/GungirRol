using Backend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationsDbContext> options): base(options) { }
        public DbSet<Historia> Historias { get; set; }
    }
}