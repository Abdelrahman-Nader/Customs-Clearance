import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLayoutComponent } from './view-layout/view-layout.component';
import { CommunicationComponent } from './communication/communication.component';
import { AirlineDataComponent } from './airline-data/airline-data.component';



@NgModule({
  declarations: [
    ViewLayoutComponent,
    CommunicationComponent,
    AirlineDataComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViewLayoutComponent,
    CommunicationComponent,
    AirlineDataComponent
  ]
})
export class ViewLayoutModule { }
