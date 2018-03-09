import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'ta-create-category-dialog',
  templateUrl: './create-category-dialog.component.html',
  styleUrls: ['./create-category-dialog.component.scss']
})
export class CreateCategoryDialogComponent {
  name;

  constructor(public dialogRef: MatDialogRef<CreateCategoryDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
