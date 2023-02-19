import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/entidades/Persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-dashboardpersona',
  templateUrl: './dashboardpersona.component.html',
  styleUrls: ['./dashboardpersona.component.css']
})
export class DashboardpersonaComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  form: FormGroup;
  persona: Persona = new Persona("", "", "", "", "", "", "", "", "","","");
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
        img_banner: ['', [Validators.required]],
        img_pfp: ['', [Validators.required]],
        cvpdf: ['', [Validators.required]],
        textofooter: ['', [Validators.required]],
        email: [''],
        password: [''],
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
  
    get Titulo() {
      return this.form.get("titulo");
    }
  
    get TituloInvalido(){
      return this.Titulo?.errors && this.Titulo?.touched;
    }
  
    get TituloValido(){
      return !this.Titulo?.errors && this.Titulo?.touched;
    }

    get Frase() {
      return this.form.get("frase");
    }
  
    get FraseInvalido(){
      return this.Frase?.errors && this.Frase?.touched;
    }
  
    get FraseValido(){
      return !this.Frase?.errors && this.Frase?.touched;
    }

    get Acercade() {
      return this.form.get("acercade");
    }
  
    get AcercadeInvalido(){
      return this.Acercade?.errors && this.Acercade?.touched;
    }
  
    get AcercadeValido(){
      return !this.Cvpdf?.errors && this.Cvpdf?.touched;
    }

    get Cvpdf() {
      return this.form.get("cvpdf");
    }
  
    get CvpdfInvalido(){
      return this.Cvpdf?.errors && this.Cvpdf?.touched;
    }
  
    get CvpdfValido(){
      return !this.Cvpdf?.errors && this.Cvpdf?.touched;
    }

    get Textofooter() {
      return this.form.get("textofooter");
    }
  
    get TextofooterInvalido(){
      return this.Textofooter?.errors && this.Textofooter?.touched;
    }
  
    get TextofooterValido(){
      return !this.Textofooter?.errors && this.Textofooter?.touched;
    }

    get Img_banner() {
      return this.form.get("img_banner");
    }
  
    get Img_bannerInvalido(){
      return this.Img_banner?.errors && this.Img_banner?.touched;
    }
  
    get Img_bannerValido(){
      return !this.Img_banner?.errors && this.Img_banner?.touched;
    }

    get Img_pfp() {
      return this.form.get("img_pfp");
    }
  
    get Img_pfpInvalido(){
      return this.Img_pfp?.errors && this.Img_pfp?.touched;
    }
  
    get Img_pfpValido(){
      return !this.Img_pfp?.errors && this.Img_pfp?.touched;
    }
  
    ngOnInit(): void {
      this.cargarItem();
    }
  
    cargarItem(){
      this.servicio.getById(1).subscribe({
          next: (data) => {
            this.persona=data;
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