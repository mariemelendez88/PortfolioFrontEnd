import { Injectable } from '@angular/core';
//Esto es para suscribirse y que se reciba respuesta de forma asincrónica
import { Observable } from 'rxjs';
//Esto es para poder hacer peticiones
import { HttpClient } from "@angular/common/http";
import { Experiencias } from '../entidades/Experiencias';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {
  // url = 'http://localhost:8080/experiencias';
  url = 'https://portfoliobackend-ab8p.onrender.com/experiencias';
  constructor(private httpClient:HttpClient) { }

  public listItems(): Observable<Experiencias[]>{
    return this.httpClient.get<Experiencias[]>(this.url);
  }

  public getById(id: number): Observable<any>{
    return this.httpClient.get<Experiencias>(this.url + `/${id}`);
  }

  public saveItem(experiencia: Experiencias): Observable<any>{
    return this.httpClient.post<any>(this.url, experiencia);
  }

  public updateItem(experiencia: Experiencias): Observable<any>{
    return this.httpClient.put<Experiencias>(this.url, experiencia);
  }

  public deleteItem(id: number): Observable<Experiencias>{
    return this.httpClient.delete<any>(this.url + `/${id}`);
  }

  //El constructor se hace como private porque solo lo veo yo y el primer http se llama alias
  //constructor(private http:HttpClient) { }

  //Método observable que devuelve los datos se puede usar getDatos o getMenu
  //getExperiencias():Observable<any>{
    //Se llama al JSON con su path o ruta, o bien, en su lugar se puede poner una URL para traer datos de un JSON online
    //return this.http.get('../assets/json/experiencias.json');
  //}
}
