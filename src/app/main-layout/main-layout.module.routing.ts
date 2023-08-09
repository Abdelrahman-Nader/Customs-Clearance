import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { MainLayoutComponent } from './component layout/main-layout/main-layout.component';


const routes: Routes = [

  { path: '', component: MainLayoutComponent,
  children: [
    {
      path: 'login',
      loadChildren: () =>
        import('../login/login.module').then((mod) => mod.LoginModule),
    },
  ],
 },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainLayoutRoutingModule { }
