import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearLaboComponent } from './crear-labo.component';

describe('CrearLaboComponent', () => {
  let component: CrearLaboComponent;
  let fixture: ComponentFixture<CrearLaboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearLaboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearLaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
