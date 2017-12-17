import { Injectable } from '@angular/core';
import { TodoEntryService } from './todo-entry.service';

@Injectable()
export class TodoService {
  openTodos;

  constructor(private todoEntryService: TodoEntryService) {
    this.openTodos = [
      this.todoEntryService.createNewTodo('erstes todo'),
      this.todoEntryService.createNewTodo('noch ein todo'),
      this.todoEntryService.createNewTodo('und das letzte todo')
    ];
  }

  getTodos() {
    return this.openTodos;
  }
}
