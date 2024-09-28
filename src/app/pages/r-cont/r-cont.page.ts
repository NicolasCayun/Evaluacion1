import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-r-cont',
  templateUrl: './r-cont.page.html',
  styleUrls: ['./r-cont.page.scss'],
})
export class RContPage {
  email: string = '';

  constructor(private router: Router) { }

  restablecerPass() {
    // Aquí puedes implementar la lógica para restablecer la contraseña
    console.log('Restablecer contraseña para:', this.email);
    // Muestra un mensaje o realiza una acción
  }

  volver() {
    this.router.navigate(['/login']); // Cambia esto según la ruta de tu página de inicio de sesión
  }
}
