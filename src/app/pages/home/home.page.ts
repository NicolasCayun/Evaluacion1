import { Component, inject, OnInit } from '@angular/core';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  nombre: string = '';

  datosPersonales = inject(DatosPersonalesService)

  constructor() { }

  saludar(){
    console.log("Hola: ${this.nombre}");
  }

  guardarNombre(){
    this.datosPersonales.setNombre(this.nombre);
    console.log("Nombre guardado: " + this.nombre);
  }

}
