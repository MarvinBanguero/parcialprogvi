import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevosaldoComponent } from './nuevosaldo.component';

describe('NuevosaldoComponent', () => {
  let component: NuevosaldoComponent;
  let fixture: ComponentFixture<NuevosaldoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevosaldoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevosaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
