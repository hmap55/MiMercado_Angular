import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../servicios/api.service";
import {Router} from "@angular/router" ;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SesionService } from 'src/app/servicios/sesion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario:FormGroup;
  error:boolean = false;

  constructor(private apiService:ApiService, private router:Router, private formBuilder:FormBuilder,
    private sesionService:SesionService) { 

    this.formulario = this.formBuilder.group({
      nombre:["", Validators.required],
      password:["", Validators.required]

    })


  }

  ngOnInit(): void {
  }

  get nombreNoValido(){
    return this.formulario.get("nombre")?.invalid && this.formulario.get("nombre")?.touched;
  }

  get passwordNoValido(){
    return this.formulario.get("password")?.invalid && this.formulario.get("password")?.touched;
  }

  verificarDatos():any{

    console.log("validando");
    if(this.formulario.invalid){
      Object.values(this.formulario.controls).forEach(control =>{

        control.markAsTouched();


      })
      return;
    }
    this.error = false;
    let usuario ={
      id:0,
      nombre:"",
      apellido:"",
      cedula:"",
      correo:"",
      celular:"",
      password:"",
      token:""
    }

    this.apiService.login(this.formulario.value.nombre, this.formulario.value.password).subscribe((response)=>{
      console.log(response);
      usuario = JSON.parse(JSON.stringify(response));

      if (usuario.id == null){
        this.error = true;
      }
      else{
        if(Number.isInteger(usuario.id)){
          //guardando datos en el local storage
          this.error = false;

          this.sesionService.setUsuario(usuario);

          this.router.navigate(["inicio"])
        }
        else{
          this.error = true;
        }
        
      }

    });


  }



}
