import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(expedienteService, router) {
        this.expedienteService = expedienteService;
        this.router = router;
        this.errorMessage = "";
        this.creds = {
            username: "",
            password: ""
        };
    }
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
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map