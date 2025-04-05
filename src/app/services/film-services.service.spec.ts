import { TestBed } from '@angular/core/testing';

import { FilmServicesService } from './film-services.service';

describe('FilmServicesService', () => {
  let service: FilmServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
