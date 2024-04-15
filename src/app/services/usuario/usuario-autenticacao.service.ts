import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAutenticacaoService {

  private isAuteticado: boolean;
  private readonly url: string;
  private readonly urld: string;

  constructor(private httpClient: HttpClient) {
    this.isAuteticado = false;
    this.url = 'https://localhost:44380/api/usuarios';
    this.urld = 'https://localhost:44380/api/usuarioads';

  }

  autenticar(usuario:Usuario):Observable<boolean> {
    
    return this.httpClient.get<boolean>(`${this.url}?login=${usuario.Login}&senha=${usuario.Senha}`)


      .pipe(tap(retorno => this.isAuteticado = retorno))
  }
  autenticarm(usuario:Usuario):Observable<boolean> {
    
    return this.httpClient.get<boolean>(`${this.urld}?login=${usuario.Login}&senha=${usuario.Senha}`)


      .pipe(tap(retorno => this.isAuteticado = retorno))
  }
 
  
  get IsAuteticado():boolean{
    //console.log("Auteticado?" + this.isAuteticado);
    return this.isAuteticado;
  }
}
