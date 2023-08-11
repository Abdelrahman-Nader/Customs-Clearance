import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';
import { MainLayoutComponent } from './main-layout/component layout/main-layout/main-layout.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main-layout/main-layout.module').then(mod => mod.MainLayoutModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule),
  },
  {
    path: 'data',
    loadChildren: () => import('./component/data-component.module').then(mod => mod.DataComponentModule),
  },

  // { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
