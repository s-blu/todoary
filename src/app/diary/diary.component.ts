import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import {DatabaseService} from '../database.service';

@Component({
  selector: 'ta-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss'],
  providers: [DatabaseService]
})
export class DiaryComponent implements OnInit {
  entries;
  database;
  showCreateNewEntry = false;

  constructor(private db: DatabaseService) {
    this.entries = [];
    this.database = db;

    db.getEntries().then((doc) => {
      if (doc.entries) {
        this.entries = doc.entries;
      }
    });
  }

  ngOnInit() {
    console.log('init diary...');
    const demoEntry = new Entry();
    demoEntry.notes = 'I am a Demo Entry!';
    this.entries.push(demoEntry); // todo generate demo entry on init
  }

  addEntry(entry) {
    console.log('adding new entry!');
    this.showCreateNewEntry = false;
    this.entries.unshift(entry);
    this.database.updateEntries(this.entries);
  }

}
