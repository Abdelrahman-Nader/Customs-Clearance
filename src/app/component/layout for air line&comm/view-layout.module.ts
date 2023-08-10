import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLayoutComponent } from './view-layout/view-layout.component';
import { CommunicationComponent } from './communication/communication.component';
import { AirlineDataComponent } from './airline-data/airline-data.component';
import { SheardModule } from 'src/app/sheard/sheard.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ViewLayoutComponent,
    CommunicationComponent,
    AirlineDataComponent
  ],
  imports: [
    CommonModule,
    SheardModule,
    RouterModule,
  ],
  exports: [
    ViewLayoutComponent,
    CommunicationComponent,
    AirlineDataComponent
  ]
})
export class ViewLayoutModule { }
