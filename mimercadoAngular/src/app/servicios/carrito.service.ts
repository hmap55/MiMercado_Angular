import { Injectable } from '@angular/core';
import { Pedido } from '../interfaces/pedido.interface';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

private producto:Producto = {
      id : 0,
      nombre:"",
      precio:0,
      inventario: 0,
      url: "",
      seccion: "",
      promocion:""
}

//private pedido:Pedido;

private productos:Producto[]= []


  constructor() {

    this.leerStorage

   }

  getProducto():Producto{
    return this.producto;
  }

  setProducto(producto:Producto):void{
    this.producto = producto;
    this.guardarStorage();
  }

  resetProducto():void{
    this.producto = {

      id : 0,
      nombre:"",
      precio:0,
      inventario: 0,
      url: "",
      seccion: "",
      promocion:""

    }
    this.guardarStorage();
  }

  guardarStorage():void{
    sessionStorage.setItem("producto", JSON.stringify(this.producto));
    
  }

 leerStorage(){
   if(sessionStorage.getItem("producto")){
        this.producto = JSON.parse(JSON.stringify(sessionStorage.getItem("producto")));
   }
 }

 addProducto(producto:Producto){

 }
}
