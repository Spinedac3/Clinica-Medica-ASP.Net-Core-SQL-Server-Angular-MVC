using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ClinicaMedica.Migrations
{
    public partial class cita : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pacientes_Enfermeras_EnfermeraAsignadaId",
                table: "Pacientes");

            migrationBuilder.DropIndex(
                name: "IX_Pacientes_EnfermeraAsignadaId",
                table: "Pacientes");

            migrationBuilder.AlterColumn<int>(
                name: "EnfermeraAsignadaId",
                table: "Pacientes",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "Citas",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PacienteId = table.Column<int>(nullable: true),
                    Fecharegistro = table.Column<DateTime>(nullable: false),
                    Fechacita = table.Column<DateTime>(nullable: false),
                    DoctorId = table.Column<int>(nullable: true),
                    Observaciones = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Citas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Citas_Doctores_DoctorId",
                        column: x => x.DoctorId,
                        principalTable: "Doctores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Citas_Pacientes_PacienteId",
                        column: x => x.PacienteId,
                        principalTable: "Pacientes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Citas_DoctorId",
                table: "Citas",
                column: "DoctorId");

            migrationBuilder.CreateIndex(
                name: "IX_Citas_PacienteId",
                table: "Citas",
                column: "PacienteId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Citas");

            migrationBuilder.AlterColumn<int>(
                name: "EnfermeraAsignadaId",
                table: "Pacientes",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.CreateIndex(
                name: "IX_Pacientes_EnfermeraAsignadaId",
                table: "Pacientes",
                column: "EnfermeraAsignadaId");

            migrationBuilder.AddForeignKey(
                name: "FK_Pacientes_Enfermeras_EnfermeraAsignadaId",
                table: "Pacientes",
                column: "EnfermeraAsignadaId",
                principalTable: "Enfermeras",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
