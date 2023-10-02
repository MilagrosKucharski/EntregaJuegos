import { TestBed } from '@angular/core/testing';

import { TwitchJuegosService } from './twitch-juegos.service';

describe('TwitchJuegosService', () => {
  let service: TwitchJuegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitchJuegosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
