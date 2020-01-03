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
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
    public class OrdenesController : Controller
    {
        private readonly IClinicaRepositorio clinicaRepositorio;
        private readonly ILogger<OrdenesController> logger;
        private readonly UserManager<User> userManager;

        public OrdenesController(IClinicaRepositorio clinicaRepositorio,
            ILogger<OrdenesController> logger,
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
        public async Task<IActionResult> Post([FromBody] Orden model)
        {
            try
            {
                var currentUser = await userManager.FindByNameAsync(User.Identity.Name);
                var newModel = new Orden()
                {
                    Id = model.Id,
                    pacienteId = model.pacienteId,
                    Fecharegistro = DateTime.Now,
                    Medicamento = model.Medicamento,
                    Dosis = model.Dosis,
                    Observaciones = model.Observaciones,
                    User = currentUser
                };
                clinicaRepositorio.AddOrden(newModel);
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
                return Ok(clinicaRepositorio.GetAllOrdenes());
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get orders: {ex}");
                return BadRequest("Failed to get orders");
            }
        }
    }
}
