import { Component, OnInit } from '@angular/core';
import { ExpedienteService } from '../shared/expediente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    errorMessage: string = "";
    public creds = {
        username: "",
        password: ""
    };
    constructor(private expedienteService: ExpedienteService,private router: Router) { }
    onLogin() {
        this.errorMessage = "";
        this.expedienteService.login(this.creds)
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["datosGenerales"]);
                }
            }, err => this.errorMessage = "Failed to login");
    }
    ngOnInit() {
    }

}
