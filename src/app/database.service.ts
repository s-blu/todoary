import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable()
export class DatabaseService {
  db;
  dbName = 'todoary';
  entries = 'todoary_entries';
  openTodos = 'todoary_opentodos';

  constructor() {
    this.db = this.getDatabase();
  }

  getDatabase() {
    if (!this.db) {
      this.db = new PouchDB(this.dbName);

      // initialize database if empty
      this.db.info().then((info) => {
        if (info.doc_count === 0) {
          this.db.put({
            '_id': this.entries,
            'entries': []
          });

          this.db.put({
            '_id': this.openTodos,
            'todos': []
          });
        }
      });
    }

    return this.db;
  }

  updateEntries(entries) {
    return this.getDatabase().get(this.entries).then((doc) => {
      doc.entries = entries;
      return this.getDatabase().put(doc);
    }).then(() => {
      console.log('successfully updated entries in database!');
    }).catch((error) => {
      console.log('could not execute updateEntries');
      console.log(error);
    });
  }

  getEntries() {
    return this.getDatabase().get(this.entries);
  }

  updateOpenTodos(todos) {
    this.getDatabase().get(this.openTodos).then((doc) => {
      doc.todos = todos;
      return this.getDatabase().put(doc);
    }).then(() => {
      console.log('successfully updated open todos in database!');
    }).catch((error) => {
      console.log('could not execute updateOpenTodos');
      console.log(error);
    });
  }

  getOpenTodos() {
    return this.getDatabase().get(this.openTodos);
  }
}
