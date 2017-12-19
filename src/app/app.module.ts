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

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    DiaryEntryComponent,
    CreateEntryComponent,
    EntryHeadlineComponent,
    ExportButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TaCustomMaterialModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'de'}, TodoService, TodoEntryService, DiaryEntryService, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
