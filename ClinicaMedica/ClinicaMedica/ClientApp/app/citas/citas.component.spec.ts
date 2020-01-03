import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasComponent } from './citas.component';

describe('CitasComponent', () => {
  let component: CitasComponent;
  let fixture: ComponentFixture<CitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
