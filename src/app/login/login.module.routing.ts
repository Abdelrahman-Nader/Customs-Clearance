import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent, children:[
     {path: 'layout',
        loadChildren: () =>
          import('../main-layout/main-layout.module').then(
            (mod) => mod.MainLayoutModule
          ),}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule { }
