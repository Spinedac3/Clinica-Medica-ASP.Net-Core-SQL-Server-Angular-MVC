import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoriosComponent } from './laboratorios.component';

describe('LaboratoriosComponent', () => {
  let component: LaboratoriosComponent;
  let fixture: ComponentFixture<LaboratoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoriosComponent ]
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
