import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
let ExpedienteService = class ExpedienteService {
    constructor(http) {
        this.http = http;
        this.pacientesUrl = "/api/paciente";
        this.citasUrl = "/api/cita";
        this.notasUrl = "/api/notasenfermera";
        this.ordenesUrl = "/api/ordenes";
        this.laboratoriosUrl = "/api/laboratorio";
        this.evolucionesUrl = "/api/evolucion";
        this.token = "";
        this.tokenExpiration = new Date();
        this.paciente = [];
    }
    getPacientes() {
        return this.http.get(this.pacientesUrl, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data), this.paciente = data, console.log(this.paciente))), catchError(this.handleError));
    }
    getPaciente(id) {
        return this.getPacientes()
            .pipe(map((paciente) => paciente.find(p => p.id === id)));
    }
    getDoctor(id) {
        return this.http.get("/api/doctor/" + id)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    getCitas() {
        return this.http.get(this.citasUrl, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    getCita(id) {
        return this.getCitas()
            .pipe(map((cita) => cita.find(p => p.id === id)));
    }
    getNotas() {
        return this.http.get(this.notasUrl, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    getNota(id) {
        return this.getNotas()
            .pipe(map((nota) => nota.find(p => p.id === id)));
    }
    getOrdenes() {
        return this.http.get(this.ordenesUrl, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    getOrden(id) {
        return this.getOrdenes()
            .pipe(map((orden) => orden.find(p => p.id === id)));
    }
    getLaboratorios() {
        return this.http.get(this.laboratoriosUrl, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    getLaboratorio(id) {
        return this.getLaboratorios()
            .pipe(map((laboratorio) => laboratorio.find(p => p.id === id)));
    }
    getEvoluciones() {
        return this.http.get(this.evolucionesUrl, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    getEvolucion(id) {
        return this.getEvoluciones()
            .pipe(map((evolucion) => evolucion.find(p => p.id === id)));
    }
    get loginRequired() {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }
    login(creds) {
        return this.http.post("/user/CreateToken", creds)
            .pipe(map((response) => {
            let tokenInfo = response;
            this.token = tokenInfo.token;
            this.tokenExpiration = tokenInfo.expiration;
            return true;
        }));
    }
    getEnfermera(id) {
        return this.http.get("/api/enfermera/" + id)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    crearPaciente(paciente) {
        return this.http.post("/api/paciente", paciente, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(map((response) => {
            return true;
        }));
    }
    crearCita(cita) {
        return this.http.post("/api/cita", cita, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(map((response) => {
            return true;
        }));
    }
    crearNota(nota) {
        return this.http.post("/api/notasenfermera", nota, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(map((response) => {
            return true;
        }));
    }
    crearOrden(orden) {
        return this.http.post("/api/ordenes", orden, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(map((response) => {
            return true;
        }));
    }
    crearLaboratorio(laboratorio) {
        return this.http.post("/api/laboratorio", laboratorio, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(map((response) => {
            return true;
        }));
    }
    crearEvolucion(evolucion) {
        return this.http.post("/api/laboratorio", evolucion, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(map((response) => {
            return true;
        }));
    }
    agregarPaciente(paciente) {
        this.paciente.push(paciente);
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
};
ExpedienteService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ExpedienteService);
export { ExpedienteService };
//# sourceMappingURL=expediente.service.js.map