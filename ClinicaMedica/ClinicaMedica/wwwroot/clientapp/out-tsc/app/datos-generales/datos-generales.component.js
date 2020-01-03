import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DatosGeneralesComponent = class DatosGeneralesComponent {
    constructor(expedienteService) {
        this.expedienteService = expedienteService;
        this.pageTitle = "Datos Generales";
        this.errorMessage = '';
        this._listFilter = '';
        this.filteredPacientes = [];
        this.pacientes = [];
    }
    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filteredPacientes = this.listFilter ? this.performFilter(this.listFilter) : this.pacientes;
    }
    performFilter(filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.pacientes.filter((paciente) => paciente.nombre.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    ngOnInit() {
        this.expedienteService.getPacientes().subscribe({
            next: pacientes => {
                this.pacientes = pacientes;
                this.filteredPacientes = this.pacientes;
            },
            error: err => this.errorMessage = err
        });
        for (var i = 0; i < this.pacientes.length; i++) {
            this.expedienteService.paciente.push(this.pacientes[i]);
        }
        console.log(this.expedienteService.paciente);
    }
};
DatosGeneralesComponent = __decorate([
    Component({
        selector: 'app-datos-generales',
        templateUrl: './datos-generales.component.html',
        styleUrls: ['./datos-generales.component.css']
    })
], DatosGeneralesComponent);
export { DatosGeneralesComponent };
//# sourceMappingURL=datos-generales.component.js.map