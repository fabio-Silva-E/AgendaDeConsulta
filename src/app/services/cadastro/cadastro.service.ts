import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
   
  

  private usuarios: Usuario[];
  private url = 'https://localhost:44380/api/usuarios';

  constructor(private httpClient: HttpClient) {
   
    this.usuarios = [];
  }
  post(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.url, usuario);
  }
  handleResponseUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }
  getNome(login:string):Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.url}?login=${login}`);
  }
  
  delete(id:string):Observable<Usuario|null>{
    return this.httpClient.delete<Usuario>(`${this.url}?login=${id}`);
  }

  put(id: number, usuario:Usuario):Observable<Usuario>{
    return this.httpClient.put<Usuario>(`${this.url}/${id}`, usuario);
  }
  getAll():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.url);
  }
 

 
}
