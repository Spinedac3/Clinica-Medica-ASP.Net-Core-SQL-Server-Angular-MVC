using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicaMedica.Data.Entities
{
    public class Orden
    {
        public int Id { get; set; }
        public int pacienteId { get; set; }
        public DateTime Fecharegistro { get; set; }
        public string Medicamento { get; set; }
        public string Dosis { get; set; }
        public string Observaciones { get; set; }
        public User User { get; set; }
    }
}
