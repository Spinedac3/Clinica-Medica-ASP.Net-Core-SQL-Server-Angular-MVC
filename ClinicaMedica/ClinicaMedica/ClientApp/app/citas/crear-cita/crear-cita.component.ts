import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpedienteService } from '../../shared/expediente.service';
import { Cita } from '../../shared/cita';
export class Doctor {
    name: string;
    code: number;
}
@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {
    pageTitle = "Crear Cita";
    doctores: Doctor[];

    selectedDoctor: Doctor = new Doctor();
    constructor(private router: Router, private expedienteService: ExpedienteService) {
        this.doctores = [
            { name: 'Carlos Hernandez', code: 1 },
            { name: 'Cristian Fernandez', code: 2 }
        ];
    }
    errorMessage: string;
    cita: Cita = new Cita();
    pacienteId: number;
    fechaCita: string;
    observaciones: string;
    crearPaciente() {
        this.cita.pacienteId = this.pacienteId;
        this.cita.fechacita = this.fechaCita;
        this.cita.doctorId = this.selectedDoctor.code;
        this.cita.observaciones = this.observaciones;
        this.expedienteService.crearCita(this.cita).subscribe(success => {
          if (success) {
              this.router.navigate(['citas']);
          }

      }, err => this.errorMessage = "No se pudo Guardar el Paciente");
  }

  ngOnInit() {
  }

}
