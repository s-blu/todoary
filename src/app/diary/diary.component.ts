import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';

@Component({
  selector: 'ta-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {
  entries;

  constructor() {
    // todo save and get entries from database
    this.entries = [];
  }

  ngOnInit() {
    console.log('init diary...');
    const demoEntry = new Entry();
    demoEntry.notes = 'I am a Demo Entry!';
    this.entries.push(demoEntry); // todo generate demo entry on init
  }

  addEntry() {
    //todo create editable entry here

    this.entries.push(new Entry());
  }

}
