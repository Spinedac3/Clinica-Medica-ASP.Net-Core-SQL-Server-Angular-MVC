import { __decorate } from "tslib";
import { Component } from '@angular/core';
let OrdenDetailComponent = class OrdenDetailComponent {
    constructor(route, router, expedienteService) {
        this.route = route;
        this.router = router;
        this.expedienteService = expedienteService;
        this.pageTitle = 'Detalles de la Orden ';
        this.errorMessage = '';
    }
    getOrden(id) {
        this.expedienteService.getOrden(id).subscribe({
            next: orden => this.orden = orden,
            error: err => this.errorMessage = err
        });
    }
    ngOnInit() {
        const param = this.route.snapshot.paramMap.get('id');
        if (param) {
            const id = +param;
            this.getOrden(id);
        }
    }
    ngDoCheck() {
        this.expedienteService.getPaciente(this.orden.pacienteId).subscribe({
            next: paciente => {
                this.paciente = paciente;
            }
        });
    }
    onBack() {
        this.router.navigate(['/ordenes']);
    }
};
OrdenDetailComponent = __decorate([
    Component({
        selector: 'app-orden-detail',
        templateUrl: './orden-detail.component.html',
        styleUrls: ['./orden-detail.component.css']
    })
], OrdenDetailComponent);
export { OrdenDetailComponent };
//# sourceMappingURL=orden-detail.component.js.map