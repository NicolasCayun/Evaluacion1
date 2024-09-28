import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturasService } from 'src/app/servicios/asignaturas.service' // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-d-prof',
  templateUrl: './d-prof.page.html',
  styleUrls: ['./d-prof.page.scss'],
})
export class DProfPage implements OnInit {
  asignatura: any;

  constructor(private route: ActivatedRoute, private router: Router, private asignaturasService: AsignaturasService) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null; // Verifica si idParam no es null
    if (id !== null) {
      this.asignatura = this.asignaturasService.getAsignaturaById(id);
    } else {
      // Manejar el caso en que no se proporciona un ID
      console.error('ID de asignatura no encontrado');
    }
  }

  volver() {
    this.router.navigate(['/principal-profesor']); // Cambia esto según la ruta correcta
  }
}
