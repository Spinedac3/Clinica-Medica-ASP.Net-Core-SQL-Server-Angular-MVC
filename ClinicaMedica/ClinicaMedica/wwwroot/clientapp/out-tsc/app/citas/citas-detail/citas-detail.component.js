import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CitasDetailComponent = class CitasDetailComponent {
    constructor(route, router, expedienteService) {
        this.route = route;
        this.router = router;
        this.expedienteService = expedienteService;
        this.pageTitle = 'Detalles de la cita del paciente: ';
        this.errorMessage = '';
    }
    getCita(id) {
        this.expedienteService.getCita(id).subscribe({
            next: cita => this.cita = cita,
            error: err => this.errorMessage = err
        });
    }
    ngOnInit() {
        const param = this.route.snapshot.paramMap.get('id');
        if (param) {
            const id = +param;
            this.getCita(id);
        }
    }
    ngDoCheck() {
        this.expedienteService.getPaciente(this.cita.pacienteId).subscribe({
            next: paciente => {
                this.paciente = paciente;
            }
        });
        this.expedienteService.getDoctor(this.cita.doctorId).subscribe({
            next: doctor => {
                this.doctor = doctor;
            }
        });
    }
    onBack() {
        this.router.navigate(['/citas']);
    }
};
CitasDetailComponent = __decorate([
    Component({
        selector: 'app-citas-detail',
        templateUrl: './citas-detail.component.html',
        styleUrls: ['./citas-detail.component.css']
    })
], CitasDetailComponent);
export { CitasDetailComponent };
//# sourceMappingURL=citas-detail.component.js.map