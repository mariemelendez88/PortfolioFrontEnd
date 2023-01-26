import { Component, OnInit } from '@angular/core';
import { Redes } from 'src/app/entidades/Redes';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  redes: Redes[]=[];

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private servicio: RedesService,
    ) { }

    listarItems(): void{
    this.servicio.listItems().subscribe(data =>{
      this.redes=data;
    });
  }

  ngOnInit(): void {
    this.listarItems();
  }

}