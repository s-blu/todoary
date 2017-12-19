import { TestBed, inject } from '@angular/core/testing';

import { DiaryEntryService } from './entry.service';

describe('DiaryEntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiaryEntryService]
    });
  });

  it('should be created', inject([DiaryEntryService], (service: DiaryEntryService) => {
    expect(service).toBeTruthy();
  }));
});
