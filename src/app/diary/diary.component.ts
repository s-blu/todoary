import { Component, OnInit } from '@angular/core';
import { Entry } from '../entries/entry';
import {DatabaseService} from '../database/database.service';

@Component({
  selector: 'ta-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss'],
  providers: [DatabaseService]
})
export class DiaryComponent implements OnInit {
  entries;
  databaseService;
  showCreateNewEntry = false;

  constructor(private db: DatabaseService) {
    this.entries = [];
    this.databaseService = db;
  }

  ngOnInit() {
    console.log('init diary...');
    this.databaseService.getEntries().then((entries) => {
      console.log('entries length is ' + entries.length);
      if (entries.length === 0) {
        const demoEntry = new Entry();
        demoEntry.notes = 'I am a Demo Entry!';
        this.addEntry(demoEntry);
      }
      console.log('setting entries for display...');
      this.entries = entries;
    }).catch(err => {
      console.log('could not get entries for displaying:');
      console.log(err);
    });
  }

  addEntry(entry) {
    console.log('adding new entry...');
    this.showCreateNewEntry = false;
    this.entries.unshift(entry);
    this.databaseService.updateEntries(this.entries).then((entries) => this.entries = entries);
  }

  destroyCreateEntry() {
    this.showCreateNewEntry = false;
  }

  showCreateEntry() {
    this.showCreateNewEntry = true;
  }

}
