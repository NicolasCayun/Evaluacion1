import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  private asignaturas = [
    { id: 1, nombre: 'Matemáticas', sala: '101', horario: 'Lunes 10-12', contenido: 'Álgebra y Geometría' },
    { id: 2, nombre: 'Historia', sala: '102', horario: 'Martes 11-13', contenido: 'Historia Moderna' },
    { id: 3, nombre: 'Física', sala: '103', horario: 'Miércoles 14-16', contenido: 'Física Básica'},
    { id: 4, nombre: 'Química', sala: '104', horario: 'Jueves 15-17', contenido: 'Química Inorgánica' },
    { id: 5, nombre: 'Lenguaje y Comunicación', sala: '105', horario: 'Viernes 16-18', contenido: 'Español y Literatura' }
  ];

  constructor() { }

  getAsignaturas() {
    return this.asignaturas;
  }

  getAsignaturaById(id: number) {
    return this.asignaturas.find(asignatura => asignatura.id === id);
  }
}
