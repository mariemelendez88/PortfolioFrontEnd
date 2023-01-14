import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  proyectos: any=[];

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private ProyectosService: ProyectosService,
    ) { }

  ngOnInit(): void {
    //Esto es almacenar en la variebla de instancia los datos recuperados por el Servicio
    this.ProyectosService.getProyectos().subscribe(data => {
      console.log(data);
      //Definir info a mostrar
      this.proyectos = data.proyectos;
    })
  }

}
