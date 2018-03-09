import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../category/category';
import {CategoryService} from '../category/category.service';

@Component({
  selector: 'ta-category-header',
  templateUrl: './category-header.component.html',
  styleUrls: ['./category-header.component.scss']
})
export class CategoryHeaderComponent implements OnInit {

  @Input() category: Category;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  switchVisibility() {
    this.categoryService.changeCategoryCollapsedState(this.category, !this.category.collapsed);
  }

}
