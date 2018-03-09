import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';


const materialModules = [CommonModule, BrowserAnimationsModule, MatButtonModule,
  MatIconModule, MatInputModule, MatDialogModule, MatSnackBarModule, MatTooltipModule];

@NgModule({
  imports: materialModules,
  exports: materialModules,
  declarations: []
})
export class TaCustomMaterialModule {
}
