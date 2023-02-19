import { Injectable } from '@angular/core';
//Esto es para suscribirse y que se reciba respuesta de forma asincrónica
import { Observable } from 'rxjs';
//Esto es para poder hacer peticiones
import { HttpClient } from "@angular/common/http";
import { Skills } from '../entidades/Skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  
  // url = 'http://localhost:8080/skills';
  url = 'https://portfoliobackend-ab8p.onrender.com/skills';
  constructor(private httpClient:HttpClient) { }

  public listItems(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.url);
  }

  public getById(id: number): Observable<any>{
    return this.httpClient.get<Skills>(this.url + `/${id}`);
  }

  public saveItem(skill: Skills): Observable<any>{
    return this.httpClient.post<any>(this.url, skill);
  }

  public updateItem(skill: Skills): Observable<any>{
    return this.httpClient.put<Skills>(this.url, skill);
  }

  public deleteItem(id: number): Observable<Skills>{
    return this.httpClient.delete<any>(this.url + `/${id}`);
  }

  // //El constructor se hace como private porque solo lo veo yo y el primer http se llama alias
  // constructor(private http:HttpClient) { }

  // //Método observable que devuelve los datos se puede usar getDatos o getMenu
  // getSkills():Observable<any>{
  //   //Se llama al JSON con su path o ruta, o bien, en su lugar se puede poner una URL para traer datos de un JSON online
  //   return this.http.get('../assets/json/skills.json');
  // }
}
