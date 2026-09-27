using ApiSistemaClinico.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiSistemaClinico.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Doctores> Doctores { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           // base.OnModelCreating(modelBuilder);
        }

    }
}
