import { Injectable } from '@angular/core';
//Esto es para suscribirse y que se reciba respuesta de forma asincrónica
import { Observable } from 'rxjs';
//Esto es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';
import { Persona } from '../entidades/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  // url = 'http://localhost:8080/persona';
  url = 'https://portfoliobackend-ab8p.onrender.com/persona';
  constructor(private httpClient:HttpClient) { }

  // public listItems(): Observable<Persona[]>{
  //   return this.httpClient.get<Persona[]>(this.url);
  // }

  public getById(id: number): Observable<any>{
    return this.httpClient.get<Persona>(this.url + `/${id}`);
  }

  // public saveItem(persona: Persona): Observable<any>{
  //   return this.httpClient.post<any>(this.url, persona);
  // }

  public updateItem(persona: Persona): Observable<any>{
    return this.httpClient.put<Persona>(this.url, persona);
  }

  // public deleteItem(id: number): Observable<Persona>{
  //   return this.httpClient.delete<any>(this.url + `/${id}`);
  // }

}
