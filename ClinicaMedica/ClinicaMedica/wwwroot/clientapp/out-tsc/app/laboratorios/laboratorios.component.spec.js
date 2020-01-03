import { async, TestBed } from '@angular/core/testing';
import { LaboratoriosComponent } from './laboratorios.component';
describe('LaboratoriosComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LaboratoriosComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(LaboratoriosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=laboratorios.component.spec.js.map