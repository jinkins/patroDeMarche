/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChantService } from './chant.service';

describe('ChantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChantService]
    });
  });

  it('should ...', inject([ChantService], (service: ChantService) => {
    expect(service).toBeTruthy();
  }));
});
