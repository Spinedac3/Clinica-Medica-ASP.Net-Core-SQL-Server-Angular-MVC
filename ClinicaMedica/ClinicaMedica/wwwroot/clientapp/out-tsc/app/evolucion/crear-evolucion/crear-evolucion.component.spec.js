import { async, TestBed } from '@angular/core/testing';
import { CrearEvolucionComponent } from './crear-evolucion.component';
describe('CrearEvolucionComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CrearEvolucionComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CrearEvolucionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=crear-evolucion.component.spec.js.map