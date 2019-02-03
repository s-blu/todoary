import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewCategoryButtonComponent} from './new-category-button.component';
import {ModuleMetaData} from "../../moduleMetaData";

describe('NewCategoryButtonComponent', () => {
  let component: NewCategoryButtonComponent;
  let fixture: ComponentFixture<NewCategoryButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(ModuleMetaData.getMetaData())
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCategoryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
