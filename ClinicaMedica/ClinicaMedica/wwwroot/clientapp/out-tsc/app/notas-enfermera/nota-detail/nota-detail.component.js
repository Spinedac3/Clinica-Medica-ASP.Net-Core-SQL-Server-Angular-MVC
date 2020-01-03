import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NotaDetailComponent = class NotaDetailComponent {
    constructor(route, router, expedienteService) {
        this.route = route;
        this.router = router;
        this.expedienteService = expedienteService;
        this.pageTitle = 'Detalles de la Nota ';
        this.errorMessage = '';
    }
    getNota(id) {
        this.expedienteService.getNota(id).subscribe({
            next: nota => this.nota = nota,
            error: err => this.errorMessage = err
        });
    }
    ngOnInit() {
        const param = this.route.snapshot.paramMap.get('id');
        if (param) {
            const id = +param;
            this.getNota(id);
        }
    }
    ngDoCheck() {
        this.expedienteService.getPaciente(this.nota.pacienteId).subscribe({
            next: paciente => {
                this.paciente = paciente;
            }
        });
        this.expedienteService.getDoctor(this.nota.doctorId).subscribe({
            next: doctor => {
                this.doctor = doctor;
            }
        });
    }
    onBack() {
        this.router.navigate(['/notas']);
    }
};
NotaDetailComponent = __decorate([
    Component({
        selector: 'app-nota-detail',
        templateUrl: './nota-detail.component.html',
        styleUrls: ['./nota-detail.component.css']
    })
], NotaDetailComponent);
export { NotaDetailComponent };
//# sourceMappingURL=nota-detail.component.js.map