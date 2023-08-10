import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { MainLayoutComponent } from '../main-layout/component layout/main-layout/main-layout.component';


const routes: Routes = [

  { path: '', component:MainLayoutComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ComponentRoutingModule { }
