import {Component, OnInit, Renderer2} from '@angular/core';
import {DatabaseService} from '../database/database.service';

@Component({
  selector: 'ta-export-button',
  templateUrl: './export-button.component.html',
  styleUrls: ['./export-button.component.scss'],
  providers: [DatabaseService]
})
export class ExportButtonComponent implements OnInit {
  constructor(private dbService: DatabaseService, private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  /**
   * Code Base from https://gist.github.com/derekshi/2d4969c59627ab5aca65b37eaeab72fc
   * @param element
   */
  exportData(element) {
    console.log(element);
    this.dbService.getDataForExport().then((data) => {
      const exportString = JSON.stringify(data);
      const timestamp = new Date().toISOString();
      const filename = `todoary_export_${timestamp}.json`;

      const blob = new Blob([exportString], {type: 'application/json'});
      const url = window.URL.createObjectURL(blob);
      const anchor = this.renderer.createElement('a');

      this.renderer.setAttribute(anchor, 'href', url);
      this.renderer.setAttribute(anchor, 'download', filename);

      anchor.click();
      anchor.remove();
    });
  }
}
