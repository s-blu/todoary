import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {CreateCategoryDialogComponent} from '../create-category-dialog/create-category-dialog.component';
import {CategoryService} from '../category/category.service';

@Component({
  selector: 'ta-new-category-button',
  templateUrl: './new-category-button.component.html',
  styleUrls: ['./new-category-button.component.scss']
})
export class NewCategoryButtonComponent implements OnInit {

  constructor(public dialog: MatDialog, private categoryService: CategoryService) { }

  ngOnInit() {
  }

  createNewCategory() {
    const dialogRef = this.dialog.open(CreateCategoryDialogComponent);

    dialogRef.afterClosed().subscribe(name => {
      if (name) {
        this.categoryService.createNewCategory(name);
      }
    });
  }

}
