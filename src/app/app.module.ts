import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { DiaryEntryComponent } from './diary-entry/diary-entry.component';
import {TaCustomMaterialModule} from './ta-custom-material/ta-custom-material.module';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import {TodoService} from "./todo.service";
import {TodoEntryService} from "./todo-entry.service";
import { EntryHeadlineComponent } from './entry-headline/entry-headline.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    DiaryEntryComponent,
    CreateEntryComponent,
    EntryHeadlineComponent
  ],
  imports: [
    BrowserModule,
    TaCustomMaterialModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'de' }, TodoService, TodoEntryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
