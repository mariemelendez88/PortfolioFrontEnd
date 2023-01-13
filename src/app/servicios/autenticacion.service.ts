import { Injectable } from '@angular/core';
//Esto es para suscribirse y que se reciba respuesta de forma asincrónica
import { BehaviorSubject, map, Observable } from 'rxjs';
//Esto es para poder hacer peticiones
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url = 'http://localhost:8080/login';
  user: BehaviorSubject<any>;
  sessionStorage: any;


  constructor(private http:HttpClient) {
    this.user = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }

  loginUser(credenciales: any): Observable<any> {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.user.next(data);
    }));
  }
  get usuarioLogueado() {
    return this.user.value;
  }
}
