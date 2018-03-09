import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {TodoEntryEditableComponent} from './todo-entry-editable/todo-entry-editable.component';
import {CreateTodoComponent} from './create-todo/create-todo.component';
import {CreateEntryComponent} from './create-entry/create-entry.component';
import {DiaryComponent} from './diary/diary.component';
import {ManageCategoriesDialogComponent} from './manage-categories-dialog/manage-categories-dialog.component';
import {ExportButtonComponent} from './export-button/export-button.component';
import {CategoryHeaderComponent} from './category-header/category-header.component';
import {NewCategoryButtonComponent} from './new-category-button/new-category-button.component';
import {CreateCategoryDialogComponent} from './create-category-dialog/create-category-dialog.component';
import {ManageCategoriesButtonComponent} from './manage-categories-button/manage-categories-button.component';
import {EntryHeadlineComponent} from './entry-headline/entry-headline.component';
import {DiaryEntryComponent} from './diary-entry/diary-entry.component';
import {TodoEntryReadmodeComponent} from './todo-entry-readmode/todo-entry-readmode.component';
import {DeleteDiaryEntryDialogComponent} from './delete-diary-entry-dialog/delete-diary-entry-dialog.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TaCustomMaterialModule} from './ta-custom-material/ta-custom-material.module';
import {BrowserModule} from '@angular/platform-browser';
import {TodoService} from './todos/todo.service';
import {DiaryEntryService} from './entries/entry.service';
import {TodoEntryService} from './todos/todo-entry.service';
import {CategoryService} from './category/category.service';
import {Logger} from './logger';
import {LOCALE_ID, SchemaMetadata} from '@angular/core';
import {DatabaseService} from './database/database.service';
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
