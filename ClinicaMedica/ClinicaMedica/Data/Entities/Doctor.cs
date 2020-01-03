using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicaMedica.Data.Entities
{
    public class Doctor
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int DPI { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public int Edad { get; set; }
        public string Sexo { get; set; }
    }
}
