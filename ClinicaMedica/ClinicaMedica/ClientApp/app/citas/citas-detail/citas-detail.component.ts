import { Component, OnInit } from '@angular/core';
import { Cita } from 'ClientApp/app/shared/cita';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpedienteService } from 'ClientApp/app/shared/expediente.service';
import { Paciente } from '../../shared/paciente';
import { Doctor } from '../../shared/doctor';

@Component({
  selector: 'app-citas-detail',
  templateUrl: './citas-detail.component.html',
  styleUrls: ['./citas-detail.component.css']
})
export class CitasDetailComponent implements OnInit {
  pageTitle = 'Detalles de la cita del paciente: ';
  errorMessage = '';
  cita: Cita | undefined;
    paciente: Paciente | undefined;
    doctor: Doctor | undefined;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private expedienteService: ExpedienteService) { }

    getCita(id: number) {
      this.expedienteService.getCita(id).subscribe({
        next: cita => this.cita = cita,
        error: err => this.errorMessage = err
      });
    }
  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getCita(id);
    }
  }

    ngDoCheck() {
        this.expedienteService.getPaciente(this.cita.pacienteId).subscribe({
            next: paciente => {
                this.paciente = paciente
            }
        }
        );

        this.expedienteService.getDoctor(this.cita.doctorId).subscribe({
            next: doctor => {
                this.doctor = doctor
            }
        });


    }

  onBack(): void {
    this.router.navigate(['/citas']);
  }

}
