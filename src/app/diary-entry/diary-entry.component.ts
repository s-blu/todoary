import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../entry';
import {TaCustomMaterialModule} from '../ta-custom-material/ta-custom-material.module';



@Component({
  selector: 'ta-diary-entry',
  templateUrl: './diary-entry.component.html',
  styleUrls: ['./diary-entry.component.scss'],
  providers: [TaCustomMaterialModule]
})
export class DiaryEntryComponent implements OnInit {
  @Input() entry: Entry;

  constructor() { }

  ngOnInit() {
  }

}
