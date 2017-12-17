import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Entry} from "../entry";
import {TaCustomMaterialModule} from "../ta-custom-material/ta-custom-material.module";
import {TodoService} from "../todo.service";

@Component({
  selector: 'ta-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.scss'],
  providers: [TaCustomMaterialModule]
})
export class CreateEntryComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Entry>();
  newEntry = new Entry();
  todos;

  submit() {
    //todo clear form
    this.newEntry.notes = 'i was just created!';
    this.onSubmit.emit(this.newEntry);
  }

  cancel() {
    //todo clear form
  }

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  ngOnInit() {

  }

}
