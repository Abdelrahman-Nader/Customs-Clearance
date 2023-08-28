import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { createPopper } from '@popperjs/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module.routing';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SheardModule } from './sheard/sheard.module';
// import { DataComponentModule } from './component/data-component.module';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterOutlet,
    NgbModule,
    SheardModule,
    MainLayoutModule,
    BrowserAnimationsModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
