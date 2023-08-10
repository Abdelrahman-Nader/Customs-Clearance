import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheardModule } from '../sheard/sheard.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login.module.routing';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SheardModule,
    RouterModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class LoginModule { }
