import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './component layout/main-layout/main-layout.component';
import { SheardModule } from '../sheard/sheard.module';
import { DataComponentModule } from '../component/data-component.module';
import { ViewLayoutModule } from '../component/layout for air line&comm/view-layout.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MainLayoutRoutingModule } from './main-layout.module.routing';
import { LoginRoutingModule } from '../login/login.module.routing';
import { ComponentRoutingModule } from '../component/component.module.routing';



@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    SheardModule,
    DataComponentModule,
    ViewLayoutModule,
    RouterModule,
    MainLayoutRoutingModule,
    LoginRoutingModule,
    ComponentRoutingModule,
    RouterOutlet


  ],
  exports: [
    MainLayoutComponent,
  ]
})
export class MainLayoutModule { }
