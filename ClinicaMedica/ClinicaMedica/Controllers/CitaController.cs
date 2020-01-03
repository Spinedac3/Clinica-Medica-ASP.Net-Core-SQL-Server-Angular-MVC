using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClinicaMedica.Data;
using ClinicaMedica.Data.Entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ClinicaMedica.Controllers
{
    [Route("api/[Controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Recepcionista")]
    public class CitaController : Controller
    {
        private readonly IClinicaRepositorio clinicaRepositorio;
        private readonly ILogger<CitaController> logger;

        public CitaController(IClinicaRepositorio clinicaRepositorio,
            ILogger<CitaController> logger
          )
        {
            this.clinicaRepositorio = clinicaRepositorio;
            this.logger = logger;

        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Cita model)
        {
            try
            {
                var newModel = new Cita()
                {
                    Id = model.Id,
                    PacienteId = model.PacienteId,
                    Fecharegistro =  DateTime.Now,
                    Fechacita = model.Fechacita,
                    DoctorId = model.DoctorId,
                    Observaciones = model.Observaciones
                };
                clinicaRepositorio.AddCita(newModel);
                if (clinicaRepositorio.SaveAll())
                {
                    /*   return Created($"/api/order/{Newmodel.Id}", Newmodel);*/
                    var results = new
                    {
                        ruta = $"{newModel.Id}"
                    };
                    return Created("", results);
                }
            }
            catch (Exception ex)
            {
                logger.LogError($"Fallo al Guardar Paciente:{ex}");
            }

            return BadRequest("Fallo al Guardar Paciente");
        }
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(clinicaRepositorio.GetAllCitas());
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get orders: {ex}");
                return BadRequest("Failed to get orders");
            }
        }
    }
}
