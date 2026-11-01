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
        public DbSet<Pacientes> Pacientes { get; set; }
        public DbSet<Especialidades> Especialidades { get; set; }
        public DbSet<Citas> Citas { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // base.OnModelCreating(modelBuilder);
            //Relacion Cita con Doctor
            modelBuilder.Entity<Citas>()
                 .HasOne(c => c.Doctores)
                 .WithMany(d => d.Citas)
                 .HasForeignKey(c=> c.IdDoctor)
                 .OnDelete(DeleteBehavior.Restrict);//Evitamos que se elimine el doctor si tiene citas asociadas

            modelBuilder.Entity<Citas>()
                .HasOne(c => c.Pacientes)
                .WithMany(p => p.Citas)
                .HasForeignKey(c => c.IdPaciente)
                .OnDelete(DeleteBehavior.Restrict);//Evitamos que se elimine el paciente si tiene cita  asociada   
        }

    }
}
