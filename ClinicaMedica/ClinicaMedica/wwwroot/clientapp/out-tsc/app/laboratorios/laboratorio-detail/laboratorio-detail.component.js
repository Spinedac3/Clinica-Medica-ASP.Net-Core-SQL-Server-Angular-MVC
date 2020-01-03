import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LaboratorioDetailComponent = class LaboratorioDetailComponent {
    constructor(route, router, expedienteService) {
        this.route = route;
        this.router = router;
        this.expedienteService = expedienteService;
        this.pageTitle = 'Detalles del Laboratorio ';
        this.errorMessage = '';
    }
    getLaboratorio(id) {
        this.expedienteService.getLaboratorio(id).subscribe({
            next: laboratorio => this.laboratorio = laboratorio,
            error: err => this.errorMessage = err
        });
    }
    ngOnInit() {
        const param = this.route.snapshot.paramMap.get('id');
        if (param) {
            const id = +param;
            this.getLaboratorio(id);
        }
    }
    ngDoCheck() {
        this.expedienteService.getPaciente(this.laboratorio.pacienteId).subscribe({
            next: paciente => {
                this.paciente = paciente;
            }
        });
    }
    onBack() {
        this.router.navigate(['/laboratorios']);
    }
};
LaboratorioDetailComponent = __decorate([
    Component({
        selector: 'app-laboratorio-detail',
        templateUrl: './laboratorio-detail.component.html',
        styleUrls: ['./laboratorio-detail.component.css']
    })
], LaboratorioDetailComponent);
export { LaboratorioDetailComponent };
//# sourceMappingURL=laboratorio-detail.component.js.map