import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EvolucionComponent = class EvolucionComponent {
    constructor(expedienteService) {
        this.expedienteService = expedienteService;
        this.pageTitle = "Evoluciones";
        this.errorMessage = '';
        this._listFilter = '';
        this.filteredEvo = [];
        this.evoluciones = [];
    }
    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filteredEvo = this.listFilter ? this.performFilter(this.listFilter) : this.evoluciones;
    }
    performFilter(filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.evoluciones.filter((evoluciones) => evoluciones.resultadolab.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    ngOnInit() {
        this.expedienteService.getEvoluciones().subscribe({
            next: evoluciones => {
                this.evoluciones = evoluciones;
                this.filteredEvo = this.evoluciones;
            },
            error: err => this.errorMessage = err
        });
    }
};
EvolucionComponent = __decorate([
    Component({
        selector: 'app-evolucion',
        templateUrl: './evolucion.component.html',
        styleUrls: ['./evolucion.component.css']
    })
], EvolucionComponent);
export { EvolucionComponent };
//# sourceMappingURL=evolucion.component.js.map