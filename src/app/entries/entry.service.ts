import {Injectable} from '@angular/core';
import {DatabaseService} from '../database/database.service';
import {Logger} from '../logger';

@Injectable()
export class DiaryEntryService {

  constructor(private databaseService: DatabaseService, private logger: Logger) {
  }

  getEntries() {
    return this.databaseService.getEntries();
  }

  addEntry(entry) {
    this.logger.debug('adding a new entry...');
    return this.getEntries()
      .then((entries) => {
        entries.unshift(entry);
        return entries;
      })
      .then((entries) => this.databaseService.updateEntries(entries));
  }

  deleteEntry(entry) {
    this.logger.debug('removing entry...');
    return this.getEntries()
      .then((entries) => {
        const index = entries.indexOf(entry);
        if ( index !== -1) {
          entries.splice(index, 1);
        } else {
          this.logger.warn('could not find given entry. cannot remove.');
        }
        return entries;
      })
      .then((entries) => this.databaseService.updateEntries(entries));
  }
}
