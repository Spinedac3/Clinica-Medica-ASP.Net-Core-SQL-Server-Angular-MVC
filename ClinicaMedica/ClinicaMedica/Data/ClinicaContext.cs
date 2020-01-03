using ClinicaMedica.Data.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicaMedica.Data
{
    public class ClinicaContext : IdentityDbContext<User>
    {
        public ClinicaContext(DbContextOptions<ClinicaContext> options) : base(options)
        {
        
        }

        public DbSet<Doctor> Doctores { get; set; }
        public DbSet<Enfermera> Enfermeras { get; set; }
        public DbSet<Evolucion> Evoluciones { get; set; }
        public DbSet<Laboratorios> Laboratorios { get; set; }
        public DbSet<NotaEnfermeria> NotasEnfermeria { get; set; }
        public DbSet<Orden> Ordenes { get; set; }
        public DbSet<Paciente> Pacientes { get; set; }
        public DbSet<Recepcionista> Recepcionistas { get; set; }
        public DbSet<User> Users { get; set; }

        public DbSet<Cita> Citas { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);


        }

    }
}
