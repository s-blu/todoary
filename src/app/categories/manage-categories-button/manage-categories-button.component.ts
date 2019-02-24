import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../category/category.service';
import {MatDialog} from '@angular/material';
import {ManageCategoriesDialogComponent} from '../manage-categories-dialog/manage-categories-dialog.component';

@Component({
  selector: 'ta-manage-categories-button',
  templateUrl: './manage-categories-button.component.html',
  styleUrls: ['./manage-categories-button.component.scss']
})
export class ManageCategoriesButtonComponent implements OnInit {

  constructor(public dialog: MatDialog, private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  manageCategories() {
    const dialogRef = this.dialog.open(ManageCategoriesDialogComponent);

    dialogRef.afterClosed().subscribe(categories => {
      if (!categories) {
        return;
      }

      this.categoryService.setCategories(categories).then(() => {
        const categoriesForDeletion = categories.filter((cat) => cat.markedAsDeleted);

        if (categoriesForDeletion.length > 0) {
          this.categoryService.deleteCategoriesAndPreserveTodos(categoriesForDeletion);
        }
      });
    });
  }

}
