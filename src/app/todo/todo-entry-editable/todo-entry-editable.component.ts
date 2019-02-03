import {Component, Input, OnInit} from '@angular/core';
import {TodoEntry, todoStatus} from '../todos/todo-entry';

@Component({
  selector: 'ta-todo-entry-editable',
  templateUrl: './todo-entry-editable.component.html',
  styleUrls: ['./todo-entry-editable.component.scss']
})
export class TodoEntryEditableComponent implements OnInit {
  @Input() todo: TodoEntry;

  constructor() {
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

  undoDelete() {
    this.todo.status = todoStatus.OPEN;
  }

  isOpenTodo() {
    return this.todo.status === todoStatus.OPEN;
  }

  isDeletedTodo() {
    return this.todo.status === todoStatus.DELETED;
  }

  isDoneTodo() {
    return this.todo.status === todoStatus.DONE;
  }

  switchDoneAndOpenStatus() {
    if (this.todo.status === todoStatus.OPEN) {
      this.setDone();
    } else {
      this.setOpen();
    }
  }
}
