import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemErro404Component } from './mensagem-erro404/mensagem-erro404.component';
import { MensagemSemAcessoComponent } from './mensagem-sem-acesso/mensagem-sem-acesso.component';

@NgModule({
  declarations: [
    MensagemErro404Component,
    MensagemSemAcessoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MensagemModule { }
