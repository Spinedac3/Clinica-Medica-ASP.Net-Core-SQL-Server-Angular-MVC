import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCitaComponent } from './crear-cita.component';

describe('CrearCitaComponent', () => {
  let component: CrearCitaComponent;
  let fixture: ComponentFixture<CrearCitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCitaComponent ]
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
