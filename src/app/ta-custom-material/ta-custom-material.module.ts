import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule,
  MatPseudoCheckboxModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const materialModules = [CommonModule, BrowserAnimationsModule, MatButtonModule, MatCardModule, MatToolbarModule,
  MatIconModule, MatInputModule, MatCheckboxModule, MatPseudoCheckboxModule];

@NgModule({
  imports: materialModules,
  exports: materialModules,
  declarations: []
})
export class TaCustomMaterialModule {
}
