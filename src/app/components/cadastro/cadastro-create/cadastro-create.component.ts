import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { CadastroService } from 'src/app/services/cadastro/cadastro.service';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css']
})
export class CadastroCreateComponent implements OnInit {

  usuario:Usuario;

  constructor(private cadastroService:CadastroService,
              private router:Router) { 
    this.usuario = new Usuario();
  }


  ngOnInit(): void {
  }

  post(): void {
    this.cadastroService.post(this.usuario)
      .pipe(take(1))
      .subscribe({
        next: usuario => this.handleResponse(usuario),
          error: erro => this.handleResponseError(erro.status)
       });    
  }
  handleResponse(usuario: Usuario):void{
    this.usuario = usuario;
    this.exibirMensagemSucesso();
    
  }
  exibirMensagemSucesso():void{
    alert('Usuario cadastrado com sucesso');
  }
  handleResponseError(erro: number):void{
    this.exibirMensagemErro(erro);
  }
  exibirMensagemErro(erro: number){
    let mensagemCompleta:string = '';
    if (erro === 404 || erro === 400)
        mensagemCompleta = "Preencha todos os campos ";
    else    
        mensagemCompleta = 'Ocorreu um erro! Entre em contato com suporte.';
    alert(mensagemCompleta);
  }
  back(): void{
    this.goToIndex();
  }

  goToIndex(): void {
    this.router.navigate(['cadastro/cadastro-index']);
  }

}