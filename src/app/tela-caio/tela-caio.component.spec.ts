import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCaioComponent } from './tela-caio.component';

describe('TelaCaioComponent', () => {
  let component: TelaCaioComponent;
  let fixture: ComponentFixture<TelaCaioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaCaioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCaioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
