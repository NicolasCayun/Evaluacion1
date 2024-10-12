import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = ''; // Campo de entrada para el usuario
  clave: string = ''; // Campo de entrada para la contraseña

  private authService = inject(AuthService);  // Servicio de autenticación
  private router = inject(Router);  // Servicio de navegación

  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();
  loginFailed: boolean = false; // Variable para almacenar el estado de loginFailed

  isLoading: boolean = false; // Estado de carga

  ngOnInit(): void {
    this.authService.loginFailed$.subscribe(loginFailed => this.loginFailed = loginFailed); // Obtener el estado de loginFailed
  }

  constructor() {}

  async login(email: string, clave: string) {
    this.isLoading = true; // Activar el estado de carga
    await this.authService.buscarBD4(email, clave); // Intentar hacer login
    this.isLoading = false; // Desactivar el estado de carga una vez que la autenticación termine

    // Suscribirse al observable para verificar el estado de autenticación
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {

      this.authService.usuarioCompleto$.subscribe(usuarioCompleto => {
        if (isAuthenticated && usuarioCompleto) { // Verificar que usuarioCompleto no sea null
          this.email = ''; // Limpiar el campo de usuario
          this.clave = ''; // Limpiar el campo de clave

          if (usuarioCompleto.tipo === "profesor") {
            this.router.navigate(['/principal-profesor']); // Redirigir al usuario docente si el login es exitoso
          } else {
            this.router.navigate(['/principal-alumno']); // Redirigir al usuario alumno si el login es exitoso
          }
        } else {
          this.loginFailed = true; // Mostrar mensaje de error si el login falla
        }
      });
    });
  }

  navegarRecuperarPass() {
    this.router.navigate(['/recuperar-contraseña']); // Navegar a la página de recuperación de contraseña
  }

  navegarRegistro() {
    this.router.navigate(['/registro']); // Navegar a la página de registro de usuario
  }
}
