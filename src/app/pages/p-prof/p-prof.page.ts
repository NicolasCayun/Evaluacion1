import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsignaturasService } from 'src/app/servicios/asignaturas.service';
@Component({
  selector: 'app-p-prof',
  templateUrl: './p-prof.page.html',
  styleUrls: ['./p-prof.page.scss'],
})
export class PProfPage implements OnInit {
  asignaturas: any[] = [];

  constructor(private router: Router, private asignaturasService: AsignaturasService) { }

  ngOnInit() {
    this.asignaturas = this.asignaturasService.getAsignaturas();
  }

  irADetalle(asignaturaId: number) {
    this.router.navigate(['/detalle-profesor', asignaturaId]);
  }
}
