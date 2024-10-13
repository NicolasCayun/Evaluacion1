import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() titulo: string = 'Duoc UC';  // Valor por defecto para el título
  nombreUsuario: string = '';
  isAuthenticated: boolean = false; // Estado de autenticación

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Suscribirse al observable para obtener el nombre del usuario
    this.authService.usuario$.subscribe(nombre => {
      this.nombreUsuario = nombre; // Actualizar el nombre del usuario
    });

    // Suscribirse al estado de autenticación
    this.authService.isAuthenticated$.subscribe(isAuth => {
      this.isAuthenticated = isAuth; // Actualizar el estado de autenticación
    });
  }

  getTitulo() {
    return this.isAuthenticated ? `Bienvenido, ${this.capitalizeFirstLetter(this.nombreUsuario)}` : this.titulo;
  }

  // Función para capitalizar la primera letra del nombre
  private capitalizeFirstLetter(name: string): string {
    if (!name) return ''; // Manejar el caso de nombre vacío
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }
}
