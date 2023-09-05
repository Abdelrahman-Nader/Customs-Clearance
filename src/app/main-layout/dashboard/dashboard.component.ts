import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Chart } from 'chart.js';


const DATA_COUNT = 12;
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}
const datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];
const data2 = {
  labels: labels,
  datasets: [
    {
      label: 'Cubic interpolation (monotone)',
      data: datapoints,
      borderColor: ['#fe7376'],
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    }, {
      label: 'Cubic interpolation',
      data: datapoints,
      borderColor:['#fe7376'],
      fill: false,
      tension: 0.4
    }, {
      label: 'Linear interpolation (default)',
      data: datapoints,
      borderColor:['#fe7376'],
      fill: false
    }
  ]
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit{
  data: any = [];
  // data2: any = {};
  data3: any = [];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(
    new MatPaginatorIntl(),
    ChangeDetectorRef.prototype
  );

  @ViewChild(MatSort)
  sort: MatSort = new MatSort();


  constructor() {}

  ngOnInit(): void {

    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;



    this.data = ['ahmed', 10, 20, 30];
    // this.data2 = ['abdo', 40, 50, 60];
    this.data3 = ['abugasser', 70, 80, 90];

    const mycahrt = new Chart('myChart', {
      type: 'doughnut',
      data: {
        datasets: [
          {
            label: this.data[0],
            data: [this.data[1]],
            borderWidth: 3,
            backgroundColor: ['#20b5c9'],
            weight: 8,
          },
          {
            label: this.data3[0],
            data: [this.data3[2]],
            borderWidth: 3,
            backgroundColor: ['#ff8a14'],
            weight: 8,
          },
          {
            label: '# of Votes3',
            data: [50],
            borderWidth: 3,
            backgroundColor: ['#fe7376'],
            borderJoinStyle: 'round',
            weight: 8,
          },
        ],
      },
      options: {
        radius: '80%',
        cutout: '20%', // Controls the thickness of the circle
        spacing: 70, // Controls the distance between the beginning and end of the line
        rotation: 90, // Controls the angle of direction
        plugins: {
          legend: {
            position: 'bottom',
            align: 'center',
            maxWidth: 5,
          },
        },
      },
    });

    const mycahrt2 = new Chart('myChart2', {
      type: 'line',
      data: this.data,

  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Cubic interpolation mode'
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value'
        },
        suggestedMin: -10,
        suggestedMax: 200
      }
    }
  },
})

    const mycahrt3 = new Chart('myChart3', {
      type: 'doughnut',
      data: {
        datasets: [
          {
            label: this.data3[0],
            data: [this.data3[1]],
            borderWidth: 3,
            backgroundColor: ['#20b5c9'],
            weight: 8,
          },
          {
            label: '# of Votes2',
            data: [25],
            borderWidth: 3,
            backgroundColor: ['#ff8a14'],
            weight: 8,
          },
          {
            label: '# of Votes3',
            data: [50],
            borderWidth: 3,
            backgroundColor: ['#fe7376'],
            borderJoinStyle: 'round',
            weight: 8,
          },
        ],
      },
      options: {
        radius: '80%',
        cutout: '20%', // Controls the thickness of the circle
        spacing: 70, // Controls the distance between the beginning and end of the line
        rotation: 400, // Controls the angle of direction
        plugins: {
          legend: {
            position: 'bottom',
            align: 'center',
            maxWidth: 5,
          },
        },
      },
    })
  }
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
function applyFilter(event: Event | undefined, Event: { new(type: string, eventInitDict?: EventInit | undefined): Event; prototype: Event; readonly NONE: 0; readonly CAPTURING_PHASE: 1; readonly AT_TARGET: 2; readonly BUBBLING_PHASE: 3; }) {
  throw new Error('Function not implemented.');
}

