import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Medico } from 'src/app/models/medico.models';
import { MedicoService } from 'src/app/services/medico/medico.service';

@Component({
  selector: 'app-medico-create',
  templateUrl: './medico-create.component.html',
  styleUrls: ['./medico-create.component.css']
})
export class MedicoCreateComponent implements OnInit {

  medico: Medico;

  constructor(private router:Router, 
              private medicoService: MedicoService) { 
      this.medico = new Medico();
  }

  ngOnInit(): void {
  }

  post(): void {
    this.medicoService.post(this.medico)
      .pipe(take(1))
      .subscribe({
          next: medico => this.handleResponse(medico),
          error: erro => this.handleResponseError(erro.status)
       });    
  }

  handleResponse(medico: Medico):void{
    this.medico = medico;
    this.exibirMensagemSucesso();
    this.goToIndex();
  }

  exibirMensagemSucesso():void{
    alert('Médico cadastrado com sucesso');
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
    this.router.navigate(['medico/medico-index']);
  }

}
