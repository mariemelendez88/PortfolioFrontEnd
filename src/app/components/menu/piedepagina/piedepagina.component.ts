import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entidades/Persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-piedepagina',
  templateUrl: './piedepagina.component.html',
  styleUrls: ['./piedepagina.component.css']
})
export class PiedepaginaComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  persona: Persona|any=null;

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private servicio: PersonaService,
    ) { }

    listarItems(): void{
      this.servicio.getById(1).subscribe(data =>{
        this.persona=data;
    });
  }

  ngOnInit(): void {
    this.listarItems();
  }

}
