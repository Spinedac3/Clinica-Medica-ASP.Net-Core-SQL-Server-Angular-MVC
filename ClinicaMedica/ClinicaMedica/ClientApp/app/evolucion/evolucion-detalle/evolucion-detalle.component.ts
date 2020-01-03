import { Component, OnInit } from '@angular/core';
import { Evolucion } from 'ClientApp/app/shared/evolucion';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpedienteService } from 'ClientApp/app/shared/expediente.service';
import { Paciente } from '../../shared/paciente';

@Component({
  selector: 'app-evolucion-detalle',
  templateUrl: './evolucion-detalle.component.html',
  styleUrls: ['./evolucion-detalle.component.css']
})
export class EvolucionDetalleComponent implements OnInit {
  pageTitle = 'Detalles de la Evolución ';
  errorMessage = '';
    evolucion: Evolucion | undefined;

    paciente: Paciente;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private expedienteService: ExpedienteService) { }

    getEvolucion(id: number) {
      this.expedienteService.getEvolucion(id).subscribe({
        next: evolucion => this.evolucion = evolucion,
        error: err => this.errorMessage = err
      });
    }
  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getEvolucion(id);
    }
  }

    ngDoCheck() {
        this.expedienteService.getPaciente(this.evolucion.pacienteId).subscribe({
            next: paciente => {
                this.paciente = paciente
            }
        }
        );
    }

  onBack(): void {
    this.router.navigate(['/evoluciones']);
  }
}
