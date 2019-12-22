import { Component, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  private data: any[] = ["data", 1, 2, 3, 4, 5];
  private chart: c3.ChartAPI;

  ngAfterViewInit(): void {
    this.chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [this.data]
      }
    });
  }
}
