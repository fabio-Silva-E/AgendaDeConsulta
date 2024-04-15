import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Paciente } from 'src/app/models/paciente.models';
import { PacienteService } from 'src/app/services/paciente/paciente.service';

@Component({
  selector: 'app-paciente-edit',
  templateUrl: './paciente-edit.component.html',
  styleUrls: ['./paciente-edit.component.css']
})
export class PacienteEditComponent implements OnInit {

  paciente: Paciente;

  constructor(private router:Router, 
                private activatedRoute: ActivatedRoute,
                private pacienteService: PacienteService) {     
    
    this.getById(this.getId());
    this.paciente = new Paciente();
  }

  getId():number{
    return Number(this.activatedRoute.snapshot.paramMap.get("id"));
  }

  ngOnInit(): void {    
  }

  getById(id:number): void{
    this.pacienteService.getById(id)
    .pipe(take(1))
    .subscribe({
      next: paciente => this.handleResponsePaciente(paciente),

      error: erro => this.handleResponseError(erro.status)
    }); 
  }

  handleResponsePaciente(paciente: Paciente):void{
          
    this.paciente = paciente;
  }
 
  handleResponseError(erro:number):void{
    this.exibirMensagemErro(erro);
  }

  exibirMensagemErro(erro: number):void{
    let mensagemCompleta:string = '';
    if (erro === 404 || erro === 400)
        mensagemCompleta = "Paciente não foi encontrado.";
    else    
        mensagemCompleta = 'Ocorreu um erro! Entre em contato com suporte.';
    alert(mensagemCompleta);
  }

  back(): void{
    this.router.navigate(['paciente/paciente-index']);
  }

  desejaAlterar(id:number){
    if (confirm(`Deseja alterar paciente ${id}?`))
      this.put(id);
  }

  put(id:number): void{
    this.pacienteService.put(id, this.paciente)
    .pipe(take(1))
    .subscribe({
        next: paciente => this.handleResponsePacientePut(paciente),
        error: erro => this.handleResponseError(erro.status)
     }); 
  }

  handleResponsePacientePut(paciente: Paciente):void{
    alert(`Paciente ${paciente.Nome} alterado com sucesso!`);
    this.back();
  }
}
