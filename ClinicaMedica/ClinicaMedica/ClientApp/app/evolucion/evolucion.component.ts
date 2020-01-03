import { Component, OnInit } from '@angular/core';
import { ExpedienteService } from '../shared/expediente.service';
import { Evolucion } from '../shared/evolucion';

@Component({
  selector: 'app-evolucion',
  templateUrl: './evolucion.component.html',
  styleUrls: ['./evolucion.component.css']
})
export class EvolucionComponent implements OnInit {
  constructor(private expedienteService: ExpedienteService) { }
  pageTitle = "Evoluciones";

  errorMessage = '';
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredEvo = this.listFilter ? this.performFilter(this.listFilter) : this.evoluciones;
  }

  filteredEvo: Evolucion[] = [];
  evoluciones: Evolucion[] = [];

  performFilter(filterBy: string): Evolucion[] {
    filterBy = filterBy.toLocaleLowerCase();
      return this.evoluciones.filter((evoluciones: Evolucion) =>
          evoluciones.resultadolab.toLocaleLowerCase().indexOf(filterBy) !== -1);
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

}
