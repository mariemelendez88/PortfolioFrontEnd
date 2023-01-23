import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencias } from 'src/app/entidades/Experiencias';
import { ExperienciasService } from 'src/app/servicios/experiencias.service';

@Component({
  selector: 'app-dashboardexperiencia',
  templateUrl: './dashboardexperiencia.component.html',
  styleUrls: ['./dashboardexperiencia.component.css']
})
export class DashboardexperienciaComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  form: FormGroup;
  experiencias: Experiencias[]=[];
  item: any;
  id?:number;

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private http: HttpClient,
    private Sexperiencia: ExperienciasService,
    private formBuilder: FormBuilder,
    private ruta: Router
  ) 
  {
    this.form = this.formBuilder.group({
      id: [''],
      puesto: ['', [Validators.required, Validators.minLength(3)]],
      instit: ['', [Validators.required, Validators.minLength(3)]],
      inicio: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      fin: [''],
      descripcion: ['', [Validators.required, Validators.minLength(8)]],
      link_instit: [''],
      logo: [''],
    });
  }
  
  get Logo() {
    return this.form.get("logo");
  }

  get Link_instit() {
    return this.form.get("link_instit");
  }

  get Instit() {
    return this.form.get("instit");
  }

  get InstitInvalido(){
    return this.Instit?.errors && this.Instit?.touched;
  }

  get InstitValido(){
    return !this.Instit?.errors && this.Instit?.touched;
  }

  get Inicio() {
    return this.form.get("inicio");
  }

  get InicioInvalido(){
    return this.Inicio?.errors && this.Inicio?.touched;
  }

  get InicioValido(){
    return !this.Inicio?.errors && this.Inicio?.touched;
  }

  get Fin() {
    return this.form.get("fin");
  }

  get Puesto() {
    return this.form.get("puesto");
  }

  get PuestoInvalido(){
    return this.Puesto?.errors && this.Puesto?.touched;
  }

  get PuestoValido(){
    return !this.Puesto?.errors && this.Puesto?.touched;
  }

  get Descrip() {
    return this.form.get("descripcion");
  }

  get DescripInvalido(){
    return this.Descrip?.errors && this.Descrip?.touched;
  }

  get DescripValido(){
    return !this.Descrip?.errors && this.Descrip?.touched;
  }  

  listarItems(): void{
    this.Sexperiencia.listItems().subscribe(data =>{
      this.experiencias=data;
      console.log("Experiencias cargadas correctamente");
    });
  }

  
  ngOnInit(): void {
    this.listarItems();
  }

  cargarItem(id: number){
    this.Sexperiencia.getById(id).subscribe(
      data => {
        this.form.setValue(data);
      });
    }

  
  guardarItem() {
    let item = this.form.value;
    if (item.id == '') {
      this.Sexperiencia.saveItem(item).subscribe((data: any) => {
          alert("Se añadió correctamente el item");
          this.limpiar();
      });
      window.location.reload();
    } else {
      this.Sexperiencia.updateItem(item).subscribe((data: any) => {
          alert("Se modificó correctamente el item");
          this.limpiar();
      });
      window.location.reload();
    }
  }

  borrarItem(id: number) {
    if (confirm("Confirme si desea eliminar este ítem")) {
      this.Sexperiencia.deleteItem(id).subscribe(data => {
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