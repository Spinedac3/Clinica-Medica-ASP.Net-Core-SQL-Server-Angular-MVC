using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicaMedica.Data.Entities
{
    public class Evolucion
    {
        public int Id { get; set; }
        public int pacienteId { get; set; }
        public DateTime Fecharegistro { get; set; }
        public string Resultadolab { get; set; }
        public string Analisis { get; set; }
        public string Observaciones { get; set; }
        public User user { get; set;}
    }
}
