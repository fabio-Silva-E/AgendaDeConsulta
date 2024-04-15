import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from 'src/app/models/consulta.models';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private readonly url: string;

  constructor(private httpClient: HttpClient) { 
    this.url = "https://localhost:44380/api/consultas";
  }

  getAll():Observable<Consulta[]>{
    return this.httpClient.get<Consulta[]>(this.url);
  }

  getById(id:number):Observable<Consulta>{
    return this.httpClient.get<Consulta>(`${this.url}/${id}`);
  }
 
  

  post(consulta:Consulta):Observable<Consulta> {
    return this.httpClient.post<Consulta>(this.url, consulta);
  }

  delete(id:number):Observable<Consulta|null>{
    return this.httpClient.delete<Consulta>(`${this.url}/${id}`);
  }

  put(id: number, consulta:Consulta):Observable<Consulta>{
    return this.httpClient.put<Consulta>(`${this.url}/${id}`, consulta);
  }
}
