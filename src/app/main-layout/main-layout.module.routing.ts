import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { MainLayoutComponent } from './main-layout.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { ComDataEntryComponent } from './com-data-entry/com-data-entry.component';
// import { MainLayoutComponent } from './main-layout/main-layout.component';


const routes: Routes = [

  { path: '', component: MainLayoutComponent, children:[
    { path: 'layout', component: MainLayoutComponent },

    { path: 'data', component: DataEntryComponent },
    { path: 'data port', component: ComDataEntryComponent },
  ] },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainLayoutRoutingModule { }
