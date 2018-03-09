import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Entry} from '../entries/entry';
import {TaCustomMaterialModule} from '../ta-custom-material/ta-custom-material.module';
import {TodoService} from '../todos/todo.service';
import {todoStatus} from '../todos/todo-entry';
import {Logger} from '../logger';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'ta-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.scss'],
  providers: [TaCustomMaterialModule]
})
export class CreateEntryComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Entry>();
  @Output() onCancel = new EventEmitter();
  newEntry = new Entry();
  todos = [];
  showDismissedTodosHint = false;

  constructor(private todoService: TodoService, private logger: Logger, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.todoService.getOpenTodos().then((openTodos) => {
      this.todos = Object.assign(this.todos, openTodos);
    });
  }

  submit() {
    this.updateOpenTodosAndRetrieveEntryTodos().then((todosForEntry) => {
      this.newEntry.todos = todosForEntry;
      if (this.showDismissedTodosHint) {
        this.snackBar.open('Todos that are created and deleted in one step are dismissed.', null, {
          duration: 2500
        });
      }
      this.onSubmit.emit(this.newEntry);
    });
  }

  addNewTodo(event) {
    if (event) {
      const category = this.todos.find((cat) => cat.name === event.category.name);
      if (!category) {
        this.logger.error(`could not find category given by event: ${event}`);
        return;
      }
      category.todos.push(event.todo);
    } else {
      this.logger.debug('addNewTodo got called without todo. adding nothing.');
    }
  }

  cancel() {
    this.onCancel.emit(null);
  }

  updateOpenTodosAndRetrieveEntryTodos() {
    const todosForEntry = [];

    return this.todoService.getOpenTodos().then((todoCategories) => {
      this.todos.forEach((category, indexCat) => {
        todoCategories[indexCat].todos = category.todos.filter((todo, indexTodos) => {
          if (todoCategories[indexCat].todos.length < indexTodos + 1) {
            // do not add newly created and instantly deleted todos to the entry or the openTodo list. Just discard them.
            if (todo.status === todoStatus.DELETED) {
              this.showDismissedTodosHint = true;
              return false;

            }
            if (!category.default) {
              todo.category = category.name;
            }
            todosForEntry.push(todo);
            // open and done todos needs to be added to the entry, but only open todos should be added to the openTodos
            return todo.status === todoStatus.OPEN;
          }
          if (todo.status === todoStatus.DONE || todo.status === todoStatus.DELETED) {
            if (!category.default) {
              todo.category = category.name;
            }
            todosForEntry.push(todo);
            // dismiss from open todos
            return false;
          }
          return true;
        });
      });
      console.log(todoCategories);
      return this.todoService.updateOpenTodos(todoCategories).then(() => todosForEntry);
    });
  }
}
