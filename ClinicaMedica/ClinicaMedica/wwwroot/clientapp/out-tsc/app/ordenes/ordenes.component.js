import { __decorate } from "tslib";
import { Component } from '@angular/core';
let OrdenesComponent = class OrdenesComponent {
    constructor(expedienteService) {
        this.expedienteService = expedienteService;
        this.pageTitle = "Ordenes";
        this.errorMessage = '';
        this._listFilter = '';
        this.filteredOrdenes = [];
        this.orden = [];
    }
    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filteredOrdenes = this.listFilter ? this.performFilter(this.listFilter) : this.orden;
    }
    performFilter(filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.orden.filter((ordenes) => ordenes.medicamento.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    ngOnInit() {
        this.expedienteService.getOrdenes().subscribe({
            next: ordenes => {
                this.orden = ordenes;
                this.filteredOrdenes = this.orden;
            },
            error: err => this.errorMessage = err
        });
    }
};
OrdenesComponent = __decorate([
    Component({
        selector: 'app-ordenes',
        templateUrl: './ordenes.component.html',
        styleUrls: ['./ordenes.component.css']
    })
], OrdenesComponent);
export { OrdenesComponent };
//# sourceMappingURL=ordenes.component.js.map