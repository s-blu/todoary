import {Component, OnInit} from '@angular/core';
import {Entry} from '../entries/entry';
import {DiaryEntryService} from '../entries/entry.service';
import {Logger} from '../logger';

@Component({
  selector: 'ta-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss'],
  providers: [DiaryEntryService]
})
export class DiaryComponent implements OnInit {
  entries;
  showCreateNewEntry = false;

  constructor(private diaryEntryService: DiaryEntryService, private logger: Logger) {
    this.entries = [];
  }

  ngOnInit() {
    this.logger.debug('init diary...');
    this.diaryEntryService.getEntries().then((entries) => {
      if (entries.length === 0) {
        const demoEntry = new Entry();
        demoEntry.notes = 'I am a Demo Entry!';
        this.addEntry(demoEntry);
      }
      this.logger.debug('setting entries for display...');
      this.entries = entries;
    }).catch(err => {
      this.logger.error('could not get entries for displaying: ' + err);
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
