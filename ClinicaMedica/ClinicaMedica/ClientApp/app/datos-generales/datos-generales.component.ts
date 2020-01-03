import { Component, OnInit } from '@angular/core';
import { Paciente } from '../shared/paciente';
import { ExpedienteService } from '../shared/expediente.service';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css']
})
export class DatosGeneralesComponent implements OnInit {

  constructor(private expedienteService: ExpedienteService) { }
  pageTitle = "Datos Generales";

  errorMessage = '';
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredPacientes = this.listFilter ? this.performFilter(this.listFilter) : this.pacientes;
  }

  filteredPacientes: Paciente[] = [];
  pacientes: Paciente[] = [];

  performFilter(filterBy: string): Paciente[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.pacientes.filter((paciente: Paciente) =>
      paciente.nombre.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


  ngOnInit() {
    this.expedienteService.getPacientes().subscribe({
      next: pacientes => {
        this.pacientes = pacientes;
        this.filteredPacientes = this.pacientes;
      },
      error: err => this.errorMessage = err
    });
    for (var i = 0; i < this.pacientes.length; i++){
         this.expedienteService.paciente.push(this.pacientes[i]);
    }
    console.log( this.expedienteService.paciente);
  }

}
