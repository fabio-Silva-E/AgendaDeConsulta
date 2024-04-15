import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Consulta } from 'src/app/models/consulta.models';
import { ConsultaService } from 'src/app/services/consulta/consulta.service';

@Component({
  selector: 'app-consulta-index',
  templateUrl: './consulta-index.component.html',
  styleUrls: ['./consulta-index.component.css']
})
export class ConsultaIndexComponent implements OnInit {
 
  codigoPesquisa: string;
  tC: Consulta[];
  
  constructor(private router:Router, 
              private consultaService:ConsultaService) //Injeção de Dependência => router, medicoService
  { 
   
    this.codigoPesquisa = "";
    this.tC = new Array<Consulta>();
  } 

  ngOnInit(): void {
  }

  get():void{
    this.tC = [];
    if (this.codigoPesquisa === "")
      this.getAll(); 
    else     
     this.getById(Number(this.codigoPesquisa));
      
  }
  

  getAll(): void{
    this.consultaService.getAll()
    .pipe(take(1))
    .subscribe({
      next: tC => this.handleResponseConsultas(tC),
      error: erro => this.handleResponseError(erro.status)
    });   
  }

  getById(id:number): void{
    this.consultaService.getById(id)
    .pipe(take(1))
    .subscribe({
      next: c => this.handleResponseConsulta(c),
      error: erro => this.handleResponseError(erro.status)
    }); 
  }
  
  

  handleResponseConsultas(tC: Consulta[]):void{
    this.tC = tC;
  }

  handleResponseConsulta(c: Consulta):void{    
    this.tC.push(c);
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
    this.router.navigate(['consulta/consulta-create']);
  }

  editar(id:number):void{
    this.router.navigate(['consulta/consulta-edit',id]);
  }

  desejaExcluir(id:number):void{
    if (confirm("Deseja excluir?"))
      this.excluir(id);
  }

  excluir(id:number):void{
    this.consultaService.delete(id)
    .pipe(take(1))
    .subscribe({
      next: () => this.get(),
      //next: response => {console.log(response); this.get()}, //response == null => Para produção, retirar console.log
      error: erro => this.handleResponseError(erro.status)
    });
  }  
}
