using ClinicaMedica.Data.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicaMedica.Data
{
    public class ClinicaSeeder
    {
        private readonly ClinicaContext ctx;
        private readonly UserManager<User> userManager;

        public ClinicaSeeder(ClinicaContext ctx, UserManager<User> userManager)
        {
            this.ctx = ctx;
            this.userManager = userManager;
        }


        public async Task LoginsAsync()
        {
            ctx.Database.EnsureCreated();
            User user = await userManager.FindByEmailAsync("gsadmin@clinica.com");
            if (user == null)
            {
                user = new User()
                {
                    FirstName = "Guilmar",
                    LastName = "Serrano",
                    Email = "gsadmin@clinica.com",
                    UserName = "GSAdmin",

                };


                var result = await userManager.CreateAsync(user, "P@ssw0rd");
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("No se creo correctamente el usuario");
                }

            }
        }
    }
}
