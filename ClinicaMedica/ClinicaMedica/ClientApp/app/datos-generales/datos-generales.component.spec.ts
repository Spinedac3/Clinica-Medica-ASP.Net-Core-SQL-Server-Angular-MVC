import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosGeneralesComponent } from './datos-generales.component';

describe('DatosGeneralesComponent', () => {
  let component: DatosGeneralesComponent;
  let fixture: ComponentFixture<DatosGeneralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosGeneralesComponent ]
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
