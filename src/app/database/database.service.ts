import {Injectable} from '@angular/core';
import PouchDB from 'pouchdb';
import {Logger} from '../logger';
import {Category} from '../category/category';

const TODOARY_DB_VERSION = '2';

@Injectable()
export class DatabaseService {
  db;
  dbName = 'todoary';
  entriesKey = 'todoary_entries';
  openTodosKey = 'todoary_opentodos';
  todoCategoriesKey = 'todoary_todocategories';
  metaDataKey = 'todoary_meta';


  constructor(private logger: Logger) {
  }

  getOrCreateDatabase() {
    const resolveWithDatabase = (resolve, db) => {
      this._migrateDatabaseIfNecessary(db).then(() => {
        this.logger.debug('giving database instance ....');
        resolve(db);
      });
    };

    return new Promise((resolve, reject) => {
      if (!this.db) {
        this.logger.info('No database found. Trying to fetch it ...');
        this.createDatabase().then(() => {
          resolveWithDatabase(resolve, this.db);
        });
      } else {
        resolveWithDatabase(resolve, this.db);
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
        const defaultCategory = new Category('default');
        defaultCategory.default = true;

        return db.bulkDocs([
          {
            '_id': this.metaDataKey,
            'db_version': TODOARY_DB_VERSION
          },
          {
            '_id': this.entriesKey,
            'entries': []
          },
          {
            '_id': this.todoCategoriesKey,
            'categories': [defaultCategory]
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

    return this.getOrCreateDatabase()
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
    return this.getOrCreateDatabase()
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
    return this.getOrCreateDatabase()
      .then((database) => db = database)
      .then(() => db.get(this.todoCategoriesKey))
      .then((doc) => {
        doc.categories = todos;
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

  createNewCategory(category) {
    let db;
    this.logger.debug(`creating new category ${category}`);
    return this.getOrCreateDatabase()
      .then((database) => db = database)
      .then(() => db.get(this.todoCategoriesKey))
      .then((doc) => {
        doc.categories.push(category);
        return db.put(doc);
      })
      .then(() => {
        this.logger.debug(`successfully created new category ${category.name}`);
        return this.getOpenTodos();
      })
      .catch((error) => {
        this.logger.error('could not execute createNewCategory: ' + error);
        return error;
      });
  }

  getOpenTodos() {
    let db;
    this.logger.debug('getting todos...');
    return this.getOrCreateDatabase()
      .then((database) => db = database)
      .then(() => db.get(this.todoCategoriesKey))
      .then(doc => doc.categories)
      .catch((err) => {
        this.logger.error('could not get open todos: ' + err);
        return err;
      });
  }

  getDataForExport() {
    const data = {
      entries: null,
      categories: null
    };

    return this.getEntries().then((entries) => {
      data.entries = entries;
      return this.getOpenTodos();
    }).then((todos) => {
      data.categories = todos;
      return data;
    }).catch(err => err);
  }

  _migrateDatabaseIfNecessary(db) {
    return db.get(this.metaDataKey).then((metadata) => {
      // v1 did not have any metadata, hence it needs to be migrated by catching the 404 error. there is nothing else to migrate yet.
    }).catch(error => {
      // v1 databases have no metadata at all
      if (error.status === 404) {
        return this._migrateDatabaseStructureV1ToV2(db);
      } else {
        this.logger.error(`migration of database failed ${error}`);
      }
    });
  }

  _migrateDatabaseStructureV1ToV2(db) {
    this.logger.info('migrating database from v1 to v2 ...');
    return db.get(this.openTodosKey).then((todosEntry) => {
      const defaultCategory = new Category('default');
      defaultCategory.default = true;
      defaultCategory.todos = todosEntry;

      db.bulkDocs([
        {
          '_id': this.metaDataKey,
          'db_version': '2'
        },
        {
          '_id': this.todoCategoriesKey,
          'categories': [defaultCategory]
        }
      ]);
    });
  }
}
