import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ta-entry-headline',
  templateUrl: './entry-headline.component.html',
  styleUrls: ['./entry-headline.component.scss']
})
export class EntryHeadlineComponent implements OnInit {
@Input() title: String;

  constructor() { }

  ngOnInit() {
  }

}
