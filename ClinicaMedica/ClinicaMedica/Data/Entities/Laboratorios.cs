using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicaMedica.Data.Entities
{
    public class Laboratorios
    {
        public int Id { get; set; }
        public int pacienteId { get; set; }
        public DateTime Fecharegistro { get; set; }
        public string Tipolabo { get; set; }
        public User user { get; set; }
    }
}
