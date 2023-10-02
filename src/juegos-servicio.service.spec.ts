import { TestBed } from '@angular/core/testing';

import { JuegosServicioService } from './juegos-servicio.service';

describe('JuegosServicioService', () => {
  let service: JuegosServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuegosServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
