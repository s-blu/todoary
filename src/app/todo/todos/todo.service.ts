import {Injectable} from '@angular/core';
import {DatabaseService} from '../../tododiary/database/database.service';
import {Logger} from '../../logger';

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

  addOpenTodosToDefaultCategory(openTodos) {
    if (!openTodos || !(openTodos instanceof Array)) {
      this.logger.warn(`openTodos ${JSON.stringify(openTodos)} are invalid. Do nothing.`);
      return;
    }

    return this.databaseService.getOpenTodos()
      .then(todoCategories => {
        const defaultCategory = todoCategories.find((cat) => cat.default);
        if (defaultCategory) {
          defaultCategory.todos = defaultCategory.todos.concat(openTodos);
        }
        return todoCategories;
      })
      .then(todos => this.updateOpenTodos(todos));
  }
}
