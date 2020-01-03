import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Paciente } from 'ClientApp/app/shared/paciente';
export class Enfermera {
}
let CrearPacienteComponent = class CrearPacienteComponent {
    constructor(expedienteService, router) {
        this.expedienteService = expedienteService;
        this.router = router;
        this.selectedEnfermera = new Enfermera();
        this.pageTitle = "Crear Paciente";
        this.paciente = new Paciente();
        this.enfermeras = [
            { name: 'Wilson Luna', code: 1 },
            { name: 'Aylin Garcia', code: 2 }
        ];
    }
    crearPaciente() {
        this.paciente.nombre = this.nombre;
        this.paciente.apellido = this.apellido;
        this.paciente.dpi = this.dpi;
        this.paciente.fechaNacimiento = this.fechaNacimiento;
        this.paciente.edad = this.edad;
        this.paciente.sexo = this.sexo;
        this.paciente.profesion = this.profesion;
        this.paciente.direccion = this.direccion;
        this.paciente.contactoEmergencia = this.contactoEmergencia;
        this.paciente.telefenoContacto = this.telefenoContacto;
        this.paciente.parentescocontacto = this.parentescocontacto;
        this.paciente.enfermeraAsignadaId = this.selectedEnfermera.code;
        this.expedienteService.crearPaciente(this.paciente).subscribe(success => {
            if (success) {
                this.router.navigate(['datosGenerales']);
            }
        }, err => this.errorMessage = "No se pudo Guardar el Paciente");
    }
    ngOnInit() {
    }
};
CrearPacienteComponent = __decorate([
    Component({
        selector: 'app-crear-paciente',
        templateUrl: './crear-paciente.component.html',
        styleUrls: ['./crear-paciente.component.css']
    })
], CrearPacienteComponent);
export { CrearPacienteComponent };
//# sourceMappingURL=crear-paciente.component.js.map