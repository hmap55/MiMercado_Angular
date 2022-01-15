import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private usuario:Usuario={
    id:0,
    cedula:"",
    nombre:"",
    apellido:"",
    correo:"",
    celular:"",
    password:"",
    token:""
  }
  
  constructor() {
    this.leerStorage();

   }

   getUsuario():Usuario{
     return this.usuario;
   }

   setUsuario(usuario:Usuario):void{
     this.usuario = usuario;
     this.guardarStorage();
   }

   resetUsuario():void{
     this.usuario = {

      id:0,
      cedula:"",
      nombre:"",
      apellido:"",
      correo:"",
      celular:"",
      password:"",
      token:""

     }
     this.guardarStorage();
   }

   guardarStorage():void{
     sessionStorage.setItem("usuario", JSON.stringify(this.usuario));
   }

  leerStorage(){
    if(sessionStorage.getItem("usuario")){
         this.usuario = JSON.parse(JSON.stringify(sessionStorage.getItem("usuario")));
    }
  }
}
