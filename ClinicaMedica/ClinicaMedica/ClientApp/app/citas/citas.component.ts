import { Component, OnInit } from '@angular/core';
import { ExpedienteService } from '../shared/expediente.service';
import { Cita } from '../shared/cita';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  constructor(private expedienteService: ExpedienteService) { }
  pageTitle = "Citas";

  errorMessage = '';
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCitas = this.listFilter ? this.performFilter(this.listFilter) : this.citas;
  }

  filteredCitas: Cita[] = [];
  citas: Cita[] = [];

  performFilter(filterBy: string): Cita[] {
    filterBy = filterBy.toLocaleLowerCase();
      return this.citas.filter((cita: Cita) =>
          cita.fechacita.toLocaleLowerCase().indexOf(filterBy) !== -1);
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

   
}
