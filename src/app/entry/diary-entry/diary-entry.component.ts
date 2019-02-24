import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Entry} from '../../tododiary/entries/entry';
import {TaCustomMaterialModule} from '../../ta-custom-material/ta-custom-material.module';
import {DeleteDiaryEntryDialogComponent} from '../delete-diary-entry-dialog/delete-diary-entry-dialog.component';
import {MatDialog} from '@angular/material';
import {DiaryEntryService} from '../../tododiary/entries/entry.service';


@Component({
  selector: 'ta-diary-entry',
  templateUrl: './diary-entry.component.html',
  styleUrls: ['./diary-entry.component.scss'],
  providers: [TaCustomMaterialModule]
})
export class DiaryEntryComponent implements OnInit {
  @Input() entry: Entry;
  @Output() onDelete = new EventEmitter();

  constructor(public dialog: MatDialog, private diaryEntryService: DiaryEntryService) {
  }

  ngOnInit() {
  }

  isNoteAvailable() {
    return !!this.entry.notes;
  }

  areTodosAvailable() {
    return this.entry.todos && this.entry.todos.length > 0;
  }

  deleteEntry() {
    const dialogRef = this.dialog.open(DeleteDiaryEntryDialogComponent, {
      data: this.entry
    });

    dialogRef.afterClosed().subscribe(shouldDelete => {
      console.log('The dialog was closed, result was: ' + shouldDelete);
      if (shouldDelete) {
        this.diaryEntryService.deleteEntry(this.entry).then(() => this.onDelete.emit());
      }
    });
  }
}
