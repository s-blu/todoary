import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoEntryReadmodeComponent} from './todo-entry-readmode.component';

describe('TodoEntryReadmodeComponent', () => {
  let component: TodoEntryReadmodeComponent;
  let fixture: ComponentFixture<TodoEntryReadmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoEntryReadmodeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEntryReadmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
