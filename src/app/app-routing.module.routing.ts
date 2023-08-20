import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {
    path: 'layout',
    loadChildren: () => import('./main-layout/main-layout.module').then(mod => mod.MainLayoutModule),
    // canActivate: [AuthGuard]
  },
  // {path: '', component:MainLayoutComponent, children: [

  // { path: 'data', component: DataEntryComponent },
  // { path: 'data port', component: ComDataEntryComponent },

  // ]},
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule),
  // },
{path: 'login', component:LoginComponent},

  // { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
