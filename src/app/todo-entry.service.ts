import { Injectable } from '@angular/core';

@Injectable()
export class TodoEntryService {
  status;
  text;

  constructor() {
    this.status = status.TODO;
    this.text = '';
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
