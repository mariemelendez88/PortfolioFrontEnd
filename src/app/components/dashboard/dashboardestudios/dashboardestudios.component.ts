import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/entidades/Estudios';
import { EstudiosService } from 'src/app/servicios/estudios.service';

@Component({
  selector: 'app-dashboardestudios',
  templateUrl: './dashboardestudios.component.html',
  styleUrls: ['./dashboardestudios.component.css']
})
export class DashboardestudiosComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  form: FormGroup;
  estudios: Estudios[]=[];
  item: any;
  id?:number;

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private http: HttpClient,
    private Sestudios: EstudiosService,
    private formBuilder: FormBuilder,
    private ruta: Router
  ) 
  {
    this.form = this.formBuilder.group({
      id: [''],
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      instit: ['', [Validators.required, Validators.minLength(3)]],
      fecha_inicio: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      fecha_fin: [''],
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
    return this.form.get("fecha_inicio");
  }

  get InicioInvalido(){
    return this.Inicio?.errors && this.Inicio?.touched;
  }

  get InicioValido(){
    return !this.Inicio?.errors && this.Inicio?.touched;
  }

  get Fin() {
    return this.form.get("fecha_fin");
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
    this.Sestudios.listItems().subscribe(data =>{
      this.estudios=data;
      console.log("Estudios cargados correctamente");
    });
  }

  
  ngOnInit(): void {
    this.listarItems();
  }

  cargarItem(id: number){
    this.Sestudios.getById(id).subscribe(
      data => {
        this.form.setValue(data);
      });
    }

  
  guardarItem() {
    let item = this.form.value;
    if (item.id == '') {
      this.Sestudios.saveItem(item).subscribe((data: any) => {
          alert("Se añadió correctamente el item");
          this.listarItems();
          this.form.reset();
      });
      window.location.reload();
    } else {
      this.Sestudios.updateItem(item).subscribe((data: any) => {
          alert("Se modificó correctamente el item");
          this.limpiar();
      });
      window.location.reload();
    }
  }

  borrarItem(id: number) {
    if (confirm("Confirme si desea eliminar este ítem")) {
      this.Sestudios.deleteItem(id).subscribe(data => {
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