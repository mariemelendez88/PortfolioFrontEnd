import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/entidades/Proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-dashboardproyectos',
  templateUrl: './dashboardproyectos.component.html',
  styleUrls: ['./dashboardproyectos.component.css']
})
export class DashboardproyectosComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  form: FormGroup;
  proyectos: Proyectos[]=[];
  item: any;
  id?:number;

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private http: HttpClient,
    private Sproyectos: ProyectosService,
    private formBuilder: FormBuilder,
    private ruta: Router
  )
  {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';  
    
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      fin: ['', [Validators.required, Validators.minLength(4)]],
      descripcion: ['', [Validators.required, Validators.minLength(8)]],
      link_repo: [''],
      logo: [''],
    });
  }
  
  get Logo() {
    return this.form.get("logo");
  }

  get Link_repo() {
    return this.form.get("link_repo");
  }

  get Fin() {
    return this.form.get("fin");
  }

  get FinInvalido(){
    return this.Fin?.errors && this.Fin?.touched;
  }

  get FinValido(){
    return !this.Fin?.errors && this.Fin?.touched;
  }

  get Titulo() {
    return this.form.get("titulo");
  }

  get TituloInvalido(){
    return this.Titulo?.errors && this.Titulo?.touched;
  }

  get TituloValido(){
    return !this.Titulo?.errors && this.Titulo?.touched;
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
    this.Sproyectos.listItems().subscribe(data =>{
      this.proyectos=data;
      console.log("Proyectos cargados correctamente");
    });
  }

  
  ngOnInit(): void {
    this.listarItems();
  }

  cargarItem(id: number){
    this.Sproyectos.getById(id).subscribe(
      data => {
        this.form.setValue(data);
      });
    }

  
  guardarItem() {
    let item = this.form.value;
    if (item.id == '') {
      this.Sproyectos.saveItem(item).subscribe((data: any) => {
          alert("Se añadió correctamente el item");
          this.listarItems();
          this.form.reset();
      });
      window.location.reload();
    } else {
      this.Sproyectos.updateItem(item).subscribe((data: any) => {
          alert("Se modificó correctamente el item");
          this.limpiar();
      });
      window.location.reload();
    }
  }

  borrarItem(id: number) {
    if (confirm("Confirme si desea eliminar este ítem")) {
      this.Sproyectos.deleteItem(id).subscribe(data => {
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