using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
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
    public class PacienteController : Controller
    {
        private readonly IClinicaRepositorio clinicaRepositorio;
        private readonly ILogger<PacienteController> logger;
        private readonly UserManager<User> userManager;

        public PacienteController(IClinicaRepositorio clinicaRepositorio, ILogger<PacienteController> logger,
            UserManager<User> userManager)
        {
            this.clinicaRepositorio = clinicaRepositorio;
            this.logger = logger;
            this.userManager = userManager;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Paciente model)
        {
            try
            {
                var currentUser = await userManager.FindByNameAsync(User.Identity.Name);
                var newModel = new Paciente()
                {
                    Id = model.Id,
                    Nombre = model.Nombre,
                    Apellido = model.Apellido,
                    DPI = model.DPI,
                    FechaNacimiento = model.FechaNacimiento,
                    Edad = model.Edad,
                    Sexo = model.Sexo,
                    Profesion = model.Profesion,
                    Direccion = model.Direccion,
                    ContactoEmergencia = model.ContactoEmergencia,
                    TelefenoContacto = model.TelefenoContacto,
                    Parentescocontacto = model.Parentescocontacto,
                    EnfermeraAsignadaId = model.EnfermeraAsignadaId,
                    user = currentUser
                };
                clinicaRepositorio.AddPaciente(newModel);
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
                return Ok(clinicaRepositorio.GetAllPacientes());
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get orders: {ex}");
                return BadRequest("Failed to get orders");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(clinicaRepositorio.GePacienteById(id));
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get orders: {ex}");
                return BadRequest("Failed to get orders");
            }

        }
    }
}
