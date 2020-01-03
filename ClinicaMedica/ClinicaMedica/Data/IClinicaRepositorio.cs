using ClinicaMedica.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicaMedica.Data
{
    public interface IClinicaRepositorio
    {
        IEnumerable<Paciente> GetAllPacientes();
        IEnumerable<Cita> GetAllCitas();
        IEnumerable<NotaEnfermeria> GetAllNotas();
        IEnumerable<Orden> GetAllOrdenes();
        IEnumerable<Laboratorios> GetAllLaboratorios();
        IEnumerable<Evolucion> GetAllEvoluciones();
        Enfermera GetEnfermeraById(int id);
        Paciente GePacienteById(int id);
        Doctor GetDoctorById(int id);
        int getEsEnfermera();
        void AddPaciente(Paciente newModel);
        void AddEntity(object model);
        bool SaveAll();
        void AddCita(Cita newModel);
        void AddNota(NotaEnfermeria newModel);
        void AddOrden(Orden newModel);
        void AddLaboratorio(Laboratorios newModel);
        void AddEvolucion(Evolucion newModel);
    }
}
