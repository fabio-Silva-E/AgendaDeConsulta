import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Consulta } from 'src/app/models/consulta.models';
import { ConsultaService } from 'src/app/services/consulta/consulta.service';

@Component({
  selector: 'app-consulta-create',
  templateUrl: './consulta-create.component.html',
  styleUrls: ['./consulta-create.component.css']
})
export class ConsultaCreateComponent implements OnInit {

  c: Consulta;

  constructor(private router:Router, 
              private consultaService: ConsultaService) { 
      this.c = new Consulta();
  }

  ngOnInit(): void {
  }

  post(): void {
    this.consultaService.post(this.c)
      .pipe(take(1))
      .subscribe({
          next: c => this.handleResponse(c),
          error: erro => this.handleResponseError(erro.status)
       });    
  }

  handleResponse(c: Consulta):void{
    this.c = c;
    this.exibirMensagemSucesso();
    this.goToIndex();
  }

  exibirMensagemSucesso():void{
    alert('Consulta cadastrada com sucesso');
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
    this.router.navigate(['consulta/consulta-index']);
  }

}
