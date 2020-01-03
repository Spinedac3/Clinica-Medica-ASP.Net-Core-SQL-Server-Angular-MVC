import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DatosGeneralesComponent } from './datos-generales/datos-generales.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { PacienteDetailComponent } from './datos-generales/paciente-detail/paciente-detail.component';
import { CitasComponent } from './citas/citas.component';
import { CrearPacienteComponent } from './datos-generales/crear-paciente/crear-paciente.component';
import { CitasDetailComponent } from './citas/citas-detail/citas-detail.component';
import { CrearCitaComponent } from './citas/crear-cita/crear-cita.component';
import { NotasEnfermeraComponent } from './notas-enfermera/notas-enfermera.component';
import { NotaDetailComponent } from './notas-enfermera/nota-detail/nota-detail.component';
import { CrearNotaComponent } from './notas-enfermera/crear-nota/crear-nota.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { OrdenDetailComponent } from './ordenes/orden-detail/orden-detail.component';
import { CrearOrdenComponent } from './ordenes/crear-orden/crear-orden.component';
import { LaboratoriosComponent } from './laboratorios/laboratorios.component';
import { LaboratorioDetailComponent } from './laboratorios/laboratorio-detail/laboratorio-detail.component';
import { CrearLaboComponent } from './laboratorios/crear-labo/crear-labo.component';
import { EvolucionComponent } from './evolucion/evolucion.component';
import { EvolucionDetalleComponent } from './evolucion/evolucion-detalle/evolucion-detalle.component';
import { CrearEvolucionComponent } from './evolucion/crear-evolucion/crear-evolucion.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DatosGeneralesComponent,
    PacienteDetailComponent,
    CitasComponent,
    CrearPacienteComponent,
    CitasDetailComponent,
    CrearCitaComponent,
    NotasEnfermeraComponent,
    NotaDetailComponent,
    CrearNotaComponent,
    OrdenesComponent,
    OrdenDetailComponent,
    CrearOrdenComponent,
    LaboratoriosComponent,
    LaboratorioDetailComponent,
    CrearLaboComponent,
    EvolucionComponent,
    EvolucionDetalleComponent,
    CrearEvolucionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
      FormsModule,
      DropdownModule,
      BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: "login", component: LoginComponent},
      { path: "datosGenerales", component: DatosGeneralesComponent},
      { path: "datosGenerales/:id", component: PacienteDetailComponent},
      { path: "crearPaciente", component: CrearPacienteComponent},
      { path: "citas", component: CitasComponent},
      { path: "citas/:id", component: CitasDetailComponent},
      { path: "crearCita", component: CrearCitaComponent},
      { path: "notas", component: NotasEnfermeraComponent},
      { path: "notas/:id", component: NotaDetailComponent},
      { path: "crearNota", component: CrearNotaComponent},
      { path: "ordenes", component: OrdenesComponent},
      { path: "ordenes/:id", component: OrdenDetailComponent},
      { path: "crearOrden", component: CrearOrdenComponent},
      { path: "laboratorios", component: LaboratoriosComponent},
      { path: "laboratorios/:id", component: LaboratorioDetailComponent},
      { path: "crearLabo", component: CrearLaboComponent},
      { path: "evoluciones",component: EvolucionComponent},
      { path: "evoluciones/:id", component: EvolucionDetalleComponent},
      { path: "crearEvolucion", component: CrearEvolucionComponent},
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ])
  ],
    providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
