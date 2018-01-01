import {Injectable} from '@angular/core';
import PouchDB from 'pouchdb';
import {Logger} from '../logger';

@Injectable()
export class DatabaseService {
  db;
  dbName = 'todoary';
  entriesKey = 'todoary_entries';
  openTodosKey = 'todoary_opentodos';

  constructor(private logger: Logger) {
  }

  getDatabase() {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        this.logger.info('No database found. Trying to fetch it ...');
        this.createDatabase().then(() => resolve(this.db)); // todo should you really create in a get?
      } else {
        this.logger.debug('giving database instance ....');
        resolve(this.db);
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
      this.logger.debug('successfully initalized, returning database');
      return db;
    });
  }


  updateEntries(entries) {
    let db;
    this.logger.debug('updating entries...');

    return this.getDatabase()
      .then((database) => db = database)
      .then(() => db.get(this.entriesKey))
      .then((doc) => {
        doc.entries = entries;
        return db.put(doc);
      }).then(() => {
        this.logger.debug('successfully updated entries in database!');
        return this.getEntries();
      }).catch((error) => {
        this.logger.error('could not execute updateEntries: ' + error);
        return error;
      });
  }

  getEntries() {
    let db;
    this.logger.debug('getting entries...');
    return this.getDatabase()
      .then((database) => db = database)
      .then(() => db.get(this.entriesKey))
      .then((doc) => doc.entries)
      .catch((error) => {
        this.logger.error('could not get entries: ' + error);
        return error;
      });
  }

  updateOpenTodos(todos) {
    let db;
    this.logger.debug('updating todos...');
    return this.getDatabase()
      .then((database) => db = database)
      .then(() => db.get(this.openTodosKey))
      .then((doc) => {
        doc.todos = todos;
        return db.put(doc);
      })
      .then(() => {
        this.logger.debug('successfully updated open todos in database!');
        return this.getOpenTodos();
      })
      .catch((error) => {
        this.logger.error('could not execute updateOpenTodos: ' + error);
        return error;
      });
  }

  getOpenTodos() {
    let db;
    this.logger.debug('getting todos...');
    return this.getDatabase()
      .then((database) => db = database)
      .then(() => db.get(this.openTodosKey))
      .then(doc => doc.todos)
      .catch((err) => {
        this.logger.error('could not get open todos: ' + err);
        return err;
      });
  }

  getDataForExport() {
    const data = {
      entries: null,
      todos: null
    };

    return this.getEntries().then((entries) => {
      data.entries = entries;
      return this.getOpenTodos();
    }).then((todos) => {
      data.todos = todos;
      return data;
    }).catch(err => err);
  }
}
