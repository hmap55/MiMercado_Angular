import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { SesionService } from 'src/app/servicios/sesion.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  formulario: FormGroup;
  producto:any ={}
  error:boolean = false;
  
  constructor(private activeRoute:ActivatedRoute, private sesionService:SesionService, private apiService:ApiService, private router:Router,
    private formBuilder:FormBuilder, public carritoService:CarritoService) { 

      this.formulario = this.formBuilder.group({
        cantidad: [""]
      })


    this.producto = {
      id : 0,
      nombre:"",
      precio:0,
      inventario: 0,
      url: "",
      seccion: "",
      promocion:""

    }

    

    this.activeRoute.params.subscribe(parametros =>{
      let id = parametros["id"];
      this.apiService.getProducto(id).subscribe((response)=>{
        console.log(response);
        
        this.producto = JSON.parse(JSON.stringify(response));

      })
    })


  }

  ngOnInit(): void {
  }

  guardarDatos(){

    this.carritoService.setProducto(this.producto);
    console.log("pulsado")


  }

  addCarrito(){
    this.carritoService.addProducto(this.producto);
  }

}
