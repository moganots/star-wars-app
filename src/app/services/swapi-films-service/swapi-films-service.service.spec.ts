import { TestBed } from '@angular/core/testing';

import { SwapiFilmsService } from './swapi-films-service.service';

describe('SwapiFilmsService', () => {
  let service: SwapiFilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwapiFilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
