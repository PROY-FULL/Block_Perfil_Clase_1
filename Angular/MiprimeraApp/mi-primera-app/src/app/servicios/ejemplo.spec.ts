import { TestBed } from '@angular/core/testing';

import { Ejemplo } from './ejemplo';

describe('Ejemplo', () => {
  let service: Ejemplo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ejemplo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
