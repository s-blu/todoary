import {inject, TestBed} from '@angular/core/testing';

import {TodoService} from './todo.service';
import {ModuleMetaData} from "../../moduleMetaData";

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(ModuleMetaData.getMetaData());
  });

  it('should be created', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));
});
