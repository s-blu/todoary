import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const materialModules = [CommonModule, BrowserAnimationsModule, MatButtonModule, MatCardModule, MatToolbarModule,
  MatIconModule, MatInputModule, MatDialogModule];

@NgModule({
  imports: materialModules,
  exports: materialModules,
  declarations: []
})
export class TaCustomMaterialModule {
}
