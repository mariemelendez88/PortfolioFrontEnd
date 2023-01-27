import { Injectable } from '@angular/core';
//Esto es para suscribirse y que se reciba respuesta de forma asincrónica
import { Observable } from 'rxjs';
//Esto es para poder hacer peticiones
import { HttpClient } from "@angular/common/http";
import { Referencias } from '../entidades/Referencias';

@Injectable({
  providedIn: 'root'
})
export class ReferenciasService {
  
  url = 'http://localhost:8080/referencias';
  constructor(private httpClient:HttpClient) { }

  public listItems(): Observable<Referencias[]>{
    return this.httpClient.get<Referencias[]>(this.url);
  }

  public getById(id: number): Observable<any>{
    return this.httpClient.get<Referencias>(this.url + `/${id}`);
  }

  public saveItem(referencia: Referencias): Observable<any>{
    return this.httpClient.post<any>(this.url, referencia);
  }

  public updateItem(referencia: Referencias): Observable<any>{
    return this.httpClient.put<Referencias>(this.url, referencia);
  }

  public deleteItem(id: number): Observable<Referencias>{
    return this.httpClient.delete<any>(this.url + `/${id}`);
  }

  // //Método observable que devuelve los datos se puede usar getDatos o getMenu
  // getReferencias():Observable<any>{
  //   //Se llama al JSON con su path o ruta, o bien, en su lugar se puede poner una URL para traer datos de un JSON online
  //   return this.http.get('../assets/json/referencias.json');
  // }
}