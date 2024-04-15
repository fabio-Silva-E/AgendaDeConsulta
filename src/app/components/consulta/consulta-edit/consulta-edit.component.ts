//versão de teste edite tera de ser modificado
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Consulta } from 'src/app/models/consulta.models';
import { ConsultaService } from 'src/app/services/consulta/consulta.service';

@Component({
  selector: 'app-consulta-edit',
  templateUrl: './consulta-edit.component.html',
  styleUrls: ['./consulta-edit.component.css']
})
export class ConsultaEditComponent implements OnInit {

  C: Consulta;

  constructor(private router:Router, 
                private activatedRoute: ActivatedRoute,
                private consultaService: ConsultaService) {     
    
    this.getById(this.getId());
    this.C = new Consulta();
  }

  getId():number{
    return Number(this.activatedRoute.snapshot.paramMap.get("id"));
  }

  ngOnInit(): void {    
  }

  getById(id:number): void{
    this.consultaService.getById(id)
    .pipe(take(1))
    .subscribe({
      next: C => this.handleResponseConsulta(C),
      error: erro => this.handleResponseError(erro.status)
    }); 
  }

  handleResponseConsulta(C: Consulta):void{
    if (C.Data != null)
      C.Data = C.Data.split('T')[0];  //nota lembrar de mudar time zero para marcar horario de consulta    
    this.C = C;
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

  back(): void{
    this.router.navigate(['consulta/consulta-index']);
  }

  desejaAlterar(id:number){
    if (confirm(`Deseja alterar consulta  ${id}?`))
      this.put(id);
  }

  put(id:number): void{
    this.consultaService.put(id, this.C)
    .pipe(take(1))
    .subscribe({
        next: C => this.handleResponseConsultaPut(C),
        error: erro => this.handleResponseError(erro.status)
     }); 
  }

  handleResponseConsultaPut(C: Consulta):void{
    alert(`consulta ${C.IdConsulta} alterado com sucesso!`);
    this.back();
  }
}
