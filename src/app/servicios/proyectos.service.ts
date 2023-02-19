import { Injectable } from '@angular/core';
//Esto es para suscribirse y que se reciba respuesta de forma asincrónica
import { Observable } from 'rxjs';
//Esto es para poder hacer peticiones
import { HttpClient } from "@angular/common/http";
import { Proyectos } from '../entidades/Proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  // url = 'http://localhost:8080/proyectos';
  url = 'https://portfoliobackend-ab8p.onrender.com/proyectos';
  constructor(private httpClient:HttpClient) { }

  public listItems(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.url);
  }

  public getById(id: number): Observable<any>{
    return this.httpClient.get<Proyectos>(this.url + `/${id}`);
  }

  public saveItem(proyecto: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.url, proyecto);
  }

  public updateItem(proyecto: Proyectos): Observable<any>{
    return this.httpClient.put<Proyectos>(this.url, proyecto);
  }

  public deleteItem(id: number): Observable<Proyectos>{
    return this.httpClient.delete<any>(this.url + `/${id}`);
  }

  // //Método observable que devuelve los datos se puede usar getDatos o getMenu
  // getProyectos():Observable<any>{
  //   //Se llama al JSON con su path o ruta, o bien, en su lugar se puede poner una URL para traer datos de un JSON online
  //   return this.http.get('../assets/json/proyectos.json');
  // }
}