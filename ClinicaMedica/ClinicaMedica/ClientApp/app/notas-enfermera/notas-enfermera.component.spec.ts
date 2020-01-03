import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasEnfermeraComponent } from './notas-enfermera.component';

describe('NotasEnfermeraComponent', () => {
  let component: NotasEnfermeraComponent;
  let fixture: ComponentFixture<NotasEnfermeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasEnfermeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasEnfermeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
