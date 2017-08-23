export class Entry {
  meta;
  todos;
  notes;

  constructor() {
    this.meta = {
      timestamp: Date.now()
    };
    this.todos = [];
    this.notes = '';
  }

}
