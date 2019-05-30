import { TestBed } from '@angular/core/testing';

import { EsperasService } from './esperas.service';

describe('EsperasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EsperasService = TestBed.get(EsperasService);
    expect(service).toBeTruthy();
  });
});
