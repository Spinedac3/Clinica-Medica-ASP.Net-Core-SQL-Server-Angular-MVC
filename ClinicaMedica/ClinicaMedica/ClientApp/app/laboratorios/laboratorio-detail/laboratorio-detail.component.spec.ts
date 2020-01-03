import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorioDetailComponent } from './laboratorio-detail.component';

describe('LaboratorioDetailComponent', () => {
  let component: LaboratorioDetailComponent;
  let fixture: ComponentFixture<LaboratorioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratorioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratorioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
