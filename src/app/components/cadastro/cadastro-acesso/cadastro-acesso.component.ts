import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Usuarioad } from 'src/app/models/usuarioad.model';
import { UsuarioadAutenticacaoService } from 'src/app/services/usuarioad/usuarioad-autenticacao.service';

@Component({
  selector: 'app-cadastro-acesso',
  templateUrl: './cadastro-acesso.component.html',
  styleUrls: ['./cadastro-acesso.component.css']
})
export class CadastroAcessoComponent implements OnInit {

  usuarioad:Usuarioad;

  constructor(private usuarioadAutenticacaoService:UsuarioadAutenticacaoService,
    private router:Router) { 
this.usuarioad = new Usuarioad();
}

ngOnInit(): void {
}

logar():void{    
this.usuarioadAutenticacaoService.autenticar(this.usuarioad)
// .pipe(take(1))
.subscribe({
next: retorno => this.tratarRetorno(retorno),
error: erro => this.handleResponseError(erro.status)

})
}
private tratarRetorno(retorno: boolean):void{
retorno ? this.router.navigate(['cadastro/cadastro-index']) : alert('Usuário e/ou senha inválidos');
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
this.router.navigate(['login/login-master']);
}
}