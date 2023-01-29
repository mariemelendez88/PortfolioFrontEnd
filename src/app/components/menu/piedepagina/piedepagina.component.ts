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
  persona: Persona = new Persona("", "", "", "", "", "", "", "", "","","");

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private servicio: PersonaService,
    ) { }

    
  ngOnInit(): void {
    this.cargarItem();
  }

  cargarItem(){
    this.servicio.getById(1).subscribe({
        next: (data) => {
          this.persona=data;
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    console.log("Se cargó correctamente el item");
    }
}