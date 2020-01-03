using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClinicaMedica.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ClinicaMedica.Controllers
{
    [Route("api/[Controller]")]
    public class DoctorController : Controller
    {
        private readonly IClinicaRepositorio clinicaRepositorio;
        private readonly ILogger<DoctorController> logger;

        public DoctorController(IClinicaRepositorio clinicaRepositorio, ILogger<DoctorController> logger)
        {
            this.clinicaRepositorio = clinicaRepositorio;
            this.logger = logger;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(clinicaRepositorio.GetDoctorById(id));
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get orders: {ex}");
                return BadRequest("Failed to get orders");
            }

        }
    }
}
