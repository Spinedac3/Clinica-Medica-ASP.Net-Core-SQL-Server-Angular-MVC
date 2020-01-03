import { async, TestBed } from '@angular/core/testing';
import { DatosGeneralesComponent } from './datos-generales.component';
describe('DatosGeneralesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DatosGeneralesComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DatosGeneralesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=datos-generales.component.spec.js.map