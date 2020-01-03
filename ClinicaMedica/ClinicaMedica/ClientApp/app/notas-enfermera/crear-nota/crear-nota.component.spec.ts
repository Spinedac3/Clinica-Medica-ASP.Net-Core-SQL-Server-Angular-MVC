import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearNotaComponent } from './crear-nota.component';

describe('CrearNotaComponent', () => {
  let component: CrearNotaComponent;
  let fixture: ComponentFixture<CrearNotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearNotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
