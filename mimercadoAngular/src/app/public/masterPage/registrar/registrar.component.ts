
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api.service';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  formulario: FormGroup;

  error:boolean = false;
  errorClave:boolean = false;
  ingresado:boolean = false;

  constructor(private formBuilder:FormBuilder, private apiService:ApiService) { 
    this.formulario = this.formBuilder.group({
      nombre: ["", Validators.required],
      apellido:  ["", Validators.required],
      cedula:  ["", Validators.required],
      correo:  ["",[ Validators.required, Validators.email]],
      celular:  ["", Validators.required],
      password:  ["", Validators.required]
     
  
  
      })
  }

  
  ngOnInit(): void {
  }

  get nombreNoValido(){
    return this.formulario.get("nombre")?.invalid && this.formulario.get("nombre")?.touched;
  }
  get apellidoNoValido(){
    return this.formulario.get("apellido")?.invalid && this.formulario.get("apellido")?.touched;
  }
  get cedulaNoValido(){
    return this.formulario.get("cedula")?.invalid && this.formulario.get("cedula")?.touched;
  }
  get correoNoValido(){
    return this.formulario.get("correo")?.invalid && this.formulario.get("correo")?.touched;
  }

  get celularNoValido(){
    return this.formulario.get("celular")?.invalid && this.formulario.get("celular")?.touched;
  }

  get passwordNoValido(){
    return this.formulario.get("password")?.invalid && this.formulario.get("password")?.touched;
  }
 



  guardarDatos():any{
    if(this.formulario.invalid){
      Object.values(this.formulario.controls).forEach(control=>{
        control.markAllAsTouched();
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
      password:""
    }
    this.apiService.addUsuario(this.formulario.value.nombre, this.formulario.value.apellido, this.formulario.value.cedula,
      this.formulario.value.correo, this.formulario.value.celular, this.formulario.value.password).subscribe((response)=>{
        console.log(response);
        usuario = JSON.parse(JSON.stringify(response));

        console.log(usuario);

        if (usuario.id == 0){
          this.error = true;
        }
        else{
          this.error = false;
          this.ingresado = true;
        }

      });


  }

}
