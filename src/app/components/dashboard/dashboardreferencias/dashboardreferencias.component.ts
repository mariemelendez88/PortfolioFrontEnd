import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Referencias } from 'src/app/entidades/Referencias';
import { ReferenciasService } from 'src/app/servicios/referencias.service';

@Component({
  selector: 'app-dashboardreferencias',
  templateUrl: './dashboardreferencias.component.html',
  styleUrls: ['./dashboardreferencias.component.css']
})
export class DashboardreferenciasComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  form: FormGroup;
  referencias: Referencias[]=[];
  item: any;
  id?:number;

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private http: HttpClient,
    private servicio: ReferenciasService,
    private formBuilder: FormBuilder,
    private ruta: Router
  )
  {
    this.form = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      telefono: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
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

  listarItems(): void{
    this.servicio.listItems().subscribe({
      next: (data) => {
        this.referencias=data;
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