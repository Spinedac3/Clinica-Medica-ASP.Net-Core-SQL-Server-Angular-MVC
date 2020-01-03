import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEvolucionComponent } from './crear-evolucion.component';

describe('CrearEvolucionComponent', () => {
  let component: CrearEvolucionComponent;
  let fixture: ComponentFixture<CrearEvolucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEvolucionComponent ]
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
