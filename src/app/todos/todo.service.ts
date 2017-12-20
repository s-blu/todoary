import { Injectable } from '@angular/core';
import {DatabaseService} from '../database/database.service';
import {TodoEntry} from './todo-entry';

@Injectable()
export class TodoService {

  constructor(private databaseService: DatabaseService) {
  }

  getOpenTodos() {
    return this.databaseService.getOpenTodos().then((todos) => {
      // FIXME DEBUG REMOVE ME
      // if (todos.length === 0) {
      //   todos.push(new TodoEntry('Erstes Todo'));
      //   todos.push(new TodoEntry('Ein weiteres Todo, mit etwas längerem Beschreibungstext'));
      //   todos.push(new TodoEntry('Noch ein Todo, das vielleicht gelöscht werden könnte'));
      //   todos.push(new TodoEntry('Das letzte Todo'));
      // }
      return todos;
    });
  }

  updateOpenTodos(todos) {
    return this.databaseService.updateOpenTodos(todos);
  }
}
