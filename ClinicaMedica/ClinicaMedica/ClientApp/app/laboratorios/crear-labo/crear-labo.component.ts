import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpedienteService } from '../../shared/expediente.service';
import { Laboratorio } from '../../shared/laboratorio';

@Component({
  selector: 'app-crear-labo',
  templateUrl: './crear-labo.component.html',
  styleUrls: ['./crear-labo.component.css']
})
export class CrearLaboComponent implements OnInit {
    errorMessage = "";
    pacienteId: number;
    tipoLabo: string;
    laboratorio: Laboratorio = new Laboratorio();
    constructor(private router: Router, private expedienteService: ExpedienteService) { }
    crearLabo() {
        this.laboratorio.pacienteId = this.pacienteId;
        this.laboratorio.tipolabo = this.tipoLabo;
        this.expedienteService.crearLaboratorio(this.laboratorio).subscribe(success => {
            if (success) {
                this.router.navigate(['laboratorios']);
            }

        }, err => this.errorMessage = "No se pudo Guardar el Paciente");
    }
  ngOnInit() {
  }

}
