// import { DataComponentModule } from './../component/data-component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SheardModule } from '../sheard/sheard.module';
// import { DataComponentModule } from '../component/data-component.module';
// import { ViewLayoutModule } from '../component/layout for air line&comm/view-layout.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MainLayoutRoutingModule } from './main-layout.module.routing';
import { LoginRoutingModule } from '../login/login.module.routing';
// import { ComponentRoutingModule } from '../component/component.module.routing';
import { MainLayoutComponent } from './main-layout.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { ComDataEntryComponent } from './com-data-entry/com-data-entry.component';
import { ViewLayoutComponent } from './view-layout/view-layout.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    ComDataEntryComponent,
    DataEntryComponent,
    ViewLayoutComponent

  ],
  imports: [
    CommonModule,
    SheardModule,
    RouterModule,
    MainLayoutRoutingModule,

    RouterOutlet,




  ],
  exports: [
    MainLayoutComponent,
    DataEntryComponent,
    ComDataEntryComponent,
    ViewLayoutComponent


  ]
})
export class MainLayoutModule { }
