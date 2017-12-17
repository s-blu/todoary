import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
