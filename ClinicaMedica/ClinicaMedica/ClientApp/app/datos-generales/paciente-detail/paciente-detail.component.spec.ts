import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteDetailComponent } from './paciente-detail.component';

describe('PacienteDetailComponent', () => {
  let component: PacienteDetailComponent;
  let fixture: ComponentFixture<PacienteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteDetailComponent ]
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
