import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { ApiService } from 'src/app/servicios/api.service';
import { SesionService } from 'src/app/servicios/sesion.service';

@Component({
  selector: 'app-abarrotes',
  templateUrl: './abarrotes.component.html',
  styleUrls: ['./abarrotes.component.css']
})
export class AbarrotesComponent implements OnInit {

  producto:any={}
  usuario:Usuario;


  constructor(private apiService:ApiService, private sesionService:SesionService, private router:Router) { 

    this.producto = {
      id : 0,
      nombre:"",
      precio:0,
      inventario: 0,
      url: "",
      seccion: "",
      promocion:""

    }

    this.usuario = this.sesionService.getUsuario();

    /*this.apiService.getProductos().subscribe((response) =>{
      
      this.productos = JSON.parse(JSON.stringify(response));

      console.log(this.productos);
    })*/
    let seccion = "abarrotes";

    this.apiService.getseccion(seccion).subscribe((response)=>{
      console.log(response);
      
      this.producto = JSON.parse(JSON.stringify(response));

    })
 



  }

  ngOnInit(): void {
  }

}
