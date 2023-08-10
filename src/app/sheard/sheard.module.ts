import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenutabComponent } from './menutab/menutab.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { LoginModule } from '../login/login.module';
// import { SheardComponent } from './sheard/sheard.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

  ],

  exports: [
    FooterComponent,
    MenutabComponent,
    MainNavbarComponent,
    SideNavComponent
  ],

  declarations: [
    FooterComponent,
    MenutabComponent,
    MainNavbarComponent,
    SideNavComponent
  ]
})
export class SheardModule { }
