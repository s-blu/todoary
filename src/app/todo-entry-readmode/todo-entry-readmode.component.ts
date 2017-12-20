import {Component, Input, OnInit} from '@angular/core';
import {TodoEntry, todoStatus} from '../todos/todo-entry';

@Component({
  selector: 'ta-todo-entry-readmode',
  templateUrl: './todo-entry-readmode.component.html',
  styleUrls: ['./todo-entry-readmode.component.scss']
})
export class TodoEntryReadmodeComponent implements OnInit {
  @Input() todo: TodoEntry;

  constructor() { }

  ngOnInit() {
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
}
