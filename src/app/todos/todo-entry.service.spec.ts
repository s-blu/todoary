import { TestBed, inject } from '@angular/core/testing';

import { TodoEntryService } from './todo-entry.service';
import {ModuleMetaData} from "../moduleMetaData";

describe('TodoEntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(ModuleMetaData.getMetaData());
  });

  it('should be created', inject([TodoEntryService], (service: TodoEntryService) => {
    expect(service).toBeTruthy();
  }));
});
