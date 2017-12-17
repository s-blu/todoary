import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDiaryEntryComponent } from './new-diary-entry.component';

describe('NewDiaryEntryComponent', () => {
  let component: NewDiaryEntryComponent;
  let fixture: ComponentFixture<NewDiaryEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDiaryEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDiaryEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
