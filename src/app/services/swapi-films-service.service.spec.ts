import { TestBed } from '@angular/core/testing';

import { SwapiFilmsServiceService } from './swapi-films-service.service';

describe('SwapiFilmsServiceService', () => {
  let service: SwapiFilmsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwapiFilmsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
