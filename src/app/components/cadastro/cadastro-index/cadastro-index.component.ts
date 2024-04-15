import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
//import { Usuario } from 'src/app/models/usuario.models';
import { CadastroService } from 'src/app/services/cadastro/cadastro.service';

@Component({
  selector: 'app-cadastro-index',
  templateUrl: './Cadastro-index.component.html',
  styleUrls: ['./cadastro-index.component.css']
})
export class CadastroIndexComponent implements OnInit {
 
  usuario: Usuario[];
  
  constructor(private router:Router, 
              private cadastroService:CadastroService) //Injeção de Dependência => router, 
  { 
   
  
    this.usuario = new Array<Usuario>();
  } 

  ngOnInit(): void {
  }

  get():void{
    this.usuario = [];
  
      this.getAll(); 
   
      
  }
  

  getAll(): void{
    this.cadastroService.getAll()
    .pipe(take(1))
    .subscribe({
      next: usuario => this.handleResponseCadastros(usuario),
      error: erro => this.handleResponseError(erro.status)
    });   
  }

  
  
  

  handleResponseCadastros(usuario: Usuario[]):void{
    this.usuario = usuario;
  }

 
  

  handleResponseError(erro:number):void{
    this.exibirMensagemErro(erro);
  }

  exibirMensagemErro(erro: number):void{
    let mensagemCompleta:string = '';
    if (erro === 404 || erro === 400)
        mensagemCompleta = "Consulta não foi encontrado.";
    else    
        mensagemCompleta = 'Ocorreu um erro! Entre em contato com suporte.';
    alert(mensagemCompleta);
  }

  create():void{
    this.router.navigate(['cadastro/cadastro-create']);
  }

  

  desejaExcluir(login:string):void{
    if (confirm("Deseja excluir?"))
      this.excluir(login);
  }

  excluir(login:string):void{
    this.cadastroService.delete(login)
    .pipe(take(1))
    .subscribe({
      next: () => this.get(),
      //next: response => {console.log(response); this.get()}, //response == null => Para produção, retirar console.log
      error: erro => this.handleResponseError(erro.status)
    });
  }  
}
