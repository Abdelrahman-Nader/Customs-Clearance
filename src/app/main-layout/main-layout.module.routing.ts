import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { MainLayoutComponent } from './component layout/main-layout/main-layout.component';


const routes: Routes = [

  { path: '', component: MainLayoutComponent,
  children: [
    {
      path: 'layout',
      loadChildren: () =>
        import('../main-layout/main-layout.module').then((mod) => mod.MainLayoutModule),
    },
    {
      path: 'data',
      loadChildren: () =>
        import('../component/data-component.module').then((mod) => mod.DataComponentModule),
    },
    {
      path: 'data port',
      loadChildren: () =>
        import('../component/data-component.module').then((mod) => mod.DataComponentModule),
    },
  ],
 },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainLayoutRoutingModule { }
