import { Injectable } from '@angular/core';

@Injectable()
export class TodoEntryService {

  createNewTodo(text) {
    const newTodo = new TodoEntry(text);
    return newTodo;
  }

  setDone(todo) {
    todo.status = status.DONE;
  }

  delete(todo) {
    todo.status = status.DELETED;
  }
}

enum status {
  TODO,
  DONE,
  DELETED = -1
}

class TodoEntry {
  status;
  text;

  constructor(text) {
    this.status = status.TODO;
    this.text = text || '';
  }
}
