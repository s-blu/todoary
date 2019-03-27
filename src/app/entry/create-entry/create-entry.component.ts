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

  async updateOpenTodosAndRetrieveEntryTodos() {
    const serverTodoCategories = await this.todoService.getOpenTodos();
    const todosForEntry = [];

    this.todos.forEach((category, indexCat) => {
      const newTodosForCategory = [];

      category.todos.forEach((todo) => {
        _addTodoToEntryIfNecessary(todo, category, todosForEntry);
        _sanitizeTodo(todo);
        if (todo.status === todoStatus.OPEN) {
          newTodosForCategory.push(todo);
        }
      });
      console.log(newTodosForCategory);
      serverTodoCategories[indexCat].todos = newTodosForCategory;
    });

    await this.todoService.updateOpenTodos(serverTodoCategories);
    return todosForEntry;

    function _sanitizeTodo(todo) {
      delete todo.isMoved;
      delete todo.isNew;
    }

    function _addTodoToEntryIfNecessary(todo, category, entryTodos) {
      const copiedTodo = Object.assign({}, todo);

      // do not add newly created and instantly deleted todos to the entry or the openTodo list. Just discard them.
      if (todo.isNew && todo.status === todoStatus.DELETED) {
        // this.showDismissedTodosHint = true; // FIXME replace with a event/message
        return false;
      }
      if (todo.status === todoStatus.OPEN && !(todo.isNew || todo.isMoved)) {
        return false;
      }

      if (!category.default) {
        copiedTodo.category = category.name;
      }
      entryTodos.push(copiedTodo);

      return true;
    }
  }
}
