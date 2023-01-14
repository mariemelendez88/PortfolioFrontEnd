import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/entidades/persona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  email = '';
  password = '';
  authService: any;

  //Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private autenticarService: AutenticacionService, private ruta: Router) {
    //Creamos el grupo de controles para el formulario de login
    this.form=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required,Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
  }

  get Mail(){
    return this.form.get("email");
  }

  get MailInvalido(){
    return this.Mail?.errors && this.Mail?.touched;
  }

  get MailValido(){
    return !this.Mail?.errors && this.Mail?.touched;
  }

   get Password(){
    return this.form.get("password");
  }

  get PasswordInvalido(){
    return this.Password?.errors && this.Password?.touched;
  }

  get PasswordValido(){
    return !this.Password?.errors && this.Password?.touched;
  }
  
  limpiar() {
    console.log("Se limpió el formulario")
    this.form.reset();
  }

  onEnviar(event: Event){
    event.preventDefault;
    //event?.preventDefault

    if (this.form.valid){
      //Llamamos a nuestro servicio para enviar los datos al servidor
      //Tambien podríamos ejecutar alguna lógica extra
      let persona:Persona = new Persona("", "", "", "", "", "", "", "", "", "", this.form.get("email")?.value, this.form.get("password")?.value);
      this.autenticarService.loginUser(persona).subscribe(data => {
        console.log("DATA:" + JSON.stringify(data));
        this.ruta.navigate(['/dashboard']);},
        error => {
          console.log(error);
        })
  }
    else{
      alert("Error, corregir para poder loguearse.")
      this.form.markAllAsTouched();
      console.log("Hay un error en el formulario")
    }
  }
}
