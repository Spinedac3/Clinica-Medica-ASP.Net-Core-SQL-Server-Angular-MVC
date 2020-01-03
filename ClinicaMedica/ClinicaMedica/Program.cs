using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ClinicaMedica.Data;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace ClinicaMedica
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = BuildWebHost(args);

            SeedBD(host);

            host.Run();
        }

        private static void SeedBD(IWebHost host)
        {
            var scopeFactory = host.Services.GetService<IServiceScopeFactory>();
            using (var scope = scopeFactory.CreateScope())
            {
                var seeder = scope.ServiceProvider.GetService<ClinicaSeeder>();
                seeder.LoginsAsync().Wait();
            }
        }


        public static IWebHost BuildWebHost(string[] args) =>
        WebHost.CreateDefaultBuilder(args)
            .ConfigureAppConfiguration(SetupConfiguration)
            .UseStartup<Startup>()
            .Build();

        private static void SetupConfiguration(WebHostBuilderContext ctx, IConfigurationBuilder builder)
        {
            builder.Sources.Clear();

            builder.AddJsonFile("config.json", false, true)
                .AddEnvironmentVariables();
        }
    }
}
