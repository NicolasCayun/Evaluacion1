import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { AsignaturasService } from 'src/app/servicios/asignaturas.service';
@Component({
  selector: 'app-p-prof',
  templateUrl: './p-prof.page.html',
  styleUrls: ['./p-prof.page.scss'],
})
export class PProfPage implements OnInit {
  userName: string = ''; // Propiedad para almacenar el nombre de usuario
  asignaturas: any[] = []; // Propiedad para almacenar las asignaturas

  // Inyección de dependencias
  private authService = inject(AuthService); // Servicio de autenticación
  private asignaturasService = inject(AsignaturasService); // Servicio de asignaturas
  private router = inject(Router); // Servicio de navegación

  ngOnInit(): void {
    // Suscribirse al observable del nombre de usuario
    this.authService.usuario$.subscribe((nombre: string) => {
      this.userName = nombre; // Asignar el nombre a la propiedad
    });

    // Obtener las asignaturas
    this.asignaturas = this.asignaturasService.getAsignaturas();
  }

  // Método para navegar a los detalles de una asignatura
  irADetalle(asignaturaId: number) {
    this.router.navigate(['/detalle-profesor', asignaturaId]);
  }

  // Método para cerrar sesión
  logout() {
    this.router.navigate(['/login']);
  }
}
