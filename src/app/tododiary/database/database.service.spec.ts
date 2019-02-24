import {inject, TestBed} from '@angular/core/testing';

import {DatabaseService} from './database.service';
import {ModuleMetaData} from '../../moduleMetaData';

describe('DatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(ModuleMetaData.getMetaData());
  });

  it('should be created', inject([DatabaseService], (service: DatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
