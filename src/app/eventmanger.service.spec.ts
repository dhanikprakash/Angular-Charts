import { TestBed, inject } from '@angular/core/testing';

import { EventmanagerService } from './services/eventmanager.service';

describe('EventmangerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventmanagerService]
    });
  });

  it('should be created', inject([EventmanagerService], (service: EventmanagerService) => {
    expect(service).toBeTruthy();
  }));
});
