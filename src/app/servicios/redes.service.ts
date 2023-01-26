import { Injectable } from '@angular/core';
//Esto es para suscribirse y que se reciba respuesta de forma asincrónica
import { Observable } from 'rxjs';
//Esto es para poder hacer peticiones
import { HttpClient } from "@angular/common/http";
import { Redes } from '../entidades/Redes';

@Injectable({
  providedIn: 'root'
})
export class RedesService {
  //El constructor se hace como private porque solo lo veo yo y el primer http se llama alias
  url = 'http://localhost:8080/redes';
  constructor(private httpClient:HttpClient) { }

  public listItems(): Observable<Redes[]>{
    return this.httpClient.get<Redes[]>(this.url);
  }

  public getById(id: number): Observable<any>{
    return this.httpClient.get<Redes>(this.url + `/${id}`);
  }

  public saveItem(red: Redes): Observable<any>{
    return this.httpClient.post<any>(this.url, red);
  }

  public updateItem(red: Redes): Observable<any>{
    return this.httpClient.put<Redes>(this.url, red);
  }

  public deleteItem(id: number): Observable<Redes>{
    return this.httpClient.delete<any>(this.url + `/${id}`);
  }

  // //Método observable que devuelve los datos se puede usar getDatos o getMenu
  // getRedes():Observable<any>{
  //   //Se llama al JSON con su path o ruta, o bien, en su lugar se puede poner una URL para traer datos de un JSON online
  //   return this.http.get('../assets/json/redes.json');
  // }
}