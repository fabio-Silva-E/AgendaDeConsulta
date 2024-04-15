import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Usuarioad } from 'src/app/models/usuarioad.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioadAutenticacaoService {

  private isAuteticado: boolean;
  private readonly url: string;

  constructor(private httpClient: HttpClient) {
    this.isAuteticado = false;
    this.url = 'https://localhost:44380/api/usuarioads';

  }

  autenticar(usuarioad:Usuarioad):Observable<boolean> {
    
    return this.httpClient.get<boolean>(`${this.url}?login=${usuarioad.Login}&senha=${usuarioad.Senha}`)


      .pipe(tap(retorno => this.isAuteticado = retorno))
  }
 
  
  autenticarm(usuarioad:Usuarioad):Observable<boolean> {
    /*const endpoint = '';
    this.httpClient.get<boolean>(endpoint);*/
    return this.mockAutenticarAPI(usuarioad)
      .pipe(tap(retorno => this.isAuteticado = retorno))
  }

  private mockAutenticarAPI(usuarioad: Usuarioad):Observable<boolean>{
    
    if (usuarioad.Login === 'a' && usuarioad.Senha === 'b')      
      return of(true);

    return of(false);
  }

  

  get IsAuteticado():boolean{
    //console.log("Auteticado?" + this.isAuteticado);
    return this.isAuteticado;
  }
}
