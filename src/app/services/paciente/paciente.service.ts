import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from 'src/app/models/paciente.models';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private readonly url: string;

  constructor(private httpClient: HttpClient) { 
    this.url = "https://localhost:44380/api/pacientes";
  }

  getAll():Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(this.url);
  }

  getById(id:number):Observable<Paciente>{
    return this.httpClient.get<Paciente>(`${this.url}/${id}`);
  }
  getNome(nome:string):Observable<Paciente>{
    return this.httpClient.get<Paciente>(`${this.url}?nome=${nome}`);
  }

  post(paciente:Paciente):Observable<Paciente> {
    return this.httpClient.post<Paciente>(this.url, paciente);
  }

  delete(id:number):Observable<Paciente|null>{
    return this.httpClient.delete<Paciente>(`${this.url}/${id}`);
  }

  put(id: number, paciente:Paciente):Observable<Paciente>{
    return this.httpClient.put<Paciente>(`${this.url}/${id}`, paciente);
  }
}
