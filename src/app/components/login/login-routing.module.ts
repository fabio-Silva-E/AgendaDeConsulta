import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginAcessoComponent } from './login-acesso/login-acesso.component';

const routes: Routes = [
 {path:'login-acesso',component:LoginAcessoComponent},
  {path:'login-admin',component:LoginAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
