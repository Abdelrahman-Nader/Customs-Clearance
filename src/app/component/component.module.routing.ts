import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { MainLayoutComponent } from '../main-layout/component layout/main-layout/main-layout.component';
import { ComDataEntryComponent } from './com-data-entry/com-data-entry.component';
import { DataEntryComponent } from './data-entry/data-entry.component';

const routes: Routes = [
  {
    path: 'data',
    component: ComDataEntryComponent,
  },
  {
    path: 'data port',
    component: DataEntryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule {}
