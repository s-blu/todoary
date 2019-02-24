import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Entry} from '../../tododiary/entries/entry';
import {TaCustomMaterialModule} from '../../ta-custom-material/ta-custom-material.module';
import {TodoService} from '../../todo/todos/todo.service';
import {todoStatus} from '../../todo/todos/todo-entry';
import {Logger} from '../../logger';
import {MatSnackBar} from '@angular/material';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

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
      event.todo.isNew = true;
      category.todos.push(event.todo);
    } else {
      this.logger.debug('addNewTodo got called without todo. adding nothing.');
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    event.item.data.isMoved = true;
  }

  cancel() {
    this.onCancel.emit(null);
  }

  updateOpenTodosAndRetrieveEntryTodos() {
    const todosForEntry = [];

    return this.todoService.getOpenTodos().then((todoCategories) => {
      this.todos.forEach((category, indexCat) => {
        todoCategories[indexCat].todos = category.todos.filter((todo) => {
          if (todo.isNew) {
            const copiedTodo = Object.assign({}, todo);
            delete todo.isMoved;
            delete todo.isNew;

            // do not add newly created and instantly deleted todos to the entry or the openTodo list. Just discard them.
            if (todo.status === todoStatus.DELETED) {
              this.showDismissedTodosHint = true;
              return false;
            }
            if (!category.default) {
              todo.category = category.name;
            }
            todosForEntry.push(copiedTodo);
            // open and done todos needs to be added to the entry, but only open todos should be added to the category
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
          if (todo.isMoved) {
            const copiedTodo = Object.assign({}, todo);
            delete todo.isMoved;

            todosForEntry.push(copiedTodo);
          }
          return true;
        });
      });
      return this.todoService.updateOpenTodos(todoCategories).then(() => todosForEntry);
    });
  }
}
