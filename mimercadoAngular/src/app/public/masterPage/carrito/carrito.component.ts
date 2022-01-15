import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

 productos:Producto [] = [];


  constructor() { 

    

  }

  
  ngOnInit(): void {
  }

}
