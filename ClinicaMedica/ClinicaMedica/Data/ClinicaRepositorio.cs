using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClinicaMedica.Data.Entities;
using Microsoft.Extensions.Logging;

namespace ClinicaMedica.Data
{
    public class ClinicaRepositorio : IClinicaRepositorio
    {
        private readonly ClinicaContext ctx;
        private readonly ILogger<ClinicaRepositorio> logger;

        public ClinicaRepositorio(ClinicaContext ctx, ILogger<ClinicaRepositorio> logger)
        {
            this.ctx = ctx;
            this.logger = logger;
        }

        public void AddCita(Cita newModel)
        {
            AddEntity(newModel);
        }

        public void AddEntity(object model)
        {
            ctx.Add(model);
        }

        public void AddEvolucion(Evolucion newModel)
        {
            AddEntity(newModel);
        }

        public void AddLaboratorio(Laboratorios newModel)
        {
            AddEntity(newModel);
        }

        public void AddNota(NotaEnfermeria newModel)
        {
            AddEntity(newModel);
        }

        public void AddOrden(Orden newModel)
        {
            AddEntity(newModel);
        }

        public void AddPaciente(Paciente newModel)
        {
            AddEntity(newModel);
        }

        public Paciente GePacienteById(int id)
        {
            return ctx.Pacientes.Where(p => p.Id == id).FirstOrDefault();
        }

        public IEnumerable<Cita> GetAllCitas()
        {
            return ctx.Citas.ToList();
        }

        public IEnumerable<Evolucion> GetAllEvoluciones()
        {
            return ctx.Evoluciones.ToList();
        }

        public IEnumerable<Laboratorios> GetAllLaboratorios()
        {
            return ctx.Laboratorios.ToList();
        }

        public IEnumerable<NotaEnfermeria> GetAllNotas()
        {
            return ctx.NotasEnfermeria.ToList();
        }

        public IEnumerable<Orden> GetAllOrdenes()
        {
            return ctx.Ordenes.ToList();
        }

        public IEnumerable<Paciente> GetAllPacientes()
        {
            return ctx.Pacientes.ToList();
        }

        public Doctor GetDoctorById(int id)
        {
            return ctx.Doctores.Where(d => d.Id == id).FirstOrDefault();
        }

        public Enfermera GetEnfermeraById(int id)
        {
            return ctx.Enfermeras.Where(e => e.Id == id).FirstOrDefault();
        }

        public int getEsEnfermera()
        {
            return ctx.Enfermeras.Count();
        }

        public bool SaveAll()
        {
            return ctx.SaveChanges() > 0;
        }
    }
}
