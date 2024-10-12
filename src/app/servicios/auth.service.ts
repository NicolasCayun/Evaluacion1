import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { WebService } from './web.service';
import { usuarioAPI } from '../models/usuarioAPI.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //para mostrar el estado del login
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false); // Para mostrar el estado del login
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable(); // Para mostrar el estado del login

  private usuarioSubject = new BehaviorSubject<string>(''); // Para mostrar el nombre del usuario actualmente logueado  // Para mostrar el nombre del usuario
  usuario$ = this.usuarioSubject.asObservable(); // Para mostrar el nombre del usuario actualmente logueado

  // utiliza un tipo UsuarioAPI de models/UsuarioAPI.models.ts
  private usuarioCompletoSubject = new BehaviorSubject<usuarioAPI | null>(null); // Permitir que el valor inicial sea null

  usuarioCompleto$ = this.usuarioCompletoSubject.asObservable(); // Para mostrar el nombre del usuario actualmente logueado

  // Agregar un BehaviorSubject para el estado de loginFailed
  private loginFailedSubject = new BehaviorSubject<boolean>(false); // Para mostrar si falló la autenticación
  loginFailed$ = this.loginFailedSubject.asObservable(); // Para mostrar si falló la autenticación

  webservice = inject(WebService); // Obtener el servicio de webService
  async buscarBD4(usuario: string, clave: string){
    const url = 'https://6709aee5af1a3998baa2200d.mockapi.io/'
    const res = await this.webservice.request('GET', url, 'usuarios') as Array<usuarioAPI>; // utiliza un tipo UsuarioAPI de models/UsuarioAPI.models.ts

    const user = res.find(u => u.email === usuario && u.password === clave); // Buscar un usuario en la lista de usuarios de la API
    if (user) {
      console.log('Autenticación exitosa!');  // Autenticación exitosa!
      console.log(user);  // Nombre completo: Hel
      this.isAuthenticatedSubject.next(true); // Activar el estado de autenticación si la autenticación es correcta.
      this.usuarioSubject.next(user.nombre); // Actualizar el nombre completo del usuario autenticado.
      this.usuarioCompletoSubject.next(user); // Actualizar el usuario completo como objeto del usuario autenticado.
      this.loginFailedSubject.next(false); // Restablecer loginFailed a false
    } else {
      this.isAuthenticatedSubject.next(false); // Desactivar el estado de autenticación si la autenticación es incorrecta.
      this.loginFailedSubject.next(true); // Establecer loginFailed a true si falla la autenticación
    }
  }

  async registrarUsuario(usuario: any) {
    const url = 'https://6709aee5af1a3998baa2200d.mockapi.io/';
    try {
      // Verifica si el usuario ya existe antes de registrarlo
      const usuariosExistentes = await this.obtenerUsuarios();
      const usuarioExistente = usuariosExistentes.find(u => u.email === usuario.email);

      if (usuarioExistente) {
        throw new Error('El usuario ya existe');
      }

      const res = await this.webservice.request('POST', url, 'usuarios', usuario);
      console.log('Usuario registrado con éxito', res);
      return res; // Devuelve la respuesta exitosa del registro
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      throw error; // Propaga el error para manejarlo en el componente
    }
  }

    // Método para verificar si el usuario ya existe
    async obtenerUsuarios(): Promise<usuarioAPI[]> {
      const url = 'https://6709aee5af1a3998baa2200d.mockapi.io/';
      try {
        const res = await this.webservice.request('GET', url, 'usuarios') as Array<usuarioAPI>;
        return res; // Devuelve la lista de usuarios existentes
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
        throw error; // Manejo del error
      }
    }


  logout(): void {
    this.usuarioSubject.next('');
    this.usuarioCompletoSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    this.loginFailedSubject.next(false);  // Restablecer loginFailed al cerrar sesión
  }

  isLoggedIn() {
    return this.isAuthenticated$; // Retornar el estado de autenticación
  }

}
