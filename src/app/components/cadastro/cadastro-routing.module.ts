import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroIndexComponent } from './cadastro-index/cadastro-index.component';
import { CadastroCreateComponent } from './cadastro-create/cadastro-create.component';
import { CadastroAcessoComponent } from './cadastro-acesso/cadastro-acesso.component';
const routes: Routes = [
  {path:'', redirectTo:'cadastro-acesso', pathMatch:'full'}, 

  {path:'cadastro-index',component:CadastroIndexComponent},
  //{path:'acesso',component:AcessoComponent},
  {path:'cadastro-create',component:CadastroCreateComponent},
  {path:'cadastro-acesso',component:CadastroAcessoComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
