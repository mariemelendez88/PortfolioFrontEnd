import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-dashboardpersona',
  templateUrl: './dashboardpersona.component.html',
  styleUrls: ['./dashboardpersona.component.css']
})
export class DashboardpersonaComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  form: FormGroup;
  persona: any;
  id?:number;

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private http: HttpClient,
    private servicio: PersonaService,
    private formBuilder: FormBuilder,
    private ruta: Router
    )
    {
      this.form = this.formBuilder.group({
        id: [''],
        nombre: ['', [Validators.required, Validators.minLength(2)]],
        apellido: ['', [Validators.required, Validators.minLength(2)]],
        titulo: ['', [Validators.required, Validators.minLength(2)]],
        frase: ['', [Validators.required, Validators.minLength(2)]],
        acercade: ['', [Validators.required, Validators.minLength(2)]],
        imgBanner: ['', [Validators.required]],
        imgPfp: ['', [Validators.required]],
        cvpdf: ['', [Validators.required]],
        textofooter: ['', [Validators.required]],
      });
    }
  
    get Nombre() {
      return this.form.get("nombre");
    }
  
    get NombreInvalido(){
      return this.Nombre?.errors && this.Nombre?.touched;
    }
  
    get NombreValido(){
      return !this.Nombre?.errors && this.Nombre?.touched;
    }
  
    get Apellido() {
      return this.form.get("apellido");
    }
  
    get ApellidoInvalido(){
      return this.Apellido?.errors && this.Apellido?.touched;
    }
  
    get ApellidoValido(){
      return !this.Apellido?.errors && this.Apellido?.touched;
    }
  
    get Telefono() {
      return this.form.get("telefono");
    }
  
   get Email() {
      return this.form.get("email");
    }
  
    get EmailInvalido(){
      return this.Email?.errors && this.Email?.touched;
    }
  
    get EmailValido(){
      return !this.Email?.errors && this.Email?.touched;
    }  
  
    ngOnInit(): void {
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
  
    limpiar() {
      console.log("Se limpió el formulario");
      this.form.reset();
    }
  
    volver(){
      this.ruta.navigate(['/dashboard']);
    }
  
}