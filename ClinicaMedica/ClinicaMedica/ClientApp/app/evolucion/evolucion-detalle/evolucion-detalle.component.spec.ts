import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucionDetalleComponent } from './evolucion-detalle.component';

describe('EvolucionDetalleComponent', () => {
  let component: EvolucionDetalleComponent;
  let fixture: ComponentFixture<EvolucionDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolucionDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolucionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
