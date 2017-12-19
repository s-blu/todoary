import { Injectable } from '@angular/core';
import {TodoEntry, todoStatus} from './todo-entry';

@Injectable()
export class TodoEntryService {

  createNewTodo(text) {
    const newTodo = new TodoEntry(text);
    return newTodo;
  }

  setDone(todo) {
    todo.status = todoStatus.DONE;
  }

  delete(todo) {
    todo.status = todoStatus.DELETED;
  }
}
