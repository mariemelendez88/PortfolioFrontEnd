import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencias } from 'src/app/entidades/Experiencias';
import { ExperienciasService } from 'src/app/servicios/experiencias.service';

@Component({
  selector: 'app-dashboardexperiencia',
  templateUrl: './dashboardexperiencia.component.html',
  styleUrls: ['./dashboardexperiencia.component.css']
})
export class DashboardexperienciaComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  experiencias: Experiencias[]=[];

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private http: HttpClient, private ExperienciasService: ExperienciasService,
    private formBuilder: FormBuilder) { }
    
  listarItems(): void{
    this.ExperienciasService.list().subscribe(data =>{
      this.experiencias=data;
      console.log("Experiencias: " + data);
    });
  }

  
  ngOnInit(): void {
    this.listarItems();
  }

}
