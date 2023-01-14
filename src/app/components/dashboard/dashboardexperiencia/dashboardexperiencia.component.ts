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
  form: FormGroup;
  id?:number;

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private http: HttpClient, private ExperienciasService: ExperienciasService,
    private formBuilder: FormBuilder) {
      this.form,this.formBuilder.group({
        logo: [''],
		    link_instit: [''],
		    instit: ['',[Validators.required, Validators.minLength(3) ,  Validators.maxLength(450)]],
		    fecha_inicio: ['',[Validators.required, Validators.minLength(4) ,  Validators.maxLength(20)]],
		    fecha_fin: [''],
		    puesto: ['',[Validators.required, Validators.minLength(3) ,  Validators.maxLength(450)]],
		    descripcion:  ['',[Validators.required, Validators.minLength(3) ,  Validators.maxLength(450)]],
        id: ['']
      })
    }
    
  listarItems(): void{
    this.ExperienciasService.list().subscribe(data =>{
      this.experiencias=data;
      console.log("Experiencias: " + data);
    });
  }

  listarItem(item:any) {
    this.form.get("logo")?.setValue(item.logo);
		this.form.get("link_instit")?.setValue(item.link_instit);
		this.form.get("instit")?.setValue(item.instit);
		this.form.get("fecha_inicio")?.setValue(item.fecha_inicio);
		this.form.get("fecha_fin")?.setValue(item.fecha_fin);
		this.form.get("puesto")?.setValue(item.puesto);
		this.form.get("descripcion")?.setValue(item.descripcion);
		this.form.get("id")?.setValue(item.id);
  }

  guardarItem() {
    alert("Registro a modificar " + this.form.get("id")?.value);
  }

  eliminarItem(id:number) {
    alert("El registro a eliminar es: " + id);
  }

  ngOnInit(): void {
    this.listarItems();
  }

}
