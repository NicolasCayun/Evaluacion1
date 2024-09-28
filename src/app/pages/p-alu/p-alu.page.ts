import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsignaturasService } from 'src/app/servicios/asignaturas.service';
@Component({
  selector: 'app-p-alu',
  templateUrl: './p-alu.page.html',
  styleUrls: ['./p-alu.page.scss'],
})
export class PAluPage implements OnInit {
  asignaturas: any[] = [];

  constructor(private router: Router, private asignaturasService: AsignaturasService) { }

  ngOnInit() {
    this.asignaturas = this.asignaturasService.getAsignaturas();
  }

  irADetalle(asignaturaId: number) {
    this.router.navigate(['/detalle-alumno', asignaturaId]);
  }
}
