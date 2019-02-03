import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {CategoryService} from '../category/category.service';

@Component({
  selector: 'ta-manage-categories-dialog',
  templateUrl: './manage-categories-dialog.component.html',
  styleUrls: ['./manage-categories-dialog.component.scss']
})
export class ManageCategoriesDialogComponent implements OnInit {
  categories;
  deleted;

  constructor(public dialogRef: MatDialogRef<ManageCategoriesDialogComponent>, private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.deleted = [];
    this.categoryService.getCategories().then((categories) => {
      this.categories = categories.filter((cat) => !cat.default);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  markAsDeleted(category) {
    category.markedAsDeleted = !category.markedAsDeleted;
  }
}

