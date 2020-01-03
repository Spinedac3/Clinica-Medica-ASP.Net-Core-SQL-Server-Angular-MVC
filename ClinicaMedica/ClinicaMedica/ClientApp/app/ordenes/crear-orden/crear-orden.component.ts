import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Router } from '@angular/router';
import { ExpedienteService } from '../../shared/expediente.service';
import { Orden } from '../../shared/orden';

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent implements OnInit {
    pageTitle = "Crear Orden";
    errorMessage: string;
    pacienteId: number;
    options: SelectItem[];
    selectedOption: string;
    dosis: string;
    observaciones: string;
    orden: Orden = new Orden();
    constructor(private router: Router, private expedienteService: ExpedienteService) {
        this.options = [
            { label: 'Ibuprofeno', value: 'Ibuprofeno' },
            { label: 'Acetaminofem', value: 'Acetaminofem' },
            { label: 'Cardio Aspirina', value: 'Cardio Aspirina' }
        ];
    }

    crearOrden() {
        this.orden.pacienteId = this.pacienteId;
        this.orden.medicamento = this.selectedOption;
        this.orden.dosis = this.dosis;
        this.orden.observaciones = this.observaciones;
        this.expedienteService.crearOrden(this.orden).subscribe(success => {
            if (success) {
                this.router.navigate(['ordenes']);
            }

        }, err => this.errorMessage = "No se pudo Guardar el Paciente");
    }
  ngOnInit() {
  }

}
