import { async, TestBed } from '@angular/core/testing';
import { PacienteDetailComponent } from './paciente-detail.component';
describe('PacienteDetailComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PacienteDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PacienteDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=paciente-detail.component.spec.js.map