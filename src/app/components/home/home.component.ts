import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileDataService } from 'src/app/services/file-data.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions = {
    chart: {
      plotBorderWidth: null,
      plotShadow: false
    },
    title: {
      text: 'Learning share in, 2021'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme) ||
              'black'
          }
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Courses share',
      data: [
        ['Practice', this.fileData.practice.length],
        ['Learning', 4],
        {
          name: 'Task',
          y: this.fileData.task.length,
          sliced: true,
          selected: true
        }
      ],
      // data: [
      //   ['Firefox', 45.0],
      //   ['IE', 26.8],
      //   {
      //     name: 'Chrome',
      //     y: 12.8,
      //     sliced: true,
      //     selected: true
      //   },
      //   ['Safari', 8.5],
      //   ['Opera', 6.2],
      //   ['Others', 0.7]
      // ]
    }]
  };
  constructor(private router: Router, public fileData: FileDataService) {
  }

  ngOnInit(): void {
  }

}
