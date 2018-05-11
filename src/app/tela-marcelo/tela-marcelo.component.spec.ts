import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaMarceloComponent } from './tela-marcelo.component';

describe('TelaMarceloComponent', () => {
  let component: TelaMarceloComponent;
  let fixture: ComponentFixture<TelaMarceloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaMarceloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaMarceloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
