import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PacienteDetailComponent = class PacienteDetailComponent {
    constructor(route, router, expedienteService) {
        this.route = route;
        this.router = router;
        this.expedienteService = expedienteService;
        this.pageTitle = 'Detalles del Paciente';
        this.errorMessage = '';
    }
    getPaciente(id) {
        this.expedienteService.getPaciente(id).subscribe({
            next: paciente => this.paciente = paciente,
            error: err => this.errorMessage = err,
        });
    }
    ngOnInit() {
        const param = this.route.snapshot.paramMap.get('id');
        if (param) {
            const id = +param;
            this.getPaciente(id);
            console.log("hola");
        }
    }
    ngDoCheck() {
        this.expedienteService.getEnfermera(this.paciente.enfermeraAsignadaId).subscribe({
            next: enfermera => {
                this.enfermera = enfermera;
            }
        });
    }
    onBack() {
        this.router.navigate(['/datosGenerales']);
    }
};
PacienteDetailComponent = __decorate([
    Component({
        selector: 'app-paciente-detail',
        templateUrl: './paciente-detail.component.html',
        styleUrls: ['./paciente-detail.component.css']
    })
], PacienteDetailComponent);
export { PacienteDetailComponent };
//# sourceMappingURL=paciente-detail.component.js.map