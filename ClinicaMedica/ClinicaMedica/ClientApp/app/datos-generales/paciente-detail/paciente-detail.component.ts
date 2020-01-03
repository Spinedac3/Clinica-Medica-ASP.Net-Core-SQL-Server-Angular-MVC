import { Component, OnInit, DoCheck } from '@angular/core';
import { Paciente } from 'ClientApp/app/shared/paciente';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpedienteService } from 'ClientApp/app/shared/expediente.service';
import { Enfermera } from '../../shared/enfermera';

@Component({
    selector: 'app-paciente-detail',
    templateUrl: './paciente-detail.component.html',
    styleUrls: ['./paciente-detail.component.css']
})
export class PacienteDetailComponent implements OnInit, DoCheck {
    pageTitle = 'Detalles del Paciente';
    errorMessage = '';
    paciente: Paciente | undefined;
    idEnfermera: number;
    enfermera: Enfermera;
    constructor(private route: ActivatedRoute,
        private router: Router,
        private expedienteService: ExpedienteService) {


    }

    getPaciente(id: number) {
        this.expedienteService.getPaciente(id).subscribe({
            next: paciente => this.paciente = paciente,
            error: err => this.errorMessage = err,
        }
        );
      
    }
    ngOnInit() {
        const param = this.route.snapshot.paramMap.get('id');
        if (param) {
            const id = +param;
            this.getPaciente(id);
            console.log("hola");


        }
    }
    ngDoCheck() {
        this.expedienteService.getEnfermera(this.paciente.enfermeraAsignadaId).subscribe({
            next: enfermera => {
                this.enfermera = enfermera
            }
        }
        );
        
     
    }
  onBack(): void {
    this.router.navigate(['/datosGenerales']);
  }
}
