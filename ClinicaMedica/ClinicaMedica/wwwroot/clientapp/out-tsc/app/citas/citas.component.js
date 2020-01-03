import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CitasComponent = class CitasComponent {
    constructor(expedienteService) {
        this.expedienteService = expedienteService;
        this.pageTitle = "Citas";
        this.errorMessage = '';
        this._listFilter = '';
        this.filteredCitas = [];
        this.citas = [];
    }
    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filteredCitas = this.listFilter ? this.performFilter(this.listFilter) : this.citas;
    }
    performFilter(filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.citas.filter((cita) => cita.fechacita.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    ngOnInit() {
        this.expedienteService.getCitas().subscribe({
            next: citas => {
                this.citas = citas;
                this.filteredCitas = this.citas;
            },
            error: err => this.errorMessage = err
        });
    }
};
CitasComponent = __decorate([
    Component({
        selector: 'app-citas',
        templateUrl: './citas.component.html',
        styleUrls: ['./citas.component.css']
    })
], CitasComponent);
export { CitasComponent };
//# sourceMappingURL=citas.component.js.map