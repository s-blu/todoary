import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDiaryEntryDialogComponent } from './delete-diary-entry-dialog.component';

describe('DeleteDiaryEntryDialogComponent', () => {
  let component: DeleteDiaryEntryDialogComponent;
  let fixture: ComponentFixture<DeleteDiaryEntryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDiaryEntryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDiaryEntryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
