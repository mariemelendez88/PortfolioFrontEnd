import { Component, OnInit } from '@angular/core';
import { Referencias } from 'src/app/entidades/Referencias';
import { ReferenciasService } from 'src/app/servicios/referencias.service';

@Component({
  selector: 'app-referencias',
  templateUrl: './referencias.component.html',
  styleUrls: ['./referencias.component.css']
})
export class ReferenciasComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  referencias: Referencias[]=[];

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private servicio: ReferenciasService,
    ) { }

    listarItems(): void{
    this.servicio.listItems().subscribe(data =>{
      this.referencias=data;
    });
  }

  ngOnInit(): void {
    this.listarItems();
  }

}