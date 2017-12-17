export class Entry {
  meta;
  todos;
  notes;

  constructor(notes = '', todos = []) {
    this.meta = {
      timestamp: Date.now()
    };
    this.todos = todos;
    this.notes = notes;
  }

}
