import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Entry} from '../entries/entry';
import {TaCustomMaterialModule} from '../ta-custom-material/ta-custom-material.module';
import {TodoService} from '../todos/todo.service';
import {todoStatus} from '../todos/todo-entry';

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

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getOpenTodos().then((openTodos) => {
      this.todos = Object.assign(this.todos, openTodos);
    });
  }

  submit() {
    this.updateOpenTodosAndRetrieveEntryTodos().then((todosForEntry) => {
      this.newEntry.todos = todosForEntry;
      this.onSubmit.emit(this.newEntry);
    });
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
