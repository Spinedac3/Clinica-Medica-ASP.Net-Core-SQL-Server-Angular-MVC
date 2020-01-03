import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NotasEnfermeraComponent = class NotasEnfermeraComponent {
    constructor(expedienteService) {
        this.expedienteService = expedienteService;
        this.pageTitle = "Notas Enfermera";
        this.errorMessage = '';
        this._listFilter = '';
        this.filteredNotas = [];
        this.notas = [];
    }
    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filteredNotas = this.listFilter ? this.performFilter(this.listFilter) : this.notas;
    }
    performFilter(filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.notas.filter((notas) => notas.pacienteId.toString().toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    ngOnInit() {
        this.expedienteService.getNotas().subscribe({
            next: notas => {
                this.notas = notas;
                this.filteredNotas = this.notas;
            },
            error: err => this.errorMessage = err
        });
    }
};
NotasEnfermeraComponent = __decorate([
    Component({
        selector: 'app-notas-enfermera',
        templateUrl: './notas-enfermera.component.html',
        styleUrls: ['./notas-enfermera.component.css']
    })
], NotasEnfermeraComponent);
export { NotasEnfermeraComponent };
//# sourceMappingURL=notas-enfermera.component.js.map