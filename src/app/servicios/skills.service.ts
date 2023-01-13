import { Injectable } from '@angular/core';
//Esto es para suscribirse y que se reciba respuesta de forma asincrónica
import { Observable } from 'rxjs';
//Esto es para poder hacer peticiones
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  //El constructor se hace como private porque solo lo veo yo y el primer http se llama alias
  constructor(private http:HttpClient) { }

  //Método observable que devuelve los datos se puede usar getDatos o getMenu
  getSkills():Observable<any>{
    //Se llama al JSON con su path o ruta, o bien, en su lugar se puede poner una URL para traer datos de un JSON online
    return this.http.get('../assets/json/skills.json');
  }
}
