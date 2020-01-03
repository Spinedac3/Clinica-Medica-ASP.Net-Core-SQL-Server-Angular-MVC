import { Component, OnInit } from '@angular/core';
import { ExpedienteService } from '../shared/expediente.service';
import { Nota } from '../shared/nota';

@Component({
  selector: 'app-notas-enfermera',
  templateUrl: './notas-enfermera.component.html',
  styleUrls: ['./notas-enfermera.component.css']
})
export class NotasEnfermeraComponent implements OnInit {

  constructor(private expedienteService: ExpedienteService) { }
  pageTitle = "Notas Enfermera";

  errorMessage = '';
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredNotas = this.listFilter ? this.performFilter(this.listFilter) : this.notas;
  }

  filteredNotas: Nota[] = [];
  notas: Nota[] = [];

  performFilter(filterBy: string): Nota[] {
    filterBy = filterBy.toLocaleLowerCase();
      return this.notas.filter((notas: Nota) =>
          notas.pacienteId.toString().toLocaleLowerCase().indexOf(filterBy) !== -1);
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

}
