import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from "@angular/common/http"
import {map} from "rxjs/operators"
import { SesionService } from './sesion.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost:8080/"


  constructor(private httpCliente: HttpClient, private sesionService:SesionService) {

   }

   login(nombre:string, password:string){

    const peticion = `${this.url}usuarios/login`;
    const usuario:any ={
      nombre,
      password
    };


    const headers:HttpHeaders = new HttpHeaders({
      "Content-Type": `application/json;charset="utf-8"`
    })

    return this.httpCliente.post(peticion, usuario,{headers})
                          .pipe(map((data:any)=>{return data}))


   }

   addUsuario(nombre:string, apellido:string, cedula:string, correo:string, celular:string, password:string){

    const peticion = `${this.url}usuarios/registrar`;

    const usuario:any={
      nombre,
      apellido,
      cedula,
      correo,
      celular,
      password

      
    };

    const headers:HttpHeaders = new HttpHeaders({
      "Content-Type": `application/json;charset="utf-8"`
    })

    return this.httpCliente.post(peticion, usuario, {headers})
                           .pipe(map((data:any)=>{
                            return data;
                           }));


   }

   /* peticiones productos */


   getProductos(){
    const peticion = `${this.url}productos/inventario`;

  
    const headers:HttpHeaders = new HttpHeaders({
      "Content-Type": `application/json;charset="utf-8"`,
     // 'Authorization': 'Bearer '+this.sesionService.getUsuario().token
    })

    return this.httpCliente.get(peticion,{headers}).pipe(map((data:any)=>{
      return data;
    }));
   }

   getPromos(promos:string){
    const peticion = `${this.url}productos/promos?promocion=${promos}`;

  
    const headers:HttpHeaders = new HttpHeaders({
      "Content-Type": `application/json;charset="utf-8"`,
     // 'Authorization': 'Bearer '+this.sesionService.getUsuario().token
    })

    return this.httpCliente.get(peticion,{headers}).pipe(map((data:any)=>{
      return data;
    }));
   }


   getProducto(id:number){
    const peticion = `${this.url}productos/seleccionar/${id}`;

  
    const headers:HttpHeaders = new HttpHeaders({
      "Content-Type": `application/json;charset="utf-8"`,
     // 'Authorization': 'Bearer '+this.sesionService.getUsuario().token
    })

    return this.httpCliente.get(peticion,{headers}).pipe(map((data:any)=>{
      return data;
    }));
   }

   getseccion(seccion:string){
    const peticion = `${this.url}productos/seccion?seccion=${seccion}`;

  
    const headers:HttpHeaders = new HttpHeaders({
      "Content-Type": `application/json;charset="utf-8"`,
     // 'Authorization': 'Bearer '+this.sesionService.getUsuario().token
    })

    return this.httpCliente.get(peticion,{headers}).pipe(map((data:any)=>{
      return data;
    }));
   }


}
