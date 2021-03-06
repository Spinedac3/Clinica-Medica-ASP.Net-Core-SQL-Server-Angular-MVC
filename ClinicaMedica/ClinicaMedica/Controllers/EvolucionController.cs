﻿using System;
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
    public class EvolucionController : Controller
    {
        private readonly IClinicaRepositorio clinicaRepositorio;
        private readonly ILogger<EvolucionController> logger;
        private readonly UserManager<User> userManager;

        public EvolucionController(IClinicaRepositorio clinicaRepositorio,
            ILogger<EvolucionController> logger,
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
        public async Task<IActionResult> Post([FromBody] Evolucion model)
        {
            try
            {
                var currentUser = await userManager.FindByNameAsync(User.Identity.Name);
                var newModel = new Evolucion()
                {
                    Id = model.Id,
                    pacienteId = model.pacienteId,
                    Fecharegistro = DateTime.Now,
                    Resultadolab = model.Resultadolab,
                    Analisis = model.Analisis,
                    Observaciones = model.Observaciones,
                    user = currentUser
                };
                clinicaRepositorio.AddEvolucion(newModel);
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
                return Ok(clinicaRepositorio.GetAllEvoluciones());
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get orders: {ex}");
                return BadRequest("Failed to get orders");
            }
        }
    }
}
