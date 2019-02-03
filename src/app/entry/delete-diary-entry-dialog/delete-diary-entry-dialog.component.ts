import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Entry} from '../../tododiary/entries/entry';

@Component({
  selector: 'ta-delete-diary-entry-dialog',
  templateUrl: './delete-diary-entry-dialog.component.html',
  styleUrls: ['./delete-diary-entry-dialog.component.scss']
})
export class DeleteDiaryEntryDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteDiaryEntryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Entry) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
