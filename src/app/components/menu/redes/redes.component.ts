import { Component, OnInit } from '@angular/core';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  redes: any;

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private RedesService: RedesService,
  ) {  }

  ngOnInit(): void {
    //Esto es almacenar en la variebla de instancia los datos recuperados por el Servicio
    this.RedesService.getRedes().subscribe(data => {
      console.log(data);
      //Definir info a mostrar
      this.redes = data.redes;
    })
  }

}
