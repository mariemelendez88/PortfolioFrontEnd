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
export class DashboardskillsComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  form: FormGroup;
  skills: Skills[]=[];
  item: any;
  id?:number;

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private http: HttpClient,
    private servicio: SkillsService,
    private formBuilder: FormBuilder,
    private ruta: Router
  )
  {
    this.form = this.formBuilder.group({
      id: [''],
      habilidad: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      porcentaje: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]],
      iconskill: [''],
      tipo: ['', [Validators.required]],
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
    this.servicio.listItems().subscribe({
      next: (data) => {
        this.skills=data;
        console.log("Items cargados correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
  })
}

  
  ngOnInit(): void {
    this.listarItems();
  }

  cargarItem(id: number){
    this.servicio.getById(id).subscribe({
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    console.log("Se cargó correctamente el item");
    }
  
  guardarItem() {
    let item = this.form.value;
    if (item.id == '') {
      this.servicio.saveItem(item).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      console.log("Se añadió correctamente el item");
    } else {
      this.servicio.updateItem(item).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      console.log("Se modificó correctamente el item");
    }
  }

  borrarItem(id: number) {
    if (confirm("Confirme si desea eliminar este ítem")) {
      this.servicio.deleteItem(id).subscribe(data => {});
      window.location.reload();
      console.log("Se eliminó correctamente el item");
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