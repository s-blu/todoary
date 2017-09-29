import { Injectable } from '@angular/core';
import { TodoEntryService } from './todo-entry.service';

@Injectable()
export class TodoService {
  openTodos;

  constructor() {
    this.openTodos = [];
  }

}
