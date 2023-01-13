import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  skills: any=[];

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private SkillsService: SkillsService,
    ) { }

  ngOnInit(): void {
    //Esto es almacenar en la variebla de instancia los datos recuperados por el Servicio
    this.SkillsService.getSkills().subscribe(data => {
      console.log(data);
      //Definir info a mostrar
      this.skills = data.skills
    })
  }

}
