import { Component, OnInit } from '@angular/core';
import { Paciente } from 'ClientApp/app/shared/paciente';
import { ExpedienteService } from 'ClientApp/app/shared/expediente.service';
import { Router } from '@angular/router';
export class Enfermera {
    name: string;
    code: number;
}
@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {
    enfermeras: Enfermera[];

    selectedEnfermera: Enfermera = new Enfermera();
    pageTitle = "Crear Paciente";
    nombre: string;
    apellido: string;
    dpi: number;
    fechaNacimiento: string;
    edad: number;
    sexo: string;
    profesion: string;
    direccion: string;
    contactoEmergencia: number;
    telefenoContacto: number;
    parentescocontacto: number;
    enfermeraAsignadaId: number;
    errorMessage: string;
    paciente: Paciente = new Paciente(); 
  constructor(private expedienteService: ExpedienteService, 
      private router: Router) {
      this.enfermeras = [
          { name: 'Wilson Luna', code: 1 },
          { name: 'Aylin Garcia', code: 2  }
      ];
  }
 
    
    crearPaciente() {
        this.paciente.nombre = this.nombre;
        this.paciente.apellido = this.apellido;
        this.paciente.dpi = this.dpi;
        this.paciente.fechaNacimiento = this.fechaNacimiento;
        this.paciente.edad = this.edad;
        this.paciente.sexo = this.sexo;
        this.paciente.profesion = this.profesion;
        this.paciente.direccion = this.direccion;
        this.paciente.contactoEmergencia = this.contactoEmergencia;
        this.paciente.telefenoContacto = this.telefenoContacto;
        this.paciente.parentescocontacto = this.parentescocontacto;
        this.paciente.enfermeraAsignadaId = this.selectedEnfermera.code;
        this.expedienteService.crearPaciente(this.paciente).subscribe(success => {
            if (success) {
                this.router.navigate(['datosGenerales']);
            }

        }, err => this.errorMessage = "No se pudo Guardar el Paciente");
    }


  
  ngOnInit() {

 
  }

}
