import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Paciente } from 'src/app/models/paciente.models';
import { PacienteService } from 'src/app/services/paciente/paciente.service';

@Component({
  selector: 'app-paciente-create',
  templateUrl: './paciente-create.component.html',
  styleUrls: ['./paciente-create.component.css']
})
export class PacienteCreateComponent implements OnInit {

  cliente: Paciente;

  constructor(private router:Router, 
              private pacienteService: PacienteService) { 
      this.cliente = new Paciente();
  }

  ngOnInit(): void {
  }

  post(): void {
    this.pacienteService.post(this.cliente)
      .pipe(take(1))
      .subscribe({
          next: cliente => this.handleResponse(cliente),
          error: erro => this.handleResponseError(erro.status)
       });    
  }

  handleResponse(cliente: Paciente):void{
    this.cliente = cliente;
    this.exibirMensagemSucesso();
    this.goToIndex();
  }

  exibirMensagemSucesso():void{
    alert('paciente cadastrado com sucesso');
  }

  handleResponseError(erro: number):void{
    this.exibirMensagemErro(erro);
  }

  exibirMensagemErro(erro: number){
    let mensagemCompleta:string = '';
    if (erro === 404 || erro === 400)
        mensagemCompleta = "Preencha os campos obrigatórios.";
    else    
        mensagemCompleta = 'Ocorreu um erro! Entre em contato com suporte.';
    alert(mensagemCompleta);
  }

  back(): void{
    this.goToIndex();
  }

  goToIndex(): void {
    this.router.navigate(['paciente/paciente-index']);
  }

}
