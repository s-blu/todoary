import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryHeadlineComponent } from './entry-headline.component';

describe('EntryHeadlineComponent', () => {
  let component: EntryHeadlineComponent;
  let fixture: ComponentFixture<EntryHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
