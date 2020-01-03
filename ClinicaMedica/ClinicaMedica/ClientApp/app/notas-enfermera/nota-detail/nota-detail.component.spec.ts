import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaDetailComponent } from './nota-detail.component';

describe('NotaDetailComponent', () => {
  let component: NotaDetailComponent;
  let fixture: ComponentFixture<NotaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
