import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nota } from '../../shared/nota';
import { ExpedienteService } from '../../shared/expediente.service';
export class Doctor {
    name: string;
    code: number;
}
@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.css']
})
export class CrearNotaComponent implements OnInit {
    errorMessage: string;
    doctores: Doctor[];
    
    selectedDoctor: Doctor = new Doctor();
    pageTitle = "Crear Nota";
    pacienteId: number;
    pesokg: number;
    alturamts: number;
    pulso: number;
    presion: string;
    respiraxmin: number;
    temperatura: number;
    observaciones: string;
    nota: Nota = new Nota();
    constructor(private router: Router, private expedienteService: ExpedienteService) {
        this.doctores = [
            { name: 'Carlos Hernandez', code: 1 },
            { name: 'Cristian Fernandez', code: 2 }
        ];
    }
    crearPaciente() {
        this.nota.pacienteId = this.pacienteId;
        this.nota.pesokg = this.pesokg;
        this.nota.alturamts = this.alturamts;
        this.nota.pulso = this.pulso;
        this.nota.presion = this.presion;
        this.nota.respiraxmin = this.respiraxmin;
        this.nota.temperatura = this.temperatura;
        this.nota.doctorId = this.selectedDoctor.code;
        this.nota.observaciones = this.observaciones;
        this.expedienteService.crearNota(this.nota).subscribe(success => {
          if (success) {
              this.router.navigate(['notas']);
          }

      }, err => this.errorMessage = "No se pudo Guardar el Paciente");
  }

  ngOnInit() {
  }

}
