import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroCreateComponent } from './cadastro-create/cadastro-create.component';
import { CadastroIndexComponent } from './cadastro-index/cadastro-index.component';
import { CadastroAcessoComponent } from './cadastro-acesso/cadastro-acesso.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  declarations: [
    CadastroCreateComponent,
    CadastroIndexComponent,
    CadastroAcessoComponent
    ],
 imports: [
    CommonModule,
    FormsModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
