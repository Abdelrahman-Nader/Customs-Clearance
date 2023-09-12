import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Chart } from 'chart.js';
import { IcustomeData } from 'src/app/inter-face/icustome-data';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
const ELEMENT_DATA: IcustomeData[] = [
  {harborCodeNational: 1, nameHarbor: 'Hydrogen',nameComp: 'ahmed', kindHarbor: 'H', deleIcon: ''},
  {harborCodeNational: 2, nameHarbor: 'Helium',nameComp: 'ahmed', kindHarbor: 'He', deleIcon: ''},
  {harborCodeNational: 3, nameHarbor: 'Lithium',nameComp: 'ahmed',kindHarbor: 'Li', deleIcon: ''},
  {harborCodeNational: 4, nameHarbor: 'Beryllium',nameComp: 'ahmed', kindHarbor: 'Be', deleIcon: ''},
  {harborCodeNational: 5, nameHarbor: 'Boron', nameComp: 'ahmed', kindHarbor: 'B', deleIcon: ''},
  {harborCodeNational: 6, nameHarbor: 'Carbon',nameComp: 'ahmed', kindHarbor: 'C', deleIcon: ''},
  {harborCodeNational: 7, nameHarbor: 'Nitrogen',nameComp: 'ahmed', kindHarbor: 'N', deleIcon: ''},
  {harborCodeNational: 8, nameHarbor: 'Oxygen',nameComp: 'ahmed', kindHarbor: 'O', deleIcon: ''},
  {harborCodeNational: 9, nameHarbor: 'Fluorine',nameComp: 'ahmed', kindHarbor: 'F', deleIcon: ''},
  {harborCodeNational: 10, nameHarbor: 'Neon', nameComp: 'ahmed', kindHarbor: 'Ne', deleIcon: ''},
  {harborCodeNational: 11, nameHarbor: 'Sodium',nameComp: 'ahmed', kindHarbor: 'Na', deleIcon: ''},
  {harborCodeNational: 12, nameHarbor: 'Magnesium',nameComp: 'ahmed', kindHarbor: 'Mg', deleIcon: ''},
  {harborCodeNational: 13, nameHarbor: 'Aluminum',nameComp: 'ahmed', kindHarbor: 'Al', deleIcon: ''},
  {harborCodeNational: 14, nameHarbor: 'Silicon',nameComp: 'ahmed', kindHarbor: 'Si', deleIcon: ''},
  {harborCodeNational: 15, nameHarbor: 'Phosphorus',nameComp: 'ahmed', kindHarbor: 'P', deleIcon: ''},
  {harborCodeNational: 16, nameHarbor: 'Sulfur',nameComp: 'ahmed', kindHarbor: 'S', deleIcon: ''},
  {harborCodeNational: 17, nameHarbor: 'Chlorine',nameComp: 'ahmed', kindHarbor: 'Cl', deleIcon: ''},
  {harborCodeNational: 18, nameHarbor: 'Argon',nameComp: 'ahmed', kindHarbor: 'Ar', deleIcon: ''},
  {harborCodeNational: 19, nameHarbor: 'Potassium',nameComp: 'ahmed', kindHarbor: 'K', deleIcon: ''},
  {harborCodeNational: 20, nameHarbor: 'Calcium',nameComp: 'ahmed', kindHarbor: 'Ca', deleIcon: ''},
];

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

  displayedColumns: string[] = ['harborCode', 'Campony', 'Harbor', 'kindHarbor', 'Edit'];
  dataSource = new MatTableDataSource<IcustomeData>(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  // @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(
  //   new MatPaginatorIntl(),
  //   ChangeDetectorRef.prototype
  // );
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  // @ViewChild(MatSort)
  // sort: MatSort = new MatSort();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() {}

  ngOnInit(): void {

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

  public deleIcon(item: IcustomeData) {
    this.dataSource._updatePaginator

  }

}








