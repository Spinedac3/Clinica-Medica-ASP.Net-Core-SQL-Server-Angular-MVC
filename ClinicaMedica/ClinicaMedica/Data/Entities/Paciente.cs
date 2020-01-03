using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicaMedica.Data.Entities
{
    public class Paciente
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int DPI { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public int Edad { get; set; }
        public string Sexo { get; set; }
        public string Profesion { get; set; }
        public string Direccion { get; set; }
        public int ContactoEmergencia { get; set; }
        public int? TelefenoContacto { get; set; }
        public int? Parentescocontacto { get; set; }
        public int EnfermeraAsignadaId { get; set; }
        public User user { get; set; }
     
    }
}
