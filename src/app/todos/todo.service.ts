import { Injectable } from '@angular/core';
import {DatabaseService} from '../database/database.service';
import {Logger} from '../logger';

@Injectable()
export class TodoService {

  constructor(private databaseService: DatabaseService, private logger: Logger) {
  }

  getOpenTodos() {
    return this.databaseService.getOpenTodos();
  }

  updateOpenTodos(todos) {
    return this.databaseService.updateOpenTodos(todos);
  }

  addToOpenTodos(openTodos) {
    if (!openTodos || !(openTodos instanceof Array)) {
      this.logger.warn(`openTodos ${JSON.stringify(openTodos)} are invalid. Do nothing.`);
      return;
    }

    return this.databaseService.getOpenTodos()
      .then(todos => {
        const newOpenTodos = todos.concat(openTodos);
        return newOpenTodos;
      })
      .then(todos => this.updateOpenTodos(todos));
  }
}
