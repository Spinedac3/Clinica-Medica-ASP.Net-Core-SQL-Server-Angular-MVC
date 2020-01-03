import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Cita } from '../../shared/cita';
export class Doctor {
}
let CrearCitaComponent = class CrearCitaComponent {
    constructor(router, expedienteService) {
        this.router = router;
        this.expedienteService = expedienteService;
        this.pageTitle = "Crear Cita";
        this.selectedDoctor = new Doctor();
        this.cita = new Cita();
        this.doctores = [
            { name: 'Carlos Hernandez', code: 1 },
            { name: 'Cristian Fernandez', code: 2 }
        ];
    }
    crearPaciente() {
        this.cita.pacienteId = this.pacienteId;
        this.cita.fechacita = this.fechaCita;
        this.cita.doctorId = this.selectedDoctor.code;
        this.cita.observaciones = this.observaciones;
        this.expedienteService.crearCita(this.cita).subscribe(success => {
            if (success) {
                this.router.navigate(['citas']);
            }
        }, err => this.errorMessage = "No se pudo Guardar el Paciente");
    }
    ngOnInit() {
    }
};
CrearCitaComponent = __decorate([
    Component({
        selector: 'app-crear-cita',
        templateUrl: './crear-cita.component.html',
        styleUrls: ['./crear-cita.component.css']
    })
], CrearCitaComponent);
export { CrearCitaComponent };
//# sourceMappingURL=crear-cita.component.js.map