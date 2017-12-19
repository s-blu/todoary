import {Injectable} from '@angular/core';
import {DatabaseService} from '../database/database.service';

@Injectable()
export class DiaryEntryService {

  constructor(private databaseService: DatabaseService) {
  }

  getEntries() {
    return this.databaseService.getEntries();
  }

  addEntry(entry) {
    console.log('adding a new entry...');
    return this.getEntries()
      .then((entries) => {
        entries.unshift(entry);
        return entries;
      })
      .then((entries) => this.databaseService.updateEntries(entries));
  }

  deleteEntry(entry) {
    console.log('removing entry...');
    return this.getEntries()
      .then((entries) => {
        const index = entries.indexOf(entry);
        if ( index !== -1) {
          entries.splice(index, 1);
        } else {
          console.log('could not find given entry. cannot remove.');
        }
        return entries;
      })
      .then((entries) => this.databaseService.updateEntries(entries));
  }
}
