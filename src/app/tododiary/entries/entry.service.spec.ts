import {inject, TestBed} from '@angular/core/testing';

import {DiaryEntryService} from './entry.service';
import {ModuleMetaData} from "../../moduleMetaData";

describe('DiaryEntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(ModuleMetaData.getMetaData());
  });

  it('should be created', inject([DiaryEntryService], (service: DiaryEntryService) => {
    expect(service).toBeTruthy();
  }));
});
