import { async, TestBed } from '@angular/core/testing';
import { OrdenDetailComponent } from './orden-detail.component';
describe('OrdenDetailComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrdenDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(OrdenDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=orden-detail.component.spec.js.map