import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Marcelo3Component } from './marcelo3.component';

describe('Marcelo3Component', () => {
  let component: Marcelo3Component;
  let fixture: ComponentFixture<Marcelo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Marcelo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Marcelo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
