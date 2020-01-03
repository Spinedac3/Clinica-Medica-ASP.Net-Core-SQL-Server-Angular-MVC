import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LaboratoriosComponent = class LaboratoriosComponent {
    constructor(expedienteService) {
        this.expedienteService = expedienteService;
        this.pageTitle = "Laboratorios";
        this.errorMessage = '';
        this._listFilter = '';
        this.filteredLabos = [];
        this.laboratorios = [];
    }
    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filteredLabos = this.listFilter ? this.performFilter(this.listFilter) : this.laboratorios;
    }
    performFilter(filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.laboratorios.filter((ordenes) => ordenes.tipolabo.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    ngOnInit() {
        this.expedienteService.getLaboratorios().subscribe({
            next: laboratorios => {
                this.laboratorios = laboratorios;
                this.filteredLabos = this.laboratorios;
            },
            error: err => this.errorMessage = err
        });
    }
};
LaboratoriosComponent = __decorate([
    Component({
        selector: 'app-laboratorios',
        templateUrl: './laboratorios.component.html',
        styleUrls: ['./laboratorios.component.css']
    })
], LaboratoriosComponent);
export { LaboratoriosComponent };
//# sourceMappingURL=laboratorios.component.js.map