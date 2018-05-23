import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Marcelo2Component } from './marcelo2.component';

describe('Marcelo2Component', () => {
  let component: Marcelo2Component;
  let fixture: ComponentFixture<Marcelo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Marcelo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Marcelo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
