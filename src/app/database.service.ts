import { Injectable } from '@angular/core';
import { PouchDB } from 'pouchdb';

@Injectable()
export class DatabaseService {
  db;
  dbName = 'todoary';

  constructor() {
    this.db = new PouchDB(this.dbName);
  }

  getDatabase() {
    if (!this.db) {
      this.db = new PouchDB(this.dbName)
    }

    return this.db;
  }

  saveDocument(name, data) {

  }

}
