import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCategoriesDialogComponent } from './manage-categories-dialog.component';
import {ModuleMetaData} from "../moduleMetaData";

describe('ManageCategoriesDialogComponent', () => {
  let component: ManageCategoriesDialogComponent;
  let fixture: ComponentFixture<ManageCategoriesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(ModuleMetaData.getMetaData())
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCategoriesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
