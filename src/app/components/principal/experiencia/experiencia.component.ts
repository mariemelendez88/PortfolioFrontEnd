import { Component, OnInit } from '@angular/core';
import { Experiencias } from 'src/app/entidades/Experiencias';
import { ExperienciasService } from 'src/app/servicios/experiencias.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  experiencias: Experiencias[]=[];

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private servicio: ExperienciasService,
    ) { }

    listarItems(): void{
    this.servicio.listItems().subscribe(data =>{
      this.experiencias=data;
    });
  }

  ngOnInit(): void {
    this.listarItems();
  }

}
