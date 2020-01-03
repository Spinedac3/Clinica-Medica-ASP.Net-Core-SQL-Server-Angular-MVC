using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicaMedica.Data.Entities
{
    public class NotaEnfermeria
    {
        public int Id { get; set; }
        public int pacienteId { get; set; }
        public DateTime Fecharegistro { get; set; }
        public double Pesokg { get; set; }
        public double Alturamts { get; set; }
        public int Pulso { get; set; }
        public string Presion { get; set; }
        public int Respiraxmin { get; set; }
        public int Temperatura { get; set; }
        public int doctorId { get; set; }
        public string Observaciones { get; set; }
        public User user { get; set; }

    }
}
