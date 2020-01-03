import { Component, OnInit } from '@angular/core';
import { Nota } from 'ClientApp/app/shared/nota';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpedienteService } from 'ClientApp/app/shared/expediente.service';
import { Paciente } from '../../shared/paciente';
import { Doctor } from '../../shared/doctor';


@Component({
  selector: 'app-nota-detail',
  templateUrl: './nota-detail.component.html',
  styleUrls: ['./nota-detail.component.css']
})
export class NotaDetailComponent implements OnInit {
  pageTitle = 'Detalles de la Nota ';
  errorMessage = '';
    nota: Nota | undefined;
    paciente: Paciente;
    doctor: Doctor;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private expedienteService: ExpedienteService) { }

    getNota(id: number) {
      this.expedienteService.getNota(id).subscribe({
        next: nota => this.nota = nota,
        error: err => this.errorMessage = err
      });
    }
  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getNota(id);
    }
  }

    ngDoCheck() {
        this.expedienteService.getPaciente(this.nota.pacienteId).subscribe({
            next: paciente => {
                this.paciente = paciente
            }
        }
        );
        this.expedienteService.getDoctor(this.nota.doctorId).subscribe({
            next: doctor => {
                this.doctor = doctor
            }
        })

    }
  onBack(): void {
    this.router.navigate(['/notas']);
  }

}
