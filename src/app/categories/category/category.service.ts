import {Injectable} from '@angular/core';
import {Category} from './category';
import {DatabaseService} from '../../tododiary/database/database.service';
import {Logger} from '../../logger';

@Injectable()
export class CategoryService {

  constructor(private databaseService: DatabaseService, private logger: Logger) {
  }

  createNewCategory(name) {
    if (name) {
      const category = new Category(name);
      return this.databaseService.createNewCategory(category);
    } else {
      this.logger.warn(`createNewCategory was called without name. do nothing.`);
    }
  }

  changeCategoryCollapsedState(category, newState) {
    category.collapsed = newState;

    if (!category) {
      this.logger.warn(`changeCategoryCollapsedState got called without category. do nothing.`);
      return;
    }

    return this.databaseService.getOpenTodos().then((categories) => {
      const categoryToUpdate = categories.find((cat) => cat.name === category.name);
      if (!categoryToUpdate) {
        this.logger.error('changeCategoryCollapsedState: Could not find category to update. Abort. ' + category);
        return;
      }
      categoryToUpdate.collapsed = newState;
      return this.databaseService.updateOpenTodos(categories);
    });
  }

  getCategories() {
    return this.databaseService.getOpenTodos();
  }

  deleteCategoriesAndPreserveTodos(categoriesToDelete) {
    if (!categoriesToDelete) {
      this.logger.warn(`deleteCategoryAndPreserveTodos got called without category. do nothing.`);
      return;
    }

    return this.databaseService.getOpenTodos().then((categoriesFromDb) => {
      const defaultCategory = categoriesFromDb.find((cat) => cat.default);

      categoriesToDelete.forEach((category) => {
        const categoryToDelete = categoriesFromDb.find((cat) => cat.name === category.name);
        if (!categoryToDelete) {
          this.logger.error('deleteCategoryAndPreserveTodos: Could not find category to update. Abort. ' + category);
          return;
        }

        this.logger.info(`Adding todos (${categoryToDelete.todos.length}) of deleted category "${categoryToDelete.name}" to default category ...`);
        defaultCategory.todos = defaultCategory.todos.concat(categoryToDelete.todos);
        categoriesFromDb.splice(categoriesFromDb.indexOf(categoryToDelete), 1);
      });

      return this.databaseService.updateOpenTodos(categoriesFromDb);
    });
  }
}
