import {Component, Input, OnInit} from '@angular/core';
import {TodoEntry, todoStatus} from '../todos/todo-entry';
import {TodoEntryService} from '../todos/todo-entry.service';
import {TodoService} from '../todos/todo.service';

@Component({
  selector: 'ta-todo-entry-editable',
  templateUrl: './todo-entry-editable.component.html',
  styleUrls: ['./todo-entry-editable.component.scss']
})
export class TodoEntryEditableComponent implements OnInit {
  @Input() todo: TodoEntry;


  constructor(private todoEntryService: TodoEntryService, private todoService: TodoService) {
  }

  ngOnInit() {
  }

  setDone() {
    this.todo.status = todoStatus.DONE;
  }

  setOpen() {
    this.todo.status = todoStatus.OPEN;
  }

  setDeleted() {
    this.todo.status = todoStatus.DELETED;
  }

  isOpenTodo() {
    return this.todo.status === todoStatus.OPEN;
  }

  isDeletedTodo() {
    return this.todo.status === todoStatus.DELETED;
  }

  isNewlyCreated() {
    return true; // fixme implement me
  }

  switchDoneAndOpenStatus() {
    if (this.todo.status === todoStatus.OPEN) {

    } else {
      this.todo.status = todoStatus.OPEN;
    }
  }

  getStateOfCheckbox() {
    if (this.todo.status === todoStatus.OPEN) {
      return 'unchecked';
    } else {
      return 'checked';
    }
  }

}
