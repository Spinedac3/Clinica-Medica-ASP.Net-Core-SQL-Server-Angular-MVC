import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Nota } from '../../shared/nota';
export class Doctor {
}
let CrearNotaComponent = class CrearNotaComponent {
    constructor(router, expedienteService) {
        this.router = router;
        this.expedienteService = expedienteService;
        this.selectedDoctor = new Doctor();
        this.pageTitle = "Crear Nota";
        this.nota = new Nota();
        this.doctores = [
            { name: 'Carlos Hernandez', code: 1 },
            { name: 'Cristian Fernandez', code: 2 }
        ];
    }
    crearPaciente() {
        this.nota.pacienteId = this.pacienteId;
        this.nota.pesokg = this.pesokg;
        this.nota.alturamts = this.alturamts;
        this.nota.pulso = this.pulso;
        this.nota.presion = this.presion;
        this.nota.respiraxmin = this.respiraxmin;
        this.nota.temperatura = this.temperatura;
        this.nota.doctorId = this.selectedDoctor.code;
        this.nota.observaciones = this.observaciones;
        this.expedienteService.crearNota(this.nota).subscribe(success => {
            if (success) {
                this.router.navigate(['notas']);
            }
        }, err => this.errorMessage = "No se pudo Guardar el Paciente");
    }
    ngOnInit() {
    }
};
CrearNotaComponent = __decorate([
    Component({
        selector: 'app-crear-nota',
        templateUrl: './crear-nota.component.html',
        styleUrls: ['./crear-nota.component.css']
    })
], CrearNotaComponent);
export { CrearNotaComponent };
//# sourceMappingURL=crear-nota.component.js.map