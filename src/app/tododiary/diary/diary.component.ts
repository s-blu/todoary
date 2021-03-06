import {Component, OnInit} from '@angular/core';
import {DiaryEntryService} from '../entries/entry.service';
import {Logger} from '../../logger';
import {HttpClient} from '@angular/common/http';
import {todoStatus} from '../../todo/todos/todo-entry';
import {TodoService} from '../../todo/todos/todo.service';

declare function require(moduleName: string): any;

const {version: appVersion} = require('../../../../package.json');

@Component({
  selector: 'ta-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss'],
  providers: [DiaryEntryService]
})
export class DiaryComponent implements OnInit {
  entries;
  showCreateNewEntry = true;
  version = appVersion;

  constructor(private diaryEntryService: DiaryEntryService, private http: HttpClient, private logger: Logger,
              private todoService: TodoService) {
    this.entries = [];
  }

  ngOnInit() {
    this.logger.debug('init diary...');
    this.getEntries().then((entries) => {
      if (entries.length === 0) {
        this.http.get('assets/demoentry.json')
          .subscribe(res => {
            const demoEntry = res['demoEntry'];
            if (demoEntry) {
              const openTodos = demoEntry.todos.filter((todo) => todo.status === todoStatus.OPEN);
              this.todoService.addOpenTodosToDefaultCategory(openTodos);
              this.addEntry(demoEntry);
            }
          });
      }
    }).catch(err => {
      this.logger.error('could not get entries for displaying: ' + err);
    });
  }

  getEntries() {
    return this.diaryEntryService.getEntries().then((entries) => {
      this.logger.debug('setting entries for display...');
      this.entries = entries;
      return entries;
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
