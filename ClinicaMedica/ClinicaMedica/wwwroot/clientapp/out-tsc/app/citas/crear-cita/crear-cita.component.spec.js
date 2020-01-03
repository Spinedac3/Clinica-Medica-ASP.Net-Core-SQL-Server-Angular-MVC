import { async, TestBed } from '@angular/core/testing';
import { CrearCitaComponent } from './crear-cita.component';
describe('CrearCitaComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CrearCitaComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CrearCitaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=crear-cita.component.spec.js.map