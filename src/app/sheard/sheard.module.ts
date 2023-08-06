import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenutabComponent } from './menutab/menutab.component';
// import { SheardComponent } from './sheard/sheard.component';


@NgModule({
  imports: [
    CommonModule
  ],

  exports: [
    FooterComponent,
    MenutabComponent
  ],

  declarations: [
    FooterComponent,
    MenutabComponent
  ]
})
export class SheardModule { }
