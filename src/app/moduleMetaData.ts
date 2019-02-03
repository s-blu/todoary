import {AppComponent} from './app.component';
import {TodoEntryEditableComponent} from './todo/todo-entry-editable/todo-entry-editable.component';
import {CreateTodoComponent} from './todo/create-todo/create-todo.component';
import {CreateEntryComponent} from './entry/create-entry/create-entry.component';
import {DiaryComponent} from './tododiary/diary/diary.component';
import {ManageCategoriesDialogComponent} from './categories/manage-categories-dialog/manage-categories-dialog.component';
import {ExportButtonComponent} from './importexport/export-button/export-button.component';
import {CategoryHeaderComponent} from './categories/category-header/category-header.component';
import {NewCategoryButtonComponent} from './categories/new-category-button/new-category-button.component';
import {CreateCategoryDialogComponent} from './categories/create-category-dialog/create-category-dialog.component';
import {ManageCategoriesButtonComponent} from './categories/manage-categories-button/manage-categories-button.component';
import {EntryHeadlineComponent} from './entry/entry-headline/entry-headline.component';
import {DiaryEntryComponent} from './entry/diary-entry/diary-entry.component';
import {TodoEntryReadmodeComponent} from './todo/todo-entry-readmode/todo-entry-readmode.component';
import {DeleteDiaryEntryDialogComponent} from './entry/delete-diary-entry-dialog/delete-diary-entry-dialog.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TaCustomMaterialModule} from './ta-custom-material/ta-custom-material.module';
import {BrowserModule} from '@angular/platform-browser';
import {TodoService} from './todo/todos/todo.service';
import {DiaryEntryService} from './tododiary/entries/entry.service';
import {TodoEntryService} from './todo/todos/todo-entry.service';
import {CategoryService} from './categories/category/category.service';
import {Logger} from './logger';
import {LOCALE_ID} from '@angular/core';
import {DatabaseService} from './tododiary/database/database.service';
import {MatDialog, MatSnackBar} from '@angular/material';

export class ModuleMetaData {

  static getMetaData() {
    return {
      declarations: [
        AppComponent,
        DiaryComponent,
        DiaryEntryComponent,
        CreateEntryComponent,
        EntryHeadlineComponent,
        ExportButtonComponent,
        TodoEntryEditableComponent,
        TodoEntryReadmodeComponent,
        CreateTodoComponent,
        DeleteDiaryEntryDialogComponent,
        NewCategoryButtonComponent,
        CreateCategoryDialogComponent,
        CategoryHeaderComponent,
        ManageCategoriesDialogComponent,
        ManageCategoriesButtonComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        TaCustomMaterialModule,
        HttpClientModule
      ],
      providers: [{
        provide: LOCALE_ID,
        useValue: 'de'
      }, TodoService, TodoEntryService, DiaryEntryService, DatabaseService,
        Logger, MatSnackBar, MatDialog, CategoryService]
    };
  }
}
