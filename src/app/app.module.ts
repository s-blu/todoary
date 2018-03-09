import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DiaryComponent} from './diary/diary.component';
import {DiaryEntryComponent} from './diary-entry/diary-entry.component';
import {TaCustomMaterialModule} from './ta-custom-material/ta-custom-material.module';
import {CreateEntryComponent} from './create-entry/create-entry.component';
import {TodoService} from './todos/todo.service';
import {TodoEntryService} from './todos/todo-entry.service';
import {EntryHeadlineComponent} from './entry-headline/entry-headline.component';
import {FormsModule} from '@angular/forms';
import { ExportButtonComponent } from './export-button/export-button.component';
import {DiaryEntryService} from './entries/entry.service';
import {DatabaseService} from './database/database.service';
import { TodoEntryEditableComponent } from './todo-entry-editable/todo-entry-editable.component';
import { TodoEntryReadmodeComponent } from './todo-entry-readmode/todo-entry-readmode.component';
import {Logger} from './logger';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import { DeleteDiaryEntryDialogComponent } from './delete-diary-entry-dialog/delete-diary-entry-dialog.component';
import {HttpClientModule} from '@angular/common/http';
import { NewCategoryButtonComponent } from './new-category-button/new-category-button.component';
import { CreateCategoryDialogComponent } from './create-category-dialog/create-category-dialog.component';
import { CategoryHeaderComponent } from './category-header/category-header.component';
import {CategoryService} from './category/category.service';
import { ManageCategoriesDialogComponent } from './manage-categories-dialog/manage-categories-dialog.component';
import { ManageCategoriesButtonComponent } from './manage-categories-button/manage-categories-button.component';

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
