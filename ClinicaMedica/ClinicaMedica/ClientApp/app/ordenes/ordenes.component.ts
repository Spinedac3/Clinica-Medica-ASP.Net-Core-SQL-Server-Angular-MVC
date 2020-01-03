import { Component, OnInit } from '@angular/core';
import { ExpedienteService } from '../shared/expediente.service';
import { Orden } from '../shared/orden';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  constructor(private expedienteService: ExpedienteService) { }
  pageTitle = "Ordenes";

  errorMessage = '';
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredOrdenes = this.listFilter ? this.performFilter(this.listFilter) : this.orden;
  }

  filteredOrdenes: Orden[] = [];
  orden: Orden[] = [];

  performFilter(filterBy: string): Orden[] {
    filterBy = filterBy.toLocaleLowerCase();
      return this.orden.filter((ordenes: Orden) =>
          ordenes.medicamento.toLocaleLowerCase().indexOf(filterBy) !== -1);
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

}
