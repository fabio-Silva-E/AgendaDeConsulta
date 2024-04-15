import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensagem-sem-acesso',
  templateUrl: './mensagem-sem-acesso.component.html',
  styleUrls: ['./mensagem-sem-acesso.component.css']
})
export class MensagemSemAcessoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logar():void{
    this.router.navigate(['login/login-admin']);
  }

}
