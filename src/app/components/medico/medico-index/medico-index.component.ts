import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Medico } from 'src/app/models/medico.models';
import { MedicoService } from 'src/app/services/medico/medico.service';

@Component({
  selector: 'app-medico-index',
  templateUrl: './medico-index.component.html',
  styleUrls: ['./medico-index.component.css']
})
export class MedicoIndexComponent implements OnInit {
  nomePesquisa: string;
  codigoPesquisa: string;
  medicos: Medico[];
  
  constructor(private router:Router, 
              private medicoService:MedicoService) //Injeção de Dependência => router, medicoService
  { 
    this.nomePesquisa ="";
    this.codigoPesquisa = "";
    this.medicos = new Array<Medico>();
  } 

  ngOnInit(): void {
  }

  get():void{
    this.medicos = [];
    if (this.codigoPesquisa === "")
      this.getAll(); 
    else     
     this.getById(Number(this.codigoPesquisa));
      
  }
  getn():void{
    this.medicos = [];
    if (this.nomePesquisa === "")
      this.getAll(); 
    else     
     this.getNome(this.nomePesquisa);
      
  }

  getAll(): void{
    this.medicoService.getAll()
    .pipe(take(1))
    .subscribe({
      next: medicos => this.handleResponseMedicos(medicos),
      error: erro => this.handleResponseError(erro.status)
    });   
  }

  getById(id:number): void{
    this.medicoService.getById(id)
    .pipe(take(1))
    .subscribe({
      next: medico => this.handleResponseMedico(medico),
      error: erro => this.handleResponseError(erro.status)
    }); 
  }
  getNome(nome:string): void{
    this.medicoService.getNome(nome)
    .pipe(take(1))
    .subscribe({
      next: medico => this.handleResponseMedico(medico),
      error: erro => this.handleResponseError(erro.status)
    }); 
  }

  handleResponseMedicos(medicos: Medico[]):void{
    this.medicos = medicos;
  }

  handleResponseMedico(medico: Medico):void{    
    this.medicos.push(medico);
  }

  handleResponseError(erro:number):void{
    this.exibirMensagemErro(erro);
  }

  exibirMensagemErro(erro: number):void{
    let mensagemCompleta:string = '';
    if (erro === 404 || erro === 400 || erro === 500)
        mensagemCompleta = "Médico não foi encontrado.";
    else    
        mensagemCompleta = 'Ocorreu um erro! Entre em contato com suporte.';
    alert(mensagemCompleta);
  }

  create():void{
    this.router.navigate(['medico/medico-create']);
  }

  editar(id:number):void{
    this.router.navigate(['medico/medico-edit',id]);
  }

  desejaExcluir(id:number):void{
    if (confirm("Deseja excluir?"))
      this.excluir(id);
  }

  excluir(id:number):void{
    this.medicoService.delete(id)
    .pipe(take(1))
    .subscribe({
      next: () => this.get(),
      //next: response => {console.log(response); this.get()}, //response == null => Para produção, retirar console.log
      error: erro => this.handleResponseError(erro.status)
    });
  }  
}
