import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Orden } from '../../shared/orden';
let CrearOrdenComponent = class CrearOrdenComponent {
    constructor(router, expedienteService) {
        this.router = router;
        this.expedienteService = expedienteService;
        this.pageTitle = "Crear Orden";
        this.orden = new Orden();
        this.options = [
            { label: 'Ibuprofeno', value: 'Ibuprofeno' },
            { label: 'Acetaminofem', value: 'Acetaminofem' },
            { label: 'Cardio Aspirina', value: 'Cardio Aspirina' }
        ];
    }
    crearOrden() {
        this.orden.pacienteId = this.pacienteId;
        this.orden.medicamento = this.selectedOption;
        this.orden.dosis = this.dosis;
        this.orden.observaciones = this.observaciones;
        this.expedienteService.crearOrden(this.orden).subscribe(success => {
            if (success) {
                this.router.navigate(['ordenes']);
            }
        }, err => this.errorMessage = "No se pudo Guardar el Paciente");
    }
    ngOnInit() {
    }
};
CrearOrdenComponent = __decorate([
    Component({
        selector: 'app-crear-orden',
        templateUrl: './crear-orden.component.html',
        styleUrls: ['./crear-orden.component.css']
    })
], CrearOrdenComponent);
export { CrearOrdenComponent };
//# sourceMappingURL=crear-orden.component.js.map