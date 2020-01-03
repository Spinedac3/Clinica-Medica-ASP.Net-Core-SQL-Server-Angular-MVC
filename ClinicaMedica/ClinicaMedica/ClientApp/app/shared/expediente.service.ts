import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Paciente } from './paciente';
import { Cita } from './cita';
import { Nota } from './nota';
import { Orden } from './orden';
import { Laboratorio } from './laboratorio';
import { Evolucion } from './evolucion';
import { Enfermera } from './enfermera';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {
    private pacientesUrl = "/api/paciente";
    private citasUrl = "/api/cita";
    private notasUrl = "/api/notasenfermera";
    private ordenesUrl = "/api/ordenes";
    private laboratoriosUrl = "/api/laboratorio";
    private evolucionesUrl = "/api/evolucion";
    constructor(private http: HttpClient) { }

    private token: string = "";
    private tokenExpiration: Date = new Date();
    paciente: Paciente[] = [];
    pacienteDetail: Paciente;
  getPacientes(): Observable<Paciente[]>{
      return this.http.get<Paciente[]>(this.pacientesUrl, {
          headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
      })
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data), this.paciente = data, console.log(this.paciente))),
      catchError(this.handleError)
    );
  }

  getPaciente(id: number): Observable<Paciente | undefined> {
    return this.getPacientes()
    .pipe(
      map((paciente: Paciente[]) => paciente.find(p => p.id === id))
    );
  }

    getDoctor(id: number): Observable<Doctor> {
        return this.http.get<Doctor>("/api/doctor/" + id)
            .pipe(
                tap(data => console.log('All: ' + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

  getCitas(): Observable<Cita[]>{
      return this.http.get<Cita[]>(this.citasUrl, {
          headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
      })
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getCita(id: number): Observable<Cita | undefined> {
    return this.getCitas()
        .pipe(
            map((cita: Cita[]) => cita.find(p => p.id === id))
    );
  }

  getNotas(): Observable<Nota[]>{
      return this.http.get<Nota[]>(this.notasUrl, {
          headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
      })
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getNota(id: number): Observable<Nota | undefined> {
    return this.getNotas()
    .pipe(
      map((nota: Nota[]) => nota.find(p => p.id === id))
    );
  }

  getOrdenes(): Observable<Orden[]>{
      return this.http.get<Orden[]>(this.ordenesUrl,
          {
              headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
          })
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getOrden(id: number): Observable<Orden | undefined> {
    return this.getOrdenes()
    .pipe(
      map((orden: Orden[]) => orden.find(p => p.id === id))
    );
  }

  getLaboratorios(): Observable<Laboratorio[]>{
      return this.http.get<Laboratorio[]>(this.laboratoriosUrl,
          {
              headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
          })
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getLaboratorio(id: number): Observable<Laboratorio | undefined> {
    return this.getLaboratorios()
    .pipe(
      map((laboratorio: Laboratorio[]) => laboratorio.find(p => p.id=== id))
    );
  }

  getEvoluciones(): Observable<Evolucion[]>{
      return this.http.get<Evolucion[]>(this.evolucionesUrl,
          {
              headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
          })
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getEvolucion(id: number): Observable<Evolucion| undefined> {
    return this.getEvoluciones()
    .pipe(
      map((evolucion: Evolucion[]) => evolucion.find(p => p.id=== id))
    );
  }
    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }

    public login(creds) {
        return this.http.post("/user/CreateToken", creds)
            .pipe(
                map((response: any) => {
                    let tokenInfo = response;
                    this.token = tokenInfo.token;
                    this.tokenExpiration = tokenInfo.expiration;
                    return true;
                }));
    }


    getEnfermera(id: number): Observable<Enfermera> {
        return this.http.get<Enfermera>("/api/enfermera/" + id)
            .pipe(
                tap(data => console.log('All: ' + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    public crearPaciente(paciente: Paciente) {
        return this.http.post("/api/paciente", paciente, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(
                map((response: any) => {
                    return true;
                }));
    }

    public crearCita(cita: Cita) {
        return this.http.post("/api/cita", cita, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(
                map((response: any) => {
                    return true;
                }));
    }

    public crearNota(nota: Nota) {
        return this.http.post("/api/notasenfermera", nota, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(
                map((response: any) => {
                    return true;
                }));
    }

    public crearOrden(orden: Orden) {
        return this.http.post("/api/ordenes", orden, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(
                map((response: any) => {
                    return true;
                }));
    }

    public crearLaboratorio(laboratorio: Laboratorio) {
        return this.http.post("/api/laboratorio", laboratorio, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(
                map((response: any) => {
                    return true;
                }));
    }

    public crearEvolucion(evolucion: Evolucion) {
        return this.http.post("/api/laboratorio", evolucion, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(
                map((response: any) => {
                    return true;
                }));
    }
    public agregarPaciente(paciente: Paciente) {
    this.paciente.push(paciente);
  }
  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
