import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/entidades/Proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  proyectos: Proyectos[]=[];

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private Sproyecto: ProyectosService,
    ) { }

    listarItems(): void{
    this.Sproyecto.listItems().subscribe(data =>{
      this.proyectos=data;
    });
  }

  ngOnInit(): void {
    this.listarItems();
  }

}
