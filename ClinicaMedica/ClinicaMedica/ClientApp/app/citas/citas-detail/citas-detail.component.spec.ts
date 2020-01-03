import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasDetailComponent } from './citas-detail.component';

describe('CitasDetailComponent', () => {
  let component: CitasDetailComponent;
  let fixture: ComponentFixture<CitasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
