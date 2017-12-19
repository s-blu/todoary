import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEntryEditableComponent } from './todo-entry-editable.component';

describe('TodoEntryEditableComponent', () => {
  let component: TodoEntryEditableComponent;
  let fixture: ComponentFixture<TodoEntryEditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoEntryEditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEntryEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
