import { TestBed, inject } from '@angular/core/testing';
import { CampService } from './camp.service';

describe('CampService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampService]
    });
  });

  it('should ...', inject([CampService], (service: CampService) => {
    expect(service).toBeTruthy();
  }));
});
