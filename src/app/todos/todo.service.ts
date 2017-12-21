import { Injectable } from '@angular/core';
import {DatabaseService} from '../database/database.service';
import {TodoEntry} from './todo-entry';

@Injectable()
export class TodoService {

  constructor(private databaseService: DatabaseService) {
  }

  getOpenTodos() {
    return this.databaseService.getOpenTodos();
  }

  updateOpenTodos(todos) {
    return this.databaseService.updateOpenTodos(todos);
  }
}
