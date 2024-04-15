import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioAutenticacaoService } from 'src/app/services/usuario/usuario-autenticacao.service';

@Component({
  selector: 'app-login-acesso',
  templateUrl: './login-acesso.component.html',
  styleUrls: ['./login-acesso.component.css']
})
export class LoginAcessoComponent implements OnInit {

  usuario:Usuario;

  constructor(private usuarioAutenticacaoService:UsuarioAutenticacaoService,
              private router:Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  logar():void{    
    this.usuarioAutenticacaoService.autenticarm(this.usuario)
   // .pipe(take(1))
      .subscribe({
        next: retorno => this.tratarRetorno(retorno),
       error: erro => this.handleResponseError(erro.status)
       
      })
  }
  private tratarRetorno(retorno: boolean):void{
    retorno ? this.router.navigate(['/home']) : alert('Usuário e/ou senha inválidos');
  }
  handleResponseError(erro:number):void{
    this.exibirMensagemErro(erro);
  }
  exibirMensagemErro(erro: number):void{
    let mensagemCompleta:string = '';
    if (erro === 404 || erro === 400 || erro === 500)
        mensagemCompleta = 'Usuário e/ou senha inválidos';
    else    
        mensagemCompleta = 'Ocorreu um erro! Entre em contato com suporte.';
    alert(mensagemCompleta);
  }
  admin():void{
    this.router.navigate(['login/login-acesso']);
  }
  back(): void{
    this.router.navigate(['login/login-admin']);
  }
}
