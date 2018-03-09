import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryComponent } from './diary.component';
import {ModuleMetaData} from "../moduleMetaData";

describe('DiaryComponent', () => {
  let component: DiaryComponent;
  let fixture: ComponentFixture<DiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(ModuleMetaData.getMetaData())
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
