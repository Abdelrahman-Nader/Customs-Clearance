import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { createPopper } from '@popperjs/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenutabComponent } from './sheard/menutab/menutab.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DataEntryComponent } from './component/data-entry/data-entry.component';
import { CommunicationComponent } from './component/layout for air line&comm/communication/communication.component';
import { AirlineDataComponent } from './component/layout for air line&comm/airline-data/airline-data.component';
import { FooterComponent } from './sheard/footer/footer.component';
import { LayoutComponent } from './component/layout/layout.component';
import { ViewLayoutComponent } from './component/layout for air line&comm/view-layout/view-layout.component';
import { ComDataEntryComponent } from './component/com-data-entry/com-data-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    MenutabComponent,
    DataEntryComponent,
    CommunicationComponent,
    AirlineDataComponent,
    FooterComponent,
    LayoutComponent,
    ViewLayoutComponent,
    ComDataEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterOutlet,
    NgbModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
