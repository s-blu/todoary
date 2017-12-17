import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { DiaryEntryComponent } from './diary-entry/diary-entry.component';
import { NewDiaryEntryComponent } from './new-diary-entry/new-diary-entry.component';
import {TaCustomMaterialModule} from './ta-custom-material/ta-custom-material.module';

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    DiaryEntryComponent,
    NewDiaryEntryComponent
  ],
  imports: [
    BrowserModule,
    TaCustomMaterialModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'de' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
