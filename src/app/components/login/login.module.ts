import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginAcessoComponent } from './login-acesso/login-acesso.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginAcessoComponent,
    LoginAdminComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
