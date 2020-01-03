import { Component, OnInit } from '@angular/core';
import { Orden } from 'ClientApp/app/shared/orden';
import { ExpedienteService } from 'ClientApp/app/shared/expediente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Paciente } from '../../shared/paciente';

@Component({
  selector: 'app-orden-detail',
  templateUrl: './orden-detail.component.html',
  styleUrls: ['./orden-detail.component.css']
})
export class OrdenDetailComponent implements OnInit {
  pageTitle = 'Detalles de la Orden ';
  errorMessage = '';
    orden: Orden | undefined;
    paciente: Paciente;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private expedienteService: ExpedienteService) { }

    getOrden(id: number) {
      this.expedienteService.getOrden(id).subscribe({
        next: orden => this.orden = orden,
        error: err => this.errorMessage = err
      });
    }
  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
        this.getOrden(id);

    }
  }

    ngDoCheck() {
        this.expedienteService.getPaciente(this.orden.pacienteId).subscribe({
            next: paciente => {
                this.paciente = paciente
            }
        }
        );
    }
  onBack(): void {
    this.router.navigate(['/ordenes']);
  }

}
