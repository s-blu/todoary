import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Entry} from '../entry';
import {TaCustomMaterialModule} from '../ta-custom-material/ta-custom-material.module';
import {TodoService} from '../todo.service';

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
  todos;

  submit() {
    this.onSubmit.emit(this.newEntry);
  }

  cancel() {
    this.onCancel.emit(null);
  }

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos(); // fixme this is async dude
  }

  ngOnInit() {

  }

}
