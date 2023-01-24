import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Skills } from 'src/app/entidades/Skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-dashboardskills',
  templateUrl: './dashboardskills.component.html',
  styleUrls: ['./dashboardskills.component.css']
})
export class DashboardskillsComponent implements OnInit {//Crear estoe inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  form: FormGroup;
  skills: Skills[]=[];
  item: any;
  id?:number;
  menu: any[];

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private http: HttpClient,
    private Sskill: SkillsService,
    private formBuilder: FormBuilder,
    private ruta: Router
  ) 
  {
    this.menu = ["Frontend","Backend","Idioma","Otro"];
    this.form = this.formBuilder.group({
      id: [''],
      habilidad: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      porcentaje: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]],
      iconskill: [''],
      tipo: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get Habilidad() {
    return this.form.get("habilidad");
  }

  get HabilidadInvalido(){
    return this.Habilidad?.errors && this.Habilidad?.touched;
  }

  get HabilidadValido(){
    return !this.Habilidad?.errors && this.Habilidad?.touched;
  }

  get Porcentaje() {
    return this.form.get("porcentaje");
  }

  get PorcentajeInvalido(){
    return this.Porcentaje?.errors && this.Porcentaje?.touched;
  }

  get PorcentajeValido(){
    return !this.Porcentaje?.errors && this.Porcentaje?.touched;
  }

  get Iconskill() {
    return this.form.get("iconskill");
  }

 get Tipo() {
    return this.form.get("tipo");
  }

  get TipoInvalido(){
    return this.Tipo?.errors && this.Tipo?.touched;
  }

  get TipoValido(){
    return !this.Tipo?.errors && this.Tipo?.touched;
  }  

  listarItems(): void{
    this.Sskill.listItems().subscribe(data =>{
      this.skills=data;
      console.log("Experiencias cargadas correctamente");
    });
  }

  
  ngOnInit(): void {
    this.listarItems();
  }

  cargarItem(id: number){
    this.Sskill.getById(id).subscribe(
      data => {
        this.form.setValue(data);
      });
    }

  
  guardarItem() {
    let item = this.form.value;
    if (item.id == '') {
      this.Sskill.saveItem(item).subscribe((data: any) => {
          alert("Se añadió correctamente el item");
          this.limpiar();
      });
      window.location.reload();
    } else {
      this.Sskill.updateItem(item).subscribe((data: any) => {
          alert("Se modificó correctamente el item");
          this.limpiar();
      });
      window.location.reload();
    }
  }

  borrarItem(id: number) {
    if (confirm("Confirme si desea eliminar este ítem")) {
      this.Sskill.deleteItem(id).subscribe(data => {
        alert("Se eliminó correctamente el item: " + id);
      });
      window.location.reload();
    }
  }
       
  limpiar() {
    console.log("Se limpió el formulario");
    this.form.reset();
  }

  volver(){
    this.ruta.navigate(['/dashboard']);
  }

}