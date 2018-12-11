import { TestBed, inject } from '@angular/core/testing';

import { MongocrudService } from './mongocrud.service';

describe('MongocrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MongocrudService]
    });
  });

  it('should be created', inject([MongocrudService], (service: MongocrudService) => {
    expect(service).toBeTruthy();
  }));
});
