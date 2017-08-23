import { Component, OnInit } from '@angular/core';
import { MdButtonModule } from '@angular/material';
import { Entry } from '../entry';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  entries;

  constructor() {
    this.entries = [];
  }

  ngOnInit() {
    const demoEntry = new Entry();
    demoEntry.notes = "I am a Demo Entry!";
    this.entries.push(demoEntry)// todo generate demo entry on init
  }

  addEntry() {
    this.entries.push(new Entry());
  }

}
