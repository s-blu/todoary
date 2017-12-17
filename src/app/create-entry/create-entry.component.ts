import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Entry} from "../entry";

@Component({
  selector: 'ta-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.scss'],
})
export class CreateEntryComponent implements OnInit {
  @Output() submitRequest = new EventEmitter<Entry>();
  newEntry = new Entry();

  submit() {
    //todo clear form
    this.submitRequest.emit(this.newEntry);
  }

  cancel() {
    //todo clear form
  }

  constructor() { }

  ngOnInit() {
  }

}
