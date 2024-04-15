import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MasterPageComponent } from './components/master-page/master-page.component';
import { MensagemErro404Component } from './components/mensagem/mensagem-erro404/mensagem-erro404.component';
import { MensagemSemAcessoComponent } from './components/mensagem/mensagem-sem-acesso/mensagem-sem-acesso.component';
import { UsuarioNaoAutenticadoGuard } from './guards/usuario/usuario-nao-autenticado.guard';

const routes: Routes = [
  { path:'', 
    component: MasterPageComponent,
    canActivate: [UsuarioNaoAutenticadoGuard],
    

    children:[
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'home', component:HomeComponent},        
      {path:'medico', loadChildren: () => import('./components/medico/medico.module').then(mm => mm.MedicoModule)},
      {path:'paciente', loadChildren: () => import('./components/paciente/paciente.module').then(mp=> mp.PacienteModule)},
      {path:'consulta', loadChildren: ()=> import('./components/consulta/consulta.module').then(moduloConsulta=>moduloConsulta.ConsultaModule)},
      {path:'cadastro', loadChildren: () => import('./components/cadastro/cadastro.module').then(ca=> ca.CadastroModule)},
    ],
  },
   
  { 
    path:'login', 
    loadChildren: () => import('./components/login/login.module').then(ml => ml.LoginModule)
  },
  

  {
    path:'sem-acesso', 
    component:MensagemSemAcessoComponent
  },  
  {
    path:'**', 
    component:MensagemErro404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, {enableTracing:true}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
