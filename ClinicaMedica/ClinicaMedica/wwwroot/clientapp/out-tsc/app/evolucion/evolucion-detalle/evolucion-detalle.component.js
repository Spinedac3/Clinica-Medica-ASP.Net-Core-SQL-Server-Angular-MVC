import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EvolucionDetalleComponent = class EvolucionDetalleComponent {
    constructor(route, router, expedienteService) {
        this.route = route;
        this.router = router;
        this.expedienteService = expedienteService;
        this.pageTitle = 'Detalles de la Evolución ';
        this.errorMessage = '';
    }
    getEvolucion(id) {
        this.expedienteService.getEvolucion(id).subscribe({
            next: evolucion => this.evolucion = evolucion,
            error: err => this.errorMessage = err
        });
    }
    ngOnInit() {
        const param = this.route.snapshot.paramMap.get('id');
        if (param) {
            const id = +param;
            this.getEvolucion(id);
        }
    }
    ngDoCheck() {
        this.expedienteService.getPaciente(this.evolucion.pacienteId).subscribe({
            next: paciente => {
                this.paciente = paciente;
            }
        });
    }
    onBack() {
        this.router.navigate(['/evoluciones']);
    }
};
EvolucionDetalleComponent = __decorate([
    Component({
        selector: 'app-evolucion-detalle',
        templateUrl: './evolucion-detalle.component.html',
        styleUrls: ['./evolucion-detalle.component.css']
    })
], EvolucionDetalleComponent);
export { EvolucionDetalleComponent };
//# sourceMappingURL=evolucion-detalle.component.js.map