import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Paciente } from 'src/app/models/paciente.models';
import { PacienteService } from 'src/app/services/paciente/paciente.service';

@Component({
  selector: 'app-paciente-index',
  templateUrl: './paciente-index.component.html',
  styleUrls: ['./paciente-index.component.css']
})
export class PacienteIndexComponent implements OnInit {
  nomePesquisa: string;
  codigoPesquisa: string;
  pacientes: Paciente[];
  
  constructor(private router:Router, 
              private pacienteService:PacienteService) //Injeção de Dependência => router, pacienteService
  { 
    this.nomePesquisa ="";
    this.codigoPesquisa = "";
    this.pacientes = new Array<Paciente>();
  } 

  ngOnInit(): void {
  }

  get():void{
    this.pacientes = [];
    if (this.codigoPesquisa === "")
      this.getAll(); 
    else     
     this.getById(Number(this.codigoPesquisa));
      
  }
  getn():void{
    this.pacientes = [];
    if (this.nomePesquisa === "")
      this.getAll(); 
    else     
     this.getNome(this.nomePesquisa);
      
  }

  getAll(): void{
    this.pacienteService.getAll()
    .pipe(take(1))
    .subscribe({
      next: pacientes => this.handleResponsePacientes(pacientes),
      error: erro => this.handleResponseError(erro.status)
    });   
  }

  getById(id:number): void{
    this.pacienteService.getById(id)
    .pipe(take(1))
    .subscribe({
      next: paciente => this.handleResponsePaciente(paciente),
      error: erro => this.handleResponseError(erro.status)
    }); 
  }
  getNome(nome:string): void{
    this.pacienteService.getNome(nome)
    .pipe(take(1))
    .subscribe({
      next: Paciente => this.handleResponsePaciente(Paciente),
      error: erro => this.handleResponseError(erro.status)
    }); 
  }

  handleResponsePacientes(pacientes: Paciente[]):void{
    this.pacientes = pacientes;
  }

  handleResponsePaciente(paciente: Paciente):void{    
    this.pacientes.push(paciente);
  }

  handleResponseError(erro:number):void{
    this.exibirMensagemErro(erro);
  }

  exibirMensagemErro(erro: number):void{
    let mensagemCompleta:string = '';
    if (erro === 404 || erro === 400 || erro === 500)
        mensagemCompleta = "Paciente não foi encontrado.";
    else    
        mensagemCompleta = 'Ocorreu um erro! Entre em contato com suporte.';
    alert(mensagemCompleta);
  }

  create():void{
    this.router.navigate(['paciente/paciente-create']);
  }

  editar(id:number):void{
    this.router.navigate(['paciente/paciente-edit',id]);
  }

  desejaExcluir(id:number):void{
    if (confirm("Deseja excluir?"))
      this.excluir(id);
  }

  excluir(id:number):void{
    this.pacienteService.delete(id)
    .pipe(take(1))
    .subscribe({
      next: () => this.get(),
      //next: response => {console.log(response); this.get()}, //response == null => Para produção, retirar console.log
      error: erro => this.handleResponseError(erro.status)
    });
  }  
}
