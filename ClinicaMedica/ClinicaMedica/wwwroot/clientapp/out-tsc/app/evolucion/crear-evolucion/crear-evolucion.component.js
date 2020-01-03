import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Evolucion } from '../../shared/evolucion';
let CrearEvolucionComponent = class CrearEvolucionComponent {
    constructor(router, expedienteService) {
        this.router = router;
        this.expedienteService = expedienteService;
        this.evolucion = new Evolucion();
    }
    crearEvolucion() {
        this.evolucion.pacienteId = this.pacienteId;
        this.evolucion.resultadolab = this.resultadolab;
        this.evolucion.analisis = this.analisis;
        this.evolucion.observaciones = this.observaciones;
        this.expedienteService.crearEvolucion(this.evolucion).subscribe(success => {
            if (success) {
                this.router.navigate(['evoluciones']);
            }
        }, err => this.errorMessage = "No se pudo Guardar el Paciente");
    }
    ngOnInit() {
    }
};
CrearEvolucionComponent = __decorate([
    Component({
        selector: 'app-crear-evolucion',
        templateUrl: './crear-evolucion.component.html',
        styleUrls: ['./crear-evolucion.component.css']
    })
], CrearEvolucionComponent);
export { CrearEvolucionComponent };
//# sourceMappingURL=crear-evolucion.component.js.map