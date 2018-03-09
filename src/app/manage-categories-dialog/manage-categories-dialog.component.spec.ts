import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCategoriesDialogComponent } from './manage-categories-dialog.component';

describe('ManageCategoriesDialogComponent', () => {
  let component: ManageCategoriesDialogComponent;
  let fixture: ComponentFixture<ManageCategoriesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCategoriesDialogComponent ]
    })
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
