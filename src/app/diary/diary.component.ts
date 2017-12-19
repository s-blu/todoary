import {Component, OnInit} from '@angular/core';
import {Entry} from '../entries/entry';
import {DiaryEntryService} from '../entries/entry.service';

@Component({
  selector: 'ta-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss'],
  providers: [DiaryEntryService]
})
export class DiaryComponent implements OnInit {
  entries;
  showCreateNewEntry = false;

  constructor(private diaryEntryService: DiaryEntryService) {
    this.entries = [];
  }

  ngOnInit() {
    console.log('init diary...');
    this.diaryEntryService.getEntries().then((entries) => {
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
    this.diaryEntryService.addEntry(entry).then((entries) => {
      this.destroyCreateEntry();
      this.entries = entries;
    });
  }

  destroyCreateEntry() {
    this.showCreateNewEntry = false;
  }

  showCreateEntry() {
    this.showCreateNewEntry = true;
  }
}
