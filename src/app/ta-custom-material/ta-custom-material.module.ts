import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DragDropModule} from '@angular/cdk/drag-drop';


const materialModules = [CommonModule, BrowserAnimationsModule, MatButtonModule,
  MatIconModule, MatInputModule, MatDialogModule, MatSnackBarModule, MatTooltipModule, DragDropModule];

@NgModule({
  imports: materialModules,
  exports: materialModules,
  declarations: []
})
export class TaCustomMaterialModule {
}
