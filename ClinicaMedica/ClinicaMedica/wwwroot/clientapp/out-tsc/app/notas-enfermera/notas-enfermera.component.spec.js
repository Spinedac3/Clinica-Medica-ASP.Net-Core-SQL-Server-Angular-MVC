import { async, TestBed } from '@angular/core/testing';
import { NotasEnfermeraComponent } from './notas-enfermera.component';
describe('NotasEnfermeraComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NotasEnfermeraComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(NotasEnfermeraComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=notas-enfermera.component.spec.js.map