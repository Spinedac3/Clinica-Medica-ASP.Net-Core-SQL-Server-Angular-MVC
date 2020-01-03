using ClinicaMedica.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicaMedica.Controllers
{
    [Route("api/[Controller]")]
    public class EnfermeraController : Controller
    {
        private readonly IClinicaRepositorio clinicaRepositorio;
        private readonly ILogger<EnfermeraController> logger;

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
        public EnfermeraController(IClinicaRepositorio clinicaRepositorio, ILogger<EnfermeraController> logger)
        {
            this.clinicaRepositorio = clinicaRepositorio;
            this.logger = logger;
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(clinicaRepositorio.GetEnfermeraById(id));
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get orders: {ex}");
                return BadRequest("Failed to get orders");
            }

        }

        [HttpGet]
        public int Get()
        {
            return clinicaRepositorio.getEsEnfermera();
        }
    }
}
