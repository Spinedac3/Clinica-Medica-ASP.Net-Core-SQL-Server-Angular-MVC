using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClinicaMedica.Data;
using ClinicaMedica.Data.Entities;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;

namespace ClinicaMedica
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        private async Task CreateUserRoles(IServiceProvider serviceProvider)
        {
            var RoleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var UserManager = serviceProvider.GetRequiredService<UserManager<User>>();

            IdentityResult roleResult;
            //Adding Admin Role
            var roleCheck = await RoleManager.RoleExistsAsync("Admin");
            if (!roleCheck)
            {
                //create the roles and seed them to the database
                roleResult = await RoleManager.CreateAsync(new IdentityRole("Admin"));
            }
            //Assign Admin role to the main User here we have given our newly registered 
            //login id for Admin management
            User user = await UserManager.FindByEmailAsync("gsadmin@clinica.com");
            var User = new User();
            await UserManager.AddToRoleAsync(user, "Admin");
        }
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentity<User, IdentityRole>(cfg =>
            {
                cfg.User.RequireUniqueEmail = true;
            }).AddEntityFrameworkStores<ClinicaContext>();

            services.AddTransient<ClinicaSeeder>();
            services.AddScoped<IClinicaRepositorio,ClinicaRepositorio>();

            services.AddAuthentication()
           .AddCookie()
           .AddJwtBearer(cfg => {
               cfg.TokenValidationParameters = new TokenValidationParameters()
               {
                   ValidIssuer = Configuration["Tokens:Issuer"],
                   ValidAudience = Configuration["Tokens:Audience"],
                   IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Tokens:Key"]))
               };
           });

            services.AddDbContext<ClinicaContext>(cfg =>
            {
                cfg.UseSqlServer(Configuration.GetConnectionString("ConnectionString"));
            });
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IServiceProvider services)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseNodeModules();
            app.UseAuthorization();
            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
            CreateUserRoles(services).Wait();
        }
    }
}
