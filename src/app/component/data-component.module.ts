import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComDataEntryComponent } from './com-data-entry/com-data-entry.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { LayoutComponent } from './layout/layout.component';
import { ViewLayoutModule } from './layout for air line&comm/view-layout.module';
import { SheardModule } from '../sheard/sheard.module';
import { RouterModule } from '@angular/router';
import { ComponentRoutingModule } from './component.module.routing';



@NgModule({
  declarations: [
    ComDataEntryComponent,
    DataEntryComponent,
    LayoutComponent,


  ],
  imports: [
    CommonModule,
    ViewLayoutModule,
    SheardModule,
    RouterModule,
    ComponentRoutingModule
  ],
  exports: [
    ComDataEntryComponent,
    DataEntryComponent,
    LayoutComponent,
  ]
})
export class DataComponentModule { }
