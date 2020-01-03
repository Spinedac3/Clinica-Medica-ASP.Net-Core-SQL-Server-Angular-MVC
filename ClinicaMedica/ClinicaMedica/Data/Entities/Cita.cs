using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicaMedica.Data.Entities
{
    public class Cita
    {
        public int Id { get; set; }
        public int PacienteId { get; set; }
        public DateTime Fecharegistro { get; set; }
        public DateTime Fechacita { get; set; }
        public int DoctorId { get; set; }
        public string Observaciones { get; set; }

    }
}
