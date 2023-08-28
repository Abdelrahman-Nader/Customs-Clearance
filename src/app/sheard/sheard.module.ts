import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenutabComponent } from './menutab/menutab.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { MainLayoutRoutingModule } from '../main-layout/main-layout.module.routing';
import { LoginRoutingModule } from '../login/login.module.routing';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { SheardComponent } from './sheard/sheard.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MainLayoutRoutingModule,
    LoginRoutingModule,
    MaterialModule,
    FlexLayoutModule,


  ],

  exports: [
    FooterComponent,
    MenutabComponent,
    MainNavbarComponent,
    SideNavComponent,
    MaterialModule,

  ],

  declarations: [
    FooterComponent,
    MenutabComponent,
    MainNavbarComponent,
    SideNavComponent
  ]
})
export class SheardModule { }
