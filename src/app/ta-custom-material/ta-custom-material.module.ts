import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const materialModules = [CommonModule, BrowserAnimationsModule, MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule];

@NgModule({
  imports: materialModules,
  exports: materialModules,
  declarations: []
})
export class TaCustomMaterialModule {
}
