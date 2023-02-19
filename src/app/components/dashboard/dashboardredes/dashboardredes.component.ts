import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Redes } from 'src/app/entidades/Redes';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-dashboardredes',
  templateUrl: './dashboardredes.component.html',
  styleUrls: ['./dashboardredes.component.css']
})
export class DashboardredesComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  form: FormGroup;
  redes: Redes[]=[];
  item: any;
  id?:number;

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private http: HttpClient,
    private servicio: RedesService,
    private formBuilder: FormBuilder,
    private ruta: Router
  )
  {
    this.form = this.formBuilder.group({
      id: [''],
      urlred: ['', [Validators.required]],
      iconred: ['', [Validators.required]],
    });
  }

  get Urlred() {
    return this.form.get("urlred");
  }

  get UrlredInvalido(){
    return this.Urlred?.errors && this.Urlred?.touched;
  }

  get UrlredValido(){
    return !this.Urlred?.errors && this.Urlred?.touched;
  }

  get Iconred() {
    return this.form.get("iconred");
  }

  get IconredInvalido(){
    return this.Iconred?.errors && this.Iconred?.touched;
  }

  get IconredValido(){
    return !this.Iconred?.errors && this.Iconred?.touched;
  }

  listarItems(): void{
    this.servicio.listItems().subscribe({
      next: (data) => {
        this.redes=data;
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