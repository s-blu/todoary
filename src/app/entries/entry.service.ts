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
        const index = entries.findIndex((element) => {
          return this.isEntryEqual(entry, element);
        });

        if (index !== -1) {
          entries.splice(index, 1);
        } else {
          this.logger.error('could not find given entry. cannot remove.');
        }
        return entries;
      })
      .then((entries) => this.databaseService.updateEntries(entries));
  }

  isEntryEqual(element1, element2) {
    if (!(element1 instanceof Object && element2 instanceof Object)) {
      return false;
    }

    if (!isMetaEqual() || !areTodosEqual()) {
      return false;
    }

    return element1.notes === element2.notes;

    function isMetaEqual() {
      if (!element1.meta.length === element2.meta.length) {
        return false;
      }
      const equalMeta = Object.keys(element1.meta).every((metaKey) => {
        return element2.meta[metaKey] && element1.meta[metaKey] === element2.meta[metaKey];
      });
      return equalMeta;
    }

    function areTodosEqual() {
      if (!element1.todos && !element2.todos) {
        return true;
      }
      if (!element1.todos.length === element2.todos.length) {
        return false;
      }
      const equal = element1.todos.every((todo, index) => {
        return todo.status === element2.todos[index].status && todo.text === element2.todos[index].text;
      });
      return equal;
    }
  }
}
