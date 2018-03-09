import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCategoriesButtonComponent } from './manage-categories-button.component';

describe('ManageCategoriesButtonComponent', () => {
  let component: ManageCategoriesButtonComponent;
  let fixture: ComponentFixture<ManageCategoriesButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCategoriesButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCategoriesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
