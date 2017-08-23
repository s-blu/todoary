import { TestBed, inject } from '@angular/core/testing';

import { TodoEntryService } from './todo-entry.service';

describe('TodoEntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoEntryService]
    });
  });

  it('should be created', inject([TodoEntryService], (service: TodoEntryService) => {
    expect(service).toBeTruthy();
  }));
});
