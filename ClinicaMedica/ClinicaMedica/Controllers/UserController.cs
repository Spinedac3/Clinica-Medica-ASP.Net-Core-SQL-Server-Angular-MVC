using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using ClinicaMedica.Data.Entities;
using ClinicaMedica.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ClinicaMedica.Controllers
{
    public class UserController : Controller
    {
        private readonly SignInManager<User> signInManager;
        private readonly UserManager<User> userManager;
        private readonly IConfiguration config;
        private readonly ILogger<UserController> logger;
        public UserController(SignInManager<User> signInManager, UserManager<User> userManager,
            IConfiguration config, ILogger<UserController> logger)
        {
            this.signInManager = signInManager;
            this.userManager = userManager;
            this.config = config;
            this.logger = logger;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await signInManager.PasswordSignInAsync(model.Username,
                  model.Password,
                  model.RememberMe,
              
                  false);

                if (result.Succeeded)
                {
                    if (Request.Query.Keys.Contains("ReturnUrl"))
                    {
                        return Redirect(Request.Query["ReturnUrl"].First());
                    }
                    else
                    {
                        return RedirectToAction("Index", "App");
                    }
                }
            }
            ModelState.AddModelError("", "Failed to login");

            return View();
        }

        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            return RedirectToAction("Index", "App");
        }

        [HttpPost]
        public async Task<IActionResult> CreateToken([FromBody] LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await userManager.FindByNameAsync(model.Username);

                if (user != null)
                {
                    var result = await signInManager.CheckPasswordSignInAsync(user, model.Password, false);

                    if (result.Succeeded)
                    {
                        // Create the token
                        var claims = new[]
                        {
              new Claim(JwtRegisteredClaimNames.Sub, user.Email),
              new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
              new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName),
              new Claim(ClaimTypes.Role, "Recepcionista"),
              new Claim(ClaimTypes.Role, "Enfermera"),
              new Claim(ClaimTypes.Role, "Admin")
            };

                        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Tokens:Key"]));
                        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                        var token = new JwtSecurityToken(config["Tokens:Issuer"],
                                                         config["Tokens:Audience"],
                                                         claims,
                                                         expires: DateTime.Now.AddMinutes(60),
                                                         signingCredentials: creds);

                        var results = new
                        {
                            token = new JwtSecurityTokenHandler().WriteToken(token),
                            expiration = token.ValidTo
                        };

                        return Created("", results);
                    }
                }
            }

            return BadRequest();
        }
}
}
