(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./ClientApp/app/app.component.css": 
        /*!*****************************************!*\
          !*** ./ClientApp/app/app.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./ClientApp/app/app.component.ts": 
        /*!****************************************!*\
          !*** ./ClientApp/app/app.component.ts ***!
          \****************************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'clinicaMedicaFront';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./ClientApp/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/app.module.ts": 
        /*!*************************************!*\
          !*** ./ClientApp/app/app.module.ts ***!
          \*************************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./ClientApp/app/app.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./ClientApp/app/login/login.component.ts");
            /* harmony import */ var _datos_generales_datos_generales_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datos-generales/datos-generales.component */ "./ClientApp/app/datos-generales/datos-generales.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _datos_generales_paciente_detail_paciente_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datos-generales/paciente-detail/paciente-detail.component */ "./ClientApp/app/datos-generales/paciente-detail/paciente-detail.component.ts");
            /* harmony import */ var _citas_citas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./citas/citas.component */ "./ClientApp/app/citas/citas.component.ts");
            /* harmony import */ var _datos_generales_crear_paciente_crear_paciente_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./datos-generales/crear-paciente/crear-paciente.component */ "./ClientApp/app/datos-generales/crear-paciente/crear-paciente.component.ts");
            /* harmony import */ var _citas_citas_detail_citas_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./citas/citas-detail/citas-detail.component */ "./ClientApp/app/citas/citas-detail/citas-detail.component.ts");
            /* harmony import */ var _citas_crear_cita_crear_cita_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./citas/crear-cita/crear-cita.component */ "./ClientApp/app/citas/crear-cita/crear-cita.component.ts");
            /* harmony import */ var _notas_enfermera_notas_enfermera_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notas-enfermera/notas-enfermera.component */ "./ClientApp/app/notas-enfermera/notas-enfermera.component.ts");
            /* harmony import */ var _notas_enfermera_nota_detail_nota_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./notas-enfermera/nota-detail/nota-detail.component */ "./ClientApp/app/notas-enfermera/nota-detail/nota-detail.component.ts");
            /* harmony import */ var _notas_enfermera_crear_nota_crear_nota_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./notas-enfermera/crear-nota/crear-nota.component */ "./ClientApp/app/notas-enfermera/crear-nota/crear-nota.component.ts");
            /* harmony import */ var _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ordenes/ordenes.component */ "./ClientApp/app/ordenes/ordenes.component.ts");
            /* harmony import */ var _ordenes_orden_detail_orden_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ordenes/orden-detail/orden-detail.component */ "./ClientApp/app/ordenes/orden-detail/orden-detail.component.ts");
            /* harmony import */ var _ordenes_crear_orden_crear_orden_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ordenes/crear-orden/crear-orden.component */ "./ClientApp/app/ordenes/crear-orden/crear-orden.component.ts");
            /* harmony import */ var _laboratorios_laboratorios_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./laboratorios/laboratorios.component */ "./ClientApp/app/laboratorios/laboratorios.component.ts");
            /* harmony import */ var _laboratorios_laboratorio_detail_laboratorio_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./laboratorios/laboratorio-detail/laboratorio-detail.component */ "./ClientApp/app/laboratorios/laboratorio-detail/laboratorio-detail.component.ts");
            /* harmony import */ var _laboratorios_crear_labo_crear_labo_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./laboratorios/crear-labo/crear-labo.component */ "./ClientApp/app/laboratorios/crear-labo/crear-labo.component.ts");
            /* harmony import */ var _evolucion_evolucion_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./evolucion/evolucion.component */ "./ClientApp/app/evolucion/evolucion.component.ts");
            /* harmony import */ var _evolucion_evolucion_detalle_evolucion_detalle_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./evolucion/evolucion-detalle/evolucion-detalle.component */ "./ClientApp/app/evolucion/evolucion-detalle/evolucion-detalle.component.ts");
            /* harmony import */ var _evolucion_crear_evolucion_crear_evolucion_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./evolucion/crear-evolucion/crear-evolucion.component */ "./ClientApp/app/evolucion/crear-evolucion/crear-evolucion.component.ts");
            /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
            /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/ __webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_26__);
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                        _datos_generales_datos_generales_component__WEBPACK_IMPORTED_MODULE_6__["DatosGeneralesComponent"],
                        _datos_generales_paciente_detail_paciente_detail_component__WEBPACK_IMPORTED_MODULE_9__["PacienteDetailComponent"],
                        _citas_citas_component__WEBPACK_IMPORTED_MODULE_10__["CitasComponent"],
                        _datos_generales_crear_paciente_crear_paciente_component__WEBPACK_IMPORTED_MODULE_11__["CrearPacienteComponent"],
                        _citas_citas_detail_citas_detail_component__WEBPACK_IMPORTED_MODULE_12__["CitasDetailComponent"],
                        _citas_crear_cita_crear_cita_component__WEBPACK_IMPORTED_MODULE_13__["CrearCitaComponent"],
                        _notas_enfermera_notas_enfermera_component__WEBPACK_IMPORTED_MODULE_14__["NotasEnfermeraComponent"],
                        _notas_enfermera_nota_detail_nota_detail_component__WEBPACK_IMPORTED_MODULE_15__["NotaDetailComponent"],
                        _notas_enfermera_crear_nota_crear_nota_component__WEBPACK_IMPORTED_MODULE_16__["CrearNotaComponent"],
                        _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_17__["OrdenesComponent"],
                        _ordenes_orden_detail_orden_detail_component__WEBPACK_IMPORTED_MODULE_18__["OrdenDetailComponent"],
                        _ordenes_crear_orden_crear_orden_component__WEBPACK_IMPORTED_MODULE_19__["CrearOrdenComponent"],
                        _laboratorios_laboratorios_component__WEBPACK_IMPORTED_MODULE_20__["LaboratoriosComponent"],
                        _laboratorios_laboratorio_detail_laboratorio_detail_component__WEBPACK_IMPORTED_MODULE_21__["LaboratorioDetailComponent"],
                        _laboratorios_crear_labo_crear_labo_component__WEBPACK_IMPORTED_MODULE_22__["CrearLaboComponent"],
                        _evolucion_evolucion_component__WEBPACK_IMPORTED_MODULE_23__["EvolucionComponent"],
                        _evolucion_evolucion_detalle_evolucion_detalle_component__WEBPACK_IMPORTED_MODULE_24__["EvolucionDetalleComponent"],
                        _evolucion_crear_evolucion_crear_evolucion_component__WEBPACK_IMPORTED_MODULE_25__["CrearEvolucionComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                        primeng_dropdown__WEBPACK_IMPORTED_MODULE_26__["DropdownModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                            { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
                            { path: "datosGenerales", component: _datos_generales_datos_generales_component__WEBPACK_IMPORTED_MODULE_6__["DatosGeneralesComponent"] },
                            { path: "datosGenerales/:id", component: _datos_generales_paciente_detail_paciente_detail_component__WEBPACK_IMPORTED_MODULE_9__["PacienteDetailComponent"] },
                            { path: "crearPaciente", component: _datos_generales_crear_paciente_crear_paciente_component__WEBPACK_IMPORTED_MODULE_11__["CrearPacienteComponent"] },
                            { path: "citas", component: _citas_citas_component__WEBPACK_IMPORTED_MODULE_10__["CitasComponent"] },
                            { path: "citas/:id", component: _citas_citas_detail_citas_detail_component__WEBPACK_IMPORTED_MODULE_12__["CitasDetailComponent"] },
                            { path: "crearCita", component: _citas_crear_cita_crear_cita_component__WEBPACK_IMPORTED_MODULE_13__["CrearCitaComponent"] },
                            { path: "notas", component: _notas_enfermera_notas_enfermera_component__WEBPACK_IMPORTED_MODULE_14__["NotasEnfermeraComponent"] },
                            { path: "notas/:id", component: _notas_enfermera_nota_detail_nota_detail_component__WEBPACK_IMPORTED_MODULE_15__["NotaDetailComponent"] },
                            { path: "crearNota", component: _notas_enfermera_crear_nota_crear_nota_component__WEBPACK_IMPORTED_MODULE_16__["CrearNotaComponent"] },
                            { path: "ordenes", component: _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_17__["OrdenesComponent"] },
                            { path: "ordenes/:id", component: _ordenes_orden_detail_orden_detail_component__WEBPACK_IMPORTED_MODULE_18__["OrdenDetailComponent"] },
                            { path: "crearOrden", component: _ordenes_crear_orden_crear_orden_component__WEBPACK_IMPORTED_MODULE_19__["CrearOrdenComponent"] },
                            { path: "laboratorios", component: _laboratorios_laboratorios_component__WEBPACK_IMPORTED_MODULE_20__["LaboratoriosComponent"] },
                            { path: "laboratorios/:id", component: _laboratorios_laboratorio_detail_laboratorio_detail_component__WEBPACK_IMPORTED_MODULE_21__["LaboratorioDetailComponent"] },
                            { path: "crearLabo", component: _laboratorios_crear_labo_crear_labo_component__WEBPACK_IMPORTED_MODULE_22__["CrearLaboComponent"] },
                            { path: "evoluciones", component: _evolucion_evolucion_component__WEBPACK_IMPORTED_MODULE_23__["EvolucionComponent"] },
                            { path: "evoluciones/:id", component: _evolucion_evolucion_detalle_evolucion_detalle_component__WEBPACK_IMPORTED_MODULE_24__["EvolucionDetalleComponent"] },
                            { path: "crearEvolucion", component: _evolucion_crear_evolucion_crear_evolucion_component__WEBPACK_IMPORTED_MODULE_25__["CrearEvolucionComponent"] },
                            { path: '', redirectTo: 'login', pathMatch: 'full' },
                            { path: '**', redirectTo: 'login', pathMatch: 'full' }
                        ])
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./ClientApp/app/citas/citas-detail/citas-detail.component.css": 
        /*!*********************************************************************!*\
          !*** ./ClientApp/app/citas/citas-detail/citas-detail.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NpdGFzL2NpdGFzLWRldGFpbC9jaXRhcy1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./ClientApp/app/citas/citas-detail/citas-detail.component.ts": 
        /*!********************************************************************!*\
          !*** ./ClientApp/app/citas/citas-detail/citas-detail.component.ts ***!
          \********************************************************************/
        /*! exports provided: CitasDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasDetailComponent", function () { return CitasDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ClientApp_app_shared_expediente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/shared/expediente.service */ "./ClientApp/app/shared/expediente.service.ts");
            var CitasDetailComponent = /** @class */ (function () {
                function CitasDetailComponent(route, router, expedienteService) {
                    this.route = route;
                    this.router = router;
                    this.expedienteService = expedienteService;
                    this.pageTitle = 'Detalles de la cita del paciente: ';
                    this.errorMessage = '';
                }
                CitasDetailComponent.prototype.getCita = function (id) {
                    var _this = this;
                    this.expedienteService.getCita(id).subscribe({
                        next: function (cita) { return _this.cita = cita; },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                };
                CitasDetailComponent.prototype.ngOnInit = function () {
                    var param = this.route.snapshot.paramMap.get('id');
                    if (param) {
                        var id = +param;
                        this.getCita(id);
                    }
                };
                CitasDetailComponent.prototype.ngDoCheck = function () {
                    var _this = this;
                    this.expedienteService.getPaciente(this.cita.pacienteId).subscribe({
                        next: function (paciente) {
                            _this.paciente = paciente;
                        }
                    });
                    this.expedienteService.getDoctor(this.cita.doctorId).subscribe({
                        next: function (doctor) {
                            _this.doctor = doctor;
                        }
                    });
                };
                CitasDetailComponent.prototype.onBack = function () {
                    this.router.navigate(['/citas']);
                };
                return CitasDetailComponent;
            }());
            CitasDetailComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: ClientApp_app_shared_expediente_service__WEBPACK_IMPORTED_MODULE_3__["ExpedienteService"] }
            ]; };
            CitasDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-citas-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./citas-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/citas/citas-detail/citas-detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./citas-detail.component.css */ "./ClientApp/app/citas/citas-detail/citas-detail.component.css")).default]
                })
            ], CitasDetailComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/citas/citas.component.css": 
        /*!*************************************************!*\
          !*** ./ClientApp/app/citas/citas.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    padding: 40px;\r\n\r\n}\r\n\r\ntable {\r\n    text-align: center;\r\n}\r\n\r\n.card {\r\n    border: solid 1px black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY2l0YXMvY2l0YXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvY2l0YXMvY2l0YXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuXHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./ClientApp/app/citas/citas.component.ts": 
        /*!************************************************!*\
          !*** ./ClientApp/app/citas/citas.component.ts ***!
          \************************************************/
        /*! exports provided: CitasComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasComponent", function () { return CitasComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_expediente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/expediente.service */ "./ClientApp/app/shared/expediente.service.ts");
            var CitasComponent = /** @class */ (function () {
                function CitasComponent(expedienteService) {
                    this.expedienteService = expedienteService;
                    this.pageTitle = "Citas";
                    this.errorMessage = '';
                    this._listFilter = '';
                    this.filteredCitas = [];
                    this.citas = [];
                }
                Object.defineProperty(CitasComponent.prototype, "listFilter", {
                    get: function () {
                        return this._listFilter;
                    },
                    set: function (value) {
                        this._listFilter = value;
                        this.filteredCitas = this.listFilter ? this.performFilter(this.listFilter) : this.citas;
                    },
                    enumerable: true,
                    configurable: true
                });
                CitasComponent.prototype.performFilter = function (filterBy) {
                    filterBy = filterBy.toLocaleLowerCase();
                    return this.citas.filter(function (cita) { return cita.fechacita.toLocaleLowerCase().indexOf(filterBy) !== -1; });
                };
                CitasComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.expedienteService.getCitas().subscribe({
                        next: function (citas) {
                            _this.citas = citas;
                            _this.filteredCitas = _this.citas;
                        },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                };
                return CitasComponent;
            }());
            CitasComponent.ctorParameters = function () { return [
                { type: _shared_expediente_service__WEBPACK_IMPORTED_MODULE_2__["ExpedienteService"] }
            ]; };
            CitasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-citas',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./citas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/citas/citas.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./citas.component.css */ "./ClientApp/app/citas/citas.component.css")).default]
                })
            ], CitasComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/citas/crear-cita/crear-cita.component.css": 
        /*!*****************************************************************!*\
          !*** ./ClientApp/app/citas/crear-cita/crear-cita.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NpdGFzL2NyZWFyLWNpdGEvY3JlYXItY2l0YS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./ClientApp/app/citas/crear-cita/crear-cita.component.ts": 
        /*!****************************************************************!*\
          !*** ./ClientApp/app/citas/crear-cita/crear-cita.component.ts ***!
          \****************************************************************/
        /*! exports provided: Doctor, CrearCitaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doctor", function () { return Doctor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearCitaComponent", function () { return CrearCitaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_expediente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/expediente.service */ "./ClientApp/app/shared/expediente.service.ts");
            /* harmony import */ var _shared_cita__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/cita */ "./ClientApp/app/shared/cita.ts");
            var Doctor = /** @class */ (function () {
                function Doctor() {
                }
                return Doctor;
            }());
            var CrearCitaComponent = /** @class */ (function () {
                function CrearCitaComponent(router, expedienteService) {
                    this.router = router;
                    this.expedienteService = expedienteService;
                    this.pageTitle = "Crear Cita";
                    this.selectedDoctor = new Doctor();
                    this.cita = new _shared_cita__WEBPACK_IMPORTED_MODULE_4__["Cita"]();
                    this.doctores = [
                        { name: 'Carlos Hernandez', code: 1 },
                        { name: 'Cristian Fernandez', code: 2 }
                    ];
                }
                CrearCitaComponent.prototype.crearPaciente = function () {
                    var _this = this;
                    this.cita.pacienteId = this.pacienteId;
                    this.cita.fechacita = this.fechaCita;
                    this.cita.doctorId = this.selectedDoctor.code;
                    this.cita.observaciones = this.observaciones;
                    this.expedienteService.crearCita(this.cita).subscribe(function (success) {
                        if (success) {
                            _this.router.navigate(['citas']);
                        }
                    }, function (err) { return _this.errorMessage = "No se pudo Guardar el Paciente"; });
                };
                CrearCitaComponent.prototype.ngOnInit = function () {
                };
                return CrearCitaComponent;
            }());
            CrearCitaComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _shared_expediente_service__WEBPACK_IMPORTED_MODULE_3__["ExpedienteService"] }
            ]; };
            CrearCitaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-crear-cita',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crear-cita.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/citas/crear-cita/crear-cita.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./crear-cita.component.css */ "./ClientApp/app/citas/crear-cita/crear-cita.component.css")).default]
                })
            ], CrearCitaComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/datos-generales/crear-paciente/crear-paciente.component.css": 
        /*!***********************************************************************************!*\
          !*** ./ClientApp/app/datos-generales/crear-paciente/crear-paciente.component.css ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2RhdG9zLWdlbmVyYWxlcy9jcmVhci1wYWNpZW50ZS9jcmVhci1wYWNpZW50ZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./ClientApp/app/datos-generales/crear-paciente/crear-paciente.component.ts": 
        /*!**********************************************************************************!*\
          !*** ./ClientApp/app/datos-generales/crear-paciente/crear-paciente.component.ts ***!
          \**********************************************************************************/
        /*! exports provided: Enfermera, CrearPacienteComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enfermera", function () { return Enfermera; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearPacienteComponent", function () { return CrearPacienteComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ClientApp_app_shared_paciente__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/shared/paciente */ "./ClientApp/app/shared/paciente.ts");
            /* harmony import */ var ClientApp_app_shared_expediente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/shared/expediente.service */ "./ClientApp/app/shared/expediente.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var Enfermera = /** @class */ (function () {
                function Enfermera() {
                }
                return Enfermera;
            }());
            var CrearPacienteComponent = /** @class */ (function () {
                function CrearPacienteComponent(expedienteService, router) {
                    this.expedienteService = expedienteService;
                    this.router = router;
                    this.selectedEnfermera = new Enfermera();
                    this.pageTitle = "Crear Paciente";
                    this.paciente = new ClientApp_app_shared_paciente__WEBPACK_IMPORTED_MODULE_2__["Paciente"]();
                    this.enfermeras = [
                        { name: 'Wilson Luna', code: 1 },
                        { name: 'Aylin Garcia', code: 2 }
                    ];
                }
                CrearPacienteComponent.prototype.crearPaciente = function () {
                    var _this = this;
                    this.paciente.nombre = this.nombre;
                    this.paciente.apellido = this.apellido;
                    this.paciente.dpi = this.dpi;
                    this.paciente.fechaNacimiento = this.fechaNacimiento;
                    this.paciente.edad = this.edad;
                    this.paciente.sexo = this.sexo;
                    this.paciente.profesion = this.profesion;
                    this.paciente.direccion = this.direccion;
                    this.paciente.contactoEmergencia = this.contactoEmergencia;
                    this.paciente.telefenoContacto = this.telefenoContacto;
                    this.paciente.parentescocontacto = this.parentescocontacto;
                    this.paciente.enfermeraAsignadaId = this.selectedEnfermera.code;
                    this.expedienteService.crearPaciente(this.paciente).subscribe(function (success) {
                        if (success) {
                            _this.router.navigate(['datosGenerales']);
                        }
                    }, function (err) { return _this.errorMessage = "No se pudo Guardar el Paciente"; });
                };
                CrearPacienteComponent.prototype.ngOnInit = function () {
                };
                return CrearPacienteComponent;
            }());
            CrearPacienteComponent.ctorParameters = function () { return [
                { type: ClientApp_app_shared_expediente_service__WEBPACK_IMPORTED_MODULE_3__["ExpedienteService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            CrearPacienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-crear-paciente',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crear-paciente.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/datos-generales/crear-paciente/crear-paciente.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./crear-paciente.component.css */ "./ClientApp/app/datos-generales/crear-paciente/crear-paciente.component.css")).default]
                })
            ], CrearPacienteComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/datos-generales/datos-generales.component.css": 
        /*!*********************************************************************!*\
          !*** ./ClientApp/app/datos-generales/datos-generales.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    padding: 40px;\r\n\r\n}\r\n\r\ntable {\r\n    text-align: center;\r\n}\r\n\r\n.card {\r\n    border: solid 1px black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvZGF0b3MtZ2VuZXJhbGVzL2RhdG9zLWdlbmVyYWxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9kYXRvcy1nZW5lcmFsZXMvZGF0b3MtZ2VuZXJhbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcblxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./ClientApp/app/datos-generales/datos-generales.component.ts": 
        /*!********************************************************************!*\
          !*** ./ClientApp/app/datos-generales/datos-generales.component.ts ***!
          \********************************************************************/
        /*! exports provided: DatosGeneralesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosGeneralesComponent", function () { return DatosGeneralesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_expediente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/expediente.service */ "./ClientApp/app/shared/expediente.service.ts");
            var DatosGeneralesComponent = /** @class */ (function () {
                function DatosGeneralesComponent(expedienteService) {
                    this.expedienteService = expedienteService;
                    this.pageTitle = "Datos Generales";
                    this.errorMessage = '';
                    this._listFilter = '';
                    this.filteredPacientes = [];
                    this.pacientes = [];
                }
                Object.defineProperty(DatosGeneralesComponent.prototype, "listFilter", {
                    get: function () {
                        return this._listFilter;
                    },
                    set: function (value) {
                        this._listFilter = value;
                        this.filteredPacientes = this.listFilter ? this.performFilter(this.listFilter) : this.pacientes;
                    },
                    enumerable: true,
                    configurable: true
                });
                DatosGeneralesComponent.prototype.performFilter = function (filterBy) {
                    filterBy = filterBy.toLocaleLowerCase();
                    return this.pacientes.filter(function (paciente) { return paciente.nombre.toLocaleLowerCase().indexOf(filterBy) !== -1; });
                };
                DatosGeneralesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.expedienteService.getPacientes().subscribe({
                        next: function (pacientes) {
                            _this.pacientes = pacientes;
                            _this.filteredPacientes = _this.pacientes;
                        },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                    for (var i = 0; i < this.pacientes.length; i++) {
                        this.expedienteService.paciente.push(this.pacientes[i]);
                    }
                    console.log(this.expedienteService.paciente);
                };
                return DatosGeneralesComponent;
            }());
            DatosGeneralesComponent.ctorParameters = function () { return [
                { type: _shared_expediente_service__WEBPACK_IMPORTED_MODULE_2__["ExpedienteService"] }
            ]; };
            DatosGeneralesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-datos-generales',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./datos-generales.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/datos-generales/datos-generales.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./datos-generales.component.css */ "./ClientApp/app/datos-generales/datos-generales.component.css")).default]
                })
            ], DatosGeneralesComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/datos-generales/paciente-detail/paciente-detail.component.css": 
        /*!*************************************************************************************!*\
          !*** ./ClientApp/app/datos-generales/paciente-detail/paciente-detail.component.css ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2RhdG9zLWdlbmVyYWxlcy9wYWNpZW50ZS1kZXRhaWwvcGFjaWVudGUtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./ClientApp/app/datos-generales/paciente-detail/paciente-detail.component.ts": 
        /*!************************************************************************************!*\
          !*** ./ClientApp/app/datos-generales/paciente-detail/paciente-detail.component.ts ***!
          \************************************************************************************/
        /*! exports provided: PacienteDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteDetailComponent", function () { return PacienteDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ClientApp_app_shared_expediente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/shared/expediente.service */ "./ClientApp/app/shared/expediente.service.ts");
            var PacienteDetailComponent = /** @class */ (function () {
                function PacienteDetailComponent(route, router, expedienteService) {
                    this.route = route;
                    this.router = router;
                    this.expedienteService = expedienteService;
                    this.pageTitle = 'Detalles del Paciente';
                    this.errorMessage = '';
                }
                PacienteDetailComponent.prototype.getPaciente = function (id) {
                    var _this = this;
                    this.expedienteService.getPaciente(id).subscribe({
                        next: function (paciente) { return _this.paciente = paciente; },
                        error: function (err) { return _this.errorMessage = err; },
                    });
                };
                PacienteDetailComponent.prototype.ngOnInit = function () {
                    var param = this.route.snapshot.paramMap.get('id');
                    if (param) {
                        var id = +param;
                        this.getPaciente(id);
                        console.log("hola");
                    }
                };
                PacienteDetailComponent.prototype.ngDoCheck = function () {
                    var _this = this;
                    this.expedienteService.getEnfermera(this.paciente.enfermeraAsignadaId).subscribe({
                        next: function (enfermera) {
                            _this.enfermera = enfermera;
                        }
                    });
                };
                PacienteDetailComponent.prototype.onBack = function () {
                    this.router.navigate(['/datosGenerales']);
                };
                return PacienteDetailComponent;
            }());
            PacienteDetailComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: ClientApp_app_shared_expediente_service__WEBPACK_IMPORTED_MODULE_3__["ExpedienteService"] }
            ]; };
            PacienteDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-paciente-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paciente-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/datos-generales/paciente-detail/paciente-detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paciente-detail.component.css */ "./ClientApp/app/datos-generales/paciente-detail/paciente-detail.component.css")).default]
                })
            ], PacienteDetailComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/evolucion/crear-evolucion/crear-evolucion.component.css": 
        /*!*******************************************************************************!*\
          !*** ./ClientApp/app/evolucion/crear-evolucion/crear-evolucion.component.css ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2V2b2x1Y2lvbi9jcmVhci1ldm9sdWNpb24vY3JlYXItZXZvbHVjaW9uLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./ClientApp/app/evolucion/crear-evolucion/crear-evolucion.component.ts": 
        /*!******************************************************************************!*\
          !*** ./ClientApp/app/evolucion/crear-evolucion/crear-evolucion.component.ts ***!
          \******************************************************************************/
        /*! exports provided: CrearEvolucionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearEvolucionComponent", function () { return CrearEvolucionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_expediente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/expediente.service */ "./ClientApp/app/shared/expediente.service.ts");
            /* harmony import */ var _shared_evolucion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/evolucion */ "./ClientApp/app/shared/evolucion.ts");
            var CrearEvolucionComponent = /** @class */ (function () {
                function CrearEvolucionComponent(router, expedienteService) {
                    this.router = router;
                    this.expedienteService = expedienteService;
                    this.evolucion = new _shared_evolucion__WEBPACK_IMPORTED_MODULE_4__["Evolucion"]();
                }
                CrearEvolucionComponent.prototype.crearEvolucion = function () {
                    var _this = this;
                    this.evolucion.pacienteId = this.pacienteId;
                    this.evolucion.resultadolab = this.resultadolab;
                    this.evolucion.analisis = this.analisis;
                    this.evolucion.observaciones = this.observaciones;
                    this.expedienteService.crearEvolucion(this.evolucion).subscribe(function (success) {
                        if (success) {
                            _this.router.navigate(['evoluciones']);
                        }
                    }, function (err) { return _this.errorMessage = "No se pudo Guardar el Paciente"; });
                };
                CrearEvolucionComponent.prototype.ngOnInit = function () {
                };
                return CrearEvolucionComponent;
            }());
            CrearEvolucionComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _shared_expediente_service__WEBPACK_IMPORTED_MODULE_3__["ExpedienteService"] }
            ]; };
            CrearEvolucionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-crear-evolucion',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crear-evolucion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/evolucion/crear-evolucion/crear-evolucion.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./crear-evolucion.component.css */ "./ClientApp/app/evolucion/crear-evolucion/crear-evolucion.component.css")).default]
                })
            ], CrearEvolucionComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/evolucion/evolucion-detalle/evolucion-detalle.component.css": 
        /*!***********************************************************************************!*\
          !*** ./ClientApp/app/evolucion/evolucion-detalle/evolucion-detalle.component.css ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2V2b2x1Y2lvbi9ldm9sdWNpb24tZGV0YWxsZS9ldm9sdWNpb24tZGV0YWxsZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./ClientApp/app/evolucion/evolucion-detalle/evolucion-detalle.component.ts": 
        /*!**********************************************************************************!*\
          !*** ./ClientApp/app/evolucion/evolucion-detalle/evolucion-detalle.component.ts ***!
          \**********************************************************************************/
        /*! exports provided: EvolucionDetalleComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvolucionDetalleComponent", function () { return EvolucionDetalleComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ClientApp_app_shared_expediente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/shared/expediente.service */ "./ClientApp/app/shared/expediente.service.ts");
            var EvolucionDetalleComponent = /** @class */ (function () {
                function EvolucionDetalleComponent(route, router, expedienteService) {
                    this.route = route;
                    this.router = router;
                    this.expedienteService = expedienteService;
                    this.pageTitle = 'Detalles de la Evolución ';
                    this.errorMessage = '';
                }
                EvolucionDetalleComponent.prototype.getEvolucion = function (id) {
                    var _this = this;
                    this.expedienteService.getEvolucion(id).subscribe({
                        next: function (evolucion) { return _this.evolucion = evolucion; },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                };
                EvolucionDetalleComponent.prototype.ngOnInit = function () {
                    var param = this.route.snapshot.paramMap.get('id');
                    if (param) {
                        var id = +param;
                        this.getEvolucion(id);
                    }
                };
                EvolucionDetalleComponent.prototype.ngDoCheck = function () {
                    var _this = this;
                    this.expedienteService.getPaciente(this.evolucion.pacienteId).subscribe({
                        next: function (paciente) {
                            _this.paciente = paciente;
                        }
                    });
                };
                EvolucionDetalleComponent.prototype.onBack = function () {
                    this.router.navigate(['/evoluciones']);
                };
                return EvolucionDetalleComponent;
            }());
            EvolucionDetalleComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: ClientApp_app_shared_expediente_service__WEBPACK_IMPORTED_MODULE_3__["ExpedienteService"] }
            ]; };
            EvolucionDetalleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-evolucion-detalle',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./evolucion-detalle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/evolucion/evolucion-detalle/evolucion-detalle.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./evolucion-detalle.component.css */ "./ClientApp/app/evolucion/evolucion-detalle/evolucion-detalle.component.css")).default]
                })
            ], EvolucionDetalleComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/evolucion/evolucion.component.css": 
        /*!*********************************************************!*\
          !*** ./ClientApp/app/evolucion/evolucion.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    padding: 40px;\r\n\r\n}\r\n\r\ntable {\r\n    text-align: center;\r\n}\r\n\r\n.card {\r\n    border: solid 1px black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvZXZvbHVjaW9uL2V2b2x1Y2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9ldm9sdWNpb24vZXZvbHVjaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcblxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./ClientApp/app/evolucion/evolucion.component.ts": 
        /*!********************************************************!*\
          !*** ./ClientApp/app/evolucion/evolucion.component.ts ***!
          \********************************************************/
        /*! exports provided: EvolucionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvolucionComponent", function () { return EvolucionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_expediente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/expediente.service */ "./ClientApp/app/shared/expediente.service.ts");
            var EvolucionComponent = /** @class */ (function () {
                function EvolucionComponent(expedienteService) {
                    this.expedienteService = expedienteService;
                    this.pageTitle = "Evoluciones";
                    this.errorMessage = '';
                    this._listFilter = '';
                    this.filteredEvo = [];
                    this.evoluciones = [];
                }
                Object.defineProperty(EvolucionComponent.prototype, "listFilter", {
                    get: function () {
                        return this._listFilter;
                    },
                    set: function (value) {
                        this._listFilter = value;
                        this.filteredEvo = this.listFilter ? this.performFilter(this.listFilter) : this.evoluciones;
                    },
                    enumerable: true,
                    configurable: true
                });
                EvolucionComponent.prototype.performFilter = function (filterBy) {
                    filterBy = filterBy.toLocaleLowerCase();
                    return this.evoluciones.filter(function (evoluciones) { return evoluciones.resultadolab.toLocaleLowerCase().indexOf(filterBy) !== -1; });
                };
                EvolucionComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.expedienteService.getEvoluciones().subscribe({
                        next: function (evoluciones) {
                            _this.evoluciones = evoluciones;
                            _this.filteredEvo = _this.evoluciones;
                        },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                };
                return EvolucionComponent;
            }());
            EvolucionComponent.ctorParameters = function () { return [
                { type: _shared_expediente_service__WEBPACK_IMPORTED_MODULE_2__["ExpedienteService"] }
            ]; };
            EvolucionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-evolucion',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./evolucion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/evolucion/evolucion.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./evolucion.component.css */ "./ClientApp/app/evolucion/evolucion.component.css")).default]
                })
            ], EvolucionComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/laboratorios/crear-labo/crear-labo.component.css": 
        /*!************************************************************************!*\
          !*** ./ClientApp/app/laboratorios/crear-labo/crear-labo.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2xhYm9yYXRvcmlvcy9jcmVhci1sYWJvL2NyZWFyLWxhYm8uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./ClientApp/app/laboratorios/crear-labo/crear-labo.component.ts": 
        /*!***********************************************************************!*\
          !*** ./ClientApp/app/laboratorios/crear-labo/crear-labo.component.ts ***!
          \***********************************************************************/
        /*! exports provided: CrearLaboComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearLaboComponent", function () { return CrearLaboComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_expediente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/expediente.service */ "./ClientApp/app/shared/expediente.service.ts");
            /* harmony import */ var _shared_laboratorio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/laboratorio */ "./ClientApp/app/shared/laboratorio.ts");
            var CrearLaboComponent = /** @class */ (function () {
                function CrearLaboComponent(router, expedienteService) {
                    this.router = router;
                    this.expedienteService = expedienteService;
                    this.errorMessage = "";
                    this.laboratorio = new _shared_laboratorio__WEBPACK_IMPORTED_MODULE_4__["Laboratorio"]();
                }
                CrearLaboComponent.prototype.crearLabo = function () {
                    var _this = this;
                    this.laboratorio.pacienteId = this.pacienteId;
                    this.laboratorio.tipolabo = this.tipoLabo;
                    this.expedienteService.crearLaboratorio(this.laboratorio).subscribe(function (success) {
                        if (success) {
                            _this.router.navigate(['laboratorios']);
                        }
                    }, function (err) { return _this.errorMessage = "No se pudo Guardar el Paciente"; });
                };
                CrearLaboComponent.prototype.ngOnInit = function () {
                };
                return CrearLaboComponent;
            }());
            CrearLaboComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _shared_expediente_service__WEBPACK_IMPORTED_MODULE_3__["ExpedienteService"] }
            ]; };
            CrearLaboComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-crear-labo',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crear-labo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/laboratorios/crear-labo/crear-labo.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./crear-labo.component.css */ "./ClientApp/app/laboratorios/crear-labo/crear-labo.component.css")).default]
                })
            ], CrearLaboComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/laboratorios/laboratorio-detail/laboratorio-detail.component.css": 
        /*!****************************************************************************************!*\
          !*** ./ClientApp/app/laboratorios/laboratorio-detail/laboratorio-detail.component.css ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2xhYm9yYXRvcmlvcy9sYWJvcmF0b3Jpby1kZXRhaWwvbGFib3JhdG9yaW8tZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./ClientApp/app/laboratorios/laboratorio-detail/laboratorio-detail.component.ts": 
        /*!***************************************************************************************!*\
          !*** ./ClientApp/app/laboratorios/laboratorio-detail/laboratorio-detail.component.ts ***!
          \***************************************************************************************/
        /*! exports provided: LaboratorioDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaboratorioDetailComponent", function () { return LaboratorioDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ClientApp_app_shared_expediente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/shared/expediente.service */ "./ClientApp/app/shared/expediente.service.ts");
            var LaboratorioDetailComponent = /** @class */ (function () {
                function LaboratorioDetailComponent(route, router, expedienteService) {
                    this.route = route;
                    this.router = router;
                    this.expedienteService = expedienteService;
                    this.pageTitle = 'Detalles del Laboratorio ';
                    this.errorMessage = '';
                }
                LaboratorioDetailComponent.prototype.getLaboratorio = function (id) {
                    var _this = this;
                    this.expedienteService.getLaboratorio(id).subscribe({
                        next: function (laboratorio) { return _this.laboratorio = laboratorio; },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                };
                LaboratorioDetailComponent.prototype.ngOnInit = function () {
                    var param = this.route.snapshot.paramMap.get('id');
                    if (param) {
                        var id = +param;
                        this.getLaboratorio(id);
                    }
                };
                LaboratorioDetailComponent.prototype.ngDoCheck = function () {
                    var _this = this;
                    this.expedienteService.getPaciente(this.laboratorio.pacienteId).subscribe({
                        next: function (paciente) {
                            _this.paciente = paciente;
                        }
                    });
                };
                LaboratorioDetailComponent.prototype.onBack = function () {
                    this.router.navigate(['/laboratorios']);
                };
                return LaboratorioDetailComponent;
            }());
            LaboratorioDetailComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: ClientApp_app_shared_expediente_service__WEBPACK_IMPORTED_MODULE_3__["ExpedienteService"] }
            ]; };
            LaboratorioDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-laboratorio-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./laboratorio-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/laboratorios/laboratorio-detail/laboratorio-detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./laboratorio-detail.component.css */ "./ClientApp/app/laboratorios/laboratorio-detail/laboratorio-detail.component.css")).default]
                })
            ], LaboratorioDetailComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/laboratorios/laboratorios.component.css": 
        /*!***************************************************************!*\
          !*** ./ClientApp/app/laboratorios/laboratorios.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    padding: 40px;\r\n\r\n}\r\n\r\ntable {\r\n    text-align: center;\r\n}\r\n\r\n.card {\r\n    border: solid 1px black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvbGFib3JhdG9yaW9zL2xhYm9yYXRvcmlvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9sYWJvcmF0b3Jpb3MvbGFib3JhdG9yaW9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcblxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./ClientApp/app/laboratorios/laboratorios.component.ts": 
        /*!**************************************************************!*\
          !*** ./ClientApp/app/laboratorios/laboratorios.component.ts ***!
          \**************************************************************/
        /*! exports provided: LaboratoriosComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaboratoriosComponent", function () { return LaboratoriosComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_expediente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/expediente.service */ "./ClientApp/app/shared/expediente.service.ts");
            var LaboratoriosComponent = /** @class */ (function () {
                function LaboratoriosComponent(expedienteService) {
                    this.expedienteService = expedienteService;
                    this.pageTitle = "Laboratorios";
                    this.errorMessage = '';
                    this._listFilter = '';
                    this.filteredLabos = [];
                    this.laboratorios = [];
                }
                Object.defineProperty(LaboratoriosComponent.prototype, "listFilter", {
                    get: function () {
                        return this._listFilter;
                    },
                    set: function (value) {
                        this._listFilter = value;
                        this.filteredLabos = this.listFilter ? this.performFilter(this.listFilter) : this.laboratorios;
                    },
                    enumerable: true,
                    configurable: true
                });
                LaboratoriosComponent.prototype.performFilter = function (filterBy) {
                    filterBy = filterBy.toLocaleLowerCase();
                    return this.laboratorios.filter(function (ordenes) { return ordenes.tipolabo.toLocaleLowerCase().indexOf(filterBy) !== -1; });
                };
                LaboratoriosComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.expedienteService.getLaboratorios().subscribe({
                        next: function (laboratorios) {
                            _this.laboratorios = laboratorios;
                            _this.filteredLabos = _this.laboratorios;
                        },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                };
                return LaboratoriosComponent;
            }());
            LaboratoriosComponent.ctorParameters = function () { return [
                { type: _shared_expediente_service__WEBPACK_IMPORTED_MODULE_2__["ExpedienteService"] }
            ]; };
            LaboratoriosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-laboratorios',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./laboratorios.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/laboratorios/laboratorios.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./laboratorios.component.css */ "./ClientApp/app/laboratorios/laboratorios.component.css")).default]
                })
            ], LaboratoriosComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/login/login.component.css": 
        /*!*************************************************!*\
          !*** ./ClientApp/app/login/login.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card {\r\n    border: solid 1px black;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxufVxyXG5cclxuIl19 */");
            /***/ 
        }),
        /***/ "./ClientApp/app/login/login.component.ts": 
        /*!************************************************!*\
          !*** ./ClientApp/app/login/login.component.ts ***!
          \************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_expediente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/expediente.service */ "./ClientApp/app/shared/expediente.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(expedienteService, router) {
                    this.expedienteService = expedienteService;
                    this.router = router;
                    this.errorMessage = "";
                    this.creds = {
                        username: "",
                        password: ""
                    };
                }
                LoginComponent.prototype.onLogin = function () {
                    var _this = this;
                    this.errorMessage = "";
                    this.expedienteService.login(this.creds)
                        .subscribe(function (success) {
                        if (success) {
                            _this.router.navigate(["datosGenerales"]);
                        }
                    }, function (err) { return _this.errorMessage = "Failed to login"; });
                };
                LoginComponent.prototype.ngOnInit = function () {
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _shared_expediente_service__WEBPACK_IMPORTED_MODULE_2__["ExpedienteService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./ClientApp/app/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/notas-enfermera/crear-nota/crear-nota.component.css": 
        /*!***************************************************************************!*\
          !*** ./ClientApp/app/notas-enfermera/crear-nota/crear-nota.component.css ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL25vdGFzLWVuZmVybWVyYS9jcmVhci1ub3RhL2NyZWFyLW5vdGEuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./ClientApp/app/notas-enfermera/crear-nota/crear-nota.component.ts": 
        /*!**************************************************************************!*\
          !*** ./ClientApp/app/notas-enfermera/crear-nota/crear-nota.component.ts ***!
          \**************************************************************************/
        /*! exports provided: Doctor, CrearNotaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doctor", function () { return Doctor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearNotaComponent", function () { return CrearNotaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_nota__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/nota */ "./ClientApp/app/shared/nota.ts");
            /* harmony import */ var _shared_expediente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/expediente.service */ "./ClientApp/app/shared/expediente.service.ts");
            var Doctor = /** @class */ (function () {
                function Doctor() {
                }
                return Doctor;
            }());
            var CrearNotaComponent = /** @class */ (function () {
                function CrearNotaComponent(router, expedienteService) {
                    this.router = router;
                    this.expedienteService = expedienteService;
                    this.selectedDoctor = new Doctor();
                    this.pageTitle = "Crear Nota";
                    this.nota = new _shared_nota__WEBPACK_IMPORTED_MODULE_3__["Nota"]();
                    this.doctores = [
                        { name: 'Carlos Hernandez', code: 1 },
                        { name: 'Cristian Fernandez', code: 2 }
                    ];
                }
                CrearNotaComponent.prototype.crearPaciente = function () {
                    var _this = this;
                    this.nota.pacienteId = this.pacienteId;
                    this.nota.pesokg = this.pesokg;
                    this.nota.alturamts = this.alturamts;
                    this.nota.pulso = this.pulso;
                    this.nota.presion = this.presion;
                    this.nota.respiraxmin = this.respiraxmin;
                    this.nota.temperatura = this.temperatura;
                    this.nota.doctorId = this.selectedDoctor.code;
                    this.nota.observaciones = this.observaciones;
                    this.expedienteService.crearNota(this.nota).subscribe(function (success) {
                        if (success) {
                            _this.router.navigate(['notas']);
                        }
                    }, function (err) { return _this.errorMessage = "No se pudo Guardar el Paciente"; });
                };
                CrearNotaComponent.prototype.ngOnInit = function () {
                };
                return CrearNotaComponent;
            }());
            CrearNotaComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _shared_expediente_service__WEBPACK_IMPORTED_MODULE_4__["ExpedienteService"] }
            ]; };
            CrearNotaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-crear-nota',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crear-nota.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/notas-enfermera/crear-nota/crear-nota.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./crear-nota.component.css */ "./ClientApp/app/notas-enfermera/crear-nota/crear-nota.component.css")).default]
                })
            ], CrearNotaComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/notas-enfermera/nota-detail/nota-detail.component.css": 
        /*!*****************************************************************************!*\
          !*** ./ClientApp/app/notas-enfermera/nota-detail/nota-detail.component.css ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL25vdGFzLWVuZmVybWVyYS9ub3RhLWRldGFpbC9ub3RhLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./ClientApp/app/notas-enfermera/nota-detail/nota-detail.component.ts": 
        /*!****************************************************************************!*\
          !*** ./ClientApp/app/notas-enfermera/nota-detail/nota-detail.component.ts ***!
          \****************************************************************************/
        /*! exports provided: NotaDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotaDetailComponent", function () { return NotaDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ClientApp_app_shared_expediente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/shared/expediente.service */ "./ClientApp/app/shared/expediente.service.ts");
            var NotaDetailComponent = /** @class */ (function () {
                function NotaDetailComponent(route, router, expedienteService) {
                    this.route = route;
                    this.router = router;
                    this.expedienteService = expedienteService;
                    this.pageTitle = 'Detalles de la Nota ';
                    this.errorMessage = '';
                }
                NotaDetailComponent.prototype.getNota = function (id) {
                    var _this = this;
                    this.expedienteService.getNota(id).subscribe({
                        next: function (nota) { return _this.nota = nota; },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                };
                NotaDetailComponent.prototype.ngOnInit = function () {
                    var param = this.route.snapshot.paramMap.get('id');
                    if (param) {
                        var id = +param;
                        this.getNota(id);
                    }
                };
                NotaDetailComponent.prototype.ngDoCheck = function () {
                    var _this = this;
                    this.expedienteService.getPaciente(this.nota.pacienteId).subscribe({
                        next: function (paciente) {
                            _this.paciente = paciente;
                        }
                    });
                    this.expedienteService.getDoctor(this.nota.doctorId).subscribe({
                        next: function (doctor) {
                            _this.doctor = doctor;
                        }
                    });
                };
                NotaDetailComponent.prototype.onBack = function () {
                    this.router.navigate(['/notas']);
                };
                return NotaDetailComponent;
            }());
            NotaDetailComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: ClientApp_app_shared_expediente_service__WEBPACK_IMPORTED_MODULE_3__["ExpedienteService"] }
            ]; };
            NotaDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nota-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nota-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/notas-enfermera/nota-detail/nota-detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nota-detail.component.css */ "./ClientApp/app/notas-enfermera/nota-detail/nota-detail.component.css")).default]
                })
            ], NotaDetailComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/notas-enfermera/notas-enfermera.component.css": 
        /*!*********************************************************************!*\
          !*** ./ClientApp/app/notas-enfermera/notas-enfermera.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    padding: 40px;\r\n\r\n}\r\n\r\ntable {\r\n    text-align: center;\r\n}\r\n\r\n.card {\r\n    border: solid 1px black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvbm90YXMtZW5mZXJtZXJhL25vdGFzLWVuZmVybWVyYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9ub3Rhcy1lbmZlcm1lcmEvbm90YXMtZW5mZXJtZXJhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcblxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./ClientApp/app/notas-enfermera/notas-enfermera.component.ts": 
        /*!********************************************************************!*\
          !*** ./ClientApp/app/notas-enfermera/notas-enfermera.component.ts ***!
          \********************************************************************/
        /*! exports provided: NotasEnfermeraComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasEnfermeraComponent", function () { return NotasEnfermeraComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_expediente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/expediente.service */ "./ClientApp/app/shared/expediente.service.ts");
            var NotasEnfermeraComponent = /** @class */ (function () {
                function NotasEnfermeraComponent(expedienteService) {
                    this.expedienteService = expedienteService;
                    this.pageTitle = "Notas Enfermera";
                    this.errorMessage = '';
                    this._listFilter = '';
                    this.filteredNotas = [];
                    this.notas = [];
                }
                Object.defineProperty(NotasEnfermeraComponent.prototype, "listFilter", {
                    get: function () {
                        return this._listFilter;
                    },
                    set: function (value) {
                        this._listFilter = value;
                        this.filteredNotas = this.listFilter ? this.performFilter(this.listFilter) : this.notas;
                    },
                    enumerable: true,
                    configurable: true
                });
                NotasEnfermeraComponent.prototype.performFilter = function (filterBy) {
                    filterBy = filterBy.toLocaleLowerCase();
                    return this.notas.filter(function (notas) { return notas.pacienteId.toString().toLocaleLowerCase().indexOf(filterBy) !== -1; });
                };
                NotasEnfermeraComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.expedienteService.getNotas().subscribe({
                        next: function (notas) {
                            _this.notas = notas;
                            _this.filteredNotas = _this.notas;
                        },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                };
                return NotasEnfermeraComponent;
            }());
            NotasEnfermeraComponent.ctorParameters = function () { return [
                { type: _shared_expediente_service__WEBPACK_IMPORTED_MODULE_2__["ExpedienteService"] }
            ]; };
            NotasEnfermeraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-notas-enfermera',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notas-enfermera.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/notas-enfermera/notas-enfermera.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notas-enfermera.component.css */ "./ClientApp/app/notas-enfermera/notas-enfermera.component.css")).default]
                })
            ], NotasEnfermeraComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/ordenes/crear-orden/crear-orden.component.css": 
        /*!*********************************************************************!*\
          !*** ./ClientApp/app/ordenes/crear-orden/crear-orden.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL29yZGVuZXMvY3JlYXItb3JkZW4vY3JlYXItb3JkZW4uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./ClientApp/app/ordenes/crear-orden/crear-orden.component.ts": 
        /*!********************************************************************!*\
          !*** ./ClientApp/app/ordenes/crear-orden/crear-orden.component.ts ***!
          \********************************************************************/
        /*! exports provided: CrearOrdenComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearOrdenComponent", function () { return CrearOrdenComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_expediente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/expediente.service */ "./ClientApp/app/shared/expediente.service.ts");
            /* harmony import */ var _shared_orden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/orden */ "./ClientApp/app/shared/orden.ts");
            var CrearOrdenComponent = /** @class */ (function () {
                function CrearOrdenComponent(router, expedienteService) {
                    this.router = router;
                    this.expedienteService = expedienteService;
                    this.pageTitle = "Crear Orden";
                    this.orden = new _shared_orden__WEBPACK_IMPORTED_MODULE_4__["Orden"]();
                    this.options = [
                        { label: 'Ibuprofeno', value: 'Ibuprofeno' },
                        { label: 'Acetaminofem', value: 'Acetaminofem' },
                        { label: 'Cardio Aspirina', value: 'Cardio Aspirina' }
                    ];
                }
                CrearOrdenComponent.prototype.crearOrden = function () {
                    var _this = this;
                    this.orden.pacienteId = this.pacienteId;
                    this.orden.medicamento = this.selectedOption;
                    this.orden.dosis = this.dosis;
                    this.orden.observaciones = this.observaciones;
                    this.expedienteService.crearOrden(this.orden).subscribe(function (success) {
                        if (success) {
                            _this.router.navigate(['ordenes']);
                        }
                    }, function (err) { return _this.errorMessage = "No se pudo Guardar el Paciente"; });
                };
                CrearOrdenComponent.prototype.ngOnInit = function () {
                };
                return CrearOrdenComponent;
            }());
            CrearOrdenComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _shared_expediente_service__WEBPACK_IMPORTED_MODULE_3__["ExpedienteService"] }
            ]; };
            CrearOrdenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-crear-orden',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crear-orden.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ordenes/crear-orden/crear-orden.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./crear-orden.component.css */ "./ClientApp/app/ordenes/crear-orden/crear-orden.component.css")).default]
                })
            ], CrearOrdenComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/ordenes/orden-detail/orden-detail.component.css": 
        /*!***********************************************************************!*\
          !*** ./ClientApp/app/ordenes/orden-detail/orden-detail.component.css ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL29yZGVuZXMvb3JkZW4tZGV0YWlsL29yZGVuLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./ClientApp/app/ordenes/orden-detail/orden-detail.component.ts": 
        /*!**********************************************************************!*\
          !*** ./ClientApp/app/ordenes/orden-detail/orden-detail.component.ts ***!
          \**********************************************************************/
        /*! exports provided: OrdenDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenDetailComponent", function () { return OrdenDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ClientApp_app_shared_expediente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/shared/expediente.service */ "./ClientApp/app/shared/expediente.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var OrdenDetailComponent = /** @class */ (function () {
                function OrdenDetailComponent(route, router, expedienteService) {
                    this.route = route;
                    this.router = router;
                    this.expedienteService = expedienteService;
                    this.pageTitle = 'Detalles de la Orden ';
                    this.errorMessage = '';
                }
                OrdenDetailComponent.prototype.getOrden = function (id) {
                    var _this = this;
                    this.expedienteService.getOrden(id).subscribe({
                        next: function (orden) { return _this.orden = orden; },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                };
                OrdenDetailComponent.prototype.ngOnInit = function () {
                    var param = this.route.snapshot.paramMap.get('id');
                    if (param) {
                        var id = +param;
                        this.getOrden(id);
                    }
                };
                OrdenDetailComponent.prototype.ngDoCheck = function () {
                    var _this = this;
                    this.expedienteService.getPaciente(this.orden.pacienteId).subscribe({
                        next: function (paciente) {
                            _this.paciente = paciente;
                        }
                    });
                };
                OrdenDetailComponent.prototype.onBack = function () {
                    this.router.navigate(['/ordenes']);
                };
                return OrdenDetailComponent;
            }());
            OrdenDetailComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: ClientApp_app_shared_expediente_service__WEBPACK_IMPORTED_MODULE_2__["ExpedienteService"] }
            ]; };
            OrdenDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-orden-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orden-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ordenes/orden-detail/orden-detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orden-detail.component.css */ "./ClientApp/app/ordenes/orden-detail/orden-detail.component.css")).default]
                })
            ], OrdenDetailComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/ordenes/ordenes.component.css": 
        /*!*****************************************************!*\
          !*** ./ClientApp/app/ordenes/ordenes.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    padding: 40px;\r\n\r\n}\r\n\r\ntable {\r\n    text-align: center;\r\n}\r\n\r\n.card {\r\n    border: solid 1px black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvb3JkZW5lcy9vcmRlbmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL29yZGVuZXMvb3JkZW5lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG5cclxufVxyXG5cclxudGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./ClientApp/app/ordenes/ordenes.component.ts": 
        /*!****************************************************!*\
          !*** ./ClientApp/app/ordenes/ordenes.component.ts ***!
          \****************************************************/
        /*! exports provided: OrdenesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenesComponent", function () { return OrdenesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_expediente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/expediente.service */ "./ClientApp/app/shared/expediente.service.ts");
            var OrdenesComponent = /** @class */ (function () {
                function OrdenesComponent(expedienteService) {
                    this.expedienteService = expedienteService;
                    this.pageTitle = "Ordenes";
                    this.errorMessage = '';
                    this._listFilter = '';
                    this.filteredOrdenes = [];
                    this.orden = [];
                }
                Object.defineProperty(OrdenesComponent.prototype, "listFilter", {
                    get: function () {
                        return this._listFilter;
                    },
                    set: function (value) {
                        this._listFilter = value;
                        this.filteredOrdenes = this.listFilter ? this.performFilter(this.listFilter) : this.orden;
                    },
                    enumerable: true,
                    configurable: true
                });
                OrdenesComponent.prototype.performFilter = function (filterBy) {
                    filterBy = filterBy.toLocaleLowerCase();
                    return this.orden.filter(function (ordenes) { return ordenes.medicamento.toLocaleLowerCase().indexOf(filterBy) !== -1; });
                };
                OrdenesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.expedienteService.getOrdenes().subscribe({
                        next: function (ordenes) {
                            _this.orden = ordenes;
                            _this.filteredOrdenes = _this.orden;
                        },
                        error: function (err) { return _this.errorMessage = err; }
                    });
                };
                return OrdenesComponent;
            }());
            OrdenesComponent.ctorParameters = function () { return [
                { type: _shared_expediente_service__WEBPACK_IMPORTED_MODULE_2__["ExpedienteService"] }
            ]; };
            OrdenesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-ordenes',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ordenes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ordenes/ordenes.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ordenes.component.css */ "./ClientApp/app/ordenes/ordenes.component.css")).default]
                })
            ], OrdenesComponent);
            /***/ 
        }),
        /***/ "./ClientApp/app/shared/cita.ts": 
        /*!**************************************!*\
          !*** ./ClientApp/app/shared/cita.ts ***!
          \**************************************/
        /*! exports provided: Cita */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cita", function () { return Cita; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Cita = /** @class */ (function () {
                function Cita() {
                }
                return Cita;
            }());
            /***/ 
        }),
        /***/ "./ClientApp/app/shared/evolucion.ts": 
        /*!*******************************************!*\
          !*** ./ClientApp/app/shared/evolucion.ts ***!
          \*******************************************/
        /*! exports provided: Evolucion */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Evolucion", function () { return Evolucion; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Evolucion = /** @class */ (function () {
                function Evolucion() {
                }
                return Evolucion;
            }());
            /***/ 
        }),
        /***/ "./ClientApp/app/shared/expediente.service.ts": 
        /*!****************************************************!*\
          !*** ./ClientApp/app/shared/expediente.service.ts ***!
          \****************************************************/
        /*! exports provided: ExpedienteService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpedienteService", function () { return ExpedienteService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var ExpedienteService = /** @class */ (function () {
                function ExpedienteService(http) {
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
                ExpedienteService.prototype.getPacientes = function () {
                    var _this = this;
                    return this.http.get(this.pacientesUrl, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data), _this.paciente = data, console.log(_this.paciente)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                ExpedienteService.prototype.getPaciente = function (id) {
                    return this.getPacientes()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (paciente) { return paciente.find(function (p) { return p.id === id; }); }));
                };
                ExpedienteService.prototype.getDoctor = function (id) {
                    return this.http.get("/api/doctor/" + id)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                ExpedienteService.prototype.getCitas = function () {
                    return this.http.get(this.citasUrl, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                ExpedienteService.prototype.getCita = function (id) {
                    return this.getCitas()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (cita) { return cita.find(function (p) { return p.id === id; }); }));
                };
                ExpedienteService.prototype.getNotas = function () {
                    return this.http.get(this.notasUrl, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                ExpedienteService.prototype.getNota = function (id) {
                    return this.getNotas()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (nota) { return nota.find(function (p) { return p.id === id; }); }));
                };
                ExpedienteService.prototype.getOrdenes = function () {
                    return this.http.get(this.ordenesUrl, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                ExpedienteService.prototype.getOrden = function (id) {
                    return this.getOrdenes()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (orden) { return orden.find(function (p) { return p.id === id; }); }));
                };
                ExpedienteService.prototype.getLaboratorios = function () {
                    return this.http.get(this.laboratoriosUrl, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                ExpedienteService.prototype.getLaboratorio = function (id) {
                    return this.getLaboratorios()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (laboratorio) { return laboratorio.find(function (p) { return p.id === id; }); }));
                };
                ExpedienteService.prototype.getEvoluciones = function () {
                    return this.http.get(this.evolucionesUrl, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                ExpedienteService.prototype.getEvolucion = function (id) {
                    return this.getEvoluciones()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (evolucion) { return evolucion.find(function (p) { return p.id === id; }); }));
                };
                Object.defineProperty(ExpedienteService.prototype, "loginRequired", {
                    get: function () {
                        return this.token.length == 0 || this.tokenExpiration > new Date();
                    },
                    enumerable: true,
                    configurable: true
                });
                ExpedienteService.prototype.login = function (creds) {
                    var _this = this;
                    return this.http.post("/user/CreateToken", creds)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                        var tokenInfo = response;
                        _this.token = tokenInfo.token;
                        _this.tokenExpiration = tokenInfo.expiration;
                        return true;
                    }));
                };
                ExpedienteService.prototype.getEnfermera = function (id) {
                    return this.http.get("/api/enfermera/" + id)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                ExpedienteService.prototype.crearPaciente = function (paciente) {
                    return this.http.post("/api/paciente", paciente, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                        return true;
                    }));
                };
                ExpedienteService.prototype.crearCita = function (cita) {
                    return this.http.post("/api/cita", cita, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                        return true;
                    }));
                };
                ExpedienteService.prototype.crearNota = function (nota) {
                    return this.http.post("/api/notasenfermera", nota, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                        return true;
                    }));
                };
                ExpedienteService.prototype.crearOrden = function (orden) {
                    return this.http.post("/api/ordenes", orden, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                        return true;
                    }));
                };
                ExpedienteService.prototype.crearLaboratorio = function (laboratorio) {
                    return this.http.post("/api/laboratorio", laboratorio, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                        return true;
                    }));
                };
                ExpedienteService.prototype.crearEvolucion = function (evolucion) {
                    return this.http.post("/api/laboratorio", evolucion, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                        return true;
                    }));
                };
                ExpedienteService.prototype.agregarPaciente = function (paciente) {
                    this.paciente.push(paciente);
                };
                ExpedienteService.prototype.handleError = function (err) {
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    var errorMessage = '';
                    if (err.error instanceof ErrorEvent) {
                        // A client-side or network error occurred. Handle it accordingly.
                        errorMessage = "An error occurred: " + err.error.message;
                    }
                    else {
                        // The backend returned an unsuccessful response code.
                        // The response body may contain clues as to what went wrong,
                        errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
                    }
                    console.error(errorMessage);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
                };
                return ExpedienteService;
            }());
            ExpedienteService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ExpedienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ExpedienteService);
            /***/ 
        }),
        /***/ "./ClientApp/app/shared/laboratorio.ts": 
        /*!*********************************************!*\
          !*** ./ClientApp/app/shared/laboratorio.ts ***!
          \*********************************************/
        /*! exports provided: Laboratorio */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Laboratorio", function () { return Laboratorio; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Laboratorio = /** @class */ (function () {
                function Laboratorio() {
                }
                return Laboratorio;
            }());
            /***/ 
        }),
        /***/ "./ClientApp/app/shared/nota.ts": 
        /*!**************************************!*\
          !*** ./ClientApp/app/shared/nota.ts ***!
          \**************************************/
        /*! exports provided: Nota */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nota", function () { return Nota; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Nota = /** @class */ (function () {
                function Nota() {
                }
                return Nota;
            }());
            /***/ 
        }),
        /***/ "./ClientApp/app/shared/orden.ts": 
        /*!***************************************!*\
          !*** ./ClientApp/app/shared/orden.ts ***!
          \***************************************/
        /*! exports provided: Orden */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orden", function () { return Orden; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Orden = /** @class */ (function () {
                function Orden() {
                }
                return Orden;
            }());
            /***/ 
        }),
        /***/ "./ClientApp/app/shared/paciente.ts": 
        /*!******************************************!*\
          !*** ./ClientApp/app/shared/paciente.ts ***!
          \******************************************/
        /*! exports provided: Paciente */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paciente", function () { return Paciente; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Paciente = /** @class */ (function () {
                function Paciente() {
                }
                return Paciente;
            }());
            /***/ 
        }),
        /***/ "./ClientApp/environments/environment.ts": 
        /*!***********************************************!*\
          !*** ./ClientApp/environments/environment.ts ***!
          \***********************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./ClientApp/main.ts": 
        /*!***************************!*\
          !*** ./ClientApp/main.ts ***!
          \***************************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./ClientApp/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./ClientApp/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/app.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/app.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n    <nav class=\"navbar navbar-light navbar-expand-xl\" style=\"background-color: #e3f2fd;\">\n         <h1 class=\"navbar-brand\"><i class=\"fa fa-hospital-o fa-2x\" aria-hidden=\"true\"></i> Escandalosos Medical</h1>\n         <button class=\"navbar-toggler\">\n             <span class=\"navbar-toggler-icon\" data-toggle=\"collapse\" data-target=\"#theMenu\"></span>\n         </button>\n         <div id=\"theMenu\" class=\"navbar-collapse collapse\">\n           <ul class=\"navbar-nav\">\n                 <li class=\"nav-item\">\n                     <a class=\"nav-link\" [routerLink]=\"['/datosGenerales']\"><i class=\"fa fa-home\" aria-hidden=\"true\" ></i> Datos Generales</a>\n                 </li>\n                 <li class=\"nav-item\">\n                   <a class=\"nav-link\" [routerLink]=\"['/citas']\"><i class=\"fa fa-address-book\" aria-hidden=\"true\" ></i> Citas </a>\n                 </li>\n                 <li class=\"nav-item\">\n                     <a class=\"nav-link\"  [routerLink]=\"['/notas']\"><i class=\"fa fa-sticky-note\" aria-hidden=\"true\"></i> Notas Enfermera </a>\n                 </li>\n                 <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/ordenes']\"><i class=\"fa fa-book\" aria-hidden=\"true\"></i>Ordenes </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/laboratorios']\"> <i class=\"fa fa-flask\" aria-hidden=\"true\"></i> Laboratorios </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/evoluciones']\"><i class=\"fa fa-circle-o-notch\" aria-hidden=\"true\"></i> Evolución </a>\n                </li>\n           </ul>\n         </div>\n     </nav>\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/citas/citas-detail/citas-detail.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/citas/citas-detail/citas-detail.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n<div class='card'\n     *ngIf='cita'>\n  <div class='card-header'>\n    {{pageTitle + ': ' + cita.id}}\n  </div>\n  <div class='card-body'>\n    <div class='row'>\n        <div class=\"col-md-2 text-right\">\n                <i class=\"fa fa-user fa-5x\" aria-hidden=\"true\"></i>\n        </div>\n      <div class='col-md-10'>\n        <div class='row'>\n          <div class='col-md-2 text-right'>Nombres:</div>\n          <div class='col-md-10'>{{paciente.nombre}} {{paciente.apellido}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-2 text-right'>Fecha Registro:</div>\n          <div class='col-md-10'>{{cita.fecharegistro}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-2 text-right'>Fecha Cita:</div>\n          <div class='col-md-10'>{{cita.fechacita}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-2 text-right'>Doctor:</div>\n          <div class='col-md-10'>{{doctor.nombre}} {{doctor.apellido}}</div>\n        </div>\n        <div class='row'>\n            <div class='col-md-2 text-right'>Observaciones:</div>\n            <div class='col-md-10'>{{cita.observaciones}}</div>\n        </div>\n      \n     \n      </div>\n    </div>\n  </div>\n\n  <div class='card-footer'>\n    <button class='btn btn-outline-secondary'\n            (click)='onBack()'\n            style='width:80px'>\n      <i class='fa fa-chevron-left'></i> Back\n    </button>\n  </div>\n</div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/citas/citas.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/citas/citas.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<br>\n<div class=\"container\">\n    <div class='card'>\n        <div class='card-header'>\n            <h4>{{pageTitle}}</h4>\n        </div>\n        <div class='card-body'>\n            <div class='row'>\n                    <div class='col-md-1'>Buscar:</div>\n                    <div class='col-md-4'>\n                      <input type='text'\n                             [(ngModel)]='listFilter' />\n                    </div>\n            </div>\n        </div>\n   <div class='table-responsive'>\n     <table class='table'\n            *ngIf='citas && citas.length'>\n       <thead class=\"bg-light\" >\n         <tr>\n           <th>Id Cita</th>\n           <th>Id Paciente</th>\n           <th>Fecha Creacion</th>\n           <th>Fecha Cita</th>\n         </tr>\n       </thead>\n       <tbody>\n         <tr *ngFor='let cita of filteredCitas'>\n           <td> <a [routerLink]=\"['/citas', cita.id]\">{{ cita.id}}</a></td>\n           <td>{{ cita.pacienteId }}</td>\n           <td>{{ cita.fecharegistro }}</td>\n           <td>{{ cita.fechacita}}</td>\n          \n         </tr>\n       </tbody>\n     </table>\n   </div>\n   <div class=\"card-footer\">\n       <div class=\"col-md-3 offset-md-9 text-right\">\n        <button class=\"btn btn-primary\" [routerLink]=\"['/crearCita']\">Crear Cita</button>\n       </div>\n   </div>\n </div>\n</div>\n<div *ngIf='errorMessage'\n    class='alert alert-danger'>\n Error: {{ errorMessage }}\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/citas/crear-cita/crear-cita.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/citas/crear-cita/crear-cita.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class='card'>\n        <div class='card-header'>\n            <h4>{{pageTitle}}</h4>\n        </div>\n  \n        <div class='card-body'>\n                <div class='row'>\n                    <div class=\"col-md-2 text-right\">\n                            <i class=\"fa fa-user fa-5x\" aria-hidden=\"true\"></i>\n                    </div>\n                  <div class='col-md-10'>\n                    <div class='row'>\n                      <div class='col-md-2 text-right form-group'>ID Paciente:    </div>\n                      <div class='col-md-4'>\n                          <input type=\"number\" class=\"form-control\" [(ngModel)]='pacienteId'/>\n                        </div>\n                    </div>\n                    <div class='row'>\n                      <div class='col-md-2 text-right form-group'>Fecha Cita:</div>\n                      <div class='col-md-4'> \n                          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"fechaCita\" />\n                      </div>\n                    </div>\n                    <div class='row'>\n                      <div class='col-md-2 text-right form-group'>Doctor:</div>\n                      <div class='col-md-4'>\r\n                          <p-dropdown [options]=\"doctores\" [(ngModel)]=\"selectedDoctor\" placeholder=\"Seleccione Doctor\" optionLabel=\"name\" [showClear]=\"true\"></p-dropdown>\r\n                      </div>\n                    </div>\n                    <div class='row'>\n                      <div class='col-md-2 text-right form-group'>Observaciones:</div>\n                      <div class='col-md-4'>\n                            <textarea type=\"date\" class=\"form-control\" [(ngModel)]=\"observaciones\" ></textarea>\n                      </div>\n                    </div>      \n                    <br>\n                    <div class='row'>\n                        <div class=\"col-md-3 offset-md-9\">\n                           <button class=\"btn btn-primary\" (click)=\"crearPaciente()\">Crear</button>\n                        </div>\n                        </div>\n                  </div>\n                </div>\n              </div>\n    </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/datos-generales/crear-paciente/crear-paciente.component.html": 
        /*!**************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/datos-generales/crear-paciente/crear-paciente.component.html ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class='card'>\n        <div class='card-header'>\n            <h4>{{pageTitle}}</h4>\n        </div>\n  \n        <div class='card-body'>\n                <div class='row'>\n                    <div class=\"col-md-2 text-right\">\n                            <i class=\"fa fa-user fa-5x\" aria-hidden=\"true\"></i>\n                    </div>\n                    <div class='col-md-10'>\r\n                        <div class='row'>\r\n                            <div class='col-md-3 text-left form-group'>Nombres: </div>\r\n                            <div class='col-md-4 text-left '>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]='nombre' />\r\n                                <label> </label>\r\n                            </div>\r\n                        </div>\r\n                        <div class='row'>\r\n                            <div class='col-md-3 text-left form-group'>Apellidos:</div>\r\n                            <div class='col-md-4 text-left'>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]='apellido' />\r\n                            </div>\r\n                        </div>\r\n                        <div class='row'>\r\n                            <div class='col-md-3 text-left form-group'>DPI:</div>\r\n                            <div class='col-md-4'>\r\n                                <input type=\"number\" min=\"1\" class=\"form-control\" [(ngModel)]='dpi' />\r\n                            </div>\r\n                        </div>\r\n                        <div class='row'>\r\n                            <div class='col-md-3 text-left form-group'>Fecha Nacimiento:</div>\r\n                            <div class='col-md-4 text-left'>\r\n                                <input type=\"date\" class=\"form-control\" [(ngModel)]='fechaNacimiento' />\r\n                            </div>\r\n                        </div>\r\n                        <div class='row'>\r\n                            <div class='col-md-3 text-left'>Edad:</div>\r\n                            <div class='col-md-4 text-left'>\r\n                                <input type=\"number\" class=\"form-control\" [(ngModel)]='edad' />\r\n                            </div>\r\n                        </div>\r\n                        <div class='row'>\r\n                            <div class='col-md-3 text-left form-group'>Sexo:</div>\r\n                            <div class='col-md-4 text-left'>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]='sexo' />\r\n                            </div>\r\n                        </div>\r\n                        <div class='row'>\r\n                            <div class='col-md-3  text-left form-group'>Profesion:</div>\r\n                            <div class='col-md-4 text-left'>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]='profesion' />\r\n                            </div>\r\n                        </div>\r\n                        <div class='row'>\r\n                            <div class='col-md-3 text-left form-group'>Direcci�n:</div>\r\n                            <div class='col-md-4 text-left'>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]='direccion' />\r\n                            </div>\r\n                        </div>\r\n                        <div class='row'>\r\n                            <div class='col-md-3 text-left form-group'>Contacto Emergencia:</div>\r\n                            <div class='col-md-4 text-left'>\r\n                                <input type=\"number\" class=\"form-control\" [(ngModel)]='contactoEmergencia' />\r\n                            </div>\r\n                        </div>\r\n                        <div class='row'>\r\n                            <div class='col-md-3 text-left form-group'>Telefono Contacto:</div>\r\n                            <div class='col-md-4 text-left'>\r\n                                <input type=\"number\" class=\"form-control\" [(ngModel)]='telefenoContacto' />\r\n                            </div>\r\n                        </div>\r\n                        <div class='row'>\r\n                            <div class='col-md-3 text-left form-group'>Parentesco Contacto:</div>\r\n                            <div class='col-md-4 text-left'>\r\n                                <input type=\"number\" class=\"form-control\" [(ngModel)]='parentescocontacto' />\r\n                            </div>\r\n                        </div>\r\n                        <div class='row'>\r\n                            <div class='col-md-3 text-left form-group'>Enfermera Id:</div>\r\n                            <div class='col-md-4 text-left'>\r\n                                <p-dropdown [options]=\"enfermeras\" [(ngModel)]=\"selectedEnfermera\" placeholder=\"Seleccione Enfmera\" optionLabel=\"name\" [showClear]=\"true\"></p-dropdown>\r\n                            </div>\r\n                        </div>\r\n                        <br>\r\n                        <div class='row'>\r\n                            <div class=\"col-md-3 offset-md-9\">\r\n                                <button class=\"btn btn-primary\" (click)=\"crearPaciente()\">Crear</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\n                </div>\n              </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/datos-generales/datos-generales.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/datos-generales/datos-generales.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class='card'>\n        <div class='card-header'>\n            <h4>{{pageTitle}}</h4>\n        </div>\n        <div class='card-body'>\n            <div class='row'>\n                    <div class='col-md-1'>Buscar:</div>\n                    <div class='col-md-4'>\n                      <input type='text'\n                             [(ngModel)]='listFilter' />\n                    </div>\n            </div>\n        </div>\n   <div class='table-responsive'>\n     <table class='table'\n            *ngIf='pacientes && pacientes.length'>\n       <thead class=\"bg-light\" >\n         <tr>\n           <th>Nombres</th>\n           <th>Apellidos</th>\n           <th>Edad</th>\n           <th>DPI</th>\n         </tr>\n       </thead>\n       <tbody>\n         <tr *ngFor='let paciente of filteredPacientes'>\n           <td> <a [routerLink]=\"['/datosGenerales',paciente.id]\">{{ paciente.nombre}}</a></td>\n           <td>{{ paciente.apellido }}</td>\n           <td>{{ paciente.edad }}</td>\n           <td>{{ paciente.dpi}}</td>\n          \n         </tr>\n       </tbody>\n     </table>\n   </div>\n   <div class=\"card-footer\">\n       <div class=\"col-md-3 offset-md-9 text-right\">\n        <button class=\"btn btn-primary\" [routerLink]=\"['/crearPaciente']\">Crear Paciente</button>\n       </div>\n   </div>\n </div>\n</div>\n\n<div *ngIf='errorMessage'\n    class='alert alert-danger'>\n Error: {{ errorMessage }}\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/datos-generales/paciente-detail/paciente-detail.component.html": 
        /*!****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/datos-generales/paciente-detail/paciente-detail.component.html ***!
          \****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h<br>\n<div class=\"container\">\n\n<div class='card'\n     *ngIf='paciente'>\n  <div class='card-header'>\n    {{pageTitle + ': ' + paciente.nombre}}\n  </div>\n\n  \n  <div class='card-body'>\n    <div class='row'>\n        <div class=\"col-md-2 text-right\">\n                <i class=\"fa fa-user fa-5x\" aria-hidden=\"true\"></i>\n        </div>\n        <div class='col-md-10'>\r\n            <div class='row'>\r\n                <div class='col-md-4 text-left'>Nombres:</div>\r\n                <div class='col-md-8 text-left'>{{paciente.nombre}}</div>\r\n            </div>\r\n            <div class='row'>\r\n                <div class='col-md-4 text-left'>Apellidos:</div>\r\n                <div class='col-md-8 text-left'>{{paciente.apellido}}</div>\r\n            </div>\r\n            <div class='row'>\r\n                <div class='col-md-4 text-left'>DPI:</div>\r\n                <div class='col-md-8 text-left'>{{paciente.dpi}}</div>\r\n            </div>\r\n            <div class='row'>\r\n                <div class='col-md-4 text-left'>Edad:</div>\r\n                <div class='col-md-8 text-left'>{{paciente.edad}}</div>\r\n            </div>\r\n            <div class='row'>\r\n                <div class='col-md-4 text-left'>Nacimiento:</div>\r\n                <div class='col-md-8 text-left'>{{paciente.fechaNacimiento}}</div>\r\n            </div>\r\n            <div class='row'>\r\n                <div class='col-md-4 text-left'>Sexo:</div>\r\n                <div class='col-md-8 text-left'>{{paciente.sexo}}</div>\r\n            </div>\r\n            <div class='row'>\r\n                <div class='col-md-4 text-left'>Profesion:</div>\r\n                <div class='col-md-8 text-left'>{{paciente.profesion}}</div>\r\n            </div>\r\n            <div class='row'>\r\n                <div class='col-md-4 text-left'>Direccion:</div>\r\n                <div class='col-md-8 text-left'>{{paciente.direccion}}</div>\r\n            </div>\r\n            <div class='row'>\r\n                <div class='col-md-4 text-left'>Contacto Emergencia:</div>\r\n                <div class='col-md-8 text-left'>{{paciente.contactoEmergencia}}</div>\r\n            </div>\r\n            <div class='row'>\r\n                <div class='col-md-4 text-left'>Telefono Personal:</div>\r\n                <div class='col-md-8 text-left'>{{paciente.telefenoContacto}}</div>\r\n            </div>\r\n            <div class='row'>\r\n                <div class='col-md-4 text-left'>Contacto Pariente:</div>\r\n                <div class='col-md-8 text-left'>{{paciente.parentescocontacto}}</div>\r\n            </div>\r\n            <div class='row' *ngIf=\"enfermera\">\r\n                <div class='col-md-4 text-left'>Enfermera Asignada:</div>\r\n                <div class='col-md-8 text-left'>{{enfermera.nombre}} {{enfermera.apellido}}</div>\r\n            </div>\r\n        </div>\n    </div>\n  </div>\n\n  <div class='card-footer'>\n    <button class='btn btn-outline-secondary'\n            (click)='onBack()'\n            style='width:80px'>\n      <i class='fa fa-chevron-left'></i> Back\n    </button>\n  </div>\n</div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/evolucion/crear-evolucion/crear-evolucion.component.html": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/evolucion/crear-evolucion/crear-evolucion.component.html ***!
          \**********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class='card'>\n        <div class='card-header'>\n            <h4>Crear Laboratorio</h4>\n        </div>\n  \n        <div class='card-body'>\n                <div class='row'>\n                    <div class=\"col-md-2 text-right\">\n                            <i class=\"fa fa-user fa-5x\" aria-hidden=\"true\"></i>\n                    </div>\n                  <div class='col-md-10'>\n                    <div class='row'>\n                      <div class='col-md-2 text-right form-group'>ID Paciente:  </div>\n                      <div class='col-md-4'>\n                          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"pacienteId\"/>\n                        </div>\n                    </div>\n                    <div class='row'>\n                      <div class='col-md-2 text-right form-group'>Resultado Laboratorio:</div>\n                      <div class='col-md-4'> \n                          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"resultadolab\"/>\n                      </div>\n                    </div>\n                    <div class='row'>\n                      <div class='col-md-2 text-right form-group'>Analisis:</div>\n                      <div class='col-md-4'>\n                            <input type=\"text\" min=\"1\" class=\"form-control\" [(ngModel)]=\"analisis\"/>\n                      </div>\n                    </div>\n                    <div class='row'>\n                      <div class='col-md-2 text-right form-group'>Observaciones:</div>\n                      <div class='col-md-4'>\n                            <textarea type=\"number\" class=\"form-control\" [(ngModel)]=\"observaciones\" ></textarea>\n                      </div>\n                    </div>\n                 \n                         \n                    <br>\n                    <div class='row'>\n                        <div class=\"col-md-3 offset-md-9\">\n                           <button class=\"btn btn-primary\" (click)=\"crearEvolucion()\">Crear</button>\n                        </div>\n                        </div>\n                  </div>\n                </div>\n              </div>\n    </div>\n</div>\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/evolucion/evolucion-detalle/evolucion-detalle.component.html": 
        /*!**************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/evolucion/evolucion-detalle/evolucion-detalle.component.html ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n<div class='card'\n     *ngIf='evolucion'>\n  <div class='card-header'>\n    {{pageTitle}}\n  </div>\n  <div class='card-body'>\n    <div class='row'>\n        <div class=\"col-md-2 text-right\">\n                <i class=\"fa fa-user fa-5x\" aria-hidden=\"true\"></i>\n        </div>\n      <div class='col-md-10'>\n        <div class='row'>\n          <div class='col-md-2 text-right'>Nombre:</div>\n          <div class='col-md-10'>{{paciente.nombre}} {{paciente.apellido}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-2 text-right'>Fecha Registro:</div>\n          <div class='col-md-10'>{{evolucion.fecharegistro}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-2 text-right'> Resultado Laboratorio:</div>\n          <div class='col-md-10'>{{evolucion.resultadolab}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-2 text-right'>Analisis:</div>\n          <div class='col-md-10'>{{evolucion.analisis}}</div>\n        </div>\n        <div class='row'>\n            <div class='col-md-2 text-right'>Observaciones:</div>\n            <div class='col-md-10'>{{evolucion.observaciones}}</div>\n        </div>\n       \n      \n     \n      </div>\n    </div>\n  </div>\n\n  <div class='card-footer'>\n    <button class='btn btn-outline-secondary'\n            (click)='onBack()'\n            style='width:80px'>\n      <i class='fa fa-chevron-left'></i> Back\n    </button>\n  </div>\n</div>\n\n</div>\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/evolucion/evolucion.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/evolucion/evolucion.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class='card'>\n        <div class='card-header'>\n            <h4>{{pageTitle}}</h4>\n        </div>\n        <div class='card-body'>\n            <div class='row'>\n                    <div class='col-md-1'>Buscar:</div>\n                    <div class='col-md-4'>\n                      <input type='text'\n                             [(ngModel)]='listFilter' />\n                    </div>\n            </div>\n        </div>\n   <div class='table-responsive'>\n     <table class='table'\n            *ngIf='evoluciones && evoluciones.length'>\n       <thead class=\"bg-light\" >\n         <tr>\n           <th>Nombre Paciente</th>\n           <th>Sexo</th>\n           <th>Edad</th>\n         </tr>\n       </thead>\n       <tbody>\n         <tr *ngFor='let evolucion of filteredEvo'>\n           <td> <a [routerLink]=\"['/evoluciones', evolucion.id]\">{{ evolucion.pacienteId}} {{evolucion.Apellidos}}</a></td>\n           <td>{{ evolucion.resultadolab }}</td>\n           <td>{{ evolucion.analisis }}</td>\n          \n         </tr>\n       </tbody>\n     </table>\n   </div>\n   <div class=\"card-footer\">\n       <div class=\"col-md-3 offset-md-9 text-right\">\n        <button class=\"btn btn-primary\" [routerLink]=\"['/crearEvolucion']\">Crear Laboratorio</button>\n       </div>\n   </div>\n </div>\n</div>\n<div *ngIf='errorMessage'\n    class='alert alert-danger'>\n Error: {{ errorMessage }}\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/laboratorios/crear-labo/crear-labo.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/laboratorios/crear-labo/crear-labo.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class='card'>\n        <div class='card-header'>\n            <h4>Crear Laboratorio</h4>\n        </div>\n  \n        <div class='card-body'>\n                <div class='row'>\n                    <div class=\"col-md-2 text-right\">\n                            <i class=\"fa fa-user fa-5x\" aria-hidden=\"true\"></i>\n                    </div>\n                  <div class='col-md-10'>\n                    <div class='row'>\n                      <div class='col-md-2 text-right form-group'>ID Paciente:    </div>\n                      <div class='col-md-4'>\n                          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"pacienteId\"/>\n                        </div>\n                    </div>\n                    <div class='row'>\n                      <div class='col-md-2 text-right form-group'>Nombres:</div>\n                      <div class='col-md-4'> \n                          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"tipoLabo\"/>\n                      </div>\n                    </div>\n                    <br>\n                    <div class='row'>\n                        <div class=\"col-md-3 offset-md-9\">\n                           <button class=\"btn btn-primary\"  (click)=\"crearLabo()\">Crear</button>\n                        </div>\n                        </div>\n                  </div>\n                </div>\n              </div>\n    </div>\n</div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/laboratorios/laboratorio-detail/laboratorio-detail.component.html": 
        /*!*******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/laboratorios/laboratorio-detail/laboratorio-detail.component.html ***!
          \*******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n<div class='card'\n     *ngIf='laboratorio'>\n  <div class='card-header'>\n    {{pageTitle}}\n  </div>\n  <div class='card-body'>\n    <div class='row'>\n        <div class=\"col-md-2 text-right\">\n                <i class=\"fa fa-user fa-5x\" aria-hidden=\"true\"></i>\n        </div>\n      <div class='col-md-10'>\n        <div class='row'>\n          <div class='col-md-2 text-right'>Nombre:</div>\n          <div class='col-md-10'>{{paciente.nombre}} {{paciente.apellido}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-2 text-right'>Fecha de Solicitud:</div>\n          <div class='col-md-10'>{{laboratorio.fecharegistro}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-2 text-right'> Tipo de Laboratorio:</div>\n          <div class='col-md-10'>{{laboratorio.tipolabo}}</div>\n        </div>\n       \n      </div>\n    </div>\n  </div>\n\n  <div class='card-footer'>\n    <button class='btn btn-outline-secondary'\n            (click)='onBack()'\n            style='width:80px'>\n      <i class='fa fa-chevron-left'></i> Back\n    </button>\n  </div>\n</div>\n\n</div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/laboratorios/laboratorios.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/laboratorios/laboratorios.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class='card'>\n        <div class='card-header'>\n            <h4>{{pageTitle}}</h4>\n        </div>\n        <div class='card-body'>\n            <div class='row'>\n                    <div class='col-md-1'>Buscar:</div>\n                    <div class='col-md-4'>\n                      <input type='text'\n                             [(ngModel)]='listFilter' />\n                    </div>\n            </div>\n        </div>\n   <div class='table-responsive'>\n     <table class='table'\n            *ngIf='laboratorios && laboratorios.length'>\n       <thead class=\"bg-light\" >\n         <tr>\n           <th>Id Paciente</th>\n           <th>Tipo Laboratorio</th>\n           <th>Fecha de Solicitud</th>\n         </tr>\n       </thead>\n       <tbody>\n         <tr *ngFor='let o of filteredLabos'>\n           <td> <a [routerLink]=\"['/laboratorios', o.id]\">{{ o. pacienteId}}</a></td>\n           <td>{{ o.tipolabo }}</td>\n           <td>{{ o.fecharegistro }}</td>\n          \n         </tr>\n       </tbody>\n     </table>\n   </div>\n   <div class=\"card-footer\">\n       <div class=\"col-md-3 offset-md-9 text-right\">\n        <button class=\"btn btn-primary\" [routerLink]=\"['/crearLabo']\">Crear Laboratorio</button>\n       </div>\n   </div>\n </div>\n</div>\n<div *ngIf='errorMessage'\n    class='alert alert-danger'>\n Error: {{ errorMessage }}\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/login/login.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/login/login.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"card card-body col-md-6 offset-md-3 text-center\">\r\n    <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n    <h2>Iniciar Sesion</h2><br>\r\n    <form (submit)=\"onLogin()\"  #theForm=\"ngForm\" novalidate>\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-3 col-form-label\">Usuario: </label>\r\n        <div class=\"col-9\">\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"creds.username\" #username=\"ngModel\" required />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-3 col-form-label\">Contraseña: </label>\r\n        <div class=\"col-9\">\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"creds.password\" required #password=\"ngModel\" />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-4 offset-md-3\">\r\n            <button type=\"submit\" class=\"btn btn-info\" value=\"Login\" [disabled]=\"theForm.invalid\">Iniciar Sesion</button>\r\n        </div>\r\n\r\n    </div>\r\n    </form>\r\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/notas-enfermera/crear-nota/crear-nota.component.html": 
        /*!******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/notas-enfermera/crear-nota/crear-nota.component.html ***!
          \******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class='card'>\n        <div class='card-header'>\n            <h4>{{pageTitle}}</h4>\n        </div>\n  \n        <div class='card-body'>\n                <div class='row'>\n                    <div class=\"col-md-2 text-right\">\n                            <i class=\"fa fa-user fa-5x\" aria-hidden=\"true\"></i>\n                    </div>\n                    <div class='col-md-10'>\r\n                        <div class='row'>\r\n                            <div class='col-md-2 text-right form-group'>ID Paciente:    </div>\r\n                            <div class='col-md-4'>\r\n                                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"pacienteId\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class='row'>\r\n                            <div class='col-md-2 text-right form-group'>Peso en KG:</div>\r\n                            <div class='col-md-4'>\r\n                                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"pesokg\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class='row'>\r\n                            <div class='col-md-2 text-right form-group'>Altura en MTS:</div>\r\n                            <div class='col-md-4'>\r\n                                <input type=\"number\" min=\"1\" class=\"form-control\" [(ngModel)]=\"alturamts\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class='row'>\r\n                            <div class='col-md-2 text-right form-group'>Pulso:</div>\r\n                            <div class='col-md-4'>\r\n                                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"pulso\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class='row'>\r\n                            <div class='col-md-2 text-right'>Presion:</div>\r\n                            <div class='col-md-4'>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"presion\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class='row'>\r\n                            <div class='col-md-2 text-right form-group'>Respiracion Min</div>\r\n                            <div class='col-md-4'>\r\n                                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"respiraxmin\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class='row'>\r\n                            <div class='col-md-2 text-right form-group'>Temperatura:</div>\r\n                            <div class='col-md-4'>\r\n                                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"temperatura\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class='row'>\r\n                            <div class='col-md-2 text-right form-group'>Doctor:</div>\r\n                            <div class='col-md-4'>\r\n                                <p-dropdown [options]=\"doctores\" [(ngModel)]=\"selectedDoctor\" placeholder=\"Seleccione Doctor\" optionLabel=\"name\" [showClear]=\"true\"></p-dropdown>\r\n                            </div>\r\n                        </div>\r\n                        <div class='row'>\r\n                            <div class='col-md-2 text-right form-group'>Observaciones:</div>\r\n                            <div class='col-md-4'>\r\n                                <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"observaciones\" ></textarea> \r\n                            </div>\r\n                        </div>\r\n                        <br>\r\n                        <div class='row'>\r\n                            <div class=\"col-md-3 offset-md-9\">\r\n                                <button class=\"btn btn-primary\" (click)=\"crearPaciente()\">Crear</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\n                </div>\n              </div>\n    </div>\n</div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/notas-enfermera/nota-detail/nota-detail.component.html": 
        /*!********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/notas-enfermera/nota-detail/nota-detail.component.html ***!
          \********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n<div class='card'\n     *ngIf='nota'>\n  <div class='card-header'>\n    {{pageTitle}} : {{ nota.id}}\n  </div>\n  <div class='card-body'>\n    <div class='row'>\n        <div class=\"col-md-2 text-right\">\n                <i class=\"fa fa-user fa-5x\" aria-hidden=\"true\"></i>\n        </div>\n        <div class='col-md-10'>\r\n            <div class='row'>\r\n                <div class='col-md-2 text-right'>Nombre:</div>\r\n                <div class='col-md-10'>{{ paciente.nombre}} {{paciente.apellido}}</div>\r\n            </div>\r\n            <div class='row'>\r\n                <div class='col-md-2 text-right'>Fecha Creacion:</div>\r\n                <div class='col-md-10'>{{nota.fecharegistro}}</div>\r\n            </div>\r\n            <div class='row'>\r\n                <div class='col-md-2 text-right'> Peso en KG:</div>\r\n                <div class='col-md-10'>{{nota.pesokg}}</div>\r\n            </div>\r\n            <div class='row'>\r\n                <div class='col-md-2 text-right'>Altura en MT:</div>\r\n                <div class='col-md-10'>{{nota.alturamts}}</div>\r\n            </div>\r\n            <div class='row'>\r\n                <div class='col-md-2 text-right'>Pulso:</div>\r\n                <div class='col-md-10'>{{nota.pulso}}</div>\r\n            </div>\r\n            <div class='row'>\r\n                <div class='col-md-2 text-right'>Presion:</div>\r\n                <div class='col-md-10'>{{nota.presion}}</div>\r\n            </div>\r\n            <div class='row'>\r\n                <div class='col-md-2 text-right'>Respiracion Min:</div>\r\n                <div class='col-md-10'>{{nota.respiraxmin}}</div>\r\n            </div>\r\n            <div class='row'>\r\n                <div class='col-md-2 text-right'>Temperatura:</div>\r\n                <div class='col-md-10'>{{nota.temperatura}}</div>\r\n            </div>\r\n            <div class='row'>\r\n                <div class='col-md-2 text-right'>Doctor Asignado:</div>\r\n                <div class='col-md-10'>{{doctor.nombre}} {{doctor.apellido}}</div>\r\n            </div>\r\n            <div class='row'>\r\n                <div class='col-md-2 text-right'>Observaciones:</div>\r\n                <div class='col-md-10'>{{nota.observaciones}}</div>\r\n            </div>\r\n        </div>\n    </div>\n  </div>\n\n  <div class='card-footer'>\n    <button class='btn btn-outline-secondary'\n            (click)='onBack()'\n            style='width:80px'>\n      <i class='fa fa-chevron-left'></i> Back\n    </button>\n  </div>\n</div>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/notas-enfermera/notas-enfermera.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/notas-enfermera/notas-enfermera.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class='card'>\n        <div class='card-header'>\n            <h4>{{pageTitle}}</h4>\n        </div>\n        <div class='card-body'>\n            <div class='row'>\n                    <div class='col-md-1'>Buscar:</div>\n                    <div class='col-md-4'>\n                      <input type='text'\n                             [(ngModel)]='listFilter' />\n                    </div>\n            </div>\n        </div>\n   <div class='table-responsive'>\n     <table class='table'\n            *ngIf='notas && notas.length'>\n       <thead class=\"bg-light\" >\n         <tr>\n           <th>Id Paciente</th>\n           <th>Fecha de Creacion</th>\n           <th>Id Paciente</th>\n         </tr>\n       </thead>\n       <tbody>\n         <tr *ngFor='let nota of filteredNotas'>\n           <td> <a [routerLink]=\"['/notas', nota.id]\">{{ nota.pacienteId}}</a></td>\n           <td>{{ nota.fecharegistro }}</td>\n           <td>{{ nota.observaciones}}</td>\n          \n         </tr>\n       </tbody>\n     </table>\n   </div>\n   <div class=\"card-footer\">\n       <div class=\"col-md-3 offset-md-9 text-right\">\n        <button class=\"btn btn-primary\" [routerLink]=\"['/crearNota']\">Crear Nota</button>\n       </div>\n   </div>\n </div>\n</div>\n<div *ngIf='errorMessage'\n    class='alert alert-danger'>\n Error: {{ errorMessage }}\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ordenes/crear-orden/crear-orden.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ordenes/crear-orden/crear-orden.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class='card'>\n        <div class='card-header'>\n            <h4>{{pageTitle}}</h4>\n        </div>\n  \n        <div class='card-body'>\n                <div class='row'>\n                    <div class=\"col-md-2 text-right\">\n                            <i class=\"fa fa-user fa-5x\" aria-hidden=\"true\"></i>\n                    </div>\n                  <div class='col-md-10'>\n                    <div class='row'>\n                      <div class='col-md-2 text-right form-group'>ID Paciente:    </div>\n                      <div class='col-md-4'>\n                          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"pacienteId\"/>\n                        </div>\n                    </div>\n                    <div class='row'>\n                      <div class='col-md-2 text-right form-group'>Medicamento:</div>\n                      <div class='col-md-4'>\r\n                          <p-dropdown [options]=\"options\" [(ngModel)]=\"selectedOption\" editable=\"true\" placeholder=\"Seleccione Metodo\"></p-dropdown>\r\n                      </div>\n                    </div>\n                    <div class='row'>\n                      <div class='col-md-2 text-right form-group'>Dosis:</div>\n                      <div class='col-md-4'>\n                            <input type=\"text\" min=\"1\" class=\"form-control\"  [(ngModel)]=\"dosis\" />\n                      </div>\n                    </div>\n                    <div class='row'>\n                      <div class='col-md-2 text-right form-group'>Observaciones:</div>\n                      <div class='col-md-4'>\n                            <textarea type=\"number\" class=\"form-control\"[(ngModel)]=\"observaciones\" > </textarea>\n                      </div>\n                    </div>\n                    \n                    <br>\n                    <div class='row'>\n                        <div class=\"col-md-3 offset-md-9\">\n                           <button class=\"btn btn-primary\"  (click)=\"crearOrden()\">Crear</button>\n                        </div>\n                        </div>\n                  </div>\n                </div>\n              </div>\n    </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ordenes/orden-detail/orden-detail.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ordenes/orden-detail/orden-detail.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n<div class='card'\n     *ngIf='orden'>\n  <div class='card-header'>\n    {{pageTitle}}\n  </div>\n  <div class='card-body'>\n    <div class='row'>\n        <div class=\"col-md-2 text-right\">\n                <i class=\"fa fa-user fa-5x\" aria-hidden=\"true\"></i>\n        </div>\n      <div class='col-md-10'>\n        <div class='row'>\n          <div class='col-md-2 text-right'>Nombre:</div>\n          <div class='col-md-10'>{{paciente.nombre}} {{paciente.apellido}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-2 text-right'>Fecha Emision:</div>\n          <div class='col-md-10'>{{orden.fecharegistro}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-2 text-right'> Medicamento:</div>\n          <div class='col-md-10'>{{orden.medicamento}}</div>\n        </div>\n        <div class='row'>\n            <div class='col-md-2 text-right'>Dosis:</div>\n            <div class='col-md-10'>{{orden.dosis}}</div>\n        </div>\n        <div class='row'>\n            <div class='col-md-2 text-right'>Observaciones:</div>\n            <div class='col-md-10'>{{orden.observaciones}}</div>\n        </div>\n        \n     \n      </div>\n    </div>\n  </div>\n\n  <div class='card-footer'>\n    <button class='btn btn-outline-secondary'\n            (click)='onBack()'\n            style='width:80px'>\n      <i class='fa fa-chevron-left'></i> Back\n    </button>\n  </div>\n</div>\n\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ordenes/ordenes.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ordenes/ordenes.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class='card'>\n        <div class='card-header'>\n            <h4>{{pageTitle}}</h4>\n        </div>\n        <div class='card-body'>\n            <div class='row'>\n                    <div class='col-md-1'>Buscar:</div>\n                    <div class='col-md-4'>\n                      <input type='text'\n                             [(ngModel)]='listFilter' />\n                    </div>\n            </div>\n        </div>\n   <div class='table-responsive'>\n     <table class='table'\n            *ngIf='orden && orden.length'>\n       <thead class=\"bg-light\" >\n         <tr>\n           <th>Id Paciente</th>\n           <th>Sexo</th>\n           <th>Edad</th>\n         </tr>\n       </thead>\n       <tbody>\n         <tr *ngFor='let o of filteredOrdenes'>\n           <td> <a [routerLink]=\"['/ordenes', o.id]\">{{ o.pacienteId}}</a></td>\n           <td>{{ o.medicamento }}</td>\n           <td>{{ o.dosis }}</td>\n          \n         </tr>\n       </tbody>\n     </table>\n   </div>\n   <div class=\"card-footer\">\n       <div class=\"col-md-3 offset-md-9 text-right\">\n        <button class=\"btn btn-primary\" [routerLink]=\"['/crearOrden']\">Crear Orden</button>\n       </div>\n   </div>\n </div>\n</div>\n<div *ngIf='errorMessage'\n    class='alert alert-danger'>\n Error: {{ errorMessage }}\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ 0: 
        /*!*********************************!*\
          !*** multi ./ClientApp/main.ts ***!
          \*********************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\spineda\Desktop\ClinicaMedica\ClinicaMedica\ClientApp\main.ts */ "./ClientApp/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map