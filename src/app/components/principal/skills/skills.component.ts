import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/entidades/Skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  skills: Skills[]=[];

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private Sskills: SkillsService,
    ) { }

    listarItems(): void{
    this.Sskills.listItems().subscribe(data =>{
      this.skills=data;
    });
  }

  ngOnInit(): void {
    this.listarItems();
  }

}