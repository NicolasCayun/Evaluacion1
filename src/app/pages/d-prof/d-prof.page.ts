import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturasService } from 'src/app/servicios/asignaturas.service';
import { IonModal } from '@ionic/angular'; // Importar IonModal

@Component({
  selector: 'app-d-prof',
  templateUrl: './d-prof.page.html',
  styleUrls: ['./d-prof.page.scss'],
})
export class DProfPage implements OnInit {
  asignatura: any;
  qrData: string = '';  // Datos para generar el código QR

  @ViewChild(IonModal) modal!: IonModal; // Usar ViewChild para controlar el modal

  constructor(private route: ActivatedRoute, private router: Router, private asignaturasService: AsignaturasService) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;
    if (id !== null) {
      this.asignatura = this.asignaturasService.getAsignaturaById(id);
    } else {
      console.error('ID de asignatura no encontrado');
    }
  }

  // Abrir el modal y generar el código QR
  abrirModal() {
    this.qrData = `Asignatura: ${this.asignatura.nombre}, Sala: ${this.asignatura.sala}, Horario: ${this.asignatura.horario}`;
    this.modal.present(); // Abre el modal
  }

  // Cerrar el modal
  cerrarModal() {
    this.modal.dismiss(); // Cierra el modal
  }

  volver() {
    this.router.navigate(['/principal-profesor']);
  }
}
