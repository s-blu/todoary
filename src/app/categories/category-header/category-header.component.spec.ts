import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CategoryHeaderComponent} from './category-header.component';
import {ModuleMetaData} from '../moduleMetaData';

describe('CategoryHeaderComponent', () => {
  let component: CategoryHeaderComponent;
  let fixture: ComponentFixture<CategoryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryHeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});