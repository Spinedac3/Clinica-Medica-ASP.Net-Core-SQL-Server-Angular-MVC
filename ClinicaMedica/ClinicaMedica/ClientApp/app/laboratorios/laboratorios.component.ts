import { Component, OnInit } from '@angular/core';
import { ExpedienteService } from '../shared/expediente.service';
import { Laboratorio } from '../shared/laboratorio';

@Component({
  selector: 'app-laboratorios',
  templateUrl: './laboratorios.component.html',
  styleUrls: ['./laboratorios.component.css']
})
export class LaboratoriosComponent implements OnInit {

  constructor(private expedienteService: ExpedienteService) { }
  pageTitle = "Laboratorios";

  errorMessage = '';
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredLabos = this.listFilter ? this.performFilter(this.listFilter) : this.laboratorios;
  }

  filteredLabos: Laboratorio[] = [];
  laboratorios: Laboratorio[] = [];

  performFilter(filterBy: string): Laboratorio[] {
    filterBy = filterBy.toLocaleLowerCase();
      return this.laboratorios.filter((ordenes: Laboratorio) =>
          ordenes.tipolabo.toLocaleLowerCase().indexOf(filterBy) !== -1);
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

}
