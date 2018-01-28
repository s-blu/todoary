
enum todoStatus {
  OPEN,
  DONE,
  DELETED = -1
}

class TodoEntry {
  status;
  text;

  constructor(text) {
    this.status = todoStatus.OPEN;
    this.text = text || '';
  }
}

export {todoStatus, TodoEntry};
