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

  addNewTodo(todo) {
    if (todo) {
      this.todos.push(todo);
    } else {
      this.logger.debug('addNewTodo got called without todo. adding nothing.');
    }
  }

  cancel() {
    this.onCancel.emit(null);
  }

  updateOpenTodosAndRetrieveEntryTodos() {
    const todosForEntry = [];
    let newOpenTodos;

    return this.todoService.getOpenTodos().then((unchangedTodos) => {
      newOpenTodos = this.todos.filter((todo, index) => {
        if (unchangedTodos.length < index + 1) {
            // do not add newly created and instantly deleted todos to the entry or the openTodo list. Just discard them.
            if (todo.status === todoStatus.DELETED) {
              this.showDismissedTodosHint = true;
              return false;

            }
          todosForEntry.push(todo);
          return true;
        }
        if (todo.status === todoStatus.DONE || todo.status === todoStatus.DELETED) {
          todosForEntry.push(todo);
          // dismiss from open todos
          return false;
        }
        return true;
      });

      return this.todoService.updateOpenTodos(newOpenTodos).then(() => todosForEntry);
    });
  }
}
