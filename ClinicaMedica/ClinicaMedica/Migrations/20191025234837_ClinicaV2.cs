using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ClinicaMedica.Migrations
{
    public partial class ClinicaV2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Doctores",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(nullable: true),
                    Apellido = table.Column<string>(nullable: true),
                    DPI = table.Column<int>(nullable: false),
                    FechaNacimiento = table.Column<DateTime>(nullable: false),
                    Edad = table.Column<int>(nullable: false),
                    Sexo = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Doctores", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Enfermeras",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(nullable: true),
                    Apellido = table.Column<string>(nullable: true),
                    DPI = table.Column<int>(nullable: false),
                    FechaNacimiento = table.Column<DateTime>(nullable: false),
                    Edad = table.Column<int>(nullable: false),
                    Sexo = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Enfermeras", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Recepcionistas",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(nullable: true),
                    Apellido = table.Column<string>(nullable: true),
                    DPI = table.Column<int>(nullable: false),
                    FechaNacimiento = table.Column<DateTime>(nullable: false),
                    Edad = table.Column<int>(nullable: false),
                    Sexo = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Recepcionistas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Pacientes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(nullable: true),
                    Apellido = table.Column<string>(nullable: true),
                    DPI = table.Column<int>(nullable: false),
                    FechaNacimiento = table.Column<DateTime>(nullable: false),
                    Edad = table.Column<int>(nullable: false),
                    Sexo = table.Column<string>(nullable: true),
                    Profesion = table.Column<string>(nullable: true),
                    Direccion = table.Column<string>(nullable: true),
                    ContactoEmergencia = table.Column<int>(nullable: false),
                    TelefenoContacto = table.Column<int>(nullable: true),
                    Parentescocontacto = table.Column<int>(nullable: true),
                    EnfermeraAsignadaId = table.Column<int>(nullable: true),
                    userId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pacientes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Pacientes_Enfermeras_EnfermeraAsignadaId",
                        column: x => x.EnfermeraAsignadaId,
                        principalTable: "Enfermeras",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Pacientes_AspNetUsers_userId",
                        column: x => x.userId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Evoluciones",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    pacienteId = table.Column<int>(nullable: true),
                    Fecharegistro = table.Column<DateTime>(nullable: false),
                    Resultadolab = table.Column<string>(nullable: true),
                    Analisis = table.Column<string>(nullable: true),
                    Observaciones = table.Column<string>(nullable: true),
                    userId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Evoluciones", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Evoluciones_Pacientes_pacienteId",
                        column: x => x.pacienteId,
                        principalTable: "Pacientes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Evoluciones_AspNetUsers_userId",
                        column: x => x.userId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Laboratorios",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    pacienteId = table.Column<int>(nullable: true),
                    Fecharegistro = table.Column<DateTime>(nullable: false),
                    Tipolabo = table.Column<string>(nullable: true),
                    userId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Laboratorios", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Laboratorios_Pacientes_pacienteId",
                        column: x => x.pacienteId,
                        principalTable: "Pacientes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Laboratorios_AspNetUsers_userId",
                        column: x => x.userId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "NotasEnfermeria",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    pacienteId = table.Column<int>(nullable: true),
                    Fecharegistro = table.Column<DateTime>(nullable: false),
                    Pesokg = table.Column<double>(nullable: false),
                    Alturamts = table.Column<double>(nullable: false),
                    Pulso = table.Column<int>(nullable: false),
                    Presion = table.Column<string>(nullable: true),
                    Respiraxmin = table.Column<int>(nullable: false),
                    Temperatura = table.Column<int>(nullable: false),
                    doctorId = table.Column<int>(nullable: true),
                    Observaciones = table.Column<string>(nullable: true),
                    userId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NotasEnfermeria", x => x.Id);
                    table.ForeignKey(
                        name: "FK_NotasEnfermeria_Doctores_doctorId",
                        column: x => x.doctorId,
                        principalTable: "Doctores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_NotasEnfermeria_Pacientes_pacienteId",
                        column: x => x.pacienteId,
                        principalTable: "Pacientes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_NotasEnfermeria_AspNetUsers_userId",
                        column: x => x.userId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Ordenes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    pacienteId = table.Column<int>(nullable: true),
                    Fecharegistro = table.Column<DateTime>(nullable: false),
                    Medicamento = table.Column<string>(nullable: true),
                    Dosis = table.Column<string>(nullable: true),
                    Observaciones = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ordenes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Ordenes_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Ordenes_Pacientes_pacienteId",
                        column: x => x.pacienteId,
                        principalTable: "Pacientes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Evoluciones_pacienteId",
                table: "Evoluciones",
                column: "pacienteId");

            migrationBuilder.CreateIndex(
                name: "IX_Evoluciones_userId",
                table: "Evoluciones",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_Laboratorios_pacienteId",
                table: "Laboratorios",
                column: "pacienteId");

            migrationBuilder.CreateIndex(
                name: "IX_Laboratorios_userId",
                table: "Laboratorios",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_NotasEnfermeria_doctorId",
                table: "NotasEnfermeria",
                column: "doctorId");

            migrationBuilder.CreateIndex(
                name: "IX_NotasEnfermeria_pacienteId",
                table: "NotasEnfermeria",
                column: "pacienteId");

            migrationBuilder.CreateIndex(
                name: "IX_NotasEnfermeria_userId",
                table: "NotasEnfermeria",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_Ordenes_UserId",
                table: "Ordenes",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Ordenes_pacienteId",
                table: "Ordenes",
                column: "pacienteId");

            migrationBuilder.CreateIndex(
                name: "IX_Pacientes_EnfermeraAsignadaId",
                table: "Pacientes",
                column: "EnfermeraAsignadaId");

            migrationBuilder.CreateIndex(
                name: "IX_Pacientes_userId",
                table: "Pacientes",
                column: "userId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "Evoluciones");

            migrationBuilder.DropTable(
                name: "Laboratorios");

            migrationBuilder.DropTable(
                name: "NotasEnfermeria");

            migrationBuilder.DropTable(
                name: "Ordenes");

            migrationBuilder.DropTable(
                name: "Recepcionistas");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "Doctores");

            migrationBuilder.DropTable(
                name: "Pacientes");

            migrationBuilder.DropTable(
                name: "Enfermeras");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
