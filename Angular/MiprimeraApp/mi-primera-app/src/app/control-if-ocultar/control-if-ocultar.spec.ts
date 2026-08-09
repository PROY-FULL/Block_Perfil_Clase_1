import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlIfOcultar } from './control-if-ocultar';

describe('ControlIfOcultar', () => {
  let component: ControlIfOcultar;
  let fixture: ComponentFixture<ControlIfOcultar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlIfOcultar],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlIfOcultar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
