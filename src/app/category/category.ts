
export class Category {
  name;
  todos;
  collapsed;
  default;
  created;

  constructor(name) {
    this.name = name;
    this.todos = [];
    this.collapsed = false;
    this.default = false;
    this.created = Date.now();
  }
}
