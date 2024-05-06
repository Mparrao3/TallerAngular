import { Component, OnInit } from '@angular/core';
import { Series } from './Series';
import { dataSeries } from './dataSeries';

@Component({
  selector: 'app-Series',
  templateUrl: './Series.component.html',
  styleUrls: ['./Series.component.css'],
})
export class SeriesComponent implements OnInit {
  series: Array<Series> = [];
  promedio: number = 0;
  constructor() {}
  getSeriesList(): Array<Series> {
    return dataSeries;
  }
  getpromedio(): number {
    let resultado: number = 0;
    for (let serie of this.series) resultado += serie.seasons;
    resultado = resultado / this.series.length;
    return resultado;
  }

  ngOnInit() {
    this.series = this.getSeriesList();
    this.promedio = this.getpromedio();
  }
}
