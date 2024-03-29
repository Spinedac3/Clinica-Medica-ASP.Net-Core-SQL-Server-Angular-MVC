import { Component, OnInit } from '@angular/core';
import { Laboratorio } from 'ClientApp/app/shared/laboratorio';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpedienteService } from 'ClientApp/app/shared/expediente.service';
import { Paciente } from '../../shared/paciente';

@Component({
  selector: 'app-laboratorio-detail',
  templateUrl: './laboratorio-detail.component.html',
  styleUrls: ['./laboratorio-detail.component.css']
})
export class LaboratorioDetailComponent implements OnInit {
  pageTitle = 'Detalles del Laboratorio ';
  errorMessage = '';
    laboratorio: Laboratorio | undefined;
    paciente: Paciente;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private expedienteService: ExpedienteService) { }

    getLaboratorio(id: number) {
      this.expedienteService.getLaboratorio(id).subscribe({
        next: laboratorio => this.laboratorio = laboratorio,
        error: err => this.errorMessage = err
      });
    }
  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getLaboratorio(id);
    }
  }
    ngDoCheck() {
        this.expedienteService.getPaciente(this.laboratorio.pacienteId).subscribe({
            next: paciente => {
                this.paciente = paciente
            }
        }
        );
    }
  onBack(): void {
    this.router.navigate(['/laboratorios']);
  }


}
