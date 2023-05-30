import { TestBed } from '@angular/core/testing';

import { CargarScrptsService } from './cargar-scrpts.service';

describe('CargarScrptsService', () => {
  let service: CargarScrptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarScrptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
