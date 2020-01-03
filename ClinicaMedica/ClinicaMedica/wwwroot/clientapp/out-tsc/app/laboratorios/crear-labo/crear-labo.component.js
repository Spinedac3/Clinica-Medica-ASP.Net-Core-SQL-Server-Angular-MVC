import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Laboratorio } from '../../shared/laboratorio';
let CrearLaboComponent = class CrearLaboComponent {
    constructor(router, expedienteService) {
        this.router = router;
        this.expedienteService = expedienteService;
        this.errorMessage = "";
        this.laboratorio = new Laboratorio();
    }
    crearLabo() {
        this.laboratorio.pacienteId = this.pacienteId;
        this.laboratorio.tipolabo = this.tipoLabo;
        this.expedienteService.crearLaboratorio(this.laboratorio).subscribe(success => {
            if (success) {
                this.router.navigate(['laboratorios']);
            }
        }, err => this.errorMessage = "No se pudo Guardar el Paciente");
    }
    ngOnInit() {
    }
};
CrearLaboComponent = __decorate([
    Component({
        selector: 'app-crear-labo',
        templateUrl: './crear-labo.component.html',
        styleUrls: ['./crear-labo.component.css']
    })
], CrearLaboComponent);
export { CrearLaboComponent };
//# sourceMappingURL=crear-labo.component.js.map