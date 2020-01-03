import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpedienteService } from '../../shared/expediente.service';
import { Evolucion } from '../../shared/evolucion';

@Component({
  selector: 'app-crear-evolucion',
  templateUrl: './crear-evolucion.component.html',
  styleUrls: ['./crear-evolucion.component.css']
})
export class CrearEvolucionComponent implements OnInit {
    errorMessage: string;
    pacienteId: number;
    resultadolab: string;
    analisis: string;
    observaciones: string;
    evolucion: Evolucion = new Evolucion();
    constructor(private router: Router, private expedienteService: ExpedienteService) { }
    crearEvolucion() {
        this.evolucion.pacienteId = this.pacienteId;
        this.evolucion.resultadolab = this.resultadolab;
        this.evolucion.analisis = this.analisis;
        this.evolucion.observaciones = this.observaciones;
        this.expedienteService.crearEvolucion(this.evolucion).subscribe(success => {
            if (success) {
                this.router.navigate(['evoluciones']);
            }

        }, err => this.errorMessage = "No se pudo Guardar el Paciente");
    }
  ngOnInit() {
  }

}
