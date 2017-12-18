import {Injectable} from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable()
export class DatabaseService {
  db;
  dbName = 'todoary';
  entriesKey = 'todoary_entries';
  openTodosKey = 'todoary_opentodos';

  constructor() {
  }

  getDatabase() {
    return new Promise(() => {
      if (!this.db) {
        console.log('No database found. Trying to fetch it ...');
        this.createDatabase().then(() => this.db); // todo should you really create in a get?
      } else {
        console.log('giving database instance ....');
        return this.db;
      }
    });
  }

  private createDatabase() {
    this.db = new PouchDB(this.dbName);
    // initialize database if empty
    return this.initializeDatabase(this.db);
  }

  private initializeDatabase(db) {
    return db.info().then((info) => {
      if (info.doc_count === 0) {
        return db.bulkDocs([
          {
            '_id': this.entriesKey,
            'entries': []
          },
          {
            '_id': this.openTodosKey,
            'todos': []
          }
        ]);
      }
    }).then(() => {
      console.log('successfully initalized, returning database');
      return db;
    });
  }


  updateEntries(entries) {
    let db;
    console.log('updating entries...');

    return this.getDatabase()
      .then((database) => db = database)
      .then(() => db.get(this.entriesKey))
      .then((doc) => {
        doc.entries = entries;
        return db.put(doc);
      }).then(() => {
        console.log('successfully updated entries in database!');
      }).catch((error) => {
        console.log('could not execute updateEntries:');
        console.log(error);
        return error;
      });
  }

  getEntries() {
    let db;
    console.log('getting entries...');
    return this.getDatabase()
      .then((database) => db = database)
      .then(() => db.get(this.entriesKey))
      .then((doc) => doc.entries)
      .catch((error) => {
        console.log('could not get entries:');
        console.log(error);
        return error;
      });
  }

  updateOpenTodos(todos) {
    let db;
    console.log('updating todos...');
    return this.getDatabase()
      .then((database) => db = database)
      .then(() => db.get(this.openTodosKey))
      .then((doc) => {
        doc.todos = todos;
        return db.put(doc);
      })
      .then(() => {
        console.log('successfully updated open todos in database!');
      })
      .catch((error) => {
        console.log('could not execute updateOpenTodos:');
        console.log(error);
        return error;
      });
  }

  getOpenTodos() {
    let db;
    console.log('getting todos...');
    return this.getDatabase()
      .then((database) => db = database)
      .then(() => db.get(this.openTodosKey))
      .then(doc => doc.todos)
      .catch((err) => {
        console.log('could not get open todos:');
        console.log(err);
      });
  }
}
