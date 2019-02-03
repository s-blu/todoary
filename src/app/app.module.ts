import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DiaryComponent} from './tododiary/diary/diary.component';
import {DiaryEntryComponent} from './entry/diary-entry/diary-entry.component';
import {TaCustomMaterialModule} from './ta-custom-material/ta-custom-material.module';
import {CreateEntryComponent} from './entry/create-entry/create-entry.component';
import {TodoService} from './todo/todos/todo.service';
import {TodoEntryService} from './todo/todos/todo-entry.service';
import {EntryHeadlineComponent} from './entry/entry-headline/entry-headline.component';
import {FormsModule} from '@angular/forms';
import {ExportButtonComponent} from './importexport/export-button/export-button.component';
import {DiaryEntryService} from './tododiary/entries/entry.service';
import {DatabaseService} from './tododiary/database/database.service';
import {TodoEntryEditableComponent} from './todo/todo-entry-editable/todo-entry-editable.component';
import {TodoEntryReadmodeComponent} from './todo/todo-entry-readmode/todo-entry-readmode.component';
import {Logger} from './logger';
import {CreateTodoComponent} from './todo/create-todo/create-todo.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import {DeleteDiaryEntryDialogComponent} from './entry/delete-diary-entry-dialog/delete-diary-entry-dialog.component';
import {HttpClientModule} from '@angular/common/http';
import {NewCategoryButtonComponent} from './categories/new-category-button/new-category-button.component';
import {CreateCategoryDialogComponent} from './categories/create-category-dialog/create-category-dialog.component';
import {CategoryHeaderComponent} from './categories/category-header/category-header.component';
import {CategoryService} from './categories/category/category.service';
import {ManageCategoriesDialogComponent} from './categories/manage-categories-dialog/manage-categories-dialog.component';
import {ManageCategoriesButtonComponent} from './categories/manage-categories-button/manage-categories-button.component';
import {CommonModule, registerLocaleData} from "@angular/common";
import de from '@angular/common/locales/de';

registerLocaleData(de);

@NgModule({
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
    CommonModule,
    TaCustomMaterialModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'de'}, TodoService, TodoEntryService, DiaryEntryService, DatabaseService,
    Logger, MatSnackBar, MatDialog, CategoryService],
  bootstrap: [AppComponent],
  entryComponents: [DeleteDiaryEntryDialogComponent, CreateCategoryDialogComponent, ManageCategoriesDialogComponent]
})
export class AppModule {
}
