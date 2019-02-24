import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {CategoryService} from '../category/category.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Category} from '../category/category';

@Component({
  selector: 'ta-manage-categories-dialog',
  templateUrl: './manage-categories-dialog.component.html',
  styleUrls: ['./manage-categories-dialog.component.scss']
})
export class ManageCategoriesDialogComponent implements OnInit {
  categories;
  newCategoryName = '';

  constructor(public dialogRef: MatDialogRef<ManageCategoriesDialogComponent>, private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.getCategories().then((categories) => {
      this.categories = categories.filter((cat) => !cat.default);
    });
  }

  createNewCategory() {
    const category = new Category(this.newCategoryName);
    this.categories.push(category);
    this.newCategoryName = '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  markAsDeleted(category) {
    category.markedAsDeleted = !category.markedAsDeleted;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.categories, event.previousIndex, event.currentIndex);
  }
}

