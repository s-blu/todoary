import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoEntry} from '../todos/todo-entry';

@Component({
  selector: 'ta-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<TodoEntry>();
  text;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    const newTodo = new TodoEntry(this.text);
    this.onSubmit.emit(newTodo);
    this.text = '';
  }

}
