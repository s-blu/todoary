import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoEntry} from '../todos/todo-entry';

@Component({
  selector: 'ta-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Object>();
  @Input() category;
  text;
  placeholdertext;

  constructor() {
  }

  ngOnInit() {
    const placeholders = [
      'I have to ...',
      'I want to ...',
      'Remember to ...',
      'I need to ...',
      'I should ...',
      'Let\'s ...',
      'Consider to ...'
    ];

    this.placeholdertext = placeholders[Math.floor(Math.random() * placeholders.length)];
  }

  submit() {
    const newTodo = new TodoEntry(this.text);
    this.onSubmit.emit({todo: newTodo, category: this.category});
    this.text = '';
  }

}
