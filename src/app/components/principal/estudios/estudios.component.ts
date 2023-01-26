import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/entidades/Estudios';
import { EstudiosService } from 'src/app/servicios/estudios.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  estudios: Estudios[]=[];

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private servicio: EstudiosService,
    ) { }

    listarItems(): void{
    this.servicio.listItems().subscribe(data =>{
      this.estudios=data;
    });
  }

  ngOnInit(): void {
    this.listarItems();
  }

}
