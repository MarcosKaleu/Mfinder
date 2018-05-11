import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTelaComponent } from './nova-tela.component';

describe('NovaTelaComponent', () => {
  let component: NovaTelaComponent;
  let fixture: ComponentFixture<NovaTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
