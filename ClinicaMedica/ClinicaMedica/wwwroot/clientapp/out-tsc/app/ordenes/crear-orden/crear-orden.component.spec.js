import { async, TestBed } from '@angular/core/testing';
import { CrearOrdenComponent } from './crear-orden.component';
describe('CrearOrdenComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CrearOrdenComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CrearOrdenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=crear-orden.component.spec.js.map